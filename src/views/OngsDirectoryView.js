import { store } from '../store.js';
const L = window.L;

export function renderOngsDirectoryView(container, showToast) {
  const states = store.getStates();

  container.innerHTML = `
    <div class="py-10 bg-background flex-grow">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        <!-- Header -->
        <div class="max-w-3xl space-y-2">
          <span class="text-xs uppercase font-extrabold tracking-widest text-tertiary px-3 py-1 rounded-full bg-tertiary-container/20 border border-tertiary-container/40">
            Rede Institucional Nacional de Proteção Animal
          </span>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Diretório & Mapa de ONGs do Brasil
          </h1>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            Consulte a localização e os canais diretos (WhatsApp, Instagram, Telefone) de abrigos, institutos e zoonoses por estado e cidade.
          </p>
        </div>

        <!-- Interactive Map Section -->
        <div class="bg-surface-container border border-surface-container-highest rounded-3xl overflow-hidden shadow-2xl space-y-0">
          <div class="p-4 bg-surface-container-high border-b border-surface-container-highest flex items-center justify-between">
            <h3 class="font-bold text-sm text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-tertiary">map</span>
              <span>Mapa Geográfico de ONGs e Abrigos</span>
            </h3>
            <span id="map-ong-count" class="text-xs font-bold text-tertiary bg-tertiary-container/20 px-2.5 py-1 rounded-full border border-tertiary-container/30">
              0 ONGs no mapa
            </span>
          </div>
          <div id="ong-leaflet-map" class="w-full h-80 sm:h-96 bg-surface-container-lowest z-0"></div>
        </div>

        <!-- Filter Bar -->
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-5 shadow-lg space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            
            <!-- Search bar -->
            <div class="sm:col-span-6 relative">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-base">search</span>
              <input type="text" id="ong-search" placeholder="Buscar por nome da ONG, @instagram, bairro ou palavra-chave..." class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 pl-10 pr-3 text-sm text-on-surface focus:outline-none focus:border-primary">
            </div>

            <!-- State Select -->
            <div class="sm:col-span-3">
              <select id="ong-state-select" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                <option value="all">Todos os Estados</option>
                ${states.map(st => `<option value="${st}">${st}</option>`).join('')}
              </select>
            </div>

            <!-- City Select -->
            <div class="sm:col-span-3">
              <select id="ong-city-select" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                <option value="all">Todas as Cidades</option>
              </select>
            </div>

          </div>
        </div>

        <!-- ONGs Grid Header -->
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-xl text-on-surface">Lista de Organizações Encontradas</h3>
          <span id="ong-grid-counter" class="text-xs text-on-surface-variant font-semibold"></span>
        </div>

        <!-- ONGs Grid -->
        <div id="ongs-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Rendered dynamically -->
        </div>

      </div>
    </div>
  `;

  let currentState = 'all';
  let currentCity = 'all';
  let searchQuery = '';

  // Initialize Map with Google Maps tiles
  const map = L.map(container.querySelector('#ong-leaflet-map')).setView([-14.2350, -51.9253], 4);

  L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '&copy; Google Maps'
  }).addTo(map);

  let markersLayer = L.layerGroup().addTo(map);

  function populateCities(shouldFocus = false) {
    const citySelect = container.querySelector('#ong-city-select');
    if (!citySelect) return;

    if (currentState === 'all') {
      citySelect.disabled = true;
      citySelect.innerHTML = '<option value="all">Selecione um Estado primeiro...</option>';
      citySelect.classList.add('opacity-60', 'cursor-not-allowed');
      currentCity = 'all';
    } else {
      citySelect.disabled = false;
      citySelect.classList.remove('opacity-60', 'cursor-not-allowed');
      const cities = store.getCitiesByState(currentState);
      citySelect.innerHTML = '<option value="all">Todas as Cidades de ' + currentState + '</option>' + 
        cities.map(c => `<option value="${c}">${c}</option>`).join('');
      currentCity = 'all';

      if (shouldFocus) {
        citySelect.focus();
        if (typeof citySelect.showPicker === 'function') {
          try { citySelect.showPicker(); } catch (e) {}
        }
      }
    }
  }

  function renderOngs() {
    markersLayer.clearLayers();
    const ongs = store.getOngs(currentState, currentCity, searchQuery);

    container.querySelector('#ong-grid-counter').textContent = `${ongs.length} ONGs listadas`;
    container.querySelector('#map-ong-count').textContent = `${ongs.length} no mapa`;

    const gridEl = container.querySelector('#ongs-grid');

    if (ongs.length === 0) {
      gridEl.innerHTML = `
        <div class="col-span-full py-16 text-center text-on-surface-variant space-y-3">
          <span class="material-symbols-outlined text-4xl text-outline">domain_disabled</span>
          <p class="text-base font-bold text-on-surface">Nenhuma ONG encontrada para os filtros selecionados.</p>
          <p class="text-xs">Tente alterar o estado ou pesquisar por termos mais abrangentes.</p>
        </div>
      `;
      return;
    }

    // Render Cards Grid
    gridEl.innerHTML = ongs.map(ong => renderOngCard(ong)).join('');

    // Render Markers on Map
    const bounds = [];
    ongs.forEach(ong => {
      const customIcon = L.divIcon({
        className: 'custom-leaflet-ong-pin',
        html: `
          <div style="background-color: #ff8099; width: 34px; height: 34px; border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.5); cursor: pointer;">
            <span class="material-symbols-outlined" style="font-size: 20px; color: white;">domain</span>
          </div>
        `,
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      });

      const marker = L.marker([ong.lat, ong.lng], { icon: customIcon }).addTo(markersLayer);
      bounds.push([ong.lat, ong.lng]);

      const popupHtml = `
        <div class="p-1 space-y-2 max-w-xs font-sans text-white">
          <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container">
            ${ong.city} - ${ong.state}
          </span>
          <h4 class="font-bold text-sm text-white mt-1">${ong.name}</h4>
          <p class="text-xs text-gray-300">${ong.address}</p>
          <div class="flex gap-2 pt-1">
            <a href="https://wa.me/${ong.whatsapp}" target="_blank" class="bg-emerald-600 text-white text-[11px] font-bold py-1 px-2.5 rounded-md flex items-center gap-1">
              WhatsApp
            </a>
            ${ong.instagram ? `
              <a href="https://instagram.com/${ong.instagram}" target="_blank" class="bg-pink-600 text-white text-[11px] font-bold py-1 px-2.5 rounded-md flex items-center gap-1">
                @${ong.instagram}
              </a>
            ` : ''}
          </div>
        </div>
      `;
      marker.bindPopup(popupHtml);
    });

    if (bounds.length > 0) {
      setTimeout(() => {
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
      }, 100);
    }
  }

  // Filter Listeners
  container.querySelector('#ong-state-select').addEventListener('change', (e) => {
    currentState = e.target.value;
    populateCities(true);
    renderOngs();
  });

  container.querySelector('#ong-city-select').addEventListener('change', (e) => {
    currentCity = e.target.value;
    renderOngs();
  });

  container.querySelector('#ong-search').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderOngs();
  });

  populateCities();
  renderOngs();
}

function renderOngCard(ong) {
  return `
    <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-4 hover:border-tertiary/40 transition-all">
      <div class="space-y-3">
        <div class="flex items-start justify-between">
          <div>
            <span class="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-tertiary-container/20 text-tertiary border border-tertiary-container/30">
              ${ong.city} - ${ong.state}
            </span>
            <h3 class="font-bold text-lg text-on-surface mt-2 leading-tight">${ong.name}</h3>
          </div>
          <div class="text-right bg-surface-container-high px-2.5 py-1 rounded-xl border border-outline-variant/30 flex-shrink-0">
            <span class="text-base font-extrabold text-primary">${ong.shelteredCount}</span>
            <span class="text-[9px] block text-on-surface-variant font-medium">Animais</span>
          </div>
        </div>

        <p class="text-xs text-on-surface-variant flex items-center gap-1.5 font-medium leading-normal">
          <span class="material-symbols-outlined text-primary text-sm flex-shrink-0">domain</span>
          <span>${ong.address}</span>
        </p>

        <div>
          <span class="text-[11px] font-bold text-on-surface-variant block mb-1.5">Serviços & Recursos:</span>
          <div class="flex flex-wrap gap-1.5">
            ${ong.services.map(s => `
              <span class="text-[10px] bg-surface-container-high text-on-surface px-2.5 py-1 rounded-lg border border-outline-variant/30 font-medium">
                ${s}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Action Contacts -->
      <div class="pt-4 border-t border-outline-variant/20 flex flex-col gap-2">
        <div class="flex gap-2">
          <a href="tel:${ong.phone.replace(/\D/g, '')}" class="flex-1 bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs py-2 px-2 rounded-xl border border-outline-variant/40 flex items-center justify-center gap-1 transition-all">
            <span class="material-symbols-outlined text-sm">call</span>
            <span>${ong.phone}</span>
          </a>
          <a href="https://wa.me/${ong.whatsapp}?text=Olá!%20Encontrei%20a%20ONG%20no%20Faro%20e%20gostaria%20de%20ajuda." target="_blank" class="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition-all shadow-sm">
            <span class="material-symbols-outlined text-sm">chat</span>
            <span>WhatsApp</span>
          </a>
        </div>
        
        <div class="flex gap-2">
          ${ong.instagram ? `
            <a href="https://instagram.com/${ong.instagram}" target="_blank" class="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-bold text-xs py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition-all shadow-sm">
              <span class="material-symbols-outlined text-sm">photo_camera</span>
              <span>@${ong.instagram}</span>
            </a>
          ` : ''}
          ${ong.website ? `
            <a href="${ong.website}" target="_blank" class="flex-1 bg-surface-container-high hover:bg-surface-variant text-primary font-bold text-xs py-2 px-2 rounded-xl border border-primary/30 flex items-center justify-center gap-1 transition-all">
              <span class="material-symbols-outlined text-sm">language</span>
              <span>Website</span>
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

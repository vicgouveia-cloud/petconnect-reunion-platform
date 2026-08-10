import { store } from '../store.js';
const L = window.L;

export function renderMapView(container, showToast, openPetModal) {
  // Parse query params for default status / species / search
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
  let currentStatus = urlParams.get('status') || 'all';
  let currentSpecies = urlParams.get('type') || 'all';
  let currentCity = urlParams.get('city') || 'all';
  let searchQuery = urlParams.get('q') || '';
  let viewMode = 'split'; // 'split', 'map', 'grid'

  container.innerHTML = `
    <div class="py-6 bg-background flex-grow flex flex-col min-h-[calc(100vh-140px)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 w-full space-y-6 flex-grow flex flex-col">
        
        <!-- Header -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-surface-container border border-surface-container-highest p-6 rounded-3xl shadow-xl">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/15 text-primary text-xs font-bold mb-2">
              <span class="material-symbols-outlined text-sm">explore</span>
              <span>Central Unificada de Pets & Mapa em Tempo Real</span>
            </div>
            <h1 class="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              Pets Perdidos, Avistados & Mapa
            </h1>
            <p class="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed max-w-2xl">
              Consulte alertas ativos, filtre por espécie, veja localizações no mapa interativo ou cadastre um animal em busca de reencontro.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <a href="#/cadastrar?status=lost" class="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-md flex items-center gap-2 active:scale-95">
              <span class="material-symbols-outlined text-base">search</span>
              <span>Cadastrar Perdido</span>
            </a>
            <a href="#/cadastrar?status=found" class="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full border border-outline-variant/60 transition-all shadow-md flex items-center gap-2 active:scale-95">
              <span class="material-symbols-outlined text-base text-primary">add_location_alt</span>
              <span>Cadastrar Avistado</span>
            </a>
          </div>
        </div>

        <!-- Filter Controls Bar -->
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-4 shadow-lg space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            <!-- Search bar -->
            <div class="md:col-span-4 relative">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-base">search</span>
              <input type="text" id="unified-search" value="${searchQuery}" placeholder="Buscar por raça, cor, bairro ou cidade..." class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 pl-9 pr-3 text-xs text-on-surface focus:outline-none focus:border-primary">
            </div>

            <!-- Status selector -->
            <div class="md:col-span-3">
              <div class="grid grid-cols-3 gap-1 p-1 bg-surface-container-low rounded-xl border border-outline-variant/30 text-[11px] font-bold">
                <button class="status-btn py-1.5 rounded-lg text-center transition-all ${currentStatus === 'all' ? 'bg-primary-container text-on-primary-container shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}" data-status="all">Todos</button>
                <button class="status-btn py-1.5 rounded-lg text-center transition-all ${currentStatus === 'lost' ? 'bg-primary-container text-on-primary-container shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}" data-status="lost">Perdidos</button>
                <button class="status-btn py-1.5 rounded-lg text-center transition-all ${currentStatus === 'found' ? 'bg-secondary-container text-on-secondary-container shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}" data-status="found">Avistados</button>
              </div>
            </div>

            <!-- Species select -->
            <div class="md:col-span-2">
              <select id="unified-species" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-2.5 text-xs text-on-surface focus:outline-none focus:border-primary">
                <option value="all" ${currentSpecies === 'all' ? 'selected' : ''}>Todas Espécies</option>
                <option value="dog" ${currentSpecies === 'dog' ? 'selected' : ''}>Cães</option>
                <option value="cat" ${currentSpecies === 'cat' ? 'selected' : ''}>Gatos</option>
              </select>
            </div>

            <!-- View Mode Switcher -->
            <div class="md:col-span-3 flex justify-end gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30 text-xs font-semibold">
              <button id="view-split-btn" title="Modo Dividido (Mapa + Cards)" class="view-toggle-btn px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${viewMode === 'split' ? 'bg-surface-container-high text-primary shadow-sm font-bold' : 'text-on-surface-variant'}">
                <span class="material-symbols-outlined text-base">view_column</span>
                <span class="hidden sm:inline">Dividido</span>
              </button>
              <button id="view-map-btn" title="Apenas Mapa" class="view-toggle-btn px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${viewMode === 'map' ? 'bg-surface-container-high text-primary shadow-sm font-bold' : 'text-on-surface-variant'}">
                <span class="material-symbols-outlined text-base">map</span>
                <span class="hidden sm:inline">Mapa</span>
              </button>
              <button id="view-grid-btn" title="Apenas Cards" class="view-toggle-btn px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${viewMode === 'grid' ? 'bg-surface-container-high text-primary shadow-sm font-bold' : 'text-on-surface-variant'}">
                <span class="material-symbols-outlined text-base">grid_view</span>
                <span class="hidden sm:inline">Cards</span>
              </button>
            </div>

          </div>
        </div>

        <!-- Main Display Content (Map + Grid / Split) -->
        <div id="unified-content-area" class="flex-grow flex flex-col lg:flex-row gap-6 min-h-[500px]">
          
          <!-- Leaflet Map Container -->
          <div id="map-wrapper" class="w-full lg:w-1/2 h-[480px] lg:h-auto rounded-3xl overflow-hidden border border-surface-container-highest shadow-2xl relative">
            <div id="leaflet-unified-map" class="w-full h-full z-0"></div>
          </div>

          <!-- Feed Grid Container -->
          <div id="grid-wrapper" class="w-full lg:w-1/2 flex flex-col space-y-4 overflow-y-auto max-h-[700px] pr-1">
            <div class="flex items-center justify-between">
              <span id="pets-counter" class="text-xs font-extrabold text-primary uppercase tracking-wider"></span>
              <span class="text-[11px] text-on-surface-variant">Clique em um card para focar no mapa ou ver detalhes</span>
            </div>
            
            <div id="unified-pets-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Rendered dynamically -->
            </div>
          </div>

        </div>

      </div>
    </div>
  `;

  // Initialize Map
  const mapContainer = container.querySelector('#leaflet-unified-map');
  const map = L.map(mapContainer).setView([-23.5587, -46.6853], 12);

  L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '&copy; Google Maps'
  }).addTo(map);

  let markersLayer = L.layerGroup().addTo(map);

  function updateViewLayout() {
    const mapWrapper = container.querySelector('#map-wrapper');
    const gridWrapper = container.querySelector('#grid-wrapper');

    if (viewMode === 'split') {
      mapWrapper.className = 'w-full lg:w-1/2 h-[450px] lg:h-auto rounded-3xl overflow-hidden border border-surface-container-highest shadow-2xl relative';
      gridWrapper.className = 'w-full lg:w-1/2 flex flex-col space-y-4 overflow-y-auto max-h-[700px] pr-1';
      mapWrapper.style.display = 'block';
      gridWrapper.style.display = 'flex';
    } else if (viewMode === 'map') {
      mapWrapper.className = 'w-full h-[650px] rounded-3xl overflow-hidden border border-surface-container-highest shadow-2xl relative';
      gridWrapper.style.display = 'none';
      mapWrapper.style.display = 'block';
    } else if (viewMode === 'grid') {
      gridWrapper.className = 'w-full flex flex-col space-y-4';
      gridWrapper.querySelector('#unified-pets-grid').className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
      mapWrapper.style.display = 'none';
      gridWrapper.style.display = 'flex';
    }

    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }

  function renderData() {
    markersLayer.clearLayers();
    searchQuery = container.querySelector('#unified-search').value;

    const filterObj = {
      status: currentStatus === 'all' ? null : currentStatus,
      type: currentSpecies,
      query: searchQuery
    };

    const pets = store.getPets(filterObj);
    const ongs = store.getOngs('all', 'all', searchQuery);

    const counterEl = container.querySelector('#pets-counter');
    counterEl.textContent = `${pets.length} Pets Alertas & ${ongs.length} ONGs Mapeadas`;

    const gridEl = container.querySelector('#unified-pets-grid');

    if (pets.length === 0) {
      gridEl.innerHTML = `
        <div class="col-span-full py-12 text-center text-on-surface-variant space-y-2 bg-surface-container border border-surface-container-highest rounded-2xl p-6">
          <span class="material-symbols-outlined text-4xl text-outline">search_off</span>
          <p class="text-sm font-bold text-on-surface">Nenhum pet localizado para estes filtros.</p>
          <p class="text-xs">Tente buscar por outros termos ou mudar o status entre Perdidos e Avistados.</p>
        </div>
      `;
    } else {
      gridEl.innerHTML = pets.map(pet => {
        const isLost = pet.status === 'lost';
        return `
          <div data-id="${pet.id}" class="pet-unified-card group bg-surface-container border border-surface-container-highest hover:border-primary/60 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between">
            <div class="relative h-44 w-full overflow-hidden bg-surface-container-high">
              <img src="${pet.photo}" alt="${pet.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                <span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${isLost ? 'bg-primary-container text-on-primary-container' : 'bg-secondary-container text-on-secondary-container'} shadow-sm">
                  ${isLost ? 'PERDIDO' : 'AVISTADO'}
                </span>
                ${pet.reward && pet.reward !== 'Sem recompensa' && pet.reward !== 'N/A' ? `
                  <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500 text-white shadow-sm flex items-center gap-1">
                    <span class="material-symbols-outlined text-[12px]">payments</span> ${pet.reward}
                  </span>
                ` : ''}
              </div>
              <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] text-white font-medium">
                ${pet.date}
              </div>
            </div>

            <div class="p-4 flex-grow flex flex-col justify-between space-y-2.5">
              <div>
                <div class="flex justify-between items-start">
                  <h3 class="font-bold text-base text-on-surface group-hover:text-primary transition-colors">${pet.name}</h3>
                  <span class="text-[11px] text-on-surface-variant font-medium bg-surface-container-high px-2 py-0.5 rounded-md border border-outline-variant/30">${pet.breed}</span>
                </div>

                <p class="text-xs text-on-surface-variant flex items-center gap-1 font-medium mt-1">
                  <span class="material-symbols-outlined text-primary text-sm">location_on</span>
                  ${pet.neighborhood}, ${pet.city} (${pet.state})
                </p>

                <p class="text-xs text-on-surface-variant/80 line-clamp-2 mt-1.5 leading-relaxed">
                  ${pet.description}
                </p>
              </div>

              <div class="pt-2 border-t border-outline-variant/20 flex gap-2">
                <button class="btn-focus-map flex-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-bold text-[11px] py-1.5 rounded-lg border border-outline-variant/40 transition-all flex items-center justify-center gap-1" data-id="${pet.id}" data-lat="${pet.lat}" data-lng="${pet.lng}">
                  <span class="material-symbols-outlined text-xs text-primary">pin_drop</span>
                  <span>Ver no Mapa</span>
                </button>
                <button class="btn-view-details flex-1 bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-bold text-[11px] py-1.5 rounded-lg transition-all flex items-center justify-center gap-1" data-id="${pet.id}">
                  <span class="material-symbols-outlined text-xs">visibility</span>
                  <span>Ficha</span>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    const petMarkersDict = {};

    // Populate Leaflet Map Markers
    const bounds = [];

    pets.forEach(pet => {
      const isLost = pet.status === 'lost';
      const markerColor = isLost ? '#ff8833' : '#c8c4db';

      const customIcon = L.divIcon({
        className: 'custom-leaflet-pin',
        html: `
          <div style="background-color: ${markerColor}; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2.5px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.5); cursor: pointer;">
            <span class="material-symbols-outlined" style="font-size: 20px; color: #13121b;">sound_detection_dog_barking</span>
          </div>
        `,
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      });

      const marker = L.marker([pet.lat, pet.lng], { icon: customIcon }).addTo(markersLayer);
      bounds.push([pet.lat, pet.lng]);
      petMarkersDict[pet.id] = { marker, pet };

      const popupContent = `
        <div class="p-1 space-y-2 max-w-xs font-sans text-white">
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${isLost ? 'bg-primary-container text-on-primary-container' : 'bg-secondary-container text-on-secondary-container'}">
              ${isLost ? 'Perdido (Última vez visto)' : 'Avistado (Localizado)'}
            </span>
            <span class="text-xs font-bold text-white">${pet.name}</span>
          </div>
          <p class="text-xs text-gray-300"><strong>Endereço / Região:</strong> ${pet.location || pet.neighborhood + ', ' + pet.city}</p>
          <p class="text-xs text-gray-300"><strong>Data:</strong> ${pet.date} às ${pet.time}</p>
          <button class="open-modal-from-map bg-primary hover:bg-primary/90 text-on-primary text-xs font-bold py-1.5 px-3 rounded-lg w-full mt-2" data-id="${pet.id}">
            Ver detalhes no card
          </button>
        </div>
      `;

      marker.bindPopup(popupContent);

      marker.on('click', () => {
        map.setView([pet.lat, pet.lng], 16, { animate: true });
        openPetModal(pet.id);
      });
    });

    function focusPetOnMap(petId) {
      const item = petMarkersDict[petId];
      if (viewMode === 'grid') {
        viewMode = 'split';
        updateViewButtons();
        updateViewLayout();
      }

      if (item) {
        map.setView([item.pet.lat, item.pet.lng], 16, { animate: true });
        item.marker.openPopup();

        // Scroll map into view on mobile screens
        const mapWrapper = container.querySelector('#map-wrapper');
        if (window.innerWidth < 1024) {
          mapWrapper?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
      openPetModal(petId);
    }

    // Add Card Events
    gridEl.querySelectorAll('.btn-focus-map, .btn-view-details, .pet-unified-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const petId = card.getAttribute('data-id');
        focusPetOnMap(petId);
      });
    });

    // Delegate map popup button clicks
    map.on('popupopen', (e) => {
      const btn = e.popup._contentNode.querySelector('.open-modal-from-map');
      if (btn) {
        btn.addEventListener('click', () => {
          openPetModal(btn.getAttribute('data-id'));
        });
      }
    });

    if (bounds.length > 0) {
      setTimeout(() => {
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
      }, 100);
    }
  }

  // Status Filter Buttons
  container.querySelectorAll('.status-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentStatus = btn.getAttribute('data-status');
      container.querySelectorAll('.status-btn').forEach(b => {
        b.className = 'status-btn py-1.5 rounded-lg text-center transition-all text-on-surface-variant hover:text-on-surface';
      });
      btn.className = `status-btn py-1.5 rounded-lg text-center transition-all ${currentStatus === 'found' ? 'bg-secondary-container text-on-secondary-container shadow-sm' : 'bg-primary-container text-on-primary-container shadow-sm'}`;
      renderData();
    });
  });

  // Species Filter
  container.querySelector('#unified-species').addEventListener('change', (e) => {
    currentSpecies = e.target.value;
    renderData();
  });

  // Search Input
  container.querySelector('#unified-search').addEventListener('input', () => {
    renderData();
  });

  // View Mode Buttons
  container.querySelector('#view-split-btn').addEventListener('click', () => {
    viewMode = 'split';
    updateViewButtons();
    updateViewLayout();
  });
  container.querySelector('#view-map-btn').addEventListener('click', () => {
    viewMode = 'map';
    updateViewButtons();
    updateViewLayout();
  });
  container.querySelector('#view-grid-btn').addEventListener('click', () => {
    viewMode = 'grid';
    updateViewButtons();
    updateViewLayout();
  });

  function updateViewButtons() {
    container.querySelectorAll('.view-toggle-btn').forEach(btn => {
      btn.className = 'view-toggle-btn px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all text-on-surface-variant';
    });
    if (viewMode === 'split') {
      container.querySelector('#view-split-btn').className = 'view-toggle-btn px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all bg-surface-container-high text-primary shadow-sm font-bold';
    } else if (viewMode === 'map') {
      container.querySelector('#view-map-btn').className = 'view-toggle-btn px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all bg-surface-container-high text-primary shadow-sm font-bold';
    } else if (viewMode === 'grid') {
      container.querySelector('#view-grid-btn').className = 'view-toggle-btn px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all bg-surface-container-high text-primary shadow-sm font-bold';
    }
  }

  updateViewLayout();
  renderData();
}

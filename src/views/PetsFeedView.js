import { store } from '../store.js';

export function renderPetsFeedView(container, showToast, openPetModal, defaultStatus = 'lost') {
  // Parse URL query params
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
  const initialType = urlParams.get('type') || 'all';
  const initialQuery = urlParams.get('q') || '';

  const title = defaultStatus === 'lost' ? 'Feed de Pets Perdidos' : 'Feed de Pets Encontrados';
  const subtitle = defaultStatus === 'lost' 
    ? 'Ajude tutores aflitos a encontrarem seus animais de estimação perdidos' 
    : 'Animais resgatados ou acolhidos aguardando identificação dos tutores';

  container.innerHTML = `
    <div class="py-10 bg-background flex-grow">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-surface-container-highest pb-6">
          <div>
            <span class="text-xs uppercase font-extrabold tracking-widest ${defaultStatus === 'lost' ? 'text-primary' : 'text-secondary'}">
              ${defaultStatus === 'lost' ? 'Busca Ativa Comunitária' : 'Resgate & Acolhimento'}
            </span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mt-1">${title}</h1>
            <p class="text-sm text-on-surface-variant mt-1 leading-relaxed">${subtitle}</p>
          </div>

          <a href="#/cadastrar?status=${defaultStatus}" class="${defaultStatus === 'lost' ? 'bg-primary-container text-on-primary-container' : 'bg-secondary-container text-on-secondary-container'} font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-all shadow-md flex items-center gap-2 self-start md:self-auto">
            <span class="material-symbols-outlined text-lg">add_circle</span>
            <span>${defaultStatus === 'lost' ? 'Cadastrar Pet Perdido' : 'Cadastrar Pet Encontrado'}</span>
          </a>
        </div>

        <!-- Filter Bar -->
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-4 mb-8 shadow-lg grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
          
          <!-- Search input -->
          <div class="sm:col-span-6 relative">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-base">search</span>
            <input type="text" id="feed-search" value="${initialQuery}" placeholder="Buscar por raça, cor, bairro ou cidade..." class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 pl-10 pr-3 text-sm text-on-surface focus:outline-none focus:border-primary">
          </div>

          <!-- Species Filter -->
          <div class="sm:col-span-3">
            <select id="feed-species" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
              <option value="all" ${initialType === 'all' ? 'selected' : ''}>Todas as Espécies</option>
              <option value="dog" ${initialType === 'dog' ? 'selected' : ''}>Cães</option>
              <option value="cat" ${initialType === 'cat' ? 'selected' : ''}>Gatos</option>
            </select>
          </div>

          <!-- City Filter -->
          <div class="sm:col-span-3">
            <select id="feed-city" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
              <option value="all">Todas as Cidades</option>
              <option value="São Paulo">São Paulo (SP)</option>
              <option value="Rio de Janeiro">Rio de Janeiro (RJ)</option>
              <option value="Campinas">Campinas (SP)</option>
              <option value="Belo Horizonte">Belo Horizonte (MG)</option>
            </select>
          </div>

        </div>

        <!-- Grid Container -->
        <div id="feed-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <!-- Populated dynamically -->
        </div>

      </div>
    </div>
  `;

  function renderGrid() {
    const query = container.querySelector('#feed-search').value;
    const type = container.querySelector('#feed-species').value;
    const city = container.querySelector('#feed-city').value;

    const pets = store.getPets({ status: defaultStatus, query, type, city });
    const gridEl = container.querySelector('#feed-grid');

    if (pets.length === 0) {
      gridEl.innerHTML = `
        <div class="col-span-full py-16 text-center text-on-surface-variant space-y-3">
          <span class="material-symbols-outlined text-4xl text-outline">search_off</span>
          <p class="text-base font-bold text-on-surface">Nenhum pet localizado para estes filtros.</p>
          <p class="text-xs">Tente buscar por termos mais genéricos ou cadastrar um novo alerta.</p>
        </div>
      `;
      return;
    }

    gridEl.innerHTML = pets.map(pet => `
      <div data-id="${pet.id}" class="pet-card-clickable group bg-surface-container border border-surface-container-highest rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer flex flex-col">
        <div class="relative h-52 w-full overflow-hidden bg-surface-container-high">
          <img src="${pet.photo}" alt="${pet.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute top-3 left-3 flex gap-2">
            <span class="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${pet.status === 'lost' ? 'bg-primary-container text-on-primary-container' : 'bg-secondary-container text-on-secondary-container'} shadow-sm">
              ${pet.status === 'lost' ? 'PERDIDO' : 'ENCONTRADO'}
            </span>
            ${pet.reward && pet.reward !== 'Sem recompensa' && pet.reward !== 'N/A' ? `
              <span class="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-500 text-white shadow-sm flex items-center gap-1">
                <span class="material-symbols-outlined text-xs">payments</span> ${pet.reward}
              </span>
            ` : ''}
          </div>
          <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] text-white font-medium">
            Visto em ${pet.date}
          </div>
        </div>

        <div class="p-5 flex-grow flex flex-col justify-between space-y-3">
          <div>
            <div class="flex justify-between items-start mb-1">
              <h3 class="font-bold text-lg text-on-surface group-hover:text-primary transition-colors">${pet.name}</h3>
              <span class="text-xs text-on-surface-variant font-medium bg-surface-container-high px-2 py-0.5 rounded-md border border-outline-variant/30">${pet.breed}</span>
            </div>

            <p class="text-xs text-on-surface-variant flex items-center gap-1 font-medium mt-1">
              <span class="material-symbols-outlined text-primary text-sm">location_on</span>
              ${pet.neighborhood}, ${pet.city} (${pet.state})
            </p>

            <p class="text-xs text-on-surface-variant/80 line-clamp-3 mt-2 leading-relaxed">
              ${pet.description}
            </p>
          </div>

          <div class="pt-3 border-t border-outline-variant/20 flex justify-between items-center text-xs">
            <span class="text-on-surface-variant font-medium">Contato: ${pet.contactName}</span>
            <span class="text-primary font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
              Ver Ficha <span class="material-symbols-outlined text-sm">chevron_right</span>
            </span>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click events
    gridEl.querySelectorAll('.pet-card-clickable').forEach(card => {
      card.addEventListener('click', () => {
        openPetModal(card.getAttribute('data-id'));
      });
    });
  }

  container.querySelector('#feed-search').addEventListener('input', renderGrid);
  container.querySelector('#feed-species').addEventListener('change', renderGrid);
  container.querySelector('#feed-city').addEventListener('change', renderGrid);

  renderGrid();
}

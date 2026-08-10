import { store } from '../store.js';

export function renderHomeView(container, showToast, openPetModal) {
  const stats = store.getStats();
  const urgentPets = store.getPets({ status: 'lost' }).slice(0, 4);
  const foundPets = store.getPets({ status: 'found' }).slice(0, 3);

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="relative w-full min-h-[75vh] flex items-center justify-center py-16 overflow-hidden bg-surface">
      <!-- Background Graphic Overlay -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1920&q=80" 
             alt="Happy dogs running" 
             class="w-full h-full object-cover opacity-20 mix-blend-luminosity filter blur-[1px]">
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
      </div>

      <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Text CTA Column -->
        <div class="lg:col-span-7 flex flex-col gap-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/15 border border-primary-container/30 text-primary text-xs font-semibold w-max">
            <span class="material-symbols-outlined text-sm animate-pulse">radar</span>
            <span>Rede Inteligente de Reagrupamento Familiar</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface leading-[1.15]">
            Trazendo eles de volta para <span class="text-primary-container bg-gradient-to-r from-primary-container to-primary bg-clip-text text-transparent">casa</span>, juntos.
          </h1>

          <p class="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            O Faro é o ponto de encontro oficial em tempo real para quem perdeu ou encontrou um pet. Unimos mapas interativos, notificações comunitárias e parcerias com ONGs para não deixar nenhum animal sozinho.
          </p>

          <!-- Quick Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#/cadastrar" class="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-bold text-base px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-primary-container/25 flex items-center justify-center gap-3 group active:scale-95">
              <span class="material-symbols-outlined group-hover:scale-110 transition-transform">search</span>
              <span>Perdi um Pet</span>
            </a>
            <a href="#/guia" class="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-bold text-base px-8 py-4 rounded-full border border-outline-variant/60 transition-all shadow-lg flex items-center justify-center gap-3 group active:scale-95">
              <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">menu_book</span>
              <span>Abrir Manual Completo</span>
            </a>
          </div>

          <!-- Quick Live Stats -->
          <div class="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/30 text-on-surface-variant max-w-lg">
            <div class="flex flex-col">
              <span class="text-2xl sm:text-3xl font-extrabold text-on-surface">${stats.reunited}+</span>
              <span class="text-xs text-on-surface-variant font-medium">Reencontros Feitos</span>
            </div>
            <div class="w-px h-10 bg-outline-variant/30 self-center"></div>
            <div class="flex flex-col">
              <span class="text-2xl sm:text-3xl font-extrabold text-primary">${stats.totalLost}</span>
              <span class="text-xs text-on-surface-variant font-medium">Em Busca Ativa</span>
            </div>
          </div>
        </div>

        <!-- Quick Interactive Search Card Column -->
        <div class="lg:col-span-5">
          <div class="bg-surface-container/95 border border-surface-container-highest rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-bold text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">manage_search</span>
                <span>Busca Rápida de Pets</span>
              </h3>
              <span class="text-xs text-primary font-semibold">Em tempo real</span>
            </div>

            <form id="quick-search-form" class="space-y-4">
              <div>
                <label class="block text-xs font-semibold text-on-surface-variant mb-1.5">Status</label>
                <div class="grid grid-cols-2 gap-2 p-1 bg-surface-container-low rounded-xl border border-outline-variant/30">
                  <button type="button" id="qs-btn-lost" class="qs-type-btn py-2 text-xs font-bold rounded-lg bg-primary-container text-on-primary-container shadow-sm transition-all" data-value="lost">Procurando (Perdidos)</button>
                  <button type="button" id="qs-btn-found" class="qs-type-btn py-2 text-xs font-bold rounded-lg text-on-surface-variant hover:text-on-surface transition-all" data-value="found">Avistados (Localizados)</button>
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-on-surface-variant mb-1.5">Espécie</label>
                <select id="qs-type" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  <option value="all">Todas as espécies (Cães, Gatos, Outros)</option>
                  <option value="dog">Cão</option>
                  <option value="cat">Gato</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold text-on-surface-variant mb-1.5">Cidade / Bairro</label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">location_on</span>
                  <input type="text" id="qs-location" placeholder="Ex: São Paulo, Pinheiros..." class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 pl-10 pr-3 text-sm text-on-surface focus:outline-none focus:border-primary placeholder:text-on-surface-variant/60">
                </div>
              </div>

              <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-on-primary font-bold text-sm py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-lg">travel_explore</span>
                <span>Explorar no Mapa e Feed</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: MANUAL PARA REENCONTRAR PET DESAPARECIDO (Pet Searchers) -->
    <section class="py-16 bg-surface-container-low border-y border-surface-container-highest">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary-container/15 px-3 py-1 rounded-full border border-primary-container/30">
            Manual Oficial Pet Searchers
          </span>
          <h2 class="text-3xl sm:text-4xl font-black text-on-surface tracking-tight">
            Manual para Reencontrar Pet Desaparecido
          </h2>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            Entendemos sua dor e estamos aqui para apoiar. Agir com calma e método nas primeiras 48 horas é vital para trazer seu amigo para casa em segurança.
          </p>
        </div>

        <!-- Cuidando de Você (Support Cards) -->
        <div class="bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container border border-outline-variant/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
          <h3 class="text-lg font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-tertiary">favorite</span>
            <span>Cuidando de Você</span>
          </h3>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            A busca por um amigo perdido é exaustiva e desafiadora. Lembre-se de que sua saúde emocional é vital para continuar esse processo com clareza. Aceite apoio e cuide de si mesmo no caminho.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div class="bg-surface-container-lowest/80 p-4 rounded-2xl border border-outline-variant/20 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-xl">air</span>
              <span class="text-xs font-semibold text-on-surface">Faça pausas conscientes para respirar fundo</span>
            </div>
            <div class="bg-surface-container-lowest/80 p-4 rounded-2xl border border-outline-variant/20 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-xl">bedtime</span>
              <span class="text-xs font-semibold text-on-surface">Descanse, mesmo que por períodos curtos</span>
            </div>
            <div class="bg-surface-container-lowest/80 p-4 rounded-2xl border border-outline-variant/20 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-xl">group</span>
              <span class="text-xs font-semibold text-on-surface">Delegue pequenas tarefas a amigos</span>
            </div>
            <div class="bg-surface-container-lowest/80 p-4 rounded-2xl border border-outline-variant/20 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-xl">footprint</span>
              <span class="text-xs font-semibold text-on-surface">Foque em um passo de cada vez</span>
            </div>
          </div>
        </div>

        <!-- 4 Action Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-2 shadow-lg">
            <div class="flex items-center gap-2 text-primary font-bold text-sm">
              <span class="material-symbols-outlined">explore</span>
              <span>Onde Procurar</span>
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              Faça uma varredura em espiral partindo do ponto de fuga em um raio inicial de 1 a 3 km.
            </p>
          </div>

          <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-2 shadow-lg">
            <div class="flex items-center gap-2 text-primary font-bold text-sm">
              <span class="material-symbols-outlined">timer</span>
              <span>Ações Imediatas</span>
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              As primeiras horas são as mais críticas. Agir com método é o que trará seu cão de volta.
            </p>
          </div>

          <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-2 shadow-lg">
            <div class="flex items-center gap-2 text-primary font-bold text-sm">
              <span class="material-symbols-outlined">record_voice_over</span>
              <span>Quem Avisar</span>
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              Notifique veterinários locais, ONGs, pet shops, vizinhos e entregadores de aplicativo.
            </p>
          </div>

          <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-2 shadow-lg">
            <div class="flex items-center gap-2 text-primary font-bold text-sm">
              <span class="material-symbols-outlined">visibility</span>
              <span>O que Observar</span>
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              Cães assustados tendem a se esconder sob carros ou arbustos e podem não responder logo.
            </p>
          </div>
        </div>

        <div class="text-center pt-2">
          <a href="#/guia" class="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-extrabold text-sm px-8 py-3.5 rounded-full hover:bg-primary-container/90 transition-all shadow-xl">
            <span class="material-symbols-outlined">menu_book</span>
            <span>Acessar Guia Detalhado de Cães e Gatos (Pet Searchers)</span>
          </a>
        </div>

      </div>
    </section>

    <!-- Emergency Hotline Ribbon -->
    <section class="bg-gradient-to-r from-error-container via-surface-container-high to-error-container py-4 border-y border-tertiary-container/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3 text-on-surface">
          <div class="w-9 h-9 rounded-full bg-error/20 flex items-center justify-center text-error animate-pulse flex-shrink-0">
            <span class="material-symbols-outlined">campaign</span>
          </div>
          <div>
            <h4 class="font-bold text-sm text-on-surface">Alerta Emergencial Ativo nas últimas 24h</h4>
            <p class="text-xs text-on-surface-variant">2 pets desaparecidos recentemente necessitam de medicação diária urgente.</p>
          </div>
        </div>
        <a href="#/mapa?status=lost" class="bg-error hover:bg-error/90 text-on-error font-bold text-xs px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 flex-shrink-0">
          <span>Ver Casos Prioritários</span>
          <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </section>

    <!-- Urgent Lost Pets Section -->
    <section class="py-16 bg-background">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        <div class="flex items-end justify-between mb-8">
          <div>
            <span class="text-xs uppercase font-bold tracking-widest text-primary">Alertas Comunitários</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mt-1">Pets Perdidos Recentemente</h2>
          </div>
          <a href="#/mapa?status=lost" class="hidden sm:flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            <span>Ver todos no mapa</span>
            <span class="material-symbols-outlined text-base">chevron_right</span>
          </a>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${urgentPets.map(pet => renderPetCard(pet)).join('')}
        </div>
      </div>
    </section>

    <!-- Interactive Map Banner Promo -->
    <section class="py-12 bg-surface-container-low border-y border-surface-container-highest">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-6 space-y-4">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-xs font-semibold">
            <span class="material-symbols-outlined text-sm">map</span>
            <span>Geolocalização Precisa</span>
          </div>
          <h2 class="text-3xl font-bold text-on-surface">Veja os pontos de avistamento no Mapa em Tempo Real</h2>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            Filtre por raio de distância, bairro ou cidade. Nosso sistema calcula automaticamente a zona aproximada de deslocamento do animal.
          </p>
          <a href="#/mapa" class="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-bold text-sm px-6 py-3 rounded-full hover:bg-primary-container/90 transition-all shadow-md">
            <span class="material-symbols-outlined">explore</span>
            <span>Abrir Mapa Interativo</span>
          </a>
        </div>
        <div class="lg:col-span-6">
          <div class="rounded-2xl overflow-hidden border border-outline-variant/40 shadow-2xl relative h-64 sm:h-80 bg-surface-container-high flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80" alt="Map preview" class="w-full h-full object-cover opacity-60">
            <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <a href="#/mapa" class="absolute bg-surface/90 backdrop-blur-md px-5 py-3 rounded-full border border-primary/40 font-bold text-xs text-primary flex items-center gap-2 hover:scale-105 transition-all shadow-xl">
              <span class="material-symbols-outlined animate-bounce">pin_drop</span>
              <span>Clique para abrir mapa ao vivo</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Found Pets Section -->
    <section class="py-16 bg-background">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        <div class="flex items-end justify-between mb-8">
          <div>
            <span class="text-xs uppercase font-bold tracking-widest text-secondary">Acolhimento Temporário</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mt-1">Pets Avistados Aguardando Tutores</h2>
          </div>
          <a href="#/mapa?status=found" class="hidden sm:flex items-center gap-1 text-sm font-semibold text-secondary hover:underline">
            <span>Ver todos avistados</span>
            <span class="material-symbols-outlined text-base">chevron_right</span>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          ${foundPets.map(pet => renderPetCard(pet)).join('')}
        </div>
      </div>
    </section>
  `;

  // Attach event listeners
  let currentStatus = 'lost';
  const qsBtnLost = container.querySelector('#qs-btn-lost');
  const qsBtnFound = container.querySelector('#qs-btn-found');

  qsBtnLost?.addEventListener('click', () => {
    currentStatus = 'lost';
    qsBtnLost.className = 'qs-type-btn py-2 text-xs font-bold rounded-lg bg-primary-container text-on-primary-container shadow-sm transition-all';
    qsBtnFound.className = 'qs-type-btn py-2 text-xs font-bold rounded-lg text-on-surface-variant hover:text-on-surface transition-all';
  });

  qsBtnFound?.addEventListener('click', () => {
    currentStatus = 'found';
    qsBtnFound.className = 'qs-type-btn py-2 text-xs font-bold rounded-lg bg-secondary-container text-on-secondary-container shadow-sm transition-all';
    qsBtnLost.className = 'qs-type-btn py-2 text-xs font-bold rounded-lg text-on-surface-variant hover:text-on-surface transition-all';
  });

  container.querySelector('#quick-search-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = container.querySelector('#qs-type').value;
    const loc = container.querySelector('#qs-location').value;
    window.location.hash = `#/mapa?status=${currentStatus}&type=${type}&q=${encodeURIComponent(loc)}`;
  });

  // Attach card click handlers
  container.querySelectorAll('.pet-card-clickable').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openPetModal(id);
    });
  });
}

function renderPetCard(pet) {
  const isLost = pet.status === 'lost';
  const badgeBg = isLost ? 'bg-primary-container text-on-primary-container' : 'bg-secondary-container text-on-secondary-container';
  const badgeText = isLost ? 'PERDIDO' : 'AVISTADO';

  return `
    <div data-id="${pet.id}" class="pet-card-clickable group bg-surface-container border border-surface-container-highest rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer flex flex-col">
      <!-- Image & Badges -->
      <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-surface-container-high">
        <img src="${pet.photo}" alt="${pet.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute top-3 left-3 flex gap-2">
          <span class="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeBg} shadow-sm">
            ${badgeText}
          </span>
          ${pet.reward && pet.reward !== 'Sem recompensa' && pet.reward !== 'N/A' ? `
            <span class="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-500/90 text-white shadow-sm flex items-center gap-1">
              <span class="material-symbols-outlined text-xs">payments</span> ${pet.reward}
            </span>
          ` : ''}
        </div>
        <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] text-white font-medium">
          ${pet.date}
        </div>
      </div>

      <!-- Content -->
      <div class="p-4 flex-grow flex flex-col justify-between space-y-3">
        <div>
          <div class="flex justify-between items-start mb-1">
            <h3 class="font-bold text-base text-on-surface group-hover:text-primary transition-colors">${pet.name}</h3>
            <span class="text-xs text-on-surface-variant font-medium">${pet.breed}</span>
          </div>

          <p class="text-xs text-on-surface-variant flex items-center gap-1 font-medium">
            <span class="material-symbols-outlined text-primary text-sm">location_on</span>
            <span>${pet.neighborhood}, ${pet.city}</span>
          </p>

          <p class="text-xs text-on-surface-variant/80 line-clamp-2 mt-2 leading-relaxed">
            ${pet.description}
          </p>
        </div>

        <div class="pt-3 border-t border-outline-variant/20 flex justify-between items-center text-xs">
          <span class="text-on-surface-variant font-medium">Tutor: ${pet.contactName}</span>
          <span class="text-primary font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
            Ver detalhes <span class="material-symbols-outlined text-sm">chevron_right</span>
          </span>
        </div>
      </div>
    </div>
  `;
}

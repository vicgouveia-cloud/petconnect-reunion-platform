import { store } from '../store.js';

export function renderReunionGuideView(container, showToast, activeTab = 'general') {
  container.innerHTML = `
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        
        <!-- Header -->
        <div class="text-center max-w-4xl mx-auto space-y-3">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary-container/15 px-4 py-1.5 rounded-full border border-primary-container/30">
            Manual Oficial de Reencontro • PetSearchers & Faro
          </span>
          <h1 class="text-3xl sm:text-5xl font-black text-on-surface tracking-tight">
            Guias Práticos de Busca e Resgate
          </h1>
          <p class="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Selecione o guia específico abaixo para acessar o protocolo completo com dicas estratégicas, downloads em PDF e recursos em áudio/vídeo.
          </p>
        </div>

        <!-- Clean Navigation Tabs -->
        <div class="flex justify-center border-b border-surface-container-highest pb-4">
          <div class="inline-flex p-1.5 bg-surface-container rounded-2xl border border-outline-variant/40 shadow-md flex-wrap justify-center gap-2">
            <button data-tab="general" class="nav-tab-btn px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 ${activeTab === 'general' ? 'bg-primary-container text-on-primary-container shadow-md' : 'text-on-surface-variant hover:text-on-surface'}">
              <span class="material-symbols-outlined text-lg">menu_book</span>
              <span>Manual Geral (Todos os Pets)</span>
            </button>
            <button data-tab="dogs" class="nav-tab-btn px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 ${activeTab === 'dogs' ? 'bg-primary-container text-on-primary-container shadow-md' : 'text-on-surface-variant hover:text-on-surface'}">
              <span class="material-symbols-outlined text-lg">sound_detection_dog_barking</span>
              <span>Guia para Cães</span>
            </button>
            <button data-tab="cats" class="nav-tab-btn px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 ${activeTab === 'cats' ? 'bg-secondary-container text-on-secondary-container shadow-md' : 'text-on-surface-variant hover:text-on-surface'}">
              <span class="material-symbols-outlined text-lg">cat</span>
              <span>Guia para Gatos (+ Vídeo)</span>
            </button>
            <button data-tab="scams" class="nav-tab-btn px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 ${activeTab === 'scams' ? 'bg-amber-500 text-black shadow-md' : 'text-on-surface-variant hover:text-on-surface'}">
              <span class="material-symbols-outlined text-lg text-amber-400">gavel</span>
              <span>Segurança & Antigolpe</span>
            </button>
            <button data-tab="poster" class="nav-tab-btn px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 ${activeTab === 'poster' ? 'bg-tertiary-container text-on-tertiary-container shadow-md' : 'text-on-surface-variant hover:text-on-surface'}">
              <span class="material-symbols-outlined text-lg">print</span>
              <span>Gerador de Cartaz</span>
            </button>
          </div>
        </div>

        <!-- Tab Content Viewport -->
        <div id="tab-viewport">
          <!-- Rendered dynamically -->
        </div>

      </div>
    </div>
  `;

  const viewport = container.querySelector('#tab-viewport');

  // Content Builders
  function getGeneralHtml() {
    return `
      <div class="space-y-8 animate-fade-in">
        
        <!-- Support Card -->
        <div class="bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container border border-outline-variant/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
          <h2 class="text-2xl font-black text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-tertiary">favorite</span>
            <span>Cuidando de Você</span>
          </h2>
          <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            A busca por um amigo perdido é exaustiva e desafiadora. Lembre-se de que sua saúde emocional é vital para continuar esse processo com clareza. Aceite apoio e cuide de si mesmo no caminho.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div class="bg-surface-container-lowest/80 p-4 rounded-2xl border border-outline-variant/20 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-xl">air</span>
              <span class="text-xs font-semibold text-on-surface">Faça pausas para respirar fundo</span>
            </div>
            <div class="bg-surface-container-lowest/80 p-4 rounded-2xl border border-outline-variant/20 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-xl">bedtime</span>
              <span class="text-xs font-semibold text-on-surface">Descanse em períodos curtos</span>
            </div>
            <div class="bg-surface-container-lowest/80 p-4 rounded-2xl border border-outline-variant/20 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-xl">group</span>
              <span class="text-xs font-semibold text-on-surface">Delegue tarefas a amigos</span>
            </div>
            <div class="bg-surface-container-lowest/80 p-4 rounded-2xl border border-outline-variant/20 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-xl">footprint</span>
              <span class="text-xs font-semibold text-on-surface">Foque em um passo de cada vez</span>
            </div>
          </div>
        </div>

        <!-- Links to specific guides -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a href="#/achar-cachorro-desaparecido" class="group bg-surface-container hover:bg-surface-container-high border border-primary/40 rounded-3xl p-6 shadow-xl transition-all flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <div class="w-12 h-12 rounded-2xl bg-primary-container/20 text-primary flex items-center justify-center">
                <span class="material-symbols-outlined text-2xl">sound_detection_dog_barking</span>
              </div>
              <h3 class="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Guia de Reencontro para Cachorros</h3>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Varredura em espiral (1-3km), caminhos de cheiro com roupas, cartazes amarelo flúor e o RG Canino.
              </p>
            </div>
            <span class="text-xs font-extrabold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Abrir Guia de Cães <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </a>

          <a href="#/encontrar-gato-perdido" class="group bg-surface-container hover:bg-surface-container-high border border-secondary/40 rounded-3xl p-6 shadow-xl transition-all flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <div class="w-12 h-12 rounded-2xl bg-secondary-container/20 text-secondary flex items-center justify-center">
                <span class="material-symbols-outlined text-2xl">cat</span>
              </div>
              <h3 class="text-xl font-bold text-on-surface group-hover:text-secondary transition-colors">Guia de Reencontro para Gatos</h3>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Busca interna minuciosa, estação de cheiro (caixa de areia), busca na madrugada (02h-04h) e vídeo com sons no YouTube.
              </p>
            </div>
            <span class="text-xs font-extrabold text-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Abrir Guia de Gatos <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </a>
        </div>

        <!-- General Protocols -->
        <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <h3 class="text-xl font-bold text-on-surface">Instruções Gerais de Recuperação</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="space-y-2 bg-surface-container-high p-5 rounded-2xl border border-outline-variant/20">
              <strong class="text-primary font-bold text-sm flex items-center gap-1.5">
                <span class="material-symbols-outlined">door_front</span> Isolamento da Área
              </strong>
              <p class="text-xs text-on-surface-variant leading-relaxed">Verifique saídas e abrigos imediatos em um raio inicial curto.</p>
            </div>

            <div class="space-y-2 bg-surface-container-high p-5 rounded-2xl border border-outline-variant/20">
              <strong class="text-primary font-bold text-sm flex items-center gap-1.5">
                <span class="material-symbols-outlined">child_care</span> Objetos de Cheiro
              </strong>
              <p class="text-xs text-on-surface-variant leading-relaxed">Posicione caminhas, mantas e brinquedos na entrada da residência.</p>
            </div>

            <div class="space-y-2 bg-surface-container-high p-5 rounded-2xl border border-outline-variant/20">
              <strong class="text-primary font-bold text-sm flex items-center gap-1.5">
                <span class="material-symbols-outlined">campaign</span> Alertas Vizinhos
              </strong>
              <p class="text-xs text-on-surface-variant leading-relaxed">Notifique porteiros, comércios locais e clínicas veterinárias próximas.</p>
            </div>
          </div>

          <div class="space-y-3 pt-2">
            <h4 class="font-bold text-sm text-on-surface">Primeiras 48 Horas: Ações Estruturadas</h4>
            <ul class="text-xs sm:text-sm text-on-surface-variant space-y-2 list-disc list-inside leading-relaxed">
              <li><strong class="text-on-surface">Varredura Imediata:</strong> Caminhe pelo bairro chamando o nome do pet com voz tranquila.</li>
              <li><strong class="text-on-surface">Instituições e ONGs:</strong> Avise o Centro de Zoonoses (CCZ) e clínicas 24h da região.</li>
              <li><strong class="text-on-surface">Anúncios Digitais:</strong> Ative campanhas geolocalizadas em redes sociais no raio de fuga.</li>
            </ul>
          </div>
        </div>

      </div>
    `;
  }

  function getDogsHtml() {
    return `
      <div class="space-y-8 animate-fade-in">
        
        <!-- Dog Banner -->
        <div class="bg-surface-container border border-primary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span class="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary-container/20 px-3 py-1 rounded-full border border-primary-container/30">Guia Canino PetSearchers</span>
              <h2 class="text-2xl sm:text-3xl font-black text-on-surface tracking-tight mt-2 flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">sound_detection_dog_barking</span>
                <span>Como encontrar cachorro perdido: guia prático</span>
              </h2>
            </div>
            <button class="btn-dl-pdf-dogs bg-primary text-on-primary font-bold text-xs px-5 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md flex-shrink-0">
              <span class="material-symbols-outlined text-base">picture_as_pdf</span>
              <span>Baixar Guia em PDF (Cães)</span>
            </button>
          </div>
          <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Perder um cão é um momento de angústia profunda, mas agir com rapidez nas primeiras horas faz toda a diferença. Siga os 6 passos estruturados abaixo.
          </p>
        </div>

        <!-- 4 Summary Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-5 space-y-1.5 shadow-md">
            <span class="text-xs font-bold text-primary flex items-center gap-1"><span class="material-symbols-outlined">explore</span> Onde Procurar</span>
            <p class="text-xs text-on-surface-variant">Varredura em espiral partindo do ponto de fuga (raio inicial 1-3 km).</p>
          </div>
          <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-5 space-y-1.5 shadow-md">
            <span class="text-xs font-bold text-primary flex items-center gap-1"><span class="material-symbols-outlined">timer</span> Ações Imediatas</span>
            <p class="text-xs text-on-surface-variant">As primeiras horas são decisivas. Leve roupas com seu cheiro e brinquedos.</p>
          </div>
          <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-5 space-y-1.5 shadow-md">
            <span class="text-xs font-bold text-primary flex items-center gap-1"><span class="material-symbols-outlined">record_voice_over</span> Quem Avisar</span>
            <p class="text-xs text-on-surface-variant">Veterinários, pet shops, entregadores de app e porteiros da região.</p>
          </div>
          <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-5 space-y-1.5 shadow-md">
            <span class="text-xs font-bold text-primary flex items-center gap-1"><span class="material-symbols-outlined">visibility</span> O que Observar</span>
            <p class="text-xs text-on-surface-variant">Cães assustados se escondem sob carros ou vegetação densa.</p>
          </div>
        </div>

        <!-- Steps 1 to 6 Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-md">
            <div class="flex items-center gap-3">
              <span class="w-7 h-7 rounded-lg bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-xs">1</span>
              <h3 class="font-bold text-base text-on-surface">📢 Ação Imediata</h3>
            </div>
            <ul class="text-xs text-on-surface-variant space-y-1.5 list-disc list-inside">
              <li>Caminhe pelo bairro chamando o nome com tom calmo.</li>
              <li>Leve brinquedos barulhentos, petiscos e vestuário usado.</li>
              <li>Verifique imagens de câmeras de segurança locais.</li>
            </ul>
          </div>

          <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-md">
            <div class="flex items-center gap-3">
              <span class="w-7 h-7 rounded-lg bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-xs">2</span>
              <h3 class="font-bold text-base text-on-surface">📢 Divulgação Local</h3>
            </div>
            <ul class="text-xs text-on-surface-variant space-y-1.5 list-disc list-inside">
              <li>Cartazes impressos em papel amarelo flúor de alta visibilidade.</li>
              <li>Fixar em pet shops, mercados, pontos de ônibus e farmácias.</li>
            </ul>
          </div>

          <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-md">
            <div class="flex items-center gap-3">
              <span class="w-7 h-7 rounded-lg bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-xs">3</span>
              <h3 class="font-bold text-base text-on-surface">🌐 Redes Sociais & Anúncios</h3>
            </div>
            <ul class="text-xs text-on-surface-variant space-y-1.5 list-disc list-inside">
              <li>Poste em grupos de moradores no Facebook e WhatsApp.</li>
              <li>Ative campanhas geolocalizadas (Meta Ads num raio de 2-5km).</li>
            </ul>
          </div>

          <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-md">
            <div class="flex items-center gap-3">
              <span class="w-7 h-7 rounded-lg bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-xs">4</span>
              <h3 class="font-bold text-base text-on-surface">🧭 Dicas Avançadas: Caminhos de Cheiro</h3>
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              Arraste peças de roupas da pessoa com maior afinidade pelo chão do bairro até o portão da sua casa para criar uma trilha olfativa.
            </p>
          </div>
        </div>

      </div>
    `;
  }

  function getCatsHtml() {
    return `
      <div class="space-y-8 animate-fade-in">
        
        <!-- Cat Banner -->
        <div class="bg-surface-container border border-secondary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span class="text-xs uppercase font-extrabold tracking-widest text-secondary bg-secondary-container/20 px-3 py-1 rounded-full border border-secondary-container/30">Guia Felino PetSearchers</span>
              <h2 class="text-2xl sm:text-3xl font-black text-on-surface tracking-tight mt-2 flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary">cat</span>
                <span>Como encontrar gato perdido: guia estratégico</span>
              </h2>
            </div>
            <button class="btn-dl-pdf-cats bg-secondary text-on-secondary font-bold text-xs px-5 py-3 rounded-full hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-md flex-shrink-0">
              <span class="material-symbols-outlined text-base">picture_as_pdf</span>
              <span>Baixar Guia em PDF (Gatos)</span>
            </button>
          </div>
          <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Gatos tendem a se esconder muito próximos de casa quando assustados. O segredo é buscar no silêncio da madrugada e usar estímulos olfativos e sonoros.
          </p>
        </div>

        <!-- YOUTUBE VIDEO SECTION -->
        <div class="bg-surface-container border border-tertiary-container/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-outline-variant/20 pb-3">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-red-500 text-2xl">play_circle</span>
              <h3 class="text-lg font-extrabold text-on-surface">Vídeo com Sons para Atrair seu Gato (PetSearchers Oficial)</h3>
            </div>
            <a href="https://www.youtube.com/watch?v=4RQD-MG3XJU" target="_blank" class="text-xs font-bold text-red-400 hover:underline flex items-center gap-1 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">
              <span>Link no YouTube: https://www.youtube.com/watch?v=4RQD-MG3XJU</span>
              <span class="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>

          <p class="text-xs text-on-surface-variant leading-relaxed">
            Reproduza o vídeo abaixo perto de casa ou andando pelas redondezas (preferencialmente entre 02h e 04h da manhã, quando as ruas estão silenciosas).
          </p>

          <div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30 bg-black">
            <iframe 
              class="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/4RQD-MG3XJU?rel=0&autoplay=0" 
              title="Vídeo com sons para atrair seu gato | PetSearchers" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>
        </div>

        <!-- Audio generator -->
        <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 space-y-3 shadow-md">
          <h3 class="text-sm font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">volume_up</span>
            <span>Gerador Nativo de Frequências Felinas</span>
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button id="btn-sound-meow" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-3.5 rounded-xl border border-outline-variant/30 flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-primary">play_circle</span> Miado de Filhote
            </button>
            <button id="btn-sound-food" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-3.5 rounded-xl border border-outline-variant/30 flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-primary">play_circle</span> Ração & Sachê
            </button>
            <button id="btn-sound-purr" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-3.5 rounded-xl border border-outline-variant/30 flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-primary">play_circle</span> Ronronar Felino
            </button>
          </div>
        </div>

        <!-- Specific Steps -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-surface-container p-6 rounded-2xl border border-surface-container-highest space-y-2">
            <strong class="text-secondary font-bold text-sm flex items-center gap-1.5"><span class="material-symbols-outlined">home</span> 1. Busca Interna Minuciosa</strong>
            <p class="text-xs text-on-surface-variant leading-relaxed">Cheque interior de sofás, vãos atrás de geladeiras, forros e prateleiras altas antes de assumir que saiu.</p>
          </div>

          <div class="bg-surface-container p-6 rounded-2xl border border-surface-container-highest space-y-2">
            <strong class="text-secondary font-bold text-sm flex items-center gap-1.5"><span class="material-symbols-outlined">local_florist</span> 2. Estação de Cheiro</strong>
            <p class="text-xs text-on-surface-variant leading-relaxed">Coloque a caixa de areia usada na entrada da casa e aqueça um sachê de carne/atum para exalar o aroma.</p>
          </div>

          <div class="bg-surface-container p-6 rounded-2xl border border-surface-container-highest space-y-2">
            <strong class="text-secondary font-bold text-sm flex items-center gap-1.5"><span class="material-symbols-outlined">bedtime</span> 3. Busca na Madrugada (02h às 04h)</strong>
            <p class="text-xs text-on-surface-variant leading-relaxed">No silêncio da madrugada, chame baixinho e use lanterna para captar o reflexo dos olhos sob muros e carros.</p>
          </div>

          <div class="bg-surface-container p-6 rounded-2xl border border-surface-container-highest space-y-2">
            <strong class="text-secondary font-bold text-sm flex items-center gap-1.5"><span class="material-symbols-outlined">warning</span> 4. Medo e Silêncio</strong>
            <p class="text-xs text-on-surface-variant leading-relaxed">Gatos feridos ou aterrorizados ficam em silêncio por dias em vãos de motores ou garagens. Não desista.</p>
          </div>
        </div>

      </div>
    `;
  }

  function getScamsHtml() {
    return `
      <div class="space-y-6 animate-fade-in">
        <div class="bg-gradient-to-r from-amber-500/20 via-surface-container-high to-surface-container border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
          <h2 class="text-2xl font-extrabold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-amber-400">gavel</span>
            <span>Protocolo de Segurança e Antigolpe</span>
          </h2>
          <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Medidas essenciais para evitar extorsões e falsos resgates durante as buscas.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-surface-container p-6 rounded-2xl border border-amber-500/30 space-y-2">
            <strong class="text-amber-400 font-bold text-sm block">⚠️ JAMAIS Transfira Dinheiro Antecipado</strong>
            <p class="text-xs text-on-surface-variant leading-relaxed">Golpistas pedem PIX sob pretexto de tratamento veterinário ou resgate de combustível. Pessoas de boa-fé não exigem dinheiro antes do reencontro.</p>
          </div>

          <div class="bg-surface-container p-6 rounded-2xl border border-emerald-500/30 space-y-2">
            <strong class="text-emerald-400 font-bold text-sm block">✅ Exija Prova de Vida ao Vivo</strong>
            <p class="text-xs text-on-surface-variant leading-relaxed">Solicite uma chamada de vídeo ou pergunte sobre uma "característica secreta" física omitida dos cartazes impressos.</p>
          </div>
        </div>
      </div>
    `;
  }

  function getPosterHtml() {
    return `
      <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-outline-variant/20 pb-4">
          <div>
            <h2 class="text-2xl font-bold text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">print</span>
              <span>Gerador de Cartaz Amarelo Flúor (PetSearchers Pattern)</span>
            </h2>
            <p class="text-xs text-on-surface-variant mt-1">Crie um cartaz de alto contraste pronto para imprimir.</p>
          </div>
          <button id="btn-print-poster" class="bg-primary text-on-primary font-bold text-xs px-6 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md">
            <span class="material-symbols-outlined text-base">print</span> Imprimir Cartaz
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-5 space-y-4">
            <div>
              <label class="block text-xs font-bold text-on-surface-variant mb-1">Título</label>
              <input type="text" id="poster-title" value="PROCURA-SE" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-sm text-on-surface font-bold uppercase">
            </div>
            <div>
              <label class="block text-xs font-bold text-on-surface-variant mb-1">Nome do Pet</label>
              <input type="text" id="poster-name" value="Thor" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-sm text-on-surface font-bold">
            </div>
            <div>
              <label class="block text-xs font-bold text-on-surface-variant mb-1">Recompensa</label>
              <input type="text" id="poster-reward" value="RECOMPENSA: R$ 1.500" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-sm text-on-surface font-bold text-emerald-400">
            </div>
            <div>
              <label class="block text-xs font-bold text-on-surface-variant mb-1">Telefone</label>
              <input type="text" id="poster-phone" value="(11) 98765-4321" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-sm text-on-surface font-bold">
            </div>
            <div>
              <label class="block text-xs font-bold text-on-surface-variant mb-1">Bairro / Local</label>
              <input type="text" id="poster-loc" value="Pinheiros / Vila Madalena - SP" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-sm text-on-surface">
            </div>
            <div>
              <label class="block text-xs font-bold text-on-surface-variant mb-1">URL da Foto</label>
              <input type="url" id="poster-photo" value="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-xs text-on-surface">
            </div>
          </div>

          <div class="lg:col-span-7 flex justify-center">
            <div id="printable-poster-area" class="w-full max-w-sm bg-yellow-400 text-black p-6 rounded-xl border-4 border-black shadow-2xl font-sans text-center space-y-4 select-none">
              <h1 id="p-render-title" class="text-3xl font-black uppercase tracking-tight bg-black text-yellow-400 py-2 rounded-md">PROCURA-SE</h1>
              <div class="h-56 w-full rounded-md border-2 border-black overflow-hidden bg-white">
                <img id="p-render-img" src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover">
              </div>
              <div>
                <h2 id="p-render-name" class="text-3xl font-black tracking-tight uppercase">THOR</h2>
                <p id="p-render-loc" class="text-xs font-bold leading-tight mt-1">Pinheiros / Vila Madalena - SP</p>
              </div>
              <div id="p-render-reward" class="bg-red-600 text-white font-black text-sm py-1.5 px-3 rounded-md uppercase tracking-wide">
                RECOMPENSA: R$ 1.500
              </div>
              <div class="border-t-2 border-black pt-2">
                <span class="text-[10px] uppercase font-bold block">Ligue ou envie mensagem urgente:</span>
                <p id="p-render-phone" class="text-2xl font-black tracking-tight text-black mt-0.5">(11) 98765-4321</p>
              </div>
              <span class="text-[9px] font-semibold opacity-80 block">Cadastrado na Rede Faro • Pet Searchers</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Render Current Selected Tab
  function renderTab(tabKey) {
    if (tabKey === 'dogs') viewport.innerHTML = getDogsHtml();
    else if (tabKey === 'cats') viewport.innerHTML = getCatsHtml();
    else if (tabKey === 'scams') viewport.innerHTML = getScamsHtml();
    else if (tabKey === 'poster') viewport.innerHTML = getPosterHtml();
    else viewport.innerHTML = getGeneralHtml();

    attachTabEvents();
  }

  function attachTabEvents() {
    // PDF download triggers
    container.querySelectorAll('.btn-dl-pdf-dogs').forEach(btn => btn.addEventListener('click', () => downloadPdf('Cães')));
    container.querySelectorAll('.btn-dl-pdf-cats').forEach(btn => btn.addEventListener('click', () => downloadPdf('Gatos')));

    // Audio triggers
    container.querySelector('#btn-sound-meow')?.addEventListener('click', () => playAudio('meow'));
    container.querySelector('#btn-sound-food')?.addEventListener('click', () => playAudio('food'));
    container.querySelector('#btn-sound-purr')?.addEventListener('click', () => playAudio('purr'));

    // Poster triggers
    const titleInput = container.querySelector('#poster-title');
    const nameInput = container.querySelector('#poster-name');
    const rewardInput = container.querySelector('#poster-reward');
    const phoneInput = container.querySelector('#poster-phone');
    const locInput = container.querySelector('#poster-loc');
    const photoInput = container.querySelector('#poster-photo');

    if (titleInput) {
      const updateRender = () => {
        container.querySelector('#p-render-title').textContent = titleInput.value;
        container.querySelector('#p-render-name').textContent = nameInput.value;
        container.querySelector('#p-render-reward').textContent = rewardInput.value;
        container.querySelector('#p-render-phone').textContent = phoneInput.value;
        container.querySelector('#p-render-loc').textContent = locInput.value;
        container.querySelector('#p-render-img').src = photoInput.value;
      };
      [titleInput, nameInput, rewardInput, phoneInput, locInput, photoInput].forEach(el => el?.addEventListener('input', updateRender));
      container.querySelector('#btn-print-poster')?.addEventListener('click', () => window.print());
    }
  }

  function downloadPdf(species) {
    showToast(`Gerando arquivo PDF do Guia (${species})...`, 'success');
    const isDog = species === 'Cães';
    const title = isDog ? 'Guia de Reencontro para Cachorros - PetSearchers' : 'Guia de Reencontro para Gatos - PetSearchers';
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${title}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; color: #111; }
          h1 { color: #d97706; font-size: 24px; border-bottom: 2px solid #d97706; padding-bottom: 8px; }
          h2 { color: #1f2937; font-size: 18px; margin-top: 20px; }
          ul { margin-bottom: 20px; }
          li { margin-bottom: 8px; }
          .box { background: #f3f4f6; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #d97706; }
          .footer { margin-top: 40px; font-size: 11px; text-align: center; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 10px; }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <p><strong>Manual de Busca Estratégica PetSearchers</strong></p>
        <div class="box"><strong>CUIDANDO DE VOCÊ:</strong> Pausas conscientes, descanso e foco em um passo de cada vez.</div>
        ${isDog ? `
          <h2>Passos para Encontrar Cachorro Perdido</h2>
          <ul>
            <li><strong>Varredura em Espiral:</strong> Raio inicial de 1 a 3 km a partir do local da fuga.</li>
            <li><strong>Estímulos Olfativos:</strong> Roupas usadas com seu cheiro e brinquedos barulhentos.</li>
            <li><strong>Cartazes Amarelo Flúor:</strong> Em pontos de ônibus, pet shops e clínicas veterinárias 24h.</li>
          </ul>
        ` : `
          <h2>Passos para Encontrar Gato Perdido</h2>
          <ul>
            <li><strong>Busca Interna:</strong> Interior de sofás, vãos da geladeira, forros e prateleiras altas.</li>
            <li><strong>Estação de Cheiro:</strong> Caixa de areia usada na entrada + sachê de carne aquecido.</li>
            <li><strong>Busca na Madrugada (02h às 04h):</strong> Silêncio total com lanternas. Vídeo oficial no YouTube: https://www.youtube.com/watch?v=4RQD-MG3XJU</li>
          </ul>
        `}
        <div class="footer">Documento Oficial Faro • PetSearchers Brasil | www.pet-searchers.com</div>
      </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 500);
  }

  function playAudio(type) {
    showToast(`Tocando áudio atrativo felino (${type})...`, 'info');
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(type === 'meow' ? 650 : 350, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(type === 'meow' ? 450 : 700, audioCtx.currentTime + 0.6);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.6);
    } catch(e) {}
  }

  // Bind Tab Click Handlers
  container.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabKey = btn.getAttribute('data-tab');
      
      container.querySelectorAll('.nav-tab-btn').forEach(b => {
        b.className = 'nav-tab-btn px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2';
      });

      if (tabKey === 'cats') btn.className = 'nav-tab-btn px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm bg-secondary-container text-on-secondary-container shadow-md transition-all flex items-center gap-2';
      else if (tabKey === 'scams') btn.className = 'nav-tab-btn px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm bg-amber-500 text-black shadow-md transition-all flex items-center gap-2';
      else if (tabKey === 'poster') btn.className = 'nav-tab-btn px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm bg-tertiary-container text-on-tertiary-container shadow-md transition-all flex items-center gap-2';
      else btn.className = 'nav-tab-btn px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm bg-primary-container text-on-primary-container shadow-md transition-all flex items-center gap-2';

      renderTab(tabKey);
    });
  });

  // Initial render
  renderTab(activeTab);
}

export function renderReunionGuideView(container, showToast) {
  container.innerHTML = `
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        
        <!-- Main Header -->
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary-container/15 px-3 py-1 rounded-full border border-primary-container/30">
            Manual Oficial de Resgate & Comportamento Animal
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-on-surface tracking-tight mt-2">
            Guia Completo de Reencontro
          </h1>
          <p class="text-base text-on-surface-variant leading-relaxed">
            Plano tático baseado em psicologia comportamental e métodos científicos validados para a busca e resgate seguro de cães e gatos desaparecidos.
          </p>
        </div>

        <!-- Species Selector Tabs -->
        <div class="flex justify-center border-b border-surface-container-highest pb-4">
          <div class="inline-flex p-1 bg-surface-container rounded-2xl border border-outline-variant/40 shadow-inner">
            <button id="guide-tab-dogs" class="px-6 py-3 rounded-xl font-bold text-sm bg-primary-container text-on-primary-container shadow-md transition-all flex items-center gap-2.5">
              <span class="material-symbols-outlined text-xl">sound_detection_dog_barking</span>
              <span>Guia Completo para Cães</span>
            </button>
            <button id="guide-tab-cats" class="px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5">
              <span class="material-symbols-outlined text-xl">cat</span>
              <span>Guia Completo para Gatos</span>
            </button>
            <button id="guide-tab-poster" class="px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5">
              <span class="material-symbols-outlined text-xl">print</span>
              <span>Gerador de Cartaz de Busca</span>
            </button>
          </div>
        </div>

        <!-- Guide Content Area -->
        <div id="guide-content" class="space-y-8">
          <!-- Rendered dynamically -->
        </div>

      </div>
    </div>
  `;

  // HTML content for DOGS
  const dogGuideHtml = `
    <div class="space-y-8 animate-fade-in">
      
      <!-- Quick Action Banner -->
      <div class="bg-gradient-to-r from-primary-container/20 via-surface-container-high to-surface-container border border-primary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider">
            <span class="material-symbols-outlined text-sm">schedule</span>
            <span>Ação nas primeiras 24 horas</span>
          </div>
          <h2 class="text-2xl font-extrabold text-on-surface">Varredura em Espiral (1 a 3 km)</h2>
          <p class="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
            Cães costumam seguir linhas de cheiro ou buscar abrigo em locais conhecidos em um raio inicial de 1 a 3 km. Fique atento: cães assustados tendem a se esconder sob carros ou arbustos e podem não responder ao chamado logo de cara.
          </p>
        </div>
        <a href="#/cadastrar?status=lost" class="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all flex-shrink-0 flex items-center gap-2">
          <span class="material-symbols-outlined">add_circle</span>
          <span>Cadastrar Alerta Agora</span>
        </a>
      </div>

      <!-- Grid of Steps -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Step 1 -->
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">1</div>
            <h3 class="font-bold text-lg text-on-surface">Ação Imediata & Sinalização</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Caminhe em tom calmo:</strong> Chame o nome do cachorro em tom alegre e amigável. Gritar em desespero pode assustar um animal já desorientado.</li>
            <li><strong class="text-on-surface">Estímulos sonoros e olfativos:</strong> Leve brinquedos ruidosos (squeaky toys), saco de ração para chacoalhar e petiscos de odor forte.</li>
            <li><strong class="text-on-surface">Pessoas em circulação:</strong> Fale com porteiros, entregadores de aplicativo, garis e trabalhadores de obras na rua. Deixe seu WhatsApp.</li>
            <li><strong class="text-on-surface">Câmeras de segurança:</strong> Solicite imagens de portaria e comércios vizinhos para identificar em qual direção o cão dobrou a esquina.</li>
          </ul>
        </div>

        <!-- Step 2 -->
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">2</div>
            <h3 class="font-bold text-lg text-on-surface">Técnica dos "Caminhos de Cheiro"</h3>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Estratégia afetiva de atração olfativa recomendada por especialistas em resgate:
          </p>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li>Pegue peças de roupas usadas (camisetas suadas sem lavar) do tutor com quem o cão tem maior afinidade.</li>
            <li>Corte as roupas em tiras e arraste-as no chão fazendo caminhos radiais partindo dos pontos onde ele foi visto até a porta de sua casa.</li>
            <li>Deixe a cama do pet e um pote de água na entrada de casa. Evite colocar comida para não atrair animais de rua rivais.</li>
          </ul>
        </div>

        <!-- Step 3 -->
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">3</div>
            <h3 class="font-bold text-lg text-on-surface">Cartazes & Redes Sociais</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Cartazes de alto impacto:</strong> Afixe cartazes coloridos com foto nítida e telefone visível em pet shops, veterinárias, padarias e pontos de ônibus.</li>
            <li><strong class="text-on-surface">Dica visual:</strong> Use fitas fluorescentes ou bordas amarelas para destacar o cartaz na calçada.</li>
            <li><strong class="text-on-surface">Grupos de bairro:</strong> Compartilhe em grupos locais do Facebook, WhatsApp e redes do bairro.</li>
          </ul>
        </div>

        <!-- Step 4 -->
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">4</div>
            <h3 class="font-bold text-lg text-on-surface">Zoonoses e ONGs Parceiras</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li>Visite presencialmente clínicas veterinárias 24 horas da região — cães resgatados feridos costumam ser deixados por terceiros.</li>
            <li>Consulte o <a href="#/ongs" class="text-primary underline">Diretório de ONGs do Faro</a> para checar se ele deu entrada em algum abrigo cadastrado.</li>
            <li>Notifique o Centro de Controle de Zoonoses municipal.</li>
          </ul>
        </div>

      </div>
    </div>
  `;

  // HTML content for CATS
  const catGuideHtml = `
    <div class="space-y-8 animate-fade-in">
      
      <!-- Quick Action Banner -->
      <div class="bg-gradient-to-r from-secondary-container/30 via-surface-container-high to-surface-container border border-secondary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-1.5 text-secondary text-xs font-bold uppercase tracking-wider">
            <span class="material-symbols-outlined text-sm">visibility</span>
            <span>Comportamento Felino de Fuga</span>
          </div>
          <h2 class="text-2xl font-extrabold text-on-surface">90% dos Gatos Estão a Menos de 50 metros</h2>
          <p class="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
            Gatos domésticos aterrorizados não correm para longe; eles entram em estado de "congelamento" e escondem-se em locais apertados no raio imediato de casa (jardins vizinhos, vãos de garagem, motores).
          </p>
        </div>
        <a href="#/cadastrar?status=lost" class="bg-secondary-container hover:bg-secondary-container/90 text-on-secondary-container font-extrabold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all flex-shrink-0 flex items-center gap-2">
          <span class="material-symbols-outlined">add_circle</span>
          <span>Cadastrar Gato Perdido</span>
        </a>
      </div>

      <!-- Interactive Sound Player Tool -->
      <div class="bg-surface-container border border-tertiary-container/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-tertiary">volume_up</span>
            <span>Gerador de Sons para Atrair Felinos</span>
          </h3>
          <span class="text-xs text-tertiary font-semibold">Reproduza durante a busca noturna</span>
        </div>
        <p class="text-xs text-on-surface-variant leading-relaxed">
          Tocar sons familiares de miados amigáveis de filhotes ou sachês mexendo estimula o gato a vocalizar ou sair do estado de choque.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <button id="play-sound-meow" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-4 rounded-2xl border border-outline-variant/40 flex items-center justify-center gap-3 transition-all">
            <span class="material-symbols-outlined text-primary text-xl">play_circle</span>
            <span>Miado Calmo de Filhote</span>
          </button>
          <button id="play-sound-food" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-4 rounded-2xl border border-outline-variant/40 flex items-center justify-center gap-3 transition-all">
            <span class="material-symbols-outlined text-primary text-xl">play_circle</span>
            <span>Som de Luta / Chocalho de Ração</span>
          </button>
          <button id="play-sound-purr" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-4 rounded-2xl border border-outline-variant/40 flex items-center justify-center gap-3 transition-all">
            <span class="material-symbols-outlined text-primary text-xl">play_circle</span>
            <span>Ronronar Suave</span>
          </button>
        </div>
      </div>

      <!-- Grid of Steps for Cats -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">1</div>
            <h3 class="font-bold text-lg text-on-surface">Varredura Interna & Garagens Vizinhas</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Dentro de casa:</strong> Verifique fundo de armários, parte traseira de geladeiras, dentro de sofás e sótãos antes de concluir a fuga.</li>
            <li><strong class="text-on-surface">Peça licença aos vizinhos:</strong> Peça para VOCÊ inspecionar os garagens, depósitos e quintais deles. Gatos assustados não saem ao chamado de estranhos.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">2</div>
            <h3 class="font-bold text-lg text-on-surface">Estação de Odor & Alimentação</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Caixa de areia usada:</strong> Coloque a caixa de areia não limpa na varanda ou entrada. É a bússola olfativa mais eficiente para gatos.</li>
            <li><strong class="text-on-surface">Comida de aroma intenso:</strong> Aqueça ligeiramente um sachê de peixe/atum para potencializar o aroma no ar noturno.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">3</div>
            <h3 class="font-bold text-lg text-on-surface">Busca Noturna Silenciosa (02h às 05h)</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li>O barulho do tráfego diurno aavorora felinos. O momento certo para buscar é de madrugada, quando as ruas estão silenciosas.</li>
            <li>Use uma lanterna forte apontando rente ao chão e sob vãos. O reflexo prateado/esverdeado dos olhos do gato no escuro denunciará o esconderijo.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">4</div>
            <h3 class="font-bold text-lg text-on-surface">Resgate Suave sem Pânico</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li>Quando avistá-lo, não corra para agarrá-lo. Ele pode surtar de pânico e fugir para mais longe.</li>
            <li>Sente-se no chão, evite contato visual direto prolongado e ofereça comida devagar até que ele reconheça sua voz e cheiro.</li>
          </ul>
        </div>

      </div>
    </div>
  `;

  // HTML content for POSTER GENERATOR
  const posterGeneratorHtml = `
    <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-outline-variant/20 pb-4">
        <div>
          <h2 class="text-2xl font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">print</span>
            <span>Gerador de Cartaz de Busca Impresso</span>
          </h2>
          <p class="text-xs text-on-surface-variant mt-1">Gere um cartaz padronizado pronto para imprimir ou compartilhar em grupos de WhatsApp.</p>
        </div>
        <button id="btn-print-poster" class="bg-primary text-on-primary font-bold text-xs px-6 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md">
          <span class="material-symbols-outlined text-base">print</span>
          <span>Imprimir / Salvar PDF</span>
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Controls -->
        <div class="lg:col-span-5 space-y-4">
          <div>
            <label class="block text-xs font-bold text-on-surface-variant mb-1">Título do Cartaz</label>
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
            <label class="block text-xs font-bold text-on-surface-variant mb-1">Telefone Principal (Destaque)</label>
            <input type="text" id="poster-phone" value="(11) 98765-4321" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-sm text-on-surface font-bold">
          </div>
          <div>
            <label class="block text-xs font-bold text-on-surface-variant mb-1">Local & Bairro</label>
            <input type="text" id="poster-loc" value="Desaparecido em Pinheiros / Vila Madalena - SP" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-sm text-on-surface">
          </div>
          <div>
            <label class="block text-xs font-bold text-on-surface-variant mb-1">URL da Foto</label>
            <input type="url" id="poster-photo" value="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-xs text-on-surface">
          </div>
        </div>

        <!-- Printable Live Preview Canvas -->
        <div class="lg:col-span-7 flex justify-center">
          <div id="printable-poster-area" class="w-full max-w-sm bg-yellow-400 text-black p-6 rounded-xl border-4 border-black shadow-2xl font-sans text-center space-y-4 select-none">
            <h1 id="p-render-title" class="text-3xl font-black uppercase tracking-tight bg-black text-yellow-400 py-2 rounded-md">PROCURA-SE</h1>
            <div class="h-56 w-full rounded-md border-2 border-black overflow-hidden bg-white">
              <img id="p-render-img" src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover">
            </div>
            <div>
              <h2 id="p-render-name" class="text-3xl font-black tracking-tight uppercase">THOR</h2>
              <p id="p-render-loc" class="text-xs font-bold leading-tight mt-1">Desaparecido em Pinheiros / Vila Madalena - SP</p>
            </div>
            <div id="p-render-reward" class="bg-red-600 text-white font-black text-sm py-1.5 px-3 rounded-md uppercase tracking-wide">
              RECOMPENSA: R$ 1.500
            </div>
            <div class="border-t-2 border-black pt-2">
              <span class="text-[10px] uppercase font-bold block">Ligue ou envie mensagem urgente:</span>
              <p id="p-render-phone" class="text-2xl font-black tracking-tight text-black mt-0.5">(11) 98765-4321</p>
            </div>
            <span class="text-[9px] font-semibold opacity-80 block">Cadastrado na Rede Faro • faro.com.br</span>
          </div>
        </div>

      </div>
    </div>
  `;

  const contentEl = container.querySelector('#guide-content');
  contentEl.innerHTML = dogGuideHtml;

  const tabDogs = container.querySelector('#guide-tab-dogs');
  const tabCats = container.querySelector('#guide-tab-cats');
  const tabPoster = container.querySelector('#guide-tab-poster');

  tabDogs.addEventListener('click', () => {
    tabDogs.className = 'px-6 py-3 rounded-xl font-bold text-sm bg-primary-container text-on-primary-container shadow-md transition-all flex items-center gap-2.5';
    tabCats.className = 'px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5';
    tabPoster.className = 'px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5';
    contentEl.innerHTML = dogGuideHtml;
  });

  tabCats.addEventListener('click', () => {
    tabCats.className = 'px-6 py-3 rounded-xl font-bold text-sm bg-secondary-container text-on-secondary-container shadow-md transition-all flex items-center gap-2.5';
    tabDogs.className = 'px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5';
    tabPoster.className = 'px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5';
    contentEl.innerHTML = catGuideHtml;
    attachAudioListeners();
  });

  tabPoster.addEventListener('click', () => {
    tabPoster.className = 'px-6 py-3 rounded-xl font-bold text-sm bg-tertiary-container text-on-tertiary-container shadow-md transition-all flex items-center gap-2.5';
    tabDogs.className = 'px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5';
    tabCats.className = 'px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5';
    contentEl.innerHTML = posterGeneratorHtml;
    attachPosterListeners();
  });

  function attachAudioListeners() {
    const playAudio = (type) => {
      showToast(`Tocando som atrativo felino: ${type}`, 'info');
      // Web Audio API synth tones for demo
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
    };

    container.querySelector('#play-sound-meow')?.addEventListener('click', () => playAudio('meow'));
    container.querySelector('#play-sound-food')?.addEventListener('click', () => playAudio('food'));
    container.querySelector('#play-sound-purr')?.addEventListener('click', () => playAudio('purr'));
  }

  function attachPosterListeners() {
    const titleInput = container.querySelector('#poster-title');
    const nameInput = container.querySelector('#poster-name');
    const rewardInput = container.querySelector('#poster-reward');
    const phoneInput = container.querySelector('#poster-phone');
    const locInput = container.querySelector('#poster-loc');
    const photoInput = container.querySelector('#poster-photo');

    const updateRender = () => {
      container.querySelector('#p-render-title').textContent = titleInput.value;
      container.querySelector('#p-render-name').textContent = nameInput.value;
      container.querySelector('#p-render-reward').textContent = rewardInput.value;
      container.querySelector('#p-render-phone').textContent = phoneInput.value;
      container.querySelector('#p-render-loc').textContent = locInput.value;
      container.querySelector('#p-render-img').src = photoInput.value;
    };

    [titleInput, nameInput, rewardInput, phoneInput, locInput, photoInput].forEach(el => {
      el?.addEventListener('input', updateRender);
    });

    container.querySelector('#btn-print-poster')?.addEventListener('click', () => {
      window.print();
    });
  }
}

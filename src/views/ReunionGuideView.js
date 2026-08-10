import { store } from '../store.js';

export function renderReunionGuideView(container, showToast) {
  container.innerHTML = `
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 space-y-10">
        
        <!-- Main Header -->
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary-container/15 px-3 py-1 rounded-full border border-primary-container/30">
            Protocolo Oficial Pet Searchers & Faro
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-on-surface tracking-tight mt-2">
            Guia Completo de Reencontro
          </h1>
          <p class="text-base text-on-surface-variant leading-relaxed">
            Manual tático baseado em ciência comportamental e dados do Pet Searchers para localização de animais perdidos e resgatados.
          </p>
        </div>

        <!-- Species Selector Tabs -->
        <div class="flex justify-center border-b border-surface-container-highest pb-4">
          <div class="inline-flex p-1 bg-surface-container rounded-2xl border border-outline-variant/40 shadow-inner flex-wrap justify-center gap-1">
            <button id="guide-tab-general" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-primary-container text-on-primary-container shadow-md transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">menu_book</span>
              <span>Guia Geral de Reencontro</span>
            </button>
            <button id="guide-tab-dogs" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">sound_detection_dog_barking</span>
              <span>Reencontro de Cães</span>
            </button>
            <button id="guide-tab-cats" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">cat</span>
              <span>Reencontro de Gatos</span>
            </button>
            <button id="guide-tab-scams" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg text-amber-400">gavel</span>
              <span>Prevenção a Golpes</span>
            </button>
            <button id="guide-tab-poster" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">print</span>
              <span>Gerador de Cartaz</span>
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

  // 1. GENERAL GUIDE CONTENT (Pet Searchers Protocol)
  const generalGuideHtml = `
    <div class="space-y-8 animate-fade-in">
      
      <!-- Quick Action Banner -->
      <div class="bg-gradient-to-r from-primary-container/20 via-surface-container-high to-surface-container border border-primary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider">
            <span class="material-symbols-outlined text-sm">bolt</span>
            <span>Regra das 24 Horas de Ouro</span>
          </div>
          <h2 class="text-2xl font-extrabold text-on-surface">Protocolo Imediato de Busca em Campo</h2>
          <p class="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
            As primeiras 24 horas são cruciais para cobrir o raio primário de deslocamento do animal antes que ele se afaste mais ou seja acolhido por terceiros sem notificação.
          </p>
        </div>
        <a href="#/cadastrar?status=lost" class="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all flex-shrink-0 flex items-center gap-2">
          <span class="material-symbols-outlined">add_circle</span>
          <span>Cadastrar Alerta Imediato</span>
        </a>
      </div>

      <!-- Step Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">1</div>
            <h3 class="font-bold text-lg text-on-surface">Mapeamento & Raio de Varredura</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Determine o Raio Primário:</strong> Para gatos e cães pequenos/assustados, inicie em um raio imediato de 50m a 500m. Para cães médios e grandes, estabeleça um raio em espiral de 1km a 3km.</li>
            <li><strong class="text-on-surface">Identifique Barreiras Naturais:</strong> Rodovias, linhas de trem, rios e grandes avenidas costumam limitar o avanço inicial do animal.</li>
            <li><strong class="text-on-surface">Câmeras de Segurança:</strong> Solicite imediatamente imagens de portarias, vizinhos e comércios locais para confirmar a direção exata da fuga.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">2</div>
            <h3 class="font-bold text-lg text-on-surface">Mobilização Comunitária Presencial</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Pessoas-Chave de Circulação:</strong> Fale com garis, entregadores de aplicativos, correios, motoristas de táxi/Uber, porteiros e passeadores de cães. Eles cobrem o bairro em horários variados.</li>
            <li><strong class="text-on-surface">Comércio Local:</strong> Deixe seu contato em padarias, farmácias, bancas de jornal e pet shops da vizinhança.</li>
            <li><strong class="text-on-surface">Cartazes de Impacto:</strong> Cole cartazes com foto colorida nítida e telefone grande em pontos de grande fluxo (paradas de ônibus e semáforos).</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">3</div>
            <h3 class="font-bold text-lg text-on-surface">Rede de ONGs, Abrigos & Clínicas 24h</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Clínicas Veterinárias 24h:</strong> Visite presencialmente clínicas da região. Cães e gatos atropelados ou achados feridos são encaminhados a clínicas próximas.</li>
            <li><strong class="text-on-surface">ONGs & Abrigos de Proteção:</strong> Consulte o <a href="#/ongs" class="text-primary font-bold underline">Diretório de ONGs do Faro / Pet Searchers</a> e cadastre o alerta diretamente com os protetores da cidade.</li>
            <li><strong class="text-on-surface">Centro de Controle de Zoonoses (CCZ):</strong> Registre a ocorrência nos órgãos públicos de resgate da sua prefeitura.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">4</div>
            <h3 class="font-bold text-lg text-on-surface">Divulgação Digital Estratégica</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Grupos do Bairro:</strong> Publique em grupos de Facebook, WhatsApp e vizinhança local com hashtags da cidade e bairro.</li>
            <li><strong class="text-on-surface">Anúncios Geolocalizados (Meta Ads):</strong> Crie campanhas patrocinadas no Instagram e Facebook mirando especificamente no raio de 2km a 5km do local do desaparecimento.</li>
            <li><strong class="text-on-surface">Manutenção dos Alertas:</strong> Atualize a postagem diariamente para manter o caso no topo do feed das redes sociais.</li>
          </ul>
        </div>

      </div>
    </div>
  `;

  // 2. DOG GUIDE CONTENT
  const dogGuideHtml = `
    <div class="space-y-8 animate-fade-in">
      
      <!-- Quick Action Banner -->
      <div class="bg-gradient-to-r from-primary-container/20 via-surface-container-high to-surface-container border border-primary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider">
            <span class="material-symbols-outlined text-sm">sound_detection_dog_barking</span>
            <span>Psicologia Comportamental Canina</span>
          </div>
          <h2 class="text-2xl font-extrabold text-on-surface">Cães Assustados Entram em Modo Sobrevivência</h2>
          <p class="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
            Cães perdidos e amedrontados frequentemente ignoram chamados pelo próprio nome e agem por instinto primitivo de fuga. Saiba como abordar sem espantar o animal.
          </p>
        </div>
        <a href="#/cadastrar?status=lost" class="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all flex-shrink-0 flex items-center gap-2">
          <span class="material-symbols-outlined">add_circle</span>
          <span>Cadastrar Cão Perdido</span>
        </a>
      </div>

      <!-- Grid of Steps -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">1</div>
            <h3 class="font-bold text-lg text-on-surface">Cão Confiante vs. Cão Assustado</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Cão Sociável/Calmo:</strong> Tende a se aproximar de pedestres em busca de carinho ou comida. É resgatado mais rapidamente em pontos comerciais ou praças.</li>
            <li><strong class="text-on-surface">Cão Tímido/Pânico:</strong> Esconde-se em terrenos baldios, sob carros ou arbustos fechados. Se perseguido correndo, entrará em pânico e correrá para avenidas de tráfego intenso.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">2</div>
            <h3 class="font-bold text-lg text-on-surface">Técnica dos Rastros Olfativos</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Roupas do Tutor:</strong> Pegue camisetas suadas sem lavar do tutor principal e arraste-as no chão partindo do local onde o cão foi visto de volta até a entrada de sua casa.</li>
            <li><strong class="text-on-surface">Caminha e Brinquedos:</strong> Deixe a cama usada do cão na varanda ou garagem.</li>
            <li><strong class="text-on-surface">Água Doce:</strong> Coloque recipientes de água fresca nos pontos de cheiro (evite alimentos para não atrair outros animais de rua).</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">3</div>
            <h3 class="font-bold text-lg text-on-surface">Varredura Noturna & Sons Familiarizados</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Chame em Tom Alegre:</strong> Nunca chame chorando ou em tom autoritário de bronca. Fale como se estivesse brincando ou oferecendo um passeio.</li>
            <li><strong class="text-on-surface">Sons Conhecidos:</strong> Apito habitualmente usado, squeaky toy (brinquedo barulhento) ou saco de petiscos favoritos balançando.</li>
            <li><strong class="text-on-surface">Horários Silenciosos:</strong> Realize buscas entre 22h e 06h, quando o barulho de carros diminui e os animais saem para buscar água.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">4</div>
            <h3 class="font-bold text-lg text-on-surface">Procedimento Correto ao Avistá-lo</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">NÃO Corra em Direção a Ele:</strong> Isso ativa a resposta de presa/predador e fará o cão fugir em alta velocidade.</li>
            <li><strong class="text-on-surface">Postura Corporal Passiva:</strong> Sente-se no chão de lado, evite contato visual direto no olho, jogue petiscos de cheiro forte no chão e aguarde pacientemente que ele venha até você.</li>
          </ul>
        </div>

      </div>
    </div>
  `;

  // 3. CAT GUIDE CONTENT
  const catGuideHtml = `
    <div class="space-y-8 animate-fade-in">
      
      <!-- Quick Action Banner -->
      <div class="bg-gradient-to-r from-secondary-container/30 via-surface-container-high to-surface-container border border-secondary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-1.5 text-secondary text-xs font-bold uppercase tracking-wider">
            <span class="material-symbols-outlined text-sm">visibility</span>
            <span>A Regra dos 50 Metros Felinos</span>
          </div>
          <h2 class="text-2xl font-extrabold text-on-surface">90% dos Gatos Ficam no Raio Imediato da Residência</h2>
          <p class="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
            Gatos que se perdem não viajam longas distâncias: eles entram em estado de torpor/congelamento defensivo e escondem-se em locais apertados e silenciosos a poucos metros de casa.
          </p>
        </div>
        <a href="#/cadastrar?status=lost" class="bg-secondary-container hover:bg-secondary-container/90 text-on-secondary-container font-extrabold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all flex-shrink-0 flex items-center gap-2">
          <span class="material-symbols-outlined">add_circle</span>
          <span>Cadastrar Gato Perdido</span>
        </a>
      </div>

      <!-- Audio Generator Tool -->
      <div class="bg-surface-container border border-tertiary-container/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-tertiary">volume_up</span>
            <span>Gerador de Sons Atrativos Felinos (Pet Searchers)</span>
          </h3>
          <span class="text-xs text-tertiary font-semibold">Reproduza durante a busca noturna</span>
        </div>
        <p class="text-xs text-on-surface-variant leading-relaxed">
          Tocar sons específicos de filhotes ou sachês estimula o gato a responder com um miado discreto no esconderijo.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <button id="play-sound-meow" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-4 rounded-2xl border border-outline-variant/40 flex items-center justify-center gap-3 transition-all">
            <span class="material-symbols-outlined text-primary text-xl">play_circle</span>
            <span>Miado Calmo de Filhote</span>
          </button>
          <button id="play-sound-food" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-4 rounded-2xl border border-outline-variant/40 flex items-center justify-center gap-3 transition-all">
            <span class="material-symbols-outlined text-primary text-xl">play_circle</span>
            <span>Chocalho de Ração / Sachê</span>
          </button>
          <button id="play-sound-purr" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-4 rounded-2xl border border-outline-variant/40 flex items-center justify-center gap-3 transition-all">
            <span class="material-symbols-outlined text-primary text-xl">play_circle</span>
            <span>Ronronar Suave Acolhedor</span>
          </button>
        </div>
      </div>

      <!-- Grid of Steps -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">1</div>
            <h3 class="font-bold text-lg text-on-surface">Varredura Minuciosa Imediata (50m)</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Dentro de Casa:</strong> Inspecione o fundo de sofás, trás de geladeiras, sótãos, caixa d'água e forros de teto antes de assumir a fuga para a rua.</li>
            <li><strong class="text-on-surface">Vizinhos Próximos:</strong> Solicite permissão para VOCÊ MESMO checar garagens, depósitos e quintais dos vizinhos adjacentes. Gatos assustados não saem com estranhos.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">2</div>
            <h3 class="font-bold text-lg text-on-surface">Bússola Olfativa (Caixa de Areia Usada)</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Caixa de Areia Usada:</strong> Coloque a caixa de areia do gato (sem limpar) na varanda, garagem ou entrada. O faro felino identifica o próprio cheiro a centenas de metros.</li>
            <li><strong class="text-on-surface">Sachê Aquecido:</strong> Aqueça ligeiramente um sachê de peixe/atum de odor forte e deixe em um local protegido à noite.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">3</div>
            <h3 class="font-bold text-lg text-on-surface">Busca Noturna com Lanterna (02h às 05h)</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Silêncio Noturno:</strong> O barulho do tráfego diurno apavora os gatos. O horário correto para buscas é de madrugada.</li>
            <li><strong class="text-on-surface">Técnica do Brilho nos Olhos:</strong> Agache-se e jogue o foco da lanterna rente ao chão e sob vãos de carros e muros. A membrana dos olhos felinos reflexiva denunciará o esconderijo.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">4</div>
            <h3 class="font-bold text-lg text-on-surface">Uso de Armadilhas Amigáveis (Gaiola Trap)</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li>Se o gato estiver acuado e recusar aproximação humana por medo, instale uma gaiola de captura segura (*cat trap*) armada com sachê quente e coberta por uma toalha com o cheiro da casa.</li>
          </ul>
        </div>

      </div>
    </div>
  `;

  // 4. SCAM PREVENTION CONTENT (Safety for Owners)
  const scamPreventionHtml = `
    <div class="space-y-8 animate-fade-in">
      
      <div class="bg-gradient-to-r from-amber-500/20 via-surface-container-high to-surface-container border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
        <div class="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <span class="material-symbols-outlined text-sm">gavel</span>
          <span>Proteção & Segurança do Tutor</span>
        </div>
        <h2 class="text-2xl font-extrabold text-on-surface">Guia Anti-Golpes & Tentativas de Extorsão</h2>
        <p class="text-sm text-on-surface-variant max-w-3xl leading-relaxed">
          Infelizmente, golpistas monitoram anúncios de animais perdidos para extorquir tutores vulneráveis. Siga rigorosamente este protocolo de segurança validado pelo Pet Searchers.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-surface-container border border-amber-500/30 rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-2 text-amber-400 font-bold text-base">
            <span class="material-symbols-outlined">warning</span>
            <span>O Golpe do "Falso Sequestro / Resgate"</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            O golpista liga afirmando que encontrou seu pet e exige a transferência imediata de dinheiro via PIX (alegando custos de transporte, veterinário ou ameaçando ferir o animal) antes de entregá-lo.
          </p>
        </div>

        <div class="bg-surface-container border border-emerald-500/30 rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-2 text-emerald-400 font-bold text-base">
            <span class="material-symbols-outlined">verified</span>
            <span>Como Exigir Prova de Vida Concreta</span>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Nunca faça PIX antecipado:</strong> Nenhuma ONG ou resgatista idôneo exige transferência bancária antes da entrega do pet.</li>
            <li><strong class="text-on-surface">Exija Vídeo ao Vivo:</strong> Peça uma chamada de vídeo de 10 segundos ou uma foto recente mostrando um detalhe físico específico do pet que NÃO estava no cartaz.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-2 text-on-surface font-bold text-base">
            <span class="material-symbols-outlined text-primary">security</span>
            <span>Ocultação de Dados Sensíveis</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Ao divulgar o cartaz nas redes ou no Faro, omita propositalmente uma marca característica secreta (uma mancha escondida sob a pata, marca na orelha ou cicatriz). Isso permite validar se a pessoa que ligou realmente está com o animal.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-2 text-on-surface font-bold text-base">
            <span class="material-symbols-outlined text-primary">handshake</span>
            <span>Reencontro Presencial Seguro</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Sempre marque a devolução em locais públicos e movimentados (frente de postos policiais, clínicas veterinárias ou praças movimentadas de dia) acompanhado de familiares.
          </p>
        </div>

      </div>

    </div>
  `;

  // 5. POSTER GENERATOR CONTENT
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
  contentEl.innerHTML = generalGuideHtml;

  const tabGeneral = container.querySelector('#guide-tab-general');
  const tabDogs = container.querySelector('#guide-tab-dogs');
  const tabCats = container.querySelector('#guide-tab-cats');
  const tabScams = container.querySelector('#guide-tab-scams');
  const tabPoster = container.querySelector('#guide-tab-poster');

  const resetTabStyles = () => {
    [tabGeneral, tabDogs, tabCats, tabScams, tabPoster].forEach(btn => {
      if (btn) btn.className = 'px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2';
    });
  };

  tabGeneral?.addEventListener('click', () => {
    resetTabStyles();
    tabGeneral.className = 'px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-primary-container text-on-primary-container shadow-md transition-all flex items-center gap-2';
    contentEl.innerHTML = generalGuideHtml;
  });

  tabDogs?.addEventListener('click', () => {
    resetTabStyles();
    tabDogs.className = 'px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-primary-container text-on-primary-container shadow-md transition-all flex items-center gap-2';
    contentEl.innerHTML = dogGuideHtml;
  });

  tabCats?.addEventListener('click', () => {
    resetTabStyles();
    tabCats.className = 'px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-secondary-container text-on-secondary-container shadow-md transition-all flex items-center gap-2';
    contentEl.innerHTML = catGuideHtml;
    attachAudioListeners();
  });

  tabScams?.addEventListener('click', () => {
    resetTabStyles();
    tabScams.className = 'px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-amber-500 text-black shadow-md transition-all flex items-center gap-2';
    contentEl.innerHTML = scamPreventionHtml;
  });

  tabPoster?.addEventListener('click', () => {
    resetTabStyles();
    tabPoster.className = 'px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-tertiary-container text-on-tertiary-container shadow-md transition-all flex items-center gap-2';
    contentEl.innerHTML = posterGeneratorHtml;
    attachPosterListeners();
  });

  function attachAudioListeners() {
    const playAudio = (type) => {
      showToast(`Tocando som atrativo felino: ${type}`, 'info');
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

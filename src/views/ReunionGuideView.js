import { store } from '../store.js';

export function renderReunionGuideView(container, showToast) {
  container.innerHTML = `
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 space-y-10">
        
        <!-- Main Header -->
        <div class="text-center max-w-4xl mx-auto space-y-3">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary-container/15 px-3 py-1 rounded-full border border-primary-container/30">
            Manual Completo de Instruções para Recuperação de Pets | PetSearchers & Faro
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-on-surface tracking-tight mt-2">
            Manual Oficial de Reencontro & Resgate Animal
          </h1>
          <p class="text-base text-on-surface-variant leading-relaxed">
            Metodologia completa e detalhada baseada em psicologia comportamental animal, rastreamento físico e protocolos operacionais da PetSearchers.
          </p>
        </div>

        <!-- Species Selector Tabs -->
        <div class="flex justify-center border-b border-surface-container-highest pb-4">
          <div class="inline-flex p-1.5 bg-surface-container rounded-2xl border border-outline-variant/40 shadow-inner flex-wrap justify-center gap-1.5">
            <button id="guide-tab-general" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-primary-container text-on-primary-container shadow-md transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">menu_book</span>
              <span>Manual Geral PetSearchers</span>
            </button>
            <button id="guide-tab-dogs" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">sound_detection_dog_barking</span>
              <span>Instruções para Cães</span>
            </button>
            <button id="guide-tab-cats" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">cat</span>
              <span>Instruções para Gatos</span>
            </button>
            <button id="guide-tab-scams" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg text-amber-400">gavel</span>
              <span>Segurança & Antigolpe</span>
            </button>
            <button id="guide-tab-poster" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">print</span>
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

  // 1. GENERAL GUIDE CONTENT (Pet Searchers Complete Instructions)
  const generalGuideHtml = `
    <div class="space-y-8 animate-fade-in">
      
      <!-- Quick Action Banner -->
      <div class="bg-gradient-to-r from-primary-container/20 via-surface-container-high to-surface-container border border-primary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider">
            <span class="material-symbols-outlined text-sm">schedule</span>
            <span>Ação Imediata PetSearchers</span>
          </div>
          <h2 class="text-2xl font-extrabold text-on-surface">As Primeiras Horas Definem o Sucesso do Resgate</h2>
          <p class="text-sm text-on-surface-variant max-w-3xl leading-relaxed">
            A busca imediata e organizada impede que o animal se afaste do raio inicial de conforto ou seja recolhido por pessoas que não sabem como localizar o tutor.
          </p>
        </div>
        <a href="#/cadastrar?status=lost" class="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all flex-shrink-0 flex items-center gap-2">
          <span class="material-symbols-outlined">add_circle</span>
          <span>Cadastrar Alerta Urgente</span>
        </a>
      </div>

      <!-- Deep Dive Step Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">1</div>
            <h3 class="font-bold text-lg text-on-surface">Varredura no Local do Desaparecimento</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Inspeção Interna Rigorosa:</strong> Antes de sair na rua, verifique todos os cômodos de casa, armários, vãos de móveis, forros de teto, telhados e sob motores de veículos. Animais assustados com barulhos de trovão ou fogos podem se esconder dentro da própria casa.</li>
            <li><strong class="text-on-surface">Entrevistas com Vizinhos Próximos:</strong> Fale pessoalmente com porteiros, trabalhadores de obras vizinhas e garis. Deixe seu nome, número de telefone e foto impressa do pet.</li>
            <li><strong class="text-on-surface">Câmeras de Segurança:</strong> Solicite imediatamente imagens de portarias, vizinhos e comércios da rua para confirmar o horário exato da fuga e a direção inicial percorrida.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">2</div>
            <h3 class="font-bold text-lg text-on-surface">Confecção & Afixação Estratégica de Cartazes</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Visual de Alto Impacto:</strong> O cartaz deve ter cor de fundo vibrante (amarelo flúor), título "PROCURA-SE" em letras garrafais pretas, foto colorida nítida do rosto e telefone de contato visível à distância por motoristas em trânsito.</li>
            <li><strong class="text-on-surface">Pontos Chave de Passagem:</strong> Afixe cartazes em postes próximos a semáforos, pontos de ônibus, comércios locais, padarias, farmácias, pet shops e feiras livres num raio de 1 km a 3 km.</li>
            <li><strong class="text-on-surface">Proteção Contra Chuva:</strong> Envolva os cartazes com fita adesiva transparente larga ou sacos plásticos para garantir durabilidade contra intempéries.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">3</div>
            <h3 class="font-bold text-lg text-on-surface">Notificação de Clínicas 24h & ONGs Locais</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Visita Presencial a Clínicas 24h:</strong> Quando um pet é atropelado ou encontrado ferido por pedestres, o socorrista costuma levá-lo à clínica veterinária 24 horas mais próxima. Deixe o cartaz diretamente no balcão de atendimento.</li>
            <li><strong class="text-on-surface">Contato com Protetores Independentes & ONGs:</strong> Proteção animal e ONGs de resgate recebem dezenas de mensagens diárias sobre animais encontrados. Acesse o <a href="#/ongs" class="text-primary font-bold underline">Diretório de ONGs Faro / PetSearchers</a> e notifique os abrigos da sua cidade.</li>
            <li><strong class="text-on-surface">Centro de Controle de Zoonoses (CCZ):</strong> Registre formalmente a perda no órgão de controle zoológico municipal.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">4</div>
            <h3 class="font-bold text-lg text-on-surface">Campanhas Digitais & Geolocalização</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Redes Sociais & Grupos do Bairro:</strong> Compartilhe em grupos de Facebook, WhatsApp da associação de moradores e redes de proteção local.</li>
            <li><strong class="text-on-surface">Anúncios Patrocinados no Raio da Fuga:</strong> Crie anúncios no Instagram/Facebook delimitando o público num raio exato de 2 km a 5 km ao redor de onde o pet fugiu.</li>
            <li><strong class="text-on-surface">Atualização Frequente:</strong> Publique novidades do caso diariamente para manter a postagem engajada nos algoritmos de redes sociais.</li>
          </ul>
        </div>

      </div>
    </div>
  `;

  // 2. DOG GUIDE CONTENT (Pet Searchers Canine Recovery Manual)
  const dogGuideHtml = `
    <div class="space-y-8 animate-fade-in">
      
      <!-- Quick Action Banner -->
      <div class="bg-gradient-to-r from-primary-container/20 via-surface-container-high to-surface-container border border-primary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider">
            <span class="material-symbols-outlined text-sm">sound_detection_dog_barking</span>
            <span>Manual Canino PetSearchers</span>
          </div>
          <h2 class="text-2xl font-extrabold text-on-surface">A Psicologia do Cão Desaparecido</h2>
          <p class="text-sm text-on-surface-variant max-w-3xl leading-relaxed">
            Cães perdidos podem agir de forma completamente diferente do seu comportamento normal em casa. Quando entram em estado de alerta e pânico ("modo de sobrevivência"), podem não responder aos chamados e fugir até mesmo de seus tutores.
          </p>
        </div>
        <a href="#/cadastrar?status=lost" class="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all flex-shrink-0 flex items-center gap-2">
          <span class="material-symbols-outlined">add_circle</span>
          <span>Cadastrar Cão Perdido</span>
        </a>
      </div>

      <!-- Grid of Steps for Dogs -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">1</div>
            <h3 class="font-bold text-lg text-on-surface">Comportamento canino segundo o perfil</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Cão Sociável / Extrovertido:</strong> Tende a caminhar por calçadas movimentadas, abordando pedestres ou aproximando-se de comércios e praças em busca de comida. costuma ser recolhido rapidamente por voluntários.</li>
            <li><strong class="text-on-surface">Cão Medroso / Idoso / Traumatizado:</strong> Evita contato humano, esconde-se sob carros estacionados, lotes com mato alto e estruturas abandonadas. Ao ver pessoas correndo em sua direção, entrará em pânico e poderá cruzar vias expressas perigosas.</li>
            <li><strong class="text-on-surface">Cão Não Castrado:</strong> Pode caminhar distâncias de até 5km a 10km seguindo fêmeas no cio antes de parar.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">2</div>
            <h3 class="font-bold text-lg text-on-surface">Técnica dos "Trilhos de Odor" (Scent Trails)</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Peças de Roupas Suadas do Tutor:</strong> Pegue camisetas ou toalhas usadas pelo tutor com quem o cão tem maior apego olfativo (sem lavar).</li>
            <li><strong class="text-on-surface">Arraste de Odor no Chão:</strong> Amarre a roupa numa corda e caminhe num raio de 1 km a 2 km partindo do ponto de avistamento de volta para sua casa, criando uma trilha de cheiro contínua.</li>
            <li><strong class="text-on-surface">Ponto de Referência Olfativa:</strong> Deixe a caminhada do cão e um pote de água limpa na entrada ou garagem de casa. Evite colocar comida para não atrair animais da rua.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">3</div>
            <h3 class="font-bold text-lg text-on-surface">Tonalidade de Chamado & Estímulos Sonoros</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Tom de Voz Festivo:</strong> Nunca chame o cão chorando ou em tom de bronca/desespero. Chame o nome do pet em tom agudo, festivo e alegre, como se fosse passear ou dar um petisco.</li>
            <li><strong class="text-on-surface">Brinquedos Barulhentos (Squeaky Toys):</strong> Aperte o apito ou brinquedo sonoro preferido do cão durante a caminhada noturna.</li>
            <li><strong class="text-on-surface">Saco de Petiscos:</strong> Chacoalhe o saco de ração ou petiscos secos ao se aproximar de esconderijos potenciais.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">4</div>
            <h3 class="font-bold text-lg text-on-surface">Abordagem Correta no Momento do Avistamento</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">NUNCA Corra Atrás do Cão:</strong> Correr na direção do pet ativa o instinto de fuga ou perseguição. Ele correrá mais rápido do que você.</li>
            <li><strong class="text-on-surface">Abaixe-se e Olhe para o Lado:</strong> Sente-se ou ajoelhe-se de lado no chão, sem encarar diretamente nos olhos do cão (olhar fixo representa ameaça em linguagem canina).</li>
            <li><strong class="text-on-surface">Jogue Petiscos sem Movimentos Bruscos:</strong> Deixe um rastro de comida no chão até você e aguarde pacientemente que o faro e o reconhecimento do cheiro sobreponham o pânico.</li>
          </ul>
        </div>

      </div>
    </div>
  `;

  // 3. CAT GUIDE CONTENT (Pet Searchers Feline Recovery Manual)
  const catGuideHtml = `
    <div class="space-y-8 animate-fade-in">
      
      <!-- Quick Action Banner -->
      <div class="bg-gradient-to-r from-secondary-container/30 via-surface-container-high to-surface-container border border-secondary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-1.5 text-secondary text-xs font-bold uppercase tracking-wider">
            <span class="material-symbols-outlined text-sm">visibility</span>
            <span>Manual Felino PetSearchers</span>
          </div>
          <h2 class="text-2xl font-extrabold text-on-surface">A Regra dos 50 Metros para Gatos Desaparecidos</h2>
          <p class="text-sm text-on-surface-variant max-w-3xl leading-relaxed">
            Estatísticas da PetSearchers demonstram que mais de 90% dos gatos domésticos perdidos encontram-se escondidos em estado de congelamento (*displacement*) num raio inferior a 50 metros do ponto de fuga.
          </p>
        </div>
        <a href="#/cadastrar?status=lost" class="bg-secondary-container hover:bg-secondary-container/90 text-on-secondary-container font-extrabold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all flex-shrink-0 flex items-center gap-2">
          <span class="material-symbols-outlined">add_circle</span>
          <span>Cadastrar Gato Perdido</span>
        </a>
      </div>

      <!-- Interactive Sound Generator Player -->
      <div class="bg-surface-container border border-tertiary-container/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-tertiary">volume_up</span>
            <span>Gerador de Sons Atrativos Felinos (PetSearchers)</span>
          </h3>
          <span class="text-xs text-tertiary font-semibold">Usar na busca noturna de campo</span>
        </div>
        <p class="text-xs text-on-surface-variant leading-relaxed">
          Tocar frequências de áudio familiares estimula o felino escondido em estado de medo a responder com um miado baixo ou mover-se no esconderijo.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <button id="play-sound-meow" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-4 rounded-2xl border border-outline-variant/40 flex items-center justify-center gap-3 transition-all">
            <span class="material-symbols-outlined text-primary text-xl">play_circle</span>
            <span>Miado Suave de Filhote</span>
          </button>
          <button id="play-sound-food" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-4 rounded-2xl border border-outline-variant/40 flex items-center justify-center gap-3 transition-all">
            <span class="material-symbols-outlined text-primary text-xl">play_circle</span>
            <span>Chocalho de Ração & Sachê</span>
          </button>
          <button id="play-sound-purr" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-4 rounded-2xl border border-outline-variant/40 flex items-center justify-center gap-3 transition-all">
            <span class="material-symbols-outlined text-primary text-xl">play_circle</span>
            <span>Ronronar Acolhedor Felino</span>
          </button>
        </div>
      </div>

      <!-- Grid of Steps for Cats -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">1</div>
            <h3 class="font-bold text-lg text-on-surface">Varredura Minuciosa Imediata (Esconderijos)</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Inspeção em Garagens & Quintais de Vizinhos:</strong> Peça permissão aos vizinhos para que VOCÊ inspecione o local. Gatos assustados não sairão ao chamado dos próprios donos dos imóveis vizinhos.</li>
            <li><strong class="text-on-surface">Locais de Acesso Difícil:</strong> Verifique motores quentes de carros estacionados, vãos de telhados, dutos de ar condicionado, caixas de papelão e plantas densas.</li>
            <li><strong class="text-on-surface">Estado de Silêncio e Imobilidade:</strong> O gato pode ver e ouvir seu tutor chamando e ainda assim não vocalizar devido ao medo paralisante.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">2</div>
            <h3 class="font-bold text-lg text-on-surface">Atração Olfativa & Alimentação Estratégica</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Caixa de Areia Usada:</strong> Coloque a caixa de areia não limpa do gato na entrada de casa ou sacada. O aroma familiar serve como bússola de retorno.</li>
            <li><strong class="text-on-surface">Alimentos Úmidos Aquecidos:</strong> Aqueça sachês de salmão ou atum por alguns segundos para espalhar um forte odor aromático no ar durante a noite.</li>
            <li><strong class="text-on-surface">Roupas com Cheiro do Tutor:</strong> Coloque camisetas suadas na varanda ou pontos de entrada de ar.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">3</div>
            <h3 class="font-bold text-lg text-on-surface">Busca Noturna Silenciosa com Lanterna (02h às 05h)</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Silêncio Absoluto das Ruas:</strong> O ruído de carros e pessoas durante o dia assusta os gatos. A busca efetiva ocorre de madrugada.</li>
            <li><strong class="text-on-surface">Técnica do Brilho Retiniano:</strong> Ajoelhe-se e direcione o foco de uma lanterna forte rente ao solo, debaixo de muros e carros. A membrana reflexiva dos olhos felinos (*tapetum lucidum*) entregará a localização do gato no escuro.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">4</div>
            <h3 class="font-bold text-lg text-on-surface">Resgate Suave & Gaiola de Captura (Trap)</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Armadilha Amigável (Cat Trap):</strong> Se o gato estiver acuado em local inalcançável ou arisco pelo susto, monte uma gaiola de captura tipo armadilha (*trap*) forrada com pano da casa e sachê quente no fundo.</li>
            <li><strong class="text-on-surface">Captura sem Surtos:</strong> Ao fechar o gato na caixa de transporte, cubra-a imediatamente com uma toalha grossa para acalmá-lo na escuridão.</li>
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
          <span>Manual de Segurança & Proteção PetSearchers</span>
        </div>
        <h2 class="text-2xl font-extrabold text-on-surface">Protocolo Rigoroso Contra Golpes e Extorsões</h2>
        <p class="text-sm text-on-surface-variant max-w-3xl leading-relaxed">
          Criminosos utilizam informações de cartazes públicos para extorquir dinheiro de tutores emocionalmente vulneráveis. Siga estritamente este checklist de proteção.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-surface-container border border-amber-500/30 rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-2 text-amber-400 font-bold text-base">
            <span class="material-symbols-outlined">warning</span>
            <span>Principais Modalidades de Golpe</span>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Falso Resgate com Pedido de PIX:</strong> O golpista afirma que resgatou o animal mas precisa de dinheiro imediato para clínica veterinária, combustível ou frete antes de entregar.</li>
            <li><strong class="text-on-surface">Ameaça de Sequestro:</strong> Ligação simulando que o pet foi sequestrado e exigindo resgate sob ameaça.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-emerald-500/30 rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-2 text-emerald-400 font-bold text-base">
            <span class="material-symbols-outlined">verified</span>
            <span>Validação Obrigatória de Prova de Vida</span>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">JAMAIS Transfira Dinheiro Antecipado:</strong> Protetores reais e pessoas de boa-fé entregam o pet presencialmente sem solicitar pagamento prévio por aplicativo.</li>
            <li><strong class="text-on-surface">Exija Chamada de Vídeo ao Vivo:</strong> Peça uma ligação de vídeo mostrando o animal reagindo ao seu comando de voz ou foto mostrando um elemento específico solicitado na hora.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-2 text-on-surface font-bold text-base">
            <span class="material-symbols-outlined text-primary">security</span>
            <span>Estratégia do "Detalhe Secreto"</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Em todos os seus cartazes e posts públicos, omita propositalmente uma característica física marcante do pet (uma mancha escondida sob o peito, dente quebrado, marca na orelha ou cor da coleira). Quando alguém ligar afirmando ter achado o pet, pergunte por essa característica secreta.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-2 text-on-surface font-bold text-base">
            <span class="material-symbols-outlined text-primary">handshake</span>
            <span>Locais Seguros para Encontro Presencial</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Ao marcar a devolução do animal, escolha sempre locais públicos, movimentados e durante o dia — como na recepção de clínicas veterinárias, em frente a batalhões policiais ou postos de atendimento público. Leve sempre acompanhantes.
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
            <span>Gerador de Cartaz de Busca Impresso (PetSearchers Pattern)</span>
          </h2>
          <p class="text-xs text-on-surface-variant mt-1">Gere um cartaz padronizado de alto contraste pronto para imprimir ou compartilhar em grupos de WhatsApp.</p>
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
            <span class="text-[9px] font-semibold opacity-80 block">Cadastrado na Rede Faro • PetSearchers</span>
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

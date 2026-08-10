import { store } from '../store.js';

export function renderReunionGuideView(container, showToast) {
  container.innerHTML = `
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 space-y-10">
        
        <!-- Main Header -->
        <div class="text-center max-w-4xl mx-auto space-y-3">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary-container/15 px-3 py-1 rounded-full border border-primary-container/30">
            Manual Oficial Pet Searchers & Faro
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-on-surface tracking-tight mt-2">
            Guia Completo de Reencontro
          </h1>
          <p class="text-base text-on-surface-variant leading-relaxed">
            Metodologia completa e detalhada extraída diretamente dos manuais de busca da Pet Searchers.
          </p>
        </div>

        <!-- Species Selector Tabs -->
        <div class="flex justify-center border-b border-surface-container-highest pb-4">
          <div class="inline-flex p-1.5 bg-surface-container rounded-2xl border border-outline-variant/40 shadow-inner flex-wrap justify-center gap-1.5">
            <button id="guide-tab-dogs" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-primary-container text-on-primary-container shadow-md transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">sound_detection_dog_barking</span>
              <span>Reencontro para Cachorros</span>
            </button>
            <button id="guide-tab-cats" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">cat</span>
              <span>Reencontro para Gatos</span>
            </button>
            <button id="guide-tab-general" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">menu_book</span>
              <span>Dicas Gerais & Protocolo</span>
            </button>
            <button id="guide-tab-scams" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg text-amber-400">gavel</span>
              <span>Segurança & Antigolpe</span>
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

  // 1. DOG GUIDE CONTENT (Exact Pet Searchers Dog Guide)
  const dogGuideHtml = `
    <div class="space-y-8 animate-fade-in">
      
      <!-- Banner Header Pet Searchers -->
      <div class="bg-gradient-to-r from-primary-container/25 via-surface-container-high to-surface-container border border-primary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
        <div class="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider">
          <span class="material-symbols-outlined text-sm">sound_detection_dog_barking</span>
          <span>Manual Pet Searchers Canino</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-on-surface">Como encontrar cachorro perdido: guia completo para aumentar as chances de reencontro</h2>
        <p class="text-sm text-on-surface-variant max-w-4xl leading-relaxed">
          Perder um cão é um momento de angústia profunda, mas saiba que estamos aqui para guiar seus passos. O tempo é seu recurso mais valioso agora, e agir com rapidez e estratégia faz toda a diferença. Criamos um plano organizado para ajudar você a manter a calma e focar nas ações que trazem resultados reais. Você não está sozinho!
        </p>
      </div>

      <!-- Section 1: Ação Imediata -->
      <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">1</div>
          <h3 class="font-bold text-xl text-on-surface">📍 Ação Imediata (Primeiras Horas)</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-on-surface-variant leading-relaxed">
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Varredura em Espiral (1km a 3km)</strong>
            <p>Faça uma varredura em espiral partindo do ponto de fuga. Cachorros costumam seguir cheiros ou buscar abrigo em locais conhecidos em um raio inicial de 1 a 3 km. As primeiras horas são as mais críticas.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Notificação de Rede de Campo</strong>
            <p>Notifique veterinários locais, ONGs, pet shops e vizinhos. Pessoas que circulam constantemente na região, como entregadores de aplicativos, correios e garis, são seus melhores aliados agora.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Sinais Comportamentais de Medo</strong>
            <p>Cães assustados tendem a se esconder sob carros estacionados, lotes abandonados ou arbustos densos e podem não responder ao seu chamado nas primeiras horas de pânico.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Verificação de Câmeras de Segurança</strong>
            <p>Solicite imagens de câmeras de portarias, vizinhos e comércios da rua para confirmar o horário exato e a direção inicial que o cão tomou ao fugir.</p>
          </div>
        </div>
      </div>

      <!-- Section 2: Divulgação Local -->
      <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">2</div>
          <h3 class="font-bold text-xl text-on-surface">📢 Divulgação Local & Cartazes Estratégicos</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-on-surface-variant leading-relaxed">
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Cartazes Impressos de Alto Impacto</strong>
            <p>Inclua foto nítida colorida do rosto do cão, nome, características marcantes únicas e número de telefone visível em letras bem grandes à distância.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Locais Estratégicos de Circulação</strong>
            <p>Afixe em pet shops, clínicas veterinárias, praças, mercados, farmácias, padarias e pontos de ônibus das vias principais.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Dica Extra de Destaque Visual</strong>
            <p>Use papéis de cor vibrante (amarelo flúor) ou fitas fluorescentes nas bordas para destacar o cartaz e chover visualmente aos motoristas.</p>
          </div>
        </div>
      </div>

      <!-- Section 3: Redes Sociais e Tecnologia -->
      <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">3</div>
          <h3 class="font-bold text-xl text-on-surface">🌐 Redes Sociais, Tecnologia & Meta Ads</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-on-surface-variant leading-relaxed">
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Grupos do Bairro & Hashtags</strong>
            <p>Publique em comunidades locais no Facebook e WhatsApp de moradores. Use hashtags locais: #CachorroPerdido #ProcuraSePet #PetDesaparecido + nome do bairro e cidade.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Anúncios Geolocalizados (Pet Searchers Pattern)</strong>
            <p>Ferramentas de anúncios (Meta Ads) exibem a foto do seu pet diretamente no feed do Instagram/Facebook de milhares de pessoas situadas num raio exato de 2 km a 5 km do local da fuga.</p>
          </div>
        </div>
      </div>

      <!-- Section 4: Dicas Avançadas & Caminhos de Cheiro -->
      <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">4</div>
          <h3 class="font-bold text-xl text-on-surface">💡 Dicas Avançadas: Caminhos de Cheiro & Persistência</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-on-surface-variant leading-relaxed">
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Caminhos de Cheiro (Scent Trails)</strong>
            <p>Crie caminhos de cheiro utilizando retalhos de roupas usadas pela pessoa com quem o cachorro tem maior afinidade, posicionando-os ou arrastando-os ao longo do trajeto que leva até sua casa.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Estratégia da Porta Aberta</strong>
            <p>Deixe água fresca, a caminhada usada do cão e uma fresta no portão ou garagem por onde o pet possa entrar caso encontre o caminho de volta durante a madrugada.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Persistência Inabalável</strong>
            <p>Muitos reencontros acontecem dias ou semanas depois. Mantenha os cartazes atualizados e a divulgação ativa sem perder a esperança.</p>
          </div>
        </div>
      </div>

      <!-- Section 5: Prevenção & RG Canino -->
      <div class="bg-surface-container border border-primary-container/30 rounded-2xl p-6 space-y-4 shadow-lg">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-xl text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">verified_user</span>
            <span>Identificação: O RG do seu Cão & Checklist Final</span>
          </h3>
        </div>
        <p class="text-xs text-on-surface-variant leading-relaxed">
          O microchip é essencial e deve estar sempre com dados atualizados. Combine-o com uma coleira resistente contendo uma placa de identificação legível com seu telefone atualizado. Isso garante que qualquer pessoa que encontre seu cão possa te ligar imediatamente.
        </p>
      </div>

    </div>
  `;

  // 2. CAT GUIDE CONTENT (Exact Pet Searchers Cat Guide)
  const catGuideHtml = `
    <div class="space-y-8 animate-fade-in">
      
      <!-- Banner Header Pet Searchers Cats -->
      <div class="bg-gradient-to-r from-secondary-container/25 via-surface-container-high to-surface-container border border-secondary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
        <div class="inline-flex items-center gap-1.5 text-secondary text-xs font-bold uppercase tracking-wider">
          <span class="material-symbols-outlined text-sm">cat</span>
          <span>Manual Pet Searchers Felino</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-on-surface">Como encontrar gato perdido: guia completo para aumentar as chances de reencontro</h2>
        <p class="text-sm text-on-surface-variant max-w-4xl leading-relaxed">
          Criamos este guia para ajudar tutores de gatos perdidos a agir rápido, organizar a busca e aumentar as chances de reencontro. Saiba que você não está sozinho nessa jornada e cada passo estratégico aproxima seu pet de casa.
        </p>
      </div>

      <!-- Interactive Sound Generator Player -->
      <div class="bg-surface-container border border-tertiary-container/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-tertiary">volume_up</span>
            <span>Player de Sons para Atrair Gato Perdido (Pet Searchers Video/Audio)</span>
          </h3>
          <span class="text-xs text-tertiary font-semibold">Tocar no silêncio da busca noturna</span>
        </div>
        <p class="text-xs text-on-surface-variant leading-relaxed">
          Você pode dar play perto de casa ou andando pelas redondezas para tentar chamar o gato perdido através de sons familiares e atrativos (frequências de filhotes, sachês e ronronar).
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

      <!-- Section 1: Busca Interna Minuciosa -->
      <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">1</div>
          <h3 class="font-bold text-xl text-on-surface">🏠 Procure Minuciosamente Dentro de Casa</h3>
        </div>
        <p class="text-xs text-on-surface-variant leading-relaxed">
          Gatos são mestres do esconderijo. Verifique o interior de sofás, vãos atrás da geladeira, forros de teto e prateleiras altas antes de assumir que ele saiu de casa.
        </p>
      </div>

      <!-- Section 2: Estação de Cheiro & Comida -->
      <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">2</div>
          <h3 class="font-bold text-xl text-on-surface">🌸 Estação de Cheiro & Alimentos Aromáticos</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-on-surface-variant leading-relaxed">
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Caixa de Areia Usada</strong>
            <p>Coloque a caixa de areia usada na entrada da casa, varanda ou janela de fácil acesso. O odor familiar é a bússola de retorno mais forte para um gato perdido.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Alimentos de Cheiro Forte Aquecidos</strong>
            <p>Aqueça um sachê de carne, atum ou salmão e deixe no local onde ele foi visto pela última vez para liberar aroma intenso no ar.</p>
          </div>
        </div>
      </div>

      <!-- Section 3: Procurando nos Arredores e Madrugada -->
      <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">3</div>
          <h3 class="font-bold text-xl text-on-surface">🌙 Procurando nos Arredores no Silêncio da Madrugada</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-on-surface-variant leading-relaxed">
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Inspeção Pessoal em Quintais Vizinhos</strong>
            <p>Fale com vizinhos e porteiros e peça permissão para VOCÊ olhar nos jardins e garagens deles. Gatos assustados geralmente não respondem ao chamado de estranhos.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Busca da Madrugada (02h às 04h)</strong>
            <p>O barulho do dia assusta os gatos. Entre 02h e 04h da manhã é o melhor horário para ouvir vocalizações ou detectar a reflexão dos olhos (tapetum lucidum) com uma lanterna rente ao chão debaixo de carros e muros.</p>
          </div>
        </div>
      </div>

      <!-- Section 4: Saúde e Medo -->
      <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">4</div>
          <h3 class="font-bold text-xl text-on-surface">🩹 Sinais de Alerta: Saúde e Medo Felino</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-on-surface-variant leading-relaxed">
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Silêncio Absoluto vs Vocalização</strong>
            <p>Um gato ferido ou extremamente aterrorizado ficará em silêncio absoluto por dias. Não desista se ele não responder aos seus chamados nas primeiras buscas.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-2 border border-outline-variant/30">
            <strong class="text-on-surface text-sm block">Procura por Locais Escuros</strong>
            <p>Se estiver ferido, procurará locais escuros e de difícil acesso. Verifique com lanterna sob vãos de motores de carros estacionados.</p>
          </div>
        </div>
        <p class="text-xs text-on-surface font-semibold text-center pt-2">
          "Acima de tudo, siga o passo a passo com paciência. Gatos têm um instinto de sobrevivência incrível e muitos são encontrados a poucos metros de casa, apenas esperando o momento em que se sintam seguros para sair do esconderijo."
        </p>
      </div>

    </div>
  `;

  // 3. GENERAL DICAS CONTENT
  const generalGuideHtml = `
    <div class="space-y-8 animate-fade-in">
      
      <div class="bg-gradient-to-r from-primary-container/20 via-surface-container-high to-surface-container border border-primary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
        <div class="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider">
          <span class="material-symbols-outlined text-sm">menu_book</span>
          <span>Protocolo Imediato de Emergência</span>
        </div>
        <h2 class="text-2xl font-black text-on-surface">Manual Geral de Reencontro & Resgate Animal</h2>
        <p class="text-sm text-on-surface-variant max-w-4xl leading-relaxed">
          Orientações gerais válidas para qualquer espécie de pet desaparecido ou resgatado nas primeiras 24 horas.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <h3 class="font-bold text-lg text-on-surface">1. Mantenha a Calma e Delegue Tarefas</h3>
          <p class="text-xs text-on-surface-variant leading-relaxed">O processo é exaustivo. Divida tarefas: uma pessoa faz a busca física de rua enquanto outra cria e compartilha posts nas redes e grupos de WhatsApp.</p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <h3 class="font-bold text-lg text-on-surface">2. Notifique Instituições e Abatedouros/CCZs</h3>
          <p class="text-xs text-on-surface-variant leading-relaxed">Acesse a aba <a href="#/ongs" class="text-primary font-bold underline">ONGs</a> do menu para localizar abrigos da sua cidade e envie a foto e dados do pet imediatamente.</p>
        </div>
      </div>

    </div>
  `;

  // 4. SCAM PREVENTION CONTENT
  const scamPreventionHtml = `
    <div class="space-y-8 animate-fade-in">
      
      <div class="bg-gradient-to-r from-amber-500/20 via-surface-container-high to-surface-container border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
        <div class="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <span class="material-symbols-outlined text-sm">gavel</span>
          <span>Manual de Segurança Pet Searchers</span>
        </div>
        <h2 class="text-2xl font-extrabold text-on-surface">Protocolo Rigoroso Contra Golpes e Extorsões</h2>
        <p class="text-sm text-on-surface-variant max-w-3xl leading-relaxed">
          Siga estritamente as regras de segurança ao publicar cartazes e responder chamadas de desconhecidos.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-surface-container border border-amber-500/30 rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-2 text-amber-400 font-bold text-base">
            <span class="material-symbols-outlined">warning</span>
            <span>JAMAIS Transfira Dinheiro Antecipado</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">Pessoas de boa-fé e protetores não cobram resgate nem pedem transferências PIX antecipadas sob pretexto de veterinário ou combustível.</p>
        </div>

        <div class="bg-surface-container border border-emerald-500/30 rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-2 text-emerald-400 font-bold text-base">
            <span class="material-symbols-outlined">verified</span>
            <span>Exija Prova de Vida ao Vivo</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">Peça uma chamada de vídeo ao vivo mostrando o pet interagindo ou solicite a confirmação da "característica física secreta" omitida dos cartazes.</p>
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
            <span>Gerador de Cartaz de Busca Impresso (Pet Searchers Pattern)</span>
          </h2>
          <p class="text-xs text-on-surface-variant mt-1">Gere um cartaz padronizado de alto contraste pronto para imprimir ou compartilhar em grupos de WhatsApp.</p>
        </div>
        <button id="btn-print-poster" class="bg-primary text-on-primary font-bold text-xs px-6 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md">
          <span class="material-symbols-outlined text-base">print</span>
          <span>Imprimir / Salvar PDF</span>
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
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
            <span class="text-[9px] font-semibold opacity-80 block">Cadastrado na Rede Faro • Pet Searchers</span>
          </div>
        </div>

      </div>
    </div>
  `;

  const contentEl = container.querySelector('#guide-content');
  // Default tab: Dog Guide (Pet Searchers)
  contentEl.innerHTML = dogGuideHtml;

  const tabDogs = container.querySelector('#guide-tab-dogs');
  const tabCats = container.querySelector('#guide-tab-cats');
  const tabGeneral = container.querySelector('#guide-tab-general');
  const tabScams = container.querySelector('#guide-tab-scams');
  const tabPoster = container.querySelector('#guide-tab-poster');

  const resetTabStyles = () => {
    [tabDogs, tabCats, tabGeneral, tabScams, tabPoster].forEach(btn => {
      if (btn) btn.className = 'px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2';
    });
  };

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

  tabGeneral?.addEventListener('click', () => {
    resetTabStyles();
    tabGeneral.className = 'px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-primary-container text-on-primary-container shadow-md transition-all flex items-center gap-2';
    contentEl.innerHTML = generalGuideHtml;
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

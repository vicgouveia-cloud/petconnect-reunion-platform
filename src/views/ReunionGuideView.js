import { store } from '../store.js';

export function renderReunionGuideView(container, showToast) {
  container.innerHTML = `
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        
        <!-- Header Principal PetSearchers -->
        <div class="text-center max-w-4xl mx-auto space-y-4">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary-container/15 px-4 py-1.5 rounded-full border border-primary-container/30">
            Manual Oficial PetSearchers & Faro
          </span>
          <h1 class="text-3xl sm:text-5xl font-black text-on-surface tracking-tight mt-2">
            Manual para Reencontrar Pet Desaparecido
          </h1>
          <p class="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
            Entendemos sua dor e estamos aqui para apoiar. Agir com calma e método nas primeiras 48 horas é vital para trazer seu amigo para casa em segurança.
          </p>

          <!-- Quick Jump Buttons to Sections -->
          <div class="flex flex-wrap justify-center gap-3 pt-4">
            <a href="#manual-geral" class="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-full border border-outline-variant/50 transition-all shadow-sm flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-base">menu_book</span>
              <span>1. Manual Geral</span>
            </a>
            <a href="#guia-caes" class="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-full transition-all shadow-md flex items-center gap-2">
              <span class="material-symbols-outlined text-base">sound_detection_dog_barking</span>
              <span>2. Guia de Cães</span>
            </a>
            <a href="#guia-gatos" class="bg-secondary-container hover:bg-secondary-container/90 text-on-secondary-container font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-full transition-all shadow-md flex items-center gap-2">
              <span class="material-symbols-outlined text-base">cat</span>
              <span>3. Guia de Gatos (+ YouTube)</span>
            </a>
            <a href="https://wa.me/5511980008442?text=Oi%2C%20preciso%20de%20ajuda%20para%20encontrar%20meu%20pet%20perdido." target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-md">
              <span class="material-symbols-outlined text-base">chat</span>
              <span>Falar no WhatsApp PetSearchers</span>
            </a>
          </div>
        </div>

        <!-- ======================================================== -->
        <!-- SEÇÃO 1: MANUAL GERAL (instrucoes-para-recuperacao) -->
        <!-- ======================================================== -->
        <section id="manual-geral" class="space-y-8 scroll-mt-24">
          
          <div class="border-b border-primary-container/30 pb-3 flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl bg-primary-container text-on-primary-container font-black flex items-center justify-center text-sm shadow">1</span>
            <h2 class="text-2xl font-black text-on-surface tracking-tight">Manual Geral de Reencontrar Pet Desaparecido (Todas as Espécies)</h2>
          </div>

          <!-- Cuidando de Você Section -->
          <div class="bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container border border-outline-variant/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined text-tertiary">favorite</span>
                <span>Cuidando de Você</span>
              </h3>
              <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                A busca por um amigo perdido é exaustiva e desafiadora. Lembre-se de que sua saúde emocional é vital para continuar esse processo com clareza. Aceite apoio e cuide de si mesmo no caminho.
              </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

          <!-- General Protocols Grid -->
          <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <h3 class="text-lg font-bold text-on-surface">Dicas Gerais de Reencontro de Pets Perdidos</h3>
            <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Este guia complementa nossos manuais específicos para cães e gatos, oferecendo uma base sólida para qualquer pet perdido. Ter uma estratégia estruturada é o primeiro passo para o sucesso.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div class="bg-surface-container-high p-5 rounded-2xl border border-outline-variant/20 space-y-2">
                <strong class="text-primary font-bold text-sm flex items-center gap-1.5">
                  <span class="material-symbols-outlined">door_front</span> Isolamento da Área
                </strong>
                <p class="text-xs text-on-surface-variant leading-relaxed">Verifique imediatamente todos os pontos de saída da sua residência e arredores. Algumas espécies se escondem muito perto de onde fugiram.</p>
              </div>

              <div class="bg-surface-container-high p-5 rounded-2xl border border-outline-variant/20 space-y-2">
                <strong class="text-primary font-bold text-sm flex items-center gap-1.5">
                  <span class="material-symbols-outlined">child_care</span> Objetos de Cheiro
                </strong>
                <p class="text-xs text-on-surface-variant leading-relaxed">Coloque a caminha, mantas ou brinquedos favoritos do lado de fora. O olfato é a bússola emocional para o pet estressado encontrar o caminho de casa.</p>
              </div>

              <div class="bg-surface-container-high p-5 rounded-2xl border border-outline-variant/20 space-y-2">
                <strong class="text-primary font-bold text-sm flex items-center gap-1.5">
                  <span class="material-symbols-outlined">campaign</span> Alertas Vizinhos
                </strong>
                <p class="text-xs text-on-surface-variant leading-relaxed">Comunique vizinhos e porteiros imediatamente. Muitas vezes o pet é acolhido por alguém próximo minutos após a fuga.</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div class="space-y-2">
                <h4 class="font-bold text-sm text-on-surface flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-primary">groups</span> Envolvendo a Comunidade
                </h4>
                <p class="text-xs text-on-surface-variant leading-relaxed">
                  A mobilização física é fundamental. Fale pessoalmente com vizinhos, porteiros, comércios locais e clínicas veterinárias da região. Deixe cartazes bem visíveis em pontos de alta circulação.
                </p>
              </div>
              <div class="space-y-2">
                <h4 class="font-bold text-sm text-on-surface flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-primary">cell_tower</span> Campanhas Digitais e Geolocalização
                </h4>
                <p class="text-xs text-on-surface-variant leading-relaxed">
                  Utilize os anúncios precisos para envolver vizinhos, comércios locais e abrigos no raio exato onde seu pet sumiu. As redes sociais e grupos locais ampliam o alcance da busca.
                </p>
              </div>
            </div>
          </div>

        </section>

        <!-- ======================================================== -->
        <!-- SEÇÃO 2: GUIA DE CÃES (achar-cachorro-desaparecido) -->
        <!-- ======================================================== -->
        <section id="guia-caes" class="space-y-8 scroll-mt-24 pt-6 border-t-2 border-primary/20">
          
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-primary-container/30 pb-3">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-xl bg-primary-container text-on-primary-container font-black flex items-center justify-center text-sm shadow">2</span>
              <h2 class="text-2xl font-black text-on-surface tracking-tight">Como encontrar cachorro perdido: Guia Prático Cães</h2>
            </div>
            <button id="btn-dl-dogs-pdf" class="bg-primary text-on-primary font-bold text-xs px-5 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md flex-shrink-0">
              <span class="material-symbols-outlined text-base">picture_as_pdf</span>
              <span>Baixar Guia PDF (Cães)</span>
            </button>
          </div>

          <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Perder um cão é um momento de angústia profunda, mas saiba que estamos aqui para guiar seus passos. O tempo é seu recurso mais valioso agora, e agir com rapidez e estratégia faz toda a diferença. Criamos um plano organizado para ajudar você a manter a calma e focar nas ações que trazem resultados reais.
          </p>

          <!-- 4 Cards de Destaque para Cães -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-5 space-y-1.5 shadow-md">
              <span class="text-xs font-bold text-primary flex items-center gap-1"><span class="material-symbols-outlined">explore</span> Onde Procurar</span>
              <p class="text-xs text-on-surface-variant leading-relaxed">Varredura em espiral partindo do ponto de fuga (raio inicial de 1 a 3 km).</p>
            </div>
            <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-5 space-y-1.5 shadow-md">
              <span class="text-xs font-bold text-primary flex items-center gap-1"><span class="material-symbols-outlined">timer</span> Ações Imediatas</span>
              <p class="text-xs text-on-surface-variant leading-relaxed">Manter a calma e agir com método nas primeiras horas é o que trará seu cão de volta.</p>
            </div>
            <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-5 space-y-1.5 shadow-md">
              <span class="text-xs font-bold text-primary flex items-center gap-1"><span class="material-symbols-outlined">record_voice_over</span> Quem Avisar</span>
              <p class="text-xs text-on-surface-variant leading-relaxed">Veterinários locais, ONGs, pet shops, vizinhos e entregadores de aplicativo.</p>
            </div>
            <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-5 space-y-1.5 shadow-md">
              <span class="text-xs font-bold text-primary flex items-center gap-1"><span class="material-symbols-outlined">visibility</span> O que Observar</span>
              <p class="text-xs text-on-surface-variant leading-relaxed">Cães assustados tendem a se esconder sob carros ou arbustos e podem não responder logo.</p>
            </div>
          </div>

          <!-- Passos 1 a 6 Detalhados -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-md">
              <div class="flex items-center gap-3">
                <span class="w-7 h-7 rounded-lg bg-primary-container text-on-primary-container font-black flex items-center justify-center text-xs">1</span>
                <h3 class="font-bold text-base text-on-surface">📢 1. Ação Imediata</h3>
              </div>
              <ul class="text-xs text-on-surface-variant space-y-2 list-disc list-inside leading-relaxed">
                <li><strong class="text-on-surface">Procure nas redondezas:</strong> Caminhe pelo bairro chamando o nome em tom calmo e familiar.</li>
                <li><strong class="text-on-surface">Leve estímulos conhecidos:</strong> Brinquedos barulhentos, petiscos e roupas com seu cheiro.</li>
                <li><strong class="text-on-surface">Câmeras de segurança:</strong> Cheque imagens de casas, prédios e comércios vizinhos.</li>
              </ul>
            </div>

            <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-md">
              <div class="flex items-center gap-3">
                <span class="w-7 h-7 rounded-lg bg-primary-container text-on-primary-container font-black flex items-center justify-center text-xs">2</span>
                <h3 class="font-bold text-base text-on-surface">📢 2. Divulgação Local</h3>
              </div>
              <ul class="text-xs text-on-surface-variant space-y-2 list-disc list-inside leading-relaxed">
                <li><strong class="text-on-surface">Cartazes impressos:</strong> Foto nítida colorida, nome, traços únicos e telefone visível.</li>
                <li><strong class="text-on-surface">Locais estratégicos:</strong> Pet shops, clínicas 24h, mercados e pontos de ônibus. Use amarelo flúor.</li>
              </ul>
            </div>

            <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-md">
              <div class="flex items-center gap-3">
                <span class="w-7 h-7 rounded-lg bg-primary-container text-on-primary-container font-black flex items-center justify-center text-xs">3</span>
                <h3 class="font-bold text-base text-on-surface">🌐 3. Redes Sociais & Anúncios</h3>
              </div>
              <ul class="text-xs text-on-surface-variant space-y-2 list-disc list-inside leading-relaxed">
                <li><strong class="text-on-surface">Grupos de bairro:</strong> Publique em comunidades no Facebook e moradores no WhatsApp.</li>
                <li><strong class="text-on-surface">Anúncios geolocalizados:</strong> Meta Ads no raio de 2 km a 5 km da fuga.</li>
              </ul>
            </div>

            <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-md">
              <div class="flex items-center gap-3">
                <span class="w-7 h-7 rounded-lg bg-primary-container text-on-primary-container font-black flex items-center justify-center text-xs">4</span>
                <h3 class="font-bold text-base text-on-surface">💡 4. Caminhos de Cheiro</h3>
              </div>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Crie caminhos de cheiro arrastando pelo chão retalhos de roupas usadas pela pessoa com quem o cachorro tem maior afinidade, posicionando-os ao longo do trajeto até sua porta.
              </p>
            </div>
          </div>

          <!-- Prevenção & RG Canino -->
          <div class="bg-surface-container border border-outline-variant/30 rounded-3xl p-6 space-y-3 shadow-lg">
            <h4 class="font-bold text-base text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">verified_user</span>
              <span>Identificação & O RG do seu Cão</span>
            </h4>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              O microchip é essencial e deve estar sempre com dados atualizados. Combine-o com uma coleira resistente contendo placa de identificação legível com seu telefone.
            </p>
          </div>

        </section>

        <!-- ======================================================== -->
        <!-- SEÇÃO 3: GUIA DE GATOS (guia-de-reencontro-para-gatos) -->
        <!-- ======================================================== -->
        <section id="guia-gatos" class="space-y-8 scroll-mt-24 pt-6 border-t-2 border-secondary/20">
          
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-secondary-container/30 pb-3">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-xl bg-secondary-container text-on-secondary-container font-black flex items-center justify-center text-sm shadow">3</span>
              <h2 class="text-2xl font-black text-on-surface tracking-tight">Como encontrar gato perdido: Guia Estratégico Gatos</h2>
            </div>
            <button id="btn-dl-cats-pdf" class="bg-secondary text-on-secondary font-bold text-xs px-5 py-3 rounded-full hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-md flex-shrink-0">
              <span class="material-symbols-outlined text-base">picture_as_pdf</span>
              <span>Baixar Guia PDF (Gatos)</span>
            </button>
          </div>

          <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Criamos este guia para ajudar tutores de gatos perdidos a agir rápido, organizar a busca e aumentar as chances de reencontro. Gatos têm um instinto de sobrevivência incrível e muitos são encontrados a poucos metros de casa, apenas esperando o momento em que se sintam seguros para sair do esconderijo.
          </p>

          <!-- SEÇÃO DO VÍDEO DO YOUTUBE PETSEARCHERS -->
          <div class="bg-surface-container border border-tertiary-container/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-outline-variant/20 pb-3">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-red-500 text-2xl">play_circle</span>
                <h3 class="text-lg font-extrabold text-on-surface">Vídeo Oficial com Sons para Atrair seu Gato (PetSearchers)</h3>
              </div>
              <a href="https://www.youtube.com/watch?v=4RQD-MG3XJU" target="_blank" class="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/30 transition-all">
                <span>Abrir no YouTube (Link Direto)</span>
                <span class="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>

            <p class="text-xs text-on-surface-variant leading-relaxed">
              Você pode dar play perto de casa ou andando pelas redondezas para tentar chamar o gato perdido através de sons familiares e atrativos — preferencialmente no fim da noite ou início da madrugada (entre 02h e 04h da manhã), quando as ruas estão mais silenciosas.
            </p>

            <!-- YouTube Video Iframe Player -->
            <div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30 bg-black max-w-4xl mx-auto">
              <iframe 
                class="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/4RQD-MG3XJU?rel=0&autoplay=0" 
                title="Vídeo com sons para atrair seu gato | PetSearchers" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
              </iframe>
            </div>

            <p class="text-[11px] text-center text-on-surface-variant/80 italic pt-1">
              Link direto oficial: <a href="https://www.youtube.com/watch?v=4RQD-MG3XJU" target="_blank" class="text-red-400 underline font-bold">https://www.youtube.com/watch?v=4RQD-MG3XJU</a>
            </p>
          </div>

          <!-- Ações Práticas Felinas -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-2 shadow-md">
              <h4 class="font-bold text-base text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary">home</span>
                <span>🏠 Procure Minuciosamente Dentro de Casa</span>
              </h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Gatos são mestres do esconderijo. Verifique o interior de sofás, frestas atrás da geladeira, forros de teto e prateleiras altas antes de assumir que ele saiu.
              </p>
            </div>

            <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-2 shadow-md">
              <h4 class="font-bold text-base text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary">local_florist</span>
                <span>🌸 Estação de Cheiro & Alimentos Aromáticos</span>
              </h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Coloque a caixa de areia usada na entrada da casa ou janela de fácil acesso. O odor familiar é o guia mais forte. Aqueça um sachê de carne ou atum para espalhar o aroma.
              </p>
            </div>

            <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-2 shadow-md">
              <h4 class="font-bold text-base text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary">search</span>
                <span>🔍 Procurando nos Arredores (Garagens & Jardins)</span>
              </h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Fale com vizinhos e porteiros e peça permissão para VOCÊ olhar nos jardins e garagens deles. Gatos assustados geralmente não respondem ao chamado de estranhos.
              </p>
            </div>

            <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-2 shadow-md">
              <h4 class="font-bold text-base text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary">bedtime</span>
                <span>🌙 Busque no Silêncio da Madrugada (02h às 04h)</span>
              </h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                O barulho do dia assusta os gatos. Entre 02h e 04h da manhã é o melhor horário para ouvir vocalizações ou ver o reflexo dos olhos com uma lanterna.
              </p>
            </div>
          </div>

        </section>

        <!-- ======================================================== -->
        <!-- SEÇÃO 4: ANTIGOLPES E SEGURANÇA -->
        <!-- ======================================================== -->
        <section id="antigolpe" class="space-y-6 pt-6 border-t-2 border-amber-500/20">
          <div class="bg-gradient-to-r from-amber-500/20 via-surface-container-high to-surface-container border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
            <h3 class="text-xl font-black text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-amber-400">gavel</span>
              <span>Protocolo de Segurança e Antigolpe PetSearchers</span>
            </h3>
            <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Jamais faça transferências PIX ou pagamentos antecipados de resgate. Exija sempre prova de vida por videochamada ao vivo antes de qualquer deslocamento.
            </p>
          </div>
        </section>

        <!-- ======================================================== -->
        <!-- SEÇÃO 5: GERADOR DE CARTAZ -->
        <!-- ======================================================== -->
        <section id="gerador-cartaz" class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 pt-6">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-outline-variant/20 pb-4">
            <div>
              <h3 class="text-xl font-bold text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">print</span>
                <span>Gerador de Cartaz de Busca Impresso (Amarelo Flúor)</span>
              </h3>
              <p class="text-xs text-on-surface-variant mt-1">Crie um cartaz de alto contraste padronizado pronto para imprimir.</p>
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
        </section>

      </div>
    </div>
  `;

  // Attach PDF Generators
  const generatePdf = (species) => {
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
        <p><strong>Manual de Busca Estratégica PetSearchers & Faro</strong></p>
        <div class="box"><strong>CUIDANDO DE VOCÊ:</strong> Pausas conscientes, descanso em períodos curtos e foco em um passo de cada vez.</div>
        ${isDog ? `
          <h2>Passos para Encontrar Cachorro Perdido</h2>
          <ul>
            <li><strong>Varredura em Espiral:</strong> Raio inicial de 1 a 3 km a partir do local da fuga.</li>
            <li><strong>Estímulos Olfativos:</strong> Roupas usadas com seu cheiro e brinquedos barulhentos.</li>
            <li><strong>Cartazes Amarelo Flúor:</strong> Em pontos de ônibus, pet shops e clínicas veterinárias 24h.</li>
            <li><strong>Caminhos de Cheiro:</strong> Arrasto de retalhos de roupas usadas pelo chão até em casa.</li>
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
  };

  container.querySelector('#btn-dl-dogs-pdf')?.addEventListener('click', () => generatePdf('Cães'));
  container.querySelector('#btn-dl-cats-pdf')?.addEventListener('click', () => generatePdf('Gatos'));

  // Poster logic
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

import { store } from '../store.js';

export function renderReunionGuideView(container, showToast, targetSection = null) {
  container.innerHTML = `
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 space-y-10">
        
        <!-- Main Header PetSearchers Style -->
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
        </div>

        <!-- Navigation Jump Bar Linking General Guide to Dogs and Cats -->
        <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-5 shadow-xl space-y-3 text-center">
          <span class="text-xs uppercase font-bold text-on-surface-variant tracking-wider">Acesso Rápido por Espécie e Downloads PDF:</span>
          <div class="flex flex-wrap justify-center gap-3 pt-1">
            <a href="#section-dogs" class="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-xs sm:text-sm px-5 py-3 rounded-2xl transition-all shadow-md flex items-center gap-2">
              <span class="material-symbols-outlined text-base">sound_detection_dog_barking</span>
              <span>Ir para Guia Específico de Cães</span>
            </a>
            <a href="#section-cats" class="bg-secondary-container hover:bg-secondary-container/90 text-on-secondary-container font-extrabold text-xs sm:text-sm px-5 py-3 rounded-2xl transition-all shadow-md flex items-center gap-2">
              <span class="material-symbols-outlined text-base">cat</span>
              <span>Ir para Guia Específico de Gatos</span>
            </a>
            <button id="btn-download-pdf-dogs" class="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-bold text-xs sm:text-sm px-4 py-3 rounded-2xl border border-outline-variant/60 transition-all flex items-center gap-2 shadow-sm">
              <span class="material-symbols-outlined text-primary text-base">picture_as_pdf</span>
              <span>Baixar Guia PDF Cães</span>
            </button>
            <button id="btn-download-pdf-cats" class="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-bold text-xs sm:text-sm px-4 py-3 rounded-2xl border border-outline-variant/60 transition-all flex items-center gap-2 shadow-sm">
              <span class="material-symbols-outlined text-secondary text-base">picture_as_pdf</span>
              <span>Baixar Guia PDF Gatos</span>
            </button>
            <a href="https://wa.me/5511980008442?text=Oi%2C%20preciso%20de%20ajuda%20para%20encontrar%20meu%20pet%20perdido." target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-2xl transition-all flex items-center gap-2 shadow-md">
              <span class="material-symbols-outlined text-base">chat</span>
              <span>Falar no WhatsApp PetSearchers</span>
            </a>
          </div>
        </div>

        <!-- Single Continuous Content Stream -->
        <div id="guide-content" class="space-y-16">
          <!-- Rendered sequentially below -->
        </div>

      </div>
    </div>
  `;

  // 1. GENERAL INSTRUCTIONS (PetSearchers instrucoes-para-recuperacao)
  const generalGuideHtml = `
    <div id="section-general" class="space-y-8 animate-fade-in">
      
      <!-- Cuidando de Você Section -->
      <div class="bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container border border-outline-variant/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div class="space-y-2">
          <h2 class="text-2xl font-black text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-tertiary">favorite</span>
            <span>Cuidando de Você</span>
          </h2>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            A busca por um amigo perdido é exaustiva e desafiadora. Lembre-se de que sua saúde emocional é vital para continuar esse processo com clareza. Aceite apoio e cuide de si mesmo no caminho. Estamos com você nessa jornada.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-surface-container-lowest/80 p-4 rounded-2xl border border-outline-variant/20 flex items-center gap-3">
            <span class="material-symbols-outlined text-primary text-2xl">air</span>
            <span class="text-xs font-semibold text-on-surface">Faça pausas conscientes para respirar fundo</span>
          </div>
          <div class="bg-surface-container-lowest/80 p-4 rounded-2xl border border-outline-variant/20 flex items-center gap-3">
            <span class="material-symbols-outlined text-primary text-2xl">bedtime</span>
            <span class="text-xs font-semibold text-on-surface">Descanse, mesmo que por períodos curtos</span>
          </div>
          <div class="bg-surface-container-lowest/80 p-4 rounded-2xl border border-outline-variant/20 flex items-center gap-3">
            <span class="material-symbols-outlined text-primary text-2xl">group</span>
            <span class="text-xs font-semibold text-on-surface">Delegue pequenas tarefas a amigos</span>
          </div>
          <div class="bg-surface-container-lowest/80 p-4 rounded-2xl border border-outline-variant/20 flex items-center gap-3">
            <span class="material-symbols-outlined text-primary text-2xl">footprint</span>
            <span class="text-xs font-semibold text-on-surface">Foque em um passo de cada vez</span>
          </div>
        </div>
      </div>

      <!-- Intro Section with Links to Specific Dog and Cat Guides -->
      <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <h3 class="text-xl font-bold text-on-surface">Dicas Gerais de Reencontro de Pets Perdidos</h3>
        <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          Este guia oferece uma base sólida para qualquer pet perdido (cães, gatos, aves ou exóticos). Ter uma estratégia estruturada é o primeiro passo para o sucesso. Respire fundo, vamos começar.
        </p>
        <div class="pt-2 flex flex-col sm:flex-row gap-3 border-t border-outline-variant/20">
          <a href="#section-dogs" class="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline">
            <span class="material-symbols-outlined text-sm">east</span>
            <span>Ver Instruções Específicas para Cachorros</span>
          </a>
          <a href="#section-cats" class="inline-flex items-center gap-2 text-xs font-bold text-secondary hover:underline">
            <span class="material-symbols-outlined text-sm">east</span>
            <span>Ver Instruções Específicas para Gatos (+ Vídeo YouTube)</span>
          </a>
        </div>
      </div>

      <!-- Protocols in the First Hours -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-2 text-primary font-bold text-sm">
            <span class="material-symbols-outlined">door_front</span>
            <span>Isolamento da Área</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Verifique imediatamente todos os pontos de saída da sua residência e arredores. Algumas espécies se escondem muito perto de onde fugiram.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-2 text-primary font-bold text-sm">
            <span class="material-symbols-outlined">child_care</span>
            <span>Objetos de Cheiro</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Coloque a caminha, mantas ou brinquedos favoritos do lado de fora. O olfato é a bússola emocional para o pet estressado encontrar o caminho de casa.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-2 text-primary font-bold text-sm">
            <span class="material-symbols-outlined">campaign</span>
            <span>Alertas Vizinhos</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Comunique vizinhos e porteiros imediatamente. Muitas vezes o pet é acolhido por alguém próximo minutos após a fuga.
          </p>
        </div>
      </div>

      <!-- First Hours Actions Detailed List -->
      <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <h3 class="text-lg font-bold text-on-surface">Primeiras Horas: Ações Imediatas</h3>
        <ul class="text-xs sm:text-sm text-on-surface-variant space-y-3 list-disc list-inside leading-relaxed">
          <li><strong class="text-on-surface">Busque na vizinhança imediata:</strong> A maioria dos pets permanece a poucos metros de casa nas primeiras horas. Chame pelo nome com voz calma, cheque garagens e casas vizinhas.</li>
          <li><strong class="text-on-surface">Verifique abrigos e clínicas:</strong> Entre em contato com CCZs, ONGs locais e clínicas veterinárias próximas. Alguém pode ter encontrado seu amigo e levado para um local seguro.</li>
          <li><strong class="text-on-surface">Ative alertas em redes sociais:</strong> Poste fotos nítidas e informações de contato em grupos de bairro. O engajamento digital é vital para que a notícia chegue a quem viu o animal.</li>
        </ul>
      </div>

      <!-- Mobilizing Community & Digital Campaigns -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <h3 class="font-bold text-base text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">groups</span>
            <span>Envolvendo a Comunidade</span>
          </h3>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            A mobilização física é fundamental. Fale pessoalmente com vizinhos, porteiros, comércios locais e clínicas veterinárias da região. Deixe cartazes bem visíveis em pontos de alta circulação e peça permissão para fixá-los em quadros de avisos de condomínios e abrigos próximos. A união da vizinhança é um braço forte na busca.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <h3 class="font-bold text-base text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">cell_tower</span>
            <span>Campanhas Digitais e Geolocalização</span>
          </h3>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Utilize os anúncios precisos para envolver vizinhos, comércios locais e abrigos no raio exato onde seu pet sumiu. Nossas redes sociais e grupos locais ampliam o alcance da busca de forma estratégica e eficiente. A tecnologia é agora sua maior aliada.
          </p>
        </div>
      </div>

      <!-- Additional Resources & Prevention -->
      <div class="bg-surface-container border border-outline-variant/30 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <h3 class="text-lg font-bold text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">verified_user</span>
          <span>Recursos Adicionais e Prevenção</span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-on-surface-variant pt-2">
          <div class="bg-surface-container-high p-4 rounded-xl space-y-1 border border-outline-variant/20">
            <strong class="text-on-surface font-bold text-xs block">Registro de Microchip</strong>
            <p>Mantenha os dados de contato do microchip sempre atualizados em bancos de dados nacionais.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-1 border border-outline-variant/20">
            <strong class="text-on-surface font-bold text-xs block">Coleiras e Identificação</strong>
            <p>Use coleiras com placas de identificação legíveis e QR Codes que facilitem o contato imediato.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-1 border border-outline-variant/20">
            <strong class="text-on-surface font-bold text-xs block">Portões e Perímetros</strong>
            <p>Revise regularmente portões, telas e muros para garantir que não existam rotas de fuga.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-1 border border-outline-variant/20">
            <strong class="text-on-surface font-bold text-xs block">Hábitos de Segurança</strong>
            <p>Mantenha o pet sempre na guia em locais abertos e use redes de proteção em apartamentos.</p>
          </div>
        </div>
        <p class="text-xs text-on-surface-variant italic pt-2 text-center">"Prevenir é o maior ato de amor contínuo. Sua dedicação hoje é a segurança do amanhã."</p>
      </div>

    </div>
  `;

  // 2. DOG GUIDE (PetSearchers achar-cachorro-desaparecido / guia-de-reencontro-para-cachorros)
  const dogGuideHtml = `
    <div id="section-dogs" class="space-y-8 animate-fade-in pt-8 border-t-2 border-primary/20">
      
      <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span class="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary-container/20 px-3 py-1 rounded-full border border-primary-container/30">Guia PetSearchers Cães</span>
            <h2 class="text-2xl sm:text-3xl font-black text-on-surface tracking-tight mt-2 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">sound_detection_dog_barking</span>
              <span>Como encontrar cachorro perdido: guia completo para aumentar as chances de reencontro</span>
            </h2>
          </div>
          <button class="btn-dl-pdf-dogs-action bg-primary text-on-primary font-bold text-xs px-5 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md flex-shrink-0">
            <span class="material-symbols-outlined text-base">picture_as_pdf</span>
            <span>Baixar Guia em PDF (Cães)</span>
          </button>
        </div>
        <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          Perder um cão é um momento de angústia profunda, mas saiba que estamos aqui para guiar seus passos. O tempo é seu recurso mais valioso agora, e agir com rapidez e estratégia faz toda a diferença. Criamos um plano organizado para ajudar você a manter a calma e focar nas ações que trazem resultados reais. Você não está sozinho. Respire fundo e vamos começar a busca juntos.
        </p>
      </div>

      <!-- 4 Quick Summary Action Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-2 shadow-lg">
          <div class="flex items-center gap-2 text-primary font-bold text-sm">
            <span class="material-symbols-outlined">explore</span>
            <span>Onde Procurar</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Faça uma varredura em espiral partindo do ponto de fuga. Cachorros costumam seguir cheiros ou buscar abrigo em locais conhecidos em um raio inicial de 1 a 3 km.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-2 shadow-lg">
          <div class="flex items-center gap-2 text-primary font-bold text-sm">
            <span class="material-symbols-outlined">timer</span>
            <span>Ações Imediatas</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            As primeiras horas são as mais críticas. Manter a calma e agir com método é o que trará seu cão de volta para casa.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-2 shadow-lg">
          <div class="flex items-center gap-2 text-primary font-bold text-sm">
            <span class="material-symbols-outlined">record_voice_over</span>
            <span>Quem Avisar</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Notifique veterinários locais, ONGs, pet shops e vizinhos. Pessoas que circulam na região, como entregadores, são seus melhores aliados agora.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-2 shadow-lg">
          <div class="flex items-center gap-2 text-primary font-bold text-sm">
            <span class="material-symbols-outlined">visibility</span>
            <span>O que Observar</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Fique atento a sinais comportamentais: cães assustados tendem a se esconder sob carros ou arbustos e podem não responder ao chamado logo de cara.
          </p>
        </div>
      </div>

      <!-- Grid of Steps 1 to 6 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-sm shadow">1</div>
            <h3 class="font-bold text-base text-on-surface">📢 1. Ação Imediata</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Procure nas redondezas:</strong> Caminhe pelo bairro chamando o nome do cachorro em tom calmo e familiar.</li>
            <li><strong class="text-on-surface">Leve estímulos conhecidos:</strong> Brinquedos barulhentos, petiscos e roupas com seu cheiro podem atrair o animal.</li>
            <li><strong class="text-on-surface">Peça ajuda:</strong> Informe vizinhos, comerciantes e porteiros. Deixe uma foto recente e seu contato.</li>
            <li><strong class="text-on-surface">Verifique câmeras de segurança:</strong> Imagens de casas, prédios e comércios podem indicar a direção que o pet tomou.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-sm shadow">2</div>
            <h3 class="font-bold text-base text-on-surface">📢 2. Divulgação Local</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Cartazes impressos:</strong> Inclua foto nítida colorida, nome, características marcantes únicas e telefone visível.</li>
            <li><strong class="text-on-surface">Locais estratégicos:</strong> Pet shops, clínicas veterinárias, praças, mercados, farmácias e pontos de ônibus.</li>
            <li><strong class="text-on-surface">Dica extra de destaque:</strong> Use cores chamativas (amarelo flúor) ou fita fluorescente para destacar o cartaz na rua.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-sm shadow">3</div>
            <h3 class="font-bold text-base text-on-surface">🌐 3. Redes Sociais e Tecnologia</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Grupos de bairro:</strong> Publique em comunidades locais no Facebook e grupos de moradores no WhatsApp.</li>
            <li><strong class="text-on-surface">Instagram & Reposts:</strong> Compartilhe nos stories com marcações e peça para amigos repostarem.</li>
            <li><strong class="text-on-surface">Hashtags úteis:</strong> #CachorroPerdido #ProcuraSePet #PetDesaparecido + nome da cidade.</li>
            <li><strong class="text-on-surface">Anúncios geolocalizados:</strong> Ferramentas como Meta Ads permitem alcançar milhares de pessoas próximas em pouco tempo.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-sm shadow">4</div>
            <h3 class="font-bold text-base text-on-surface">🧭 4. Plataformas Especializadas</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Pet Searchers:</strong> Sistema de alertas geolocalizados em redes sociais e mapas comunitários.</li>
            <li><strong class="text-on-surface">Busca.Pet:</strong> Apoio com cães farejadores e drones térmicos.</li>
            <li><strong class="text-on-surface">Petspot.App:</strong> Plataforma de cadastro integrado para pets desaparecidos e encontrados.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-sm shadow">5</div>
            <h3 class="font-bold text-base text-on-surface">🏥 5. Contato com Instituições</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">ONGs e abrigos:</strong> Informe o desaparecimento e envie fotos (acesse nosso <a href="#/ongs" class="text-primary font-bold underline">Diretório de ONGs</a> no menu).</li>
            <li><strong class="text-on-surface">Clínicas veterinárias:</strong> Animais resgatados feridos ou assustados costumam ser levados para atendimento de emergência.</li>
            <li><strong class="text-on-surface">Centros de zoonoses e prefeituras:</strong> Verifique se o pet foi recolhido por equipes municipais.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-sm shadow">6</div>
            <h3 class="font-bold text-base text-on-surface">💡 6. Dicas Avançadas</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Caminhos de Cheiro:</strong> Crie caminhos de cheiro utilizando retalhos de roupas usadas pela pessoa com quem o cachorro tem maior afinidade, posicionando-os ao longo do trajeto que leva até sua casa.</li>
            <li><strong class="text-on-surface">Persistência:</strong> Muitos reencontros acontecem dias ou semanas depois. Continue divulgando e atualizando informações.</li>
            <li><strong class="text-on-surface">Porta aberta:</strong> Deixe água, comida e uma fresta no portão por onde o pet possa entrar caso encontre o caminho de volta.</li>
          </ul>
        </div>

      </div>

      <!-- Conclusion & Prevention -->
      <div class="bg-surface-container border border-primary-container/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div class="space-y-2">
          <h3 class="font-bold text-lg text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">verified_user</span>
            <span>Identificação: O RG do seu Cão & Checklist Final de Prevenção</span>
          </h3>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Reduzir o risco de fuga é um ato de amor e cuidado constante. Pequenas mudanças na rotina garantem a segurança do seu melhor amigo.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-on-surface-variant">
          <div class="bg-surface-container-high p-4 rounded-xl space-y-1.5 border border-outline-variant/30">
            <strong class="text-on-surface font-bold text-xs block">O RG do seu cão</strong>
            <p>O microchip é essencial e deve estar sempre com dados atualizados. Combine-o com uma coleira resistente contendo uma placa de identificação legível com seu telefone.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-1.5 border border-outline-variant/30">
            <strong class="text-on-surface font-bold text-xs block">Segurança Física</strong>
            <p>Mantenha portões trancados e muros altos. Instale telas ou alarmes em pontos críticos se o seu cão for propenso a fugas estratégicas.</p>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-1.5 border border-outline-variant/30">
            <strong class="text-on-surface font-bold text-xs block">Rotina de Passeio</strong>
            <p>Use sempre peitoral e guia ajustados. Nunca solte seu cão em áreas abertas ou sem cercas confiáveis. Treine o comando de 'vem' regularmente.</p>
          </div>
        </div>
      </div>

    </div>
  `;

  // 3. CAT GUIDE (PetSearchers guia-de-reencontro-para-gatos WITH YOUTUBE VIDEO EMBED + YOUTUBE DIRECT LINK)
  const catGuideHtml = `
    <div id="section-cats" class="space-y-8 animate-fade-in pt-8 border-t-2 border-secondary/20">
      
      <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span class="text-xs uppercase font-extrabold tracking-widest text-secondary bg-secondary-container/20 px-3 py-1 rounded-full border border-secondary-container/30">Guia PetSearchers Gatos</span>
            <h2 class="text-2xl sm:text-3xl font-black text-on-surface tracking-tight mt-2 flex items-center gap-2">
              <span class="material-symbols-outlined text-secondary">cat</span>
              <span>Como encontrar gato perdido: guia completo para aumentar as chances de reencontro</span>
            </h2>
          </div>
          <button class="btn-dl-pdf-cats-action bg-secondary text-on-secondary font-bold text-xs px-5 py-3 rounded-full hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-md flex-shrink-0">
            <span class="material-symbols-outlined text-base">picture_as_pdf</span>
            <span>Baixar Guia em PDF (Gatos)</span>
          </button>
        </div>
        <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          Criamos este guia para ajudar tutores de gatos perdidos a agir rápido, organizar a busca e aumentar as chances de reencontro. Saiba que você não está sozinho nessa jornada e cada passo estratégico aproxima seu pet de casa. Gatos têm um instinto de sobrevivência incrível e muitos são encontrados a poucos metros de casa, apenas esperando o momento em que se sintam seguros para sair do esconderijo.
        </p>
      </div>

      <!-- OFFICIAL PETSEARCHERS YOUTUBE EMBEDDED VIDEO + DIRECT LINK -->
      <div class="bg-surface-container border border-tertiary-container/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-outline-variant/20 pb-3">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-red-500 text-2xl">play_circle</span>
            <h3 class="text-lg font-extrabold text-on-surface">Vídeo com Sons para Atrair seu Gato (Canal Oficial PetSearchers)</h3>
          </div>
          <a href="https://www.youtube.com/watch?v=4RQD-MG3XJU" target="_blank" class="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30 transition-all">
            <span>Abrir no YouTube</span>
            <span class="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>

        <p class="text-xs text-on-surface-variant leading-relaxed">
          Abaixo você encontra o vídeo oficial da Pet Searchers com sons que atraem gatos. Você pode dar play no seu computador ou celular perto de casa ou andando pelas redondezas para tentar chamar o gato perdido através de sons familiares e atrativos — preferencialmente no fim da noite ou início da madrugada, quando as ruas estão mais silenciosas.
        </p>

        <!-- YouTube Video Iframe Embed -->
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

        <div class="pt-2 text-center">
          <a href="https://www.youtube.com/watch?v=4RQD-MG3XJU" target="_blank" class="inline-flex items-center gap-2 text-xs font-extrabold text-red-400 hover:underline">
            <span class="material-symbols-outlined text-base">smart_display</span>
            <span>Link direto do YouTube: https://www.youtube.com/watch?v=4RQD-MG3XJU</span>
          </a>
        </div>
      </div>

      <!-- Native Web Audio Sound Generator Alternative -->
      <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-base font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">volume_up</span>
            <span>Gerador Nativo de Frequências de Atração Felina</span>
          </h3>
          <span class="text-xs text-primary font-semibold">Sem consumir dados móveis</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
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

      <!-- Cat Specific Step Sections -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <h3 class="font-bold text-base text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">home</span>
            <span>🏠 Procure Minuciosamente Dentro de Casa</span>
          </h3>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Gatos são mestres do esconderijo. Verifique o interior de sofás, vãos atrás da geladeira, forros de teto e prateleiras altas antes de assumir que ele saiu de casa.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <h3 class="font-bold text-base text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">local_florist</span>
            <span>🌸 Estação de Cheiro & Alimentos Aromáticos</span>
          </h3>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Coloque a caixa de areia usada na entrada da casa ou janela de fácil acesso. O odor familiar é o guia mais forte. Aqueça um sachê de carne ou atum para espalhar o aroma.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <h3 class="font-bold text-base text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">search</span>
            <span>🔍 Procurando nos Arredores (Garagens & Jardins)</span>
          </h3>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Fale com vizinhos e porteiros e peça permissão para VOCÊ olhar nos jardins e garagens deles. Gatos assustados geralmente não respondem ao chamado de estranhos.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <h3 class="font-bold text-base text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">bedtime</span>
            <span>🌙 Busque no Silêncio da Madrugada (02h às 04h)</span>
          </h3>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            O barulho do dia assusta os gatos. Entre 02h e 04h da manhã é o melhor horário para ouvir miados ou ver o reflexo dos olhos com lanterna em muros, carros e telhados.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <h3 class="font-bold text-base text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">campaign</span>
            <span>📢 Comunidade e Redes Sociais</span>
          </h3>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Divulgue rapidamente com fotos nítidas e peça que as pessoas apenas observem e informem o local. Afixe cartazes em locais defensivos (próximos a arbustos) e em nível baixo.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-3 shadow-lg">
          <h3 class="font-bold text-base text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-amber-400">warning</span>
            <span>⚠️ Sinais de Alerta: Saúde e Medo</span>
          </h3>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Um gato ferido ou extremamente aterrorizado ficará em silêncio absoluto por dias. Não desista se ele não responder logo de início. Se estiver machucado, procurará locais escuros (como vãos de motores de carros estacionados).
          </p>
        </div>

      </div>

    </div>
  `;

  // 4. SCAM PREVENTION CONTENT
  const scamPreventionHtml = `
    <div id="section-scams" class="space-y-8 animate-fade-in pt-8 border-t-2 border-amber-500/20">
      <div class="bg-gradient-to-r from-amber-500/20 via-surface-container-high to-surface-container border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
        <div class="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <span class="material-symbols-outlined text-sm">gavel</span>
          <span>Manual de Segurança PetSearchers</span>
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
    <div id="section-poster" class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in pt-8 border-t-2 border-tertiary/20">
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
  contentEl.innerHTML = `
    ${generalGuideHtml}
    ${dogGuideHtml}
    ${catGuideHtml}
    ${scamPreventionHtml}
    ${posterGeneratorHtml}
  `;

  // Attach event listeners
  attachAudioListeners();
  attachPosterListeners();
  attachPdfDownloadListeners();

  // Scroll to target section if specified
  if (targetSection === 'dogs') {
    setTimeout(() => container.querySelector('#section-dogs')?.scrollIntoView({ behavior: 'smooth' }), 200);
  } else if (targetSection === 'cats') {
    setTimeout(() => container.querySelector('#section-cats')?.scrollIntoView({ behavior: 'smooth' }), 200);
  } else if (targetSection === 'general') {
    setTimeout(() => container.querySelector('#section-general')?.scrollIntoView({ behavior: 'smooth' }), 200);
  }

  function attachPdfDownloadListeners() {
    const downloadPdf = (species) => {
      showToast(`Gerando arquivo PDF do Guia PetSearchers (${species})...`, 'success');
      
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
            .footer { margin-top: 40px; font-size: 11px; text-align: center; color: #6b7280; border-t: 1px solid #e5e7eb; padding-top: 10px; }
          </style>
        </head>
        <body>
          <h1>${title}</h1>
          <p><strong>Manual de Instruções e Busca Estratégica PetSearchers</strong></p>
          
          <div class="box">
            <strong>CUIDANDO DE VOCÊ:</strong><br>
            A busca por um amigo perdido é exaustiva. Respire fundo, descanse em períodos curtos, delegue tarefas a amigos e foque em um passo de cada vez.
          </div>

          ${isDog ? `
            <h2>1. Ação Imediata</h2>
            <ul>
              <li>Procure nas redondezas chamando o nome em tom calmo.</li>
              <li>Leve roupas usadas com seu cheiro, brinquedos e petiscos.</li>
              <li>Avise vizinhos e porteiros com foto recente.</li>
              <li>Cheque câmeras de segurança de casas e comércios.</li>
            </ul>

            <h2>2. Divulgação Local</h2>
            <ul>
              <li>Cartazes amarelos flúor com fotos nítidas e telefone visível.</li>
              <li>Afixar em pet shops, clínicas 24h, praças e pontos de ônibus.</li>
            </ul>

            <h2>3. Redes Sociais & Tecnologia</h2>
            <ul>
              <li>Poste em grupos de bairro no Facebook/WhatsApp.</li>
              <li>Use anúncios geolocalizados (Meta Ads) num raio de 2 a 5 km.</li>
            </ul>

            <h2>4. Dicas Avançadas: Caminhos de Cheiro</h2>
            <p>Arraste roupas usadas com a afinidade do tutor pelo chão até a entrada da sua casa.</p>
          ` : `
            <h2>1. Busca Minuciosa Dentro de Casa</h2>
            <ul>
              <li>Gatos se escondem no interior de sofás, vãos atrás de geladeiras, forros e prateleiras.</li>
            </ul>

            <h2>2. Estação de Cheiro</h2>
            <ul>
              <li>Coloque a caixa de areia usada na janela ou porta de entrada.</li>
              <li>Aqueça um sachê de carne/atum para propagar o aroma.</li>
            </ul>

            <h2>3. Busca na Madrugada (02h às 04h)</h2>
            <ul>
              <li>No silêncio da madrugada, chame baixinho e use lanterna para buscar o reflexo dos olhos.</li>
              <li>Use o vídeo de sons de atração felina no YouTube: https://www.youtube.com/watch?v=4RQD-MG3XJU</li>
            </ul>
          `}

          <div class="footer">
            Documento Oficial Faro • PetSearchers Brasil | www.pet-searchers.com
          </div>
        </body>
        </html>
      `);
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
      }, 500);
    };

    container.querySelectorAll('.btn-dl-pdf-dogs-action, #btn-download-pdf-dogs').forEach(btn => {
      btn?.addEventListener('click', () => downloadPdf('Cães'));
    });

    container.querySelectorAll('.btn-dl-pdf-cats-action, #btn-download-pdf-cats').forEach(btn => {
      btn?.addEventListener('click', () => downloadPdf('Gatos'));
    });
  }

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

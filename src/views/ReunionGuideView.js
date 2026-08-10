import { store } from '../store.js';

export function renderReunionGuideView(container, showToast) {
  container.innerHTML = `
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 space-y-10">
        
        <!-- Main Header PetSearchers Style -->
        <div class="text-center max-w-4xl mx-auto space-y-4">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary-container/15 px-4 py-1.5 rounded-full border border-primary-container/30">
            Base Oficial de Conhecimento PetSearchers & Faro
          </span>
          <h1 class="text-3xl sm:text-5xl font-black text-on-surface tracking-tight mt-2">
            Manual para Reencontrar Pet Desaparecido
          </h1>
          <p class="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
            Entendemos sua dor e estamos aqui para apoiar. Agir com calma e método nas primeiras 48 horas é vital para trazer seu amigo para casa em segurança.
          </p>
        </div>

        <!-- 5 Tab Navigation -->
        <div class="flex justify-center border-b border-surface-container-highest pb-4">
          <div class="inline-flex p-1.5 bg-surface-container rounded-2xl border border-outline-variant/40 shadow-inner flex-wrap justify-center gap-2">
            <button id="guide-tab-general" class="px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm bg-primary-container text-on-primary-container shadow-md transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">menu_book</span>
              <span>Instruções Gerais (Todos os Pets)</span>
            </button>
            <button id="guide-tab-dogs" class="px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">sound_detection_dog_barking</span>
              <span>Guia para Cachorros</span>
            </button>
            <button id="guide-tab-cats" class="px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">cat</span>
              <span>Guia para Gatos + Vídeo de Sons</span>
            </button>
            <button id="guide-tab-scams" class="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg text-amber-400">gavel</span>
              <span>Segurança & Antigolpe</span>
            </button>
            <button id="guide-tab-poster" class="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">print</span>
              <span>Gerador de Cartaz</span>
            </button>
          </div>
        </div>

        <!-- Dynamic Content Area -->
        <div id="guide-content" class="space-y-8">
          <!-- Rendered dynamically -->
        </div>

      </div>
    </div>
  `;

  // 1. GENERAL INSTRUCTIONS (PetSearchers instrucoes-para-recuperacao)
  const generalGuideHtml = `
    <div class="space-y-8 animate-fade-in">
      
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

      <!-- Intro Section -->
      <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-3 shadow-xl">
        <h3 class="text-xl font-bold text-on-surface">Dicas Gerais de Reencontro de Pets Perdidos</h3>
        <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          Este guia oferece uma base sólida para qualquer pet perdido (cães, gatos, aves ou exóticos). Ter uma estratégia estruturada é o primeiro passo para o sucesso. Respire fundo, vamos começar.
        </p>
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
    <div class="space-y-8 animate-fade-in">
      
      <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <h2 class="text-2xl font-black text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">sound_detection_dog_barking</span>
          <span>Como encontrar cachorro perdido: guia completo para aumentar as chances de reencontro</span>
        </h2>
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

  // 3. CAT GUIDE (PetSearchers guia-de-reencontro-para-gatos WITH YOUTUBE VIDEO EMBED)
  const catGuideHtml = `
    <div class="space-y-8 animate-fade-in">
      
      <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <h2 class="text-2xl font-black text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-secondary">cat</span>
          <span>Como encontrar gato perdido: guia completo para aumentar as chances de reencontro</span>
        </h2>
        <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          Criamos este guia para ajudar tutores de gatos perdidos a agir rápido, organizar a busca e aumentar as chances de reencontro. Saiba que você não está sozinho nessa jornada e cada passo estratégico aproxima seu pet de casa. Gatos têm um instinto de sobrevivência incrível e muitos são encontrados a poucos metros de casa, apenas esperando o momento em que se sintam seguros para sair do esconderijo.
        </p>
      </div>

      <!-- OFFICIAL PETSEARCHERS YOUTUBE EMBEDDED VIDEO -->
      <div class="bg-surface-container border border-tertiary-container/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-outline-variant/20 pb-3">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-red-500 text-2xl">play_circle</span>
            <h3 class="text-lg font-extrabold text-on-surface">Vídeo com Sons para Atrair seu Gato (Canal Oficial PetSearchers)</h3>
          </div>
          <span class="text-xs text-tertiary font-semibold bg-tertiary-container/10 px-3 py-1 rounded-full border border-tertiary-container/20">
            Reproduzir na madrugada (02h às 04h)
          </span>
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
    <div class="space-y-8 animate-fade-in">
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
  // Default tab: General Instructions (Pet Searchers instrucoes-para-recuperacao)
  contentEl.innerHTML = generalGuideHtml;

  const tabGeneral = container.querySelector('#guide-tab-general');
  const tabDogs = container.querySelector('#guide-tab-dogs');
  const tabCats = container.querySelector('#guide-tab-cats');
  const tabScams = container.querySelector('#guide-tab-scams');
  const tabPoster = container.querySelector('#guide-tab-poster');

  const resetTabStyles = () => {
    [tabGeneral, tabDogs, tabCats, tabScams, tabPoster].forEach(btn => {
      if (btn) btn.className = 'px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2';
    });
  };

  tabGeneral?.addEventListener('click', () => {
    resetTabStyles();
    tabGeneral.className = 'px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm bg-primary-container text-on-primary-container shadow-md transition-all flex items-center gap-2';
    contentEl.innerHTML = generalGuideHtml;
  });

  tabDogs?.addEventListener('click', () => {
    resetTabStyles();
    tabDogs.className = 'px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm bg-primary-container text-on-primary-container shadow-md transition-all flex items-center gap-2';
    contentEl.innerHTML = dogGuideHtml;
  });

  tabCats?.addEventListener('click', () => {
    resetTabStyles();
    tabCats.className = 'px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm bg-secondary-container text-on-secondary-container shadow-md transition-all flex items-center gap-2';
    contentEl.innerHTML = catGuideHtml;
    attachAudioListeners();
  });

  tabScams?.addEventListener('click', () => {
    resetTabStyles();
    tabScams.className = 'px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-amber-500 text-black shadow-md transition-all flex items-center gap-2';
    contentEl.innerHTML = scamPreventionHtml;
  });

  tabPoster?.addEventListener('click', () => {
    resetTabStyles();
    tabPoster.className = 'px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-tertiary-container text-on-tertiary-container shadow-md transition-all flex items-center gap-2';
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

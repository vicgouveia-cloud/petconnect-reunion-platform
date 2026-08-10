import { store } from '../store.js';

export function renderReunionGuideView(container, showToast) {
  container.innerHTML = `
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-5xl mx-auto px-4 sm:px-8 space-y-12 animate-fade-in">
        
        <!-- Header Principal PetSearchers -->
        <div class="text-center max-w-4xl mx-auto space-y-4">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary-container/15 px-4 py-1.5 rounded-full border border-primary-container/30">
            Manual Oficial PetSearchers Resgate Animal
          </span>
          <h1 class="text-3xl sm:text-5xl font-black text-on-surface tracking-tight mt-2">
            Manual para Reencontrar Pet Desaparecido
          </h1>
          <p class="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
            Entendemos sua dor e estamos aqui para apoiar. Agir com calma e método nas primeiras 48 horas é vital para trazer seu amigo para casa em segurança.
          </p>
        </div>

        <!-- Cuidando de Você -->
        <div class="bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container border border-outline-variant/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="space-y-2">
            <h2 class="text-2xl font-black text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-tertiary">favorite</span>
              <span>Cuidando de Você</span>
            </h2>
            <p class="text-sm text-on-surface-variant leading-relaxed">
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

          <p class="text-xs font-bold text-primary italic text-center pt-1">
            Estamos com você nessa jornada.
          </p>
        </div>

        <!-- GUIA GERAL: Dicas Gerais de Reencontro -->
        <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div class="space-y-2">
            <span class="text-xs font-extrabold uppercase tracking-widest text-primary">GUIA GERAL</span>
            <h2 class="text-2xl font-black text-on-surface">Dicas Gerais de Reencontro de Pets Perdidos</h2>
            <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Este guia complementa nossos manuais específicos para cães e gatos, oferecendo uma base sólida para qualquer pet perdido. Ter uma estratégia estruturada é o primeiro passo para o sucesso.
            </p>
            <p class="text-xs font-semibold text-on-surface italic">Respire fundo, vamos começar.</p>
          </div>

          <!-- 3 Cards de Protocolos nas Primeiras Horas -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div class="bg-surface-container-high p-5 rounded-2xl border border-outline-variant/20 space-y-2">
              <div class="flex items-center gap-2 text-primary font-bold text-sm">
                <span class="material-symbols-outlined">door_front</span>
                <span>Isolamento da Área</span>
              </div>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Verifique imediatamente todos os pontos de saída da sua residência e arredores. Algumas espécies se escondem muito perto de onde fugiram.
              </p>
            </div>

            <div class="bg-surface-container-high p-5 rounded-2xl border border-outline-variant/20 space-y-2">
              <div class="flex items-center gap-2 text-primary font-bold text-sm">
                <span class="material-symbols-outlined">child_care</span>
                <span>Objetos de Cheiro</span>
              </div>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Coloque a caminha, mantas ou brinquedos favoritos do lado de fora. O olfato é bússola emocional para o pet estressado encontrar o caminho de casa.
              </p>
            </div>

            <div class="bg-surface-container-high p-5 rounded-2xl border border-outline-variant/20 space-y-2">
              <div class="flex items-center gap-2 text-primary font-bold text-sm">
                <span class="material-symbols-outlined">campaign</span>
                <span>Alertas Vizinhos</span>
              </div>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Comunique vizinhos e porteiros imediatamente. Muitas vezes o pet é acolhido por alguém próximo minutos após a fuga.
              </p>
            </div>
          </div>
        </div>

        <!-- Primeiras horas: Ações Imediatas -->
        <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <h3 class="text-xl font-bold text-on-surface">Primeiras horas: Ações Imediatas</h3>
          <p class="text-xs text-on-surface-variant">Cada minuto conta na segurança do seu amigo. Mantenha a calma e siga para o próximo passo.</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div class="bg-surface-container-high p-5 rounded-2xl border border-outline-variant/20 space-y-2">
              <h4 class="font-bold text-sm text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-base">near_me</span>
                <span>Busque na vizinhança imediata</span>
              </h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                A maioria dos pets perdidos permanece a poucos metros de casa nas primeiras horas. Chame pelo nome com voz calma, cheque garagens e casas vizinhas.
              </p>
            </div>

            <div class="bg-surface-container-high p-5 rounded-2xl border border-outline-variant/20 space-y-2">
              <h4 class="font-bold text-sm text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-base">local_hospital</span>
                <span>Verifique abrigos e clínicas</span>
              </h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Entre em contato com CCZs, ONGs locais e clínicas veterinárias próximas. Alguém pode ter encontrado seu amigo e levado para um local seguro.
              </p>
            </div>

            <div class="bg-surface-container-high p-5 rounded-2xl border border-outline-variant/20 space-y-2">
              <h4 class="font-bold text-sm text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-base">share</span>
                <span>Ative alertas em redes sociais</span>
              </h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Poste fotos nítidas e informações de contato em grupos de bairro. O engajamento digital é vital para que a notícia chegue a quem viu o animal.
              </p>
            </div>
          </div>
        </div>

        <!-- Envolvendo a Comunidade & Campanhas Digitais -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h3 class="font-bold text-lg text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">groups</span>
              <span>Envolvendo a Comunidade</span>
            </h3>
            <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              A mobilização física é fundamental. Fale pessoalmente com vizinhos, porteiros, comércios locais e clínicas veterinárias da região. Deixe cartazes bem visíveis em pontos de alta circulação e peça permissão para fixá-los em quadros de avisos de condomínios e abrigos próximos.
            </p>
            <p class="text-xs font-bold text-primary italic pt-1">
              A união da vizinhança é um braço forte na busca. Espalhe a mensagem e mantenha a esperança.
            </p>
          </div>

          <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-3 shadow-xl">
            <h3 class="font-bold text-lg text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">cell_tower</span>
              <span>Campanhas Digitais e Geolocalização</span>
            </h3>
            <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Utilize os anúncios precisos da Pet Searchers para envolver vizinhos, comércios locais e abrigos no raio exato onde seu pet sumiu. Nossas redes sociais e grupos locais ampliam o alcance da busca de forma estratégica e eficiente.
            </p>
            <p class="text-xs font-bold text-primary italic pt-1">
              A tecnologia é agora sua maior aliada. Mantenha o foco, cada visualização é uma nova chance.
            </p>
          </div>
        </div>

        <!-- ANÚNCIOS QUE FUNCIONAM Banner -->
        <div class="bg-gradient-to-r from-primary-container via-surface-container-high to-primary-container border border-primary/30 rounded-3xl p-8 shadow-2xl text-center space-y-4">
          <span class="text-xs font-extrabold uppercase tracking-widest text-on-primary-container opacity-80 block">
            ANÚNCIOS QUE FUNCIONAM • PET SEARCHERS • TECNOLOGIA DE PONTA • COMUNIDADE UNIDA
          </span>
          <h3 class="text-2xl sm:text-3xl font-black text-on-primary-container">Anúncios que Funcionam</h3>
          <p class="text-sm text-on-primary-container/90 max-w-2xl mx-auto leading-relaxed">
            Nossa tecnologia de geolocalização alcança quem está por perto. Com passos claros e apoio comunitário, aumentamos as chances de um reencontro feliz e seguro.
          </p>
          <div class="pt-2">
            <a href="#/cadastrar" class="inline-flex items-center gap-2 bg-primary text-on-primary font-black text-sm px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:scale-105">
              <span class="material-symbols-outlined">campaign</span>
              <span>Criar Campanha agora</span>
            </a>
          </div>
        </div>

        <!-- Escolha o guia ideal para o seu pet -->
        <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-8 shadow-xl text-center space-y-6">
          <div class="max-w-2xl mx-auto space-y-2">
            <h3 class="text-2xl font-black text-on-surface">Escolha o guia ideal para o seu pet</h3>
            <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Agora escolha o guia certo para o seu amigo: clique em “Ver guia de cães” ou “Ver guia de gatos” para seguir o passo a passo ideal e aumentar as chances de reencontro.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
            <a href="#/achar-cachorro-desaparecido" class="flex-1 bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-black text-sm py-4 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-3 group">
              <span class="material-symbols-outlined text-2xl">sound_detection_dog_barking</span>
              <span>Ver guia de cães</span>
              <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">east</span>
            </a>

            <a href="#/encontrar-gato-perdido" class="flex-1 bg-secondary-container hover:bg-secondary-container/90 text-on-secondary-container font-black text-sm py-4 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-3 group">
              <span class="material-symbols-outlined text-2xl">cat</span>
              <span>Ver guia de gatos</span>
              <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">east</span>
            </a>
          </div>
        </div>

        <!-- Recursos Adicionais e Prevenção -->
        <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <h3 class="text-xl font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">verified_user</span>
            <span>Recursos Adicionais e Prevenção</span>
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-surface-container-high p-4 rounded-xl space-y-1 border border-outline-variant/20">
              <strong class="text-on-surface font-bold text-xs block">Registro de Microchip</strong>
              <p class="text-xs text-on-surface-variant">Mantenha os dados de contato do microchip sempre atualizados em bancos de dados nacionais.</p>
            </div>
            <div class="bg-surface-container-high p-4 rounded-xl space-y-1 border border-outline-variant/20">
              <strong class="text-on-surface font-bold text-xs block">Coleiras e Identificação</strong>
              <p class="text-xs text-on-surface-variant">Use coleiras com placas de identificação legíveis e QR Codes que facilitem o contato imediato.</p>
            </div>
            <div class="bg-surface-container-high p-4 rounded-xl space-y-1 border border-outline-variant/20">
              <strong class="text-on-surface font-bold text-xs block">Portões e Perímetros</strong>
              <p class="text-xs text-on-surface-variant">Revise regularmente portões, telas e muros para garantir que não existam rotas de fuga.</p>
            </div>
            <div class="bg-surface-container-high p-4 rounded-xl space-y-1 border border-outline-variant/20">
              <strong class="text-on-surface font-bold text-xs block">Hábitos de Segurança</strong>
              <p class="text-xs text-on-surface-variant">Mantenha o pet sempre na guia em locais abertos e use redes de proteção em apartamentos.</p>
            </div>
          </div>

          <div class="text-center pt-2">
            <p class="text-xs text-on-surface-variant italic font-semibold">
              "Prevenir é o maior ato de amor contínuo. Sua dedicação hoje é a segurança do amanhã."
            </p>
          </div>
        </div>

        <!-- Recursos Úteis -->
        <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div class="space-y-1">
            <h3 class="text-xl font-bold text-on-surface">Recursos Úteis</h3>
            <p class="text-xs text-on-surface-variant">Conecte-se com comunidades e organizações que podem ampliar o alcance da sua busca.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="https://busca.pet" target="_blank" class="bg-surface-container-high hover:bg-surface-variant p-4 rounded-2xl border border-outline-variant/30 space-y-2 transition-all group flex flex-col justify-between">
              <div>
                <strong class="text-on-surface font-bold text-sm block group-hover:text-primary">Busca Pet</strong>
                <span class="text-xs text-on-surface-variant">Cães farejadores e drones térmicos</span>
              </div>
              <span class="text-xs font-bold text-primary flex items-center gap-1">Acessar Página <span class="material-symbols-outlined text-xs">open_in_new</span></span>
            </a>

            <a href="https://www.nala.org.br" target="_blank" class="bg-surface-container-high hover:bg-surface-variant p-4 rounded-2xl border border-outline-variant/30 space-y-2 transition-all group flex flex-col justify-between">
              <div>
                <strong class="text-on-surface font-bold text-sm block group-hover:text-primary">NALA (Belo Horizonte)</strong>
                <span class="text-xs text-on-surface-variant">Rede de apoio a animais perdidos</span>
              </div>
              <span class="text-xs font-bold text-primary flex items-center gap-1">Acessar Recurso <span class="material-symbols-outlined text-xs">open_in_new</span></span>
            </a>

            <a href="https://petspot.app" target="_blank" class="bg-surface-container-high hover:bg-surface-variant p-4 rounded-2xl border border-outline-variant/30 space-y-2 transition-all group flex flex-col justify-between">
              <div>
                <strong class="text-on-surface font-bold text-sm block group-hover:text-primary">Petspot App</strong>
                <span class="text-xs text-on-surface-variant">Plataforma de cadastro integrado</span>
              </div>
              <span class="text-xs font-bold text-primary flex items-center gap-1">Acessar Recurso <span class="material-symbols-outlined text-xs">open_in_new</span></span>
            </a>

            <a href="https://www.clubedosviralatas.org.br" target="_blank" class="bg-surface-container-high hover:bg-surface-variant p-4 rounded-2xl border border-outline-variant/30 space-y-2 transition-all group flex flex-col justify-between">
              <div>
                <strong class="text-on-surface font-bold text-sm block group-hover:text-primary">Clube dos Viralatas</strong>
                <span class="text-xs text-on-surface-variant">ONG de proteção e apoio pet</span>
              </div>
              <span class="text-xs font-bold text-primary flex items-center gap-1">Acessar Recurso <span class="material-symbols-outlined text-xs">open_in_new</span></span>
            </a>
          </div>
        </div>

      </div>
    </div>
  `;
}

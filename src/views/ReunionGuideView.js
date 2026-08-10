import { store } from '../store.js';

export function renderReunionGuideView(container, showToast) {
  container.innerHTML = `
    <!-- Clean PetSearchers Light Theme -->
    <div class="py-12 bg-slate-50 text-slate-800 min-h-screen flex-grow font-sans">
      <div class="max-w-5xl mx-auto px-4 sm:px-8 space-y-12 animate-fade-in">
        
        <!-- Header Principal PetSearchers -->
        <div class="text-center max-w-4xl mx-auto space-y-4">
          <span class="inline-block text-xs uppercase font-extrabold tracking-widest text-amber-700 bg-amber-100 px-4 py-1.5 rounded-full border border-amber-200 shadow-sm">
            Manual Oficial PetSearchers Resgate Animal
          </span>
          <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-2">
            Manual para Reencontrar Pet Desaparecido
          </h1>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Entendemos sua dor e estamos aqui para apoiar. Agir com calma e método nas primeiras 48 horas é vital para trazer seu amigo para casa em segurança.
          </p>
        </div>

        <!-- Cuidando de Você -->
        <div class="bg-gradient-to-r from-amber-50/80 via-orange-50/60 to-amber-50/80 border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
          <div class="space-y-2">
            <h2 class="text-2xl font-black text-slate-900 flex items-center gap-2">
              <span class="material-symbols-outlined text-amber-600">favorite</span>
              <span>Cuidando de Você</span>
            </h2>
            <p class="text-sm text-slate-700 leading-relaxed">
              A busca por um amigo perdido é exaustiva e desafiadora. Lembre-se de que sua saúde emocional é vital para continuar esse processo com clareza. Aceite apoio e cuide de si mesmo no caminho.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
              <span class="material-symbols-outlined text-amber-600 text-xl">air</span>
              <span class="text-xs font-semibold text-slate-800">Faça pausas conscientes para respirar fundo</span>
            </div>
            <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
              <span class="material-symbols-outlined text-amber-600 text-xl">bedtime</span>
              <span class="text-xs font-semibold text-slate-800">Descanse, mesmo que por períodos curtos</span>
            </div>
            <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
              <span class="material-symbols-outlined text-amber-600 text-xl">group</span>
              <span class="text-xs font-semibold text-slate-800">Delegue pequenas tarefas a amigos</span>
            </div>
            <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
              <span class="material-symbols-outlined text-amber-600 text-xl">footprint</span>
              <span class="text-xs font-semibold text-slate-800">Foque em um passo de cada vez</span>
            </div>
          </div>

          <p class="text-xs font-bold text-amber-700 italic text-center pt-1">
            Estamos com você nessa jornada.
          </p>
        </div>

        <!-- GUIA GERAL: Dicas Gerais de Reencontro -->
        <div class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div class="space-y-2">
            <span class="text-xs font-extrabold uppercase tracking-widest text-amber-600">GUIA GERAL</span>
            <h2 class="text-2xl font-black text-slate-900">Dicas Gerais de Reencontro de Pets Perdidos</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Este guia complementa nossos manuais específicos para cães e gatos, oferecendo uma base sólida para qualquer pet perdido. Ter uma estratégia estruturada é o primeiro passo para o sucesso.
            </p>
            <p class="text-xs font-semibold text-slate-800 italic">Respire fundo, vamos começar.</p>
          </div>

          <!-- 3 Cards de Protocolos nas Primeiras Horas -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <div class="flex items-center gap-2 text-amber-700 font-bold text-sm">
                <span class="material-symbols-outlined">door_front</span>
                <span>Isolamento da Área</span>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                Verifique imediatamente todos os pontos de saída da sua residência e arredores. Algumas espécies se escondem muito perto de onde fugiram.
              </p>
            </div>

            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <div class="flex items-center gap-2 text-amber-700 font-bold text-sm">
                <span class="material-symbols-outlined">child_care</span>
                <span>Objetos de Cheiro</span>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                Coloque a caminha, mantas ou brinquedos favoritos do lado de fora. O olfato é bússola emocional para o pet estressado encontrar o caminho de casa.
              </p>
            </div>

            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <div class="flex items-center gap-2 text-amber-700 font-bold text-sm">
                <span class="material-symbols-outlined">campaign</span>
                <span>Alertas Vizinhos</span>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                Comunique vizinhos e porteiros imediatamente. Muitas vezes o pet é acolhido por alguém próximo minutos após a fuga.
              </p>
            </div>
          </div>
        </div>

        <!-- Primeiras horas: Ações Imediatas -->
        <div class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <h3 class="text-xl font-bold text-slate-900">Primeiras horas: Ações Imediatas</h3>
          <p class="text-xs text-slate-600">Cada minuto conta na segurança do seu amigo. Mantenha a calma e siga para o próximo passo.</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h4 class="font-bold text-sm text-slate-800 flex items-center gap-2">
                <span class="material-symbols-outlined text-amber-600 text-base">near_me</span>
                <span>Busque na vizinhança imediata</span>
              </h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                A maioria dos pets perdidos permanece a poucos metros de casa nas primeiras horas. Chame pelo nome com voz calma, cheque garagens e casas vizinhas.
              </p>
            </div>

            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h4 class="font-bold text-sm text-slate-800 flex items-center gap-2">
                <span class="material-symbols-outlined text-amber-600 text-base">local_hospital</span>
                <span>Verifique abrigos e clínicas</span>
              </h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                Entre em contato com CCZs, ONGs locais e clínicas veterinárias próximas. Alguém pode ter encontrado seu amigo e levado para um local seguro.
              </p>
            </div>

            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h4 class="font-bold text-sm text-slate-800 flex items-center gap-2">
                <span class="material-symbols-outlined text-amber-600 text-base">share</span>
                <span>Ative alertas em redes sociais</span>
              </h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                Poste fotos nítidas e informações de contato em grupos de bairro. O engajamento digital é vital para que a notícia chegue a quem viu o animal.
              </p>
            </div>
          </div>
        </div>

        <!-- Envolvendo a Comunidade & Campanhas Digitais -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm">
            <h3 class="font-bold text-lg text-slate-900 flex items-center gap-2">
              <span class="material-symbols-outlined text-amber-600">groups</span>
              <span>Envolvendo a Comunidade</span>
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A mobilização física é fundamental. Fale pessoalmente com vizinhos, porteiros, comércios locais e clínicas veterinárias da região. Deixe cartazes bem visíveis em pontos de alta circulação e peça permissão para fixá-los em quadros de avisos de condomínios e abrigos próximos.
            </p>
            <p class="text-xs font-bold text-amber-700 italic pt-1">
              A união da vizinhança é um braço forte na busca. Espalhe a mensagem e mantenha a esperança.
            </p>
          </div>

          <div class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm">
            <h3 class="font-bold text-lg text-slate-900 flex items-center gap-2">
              <span class="material-symbols-outlined text-amber-600">cell_tower</span>
              <span>Campanhas Digitais e Geolocalização</span>
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Utilize os anúncios precisos da Pet Searchers para envolver vizinhos, comércios locais e abrigos no raio exato onde seu pet sumiu. Nossas redes sociais e grupos locais ampliam o alcance da busca de forma estratégica e eficiente.
            </p>
            <p class="text-xs font-bold text-amber-700 italic pt-1">
              A tecnologia é agora sua maior aliada. Mantenha o foco, cada visualização é uma nova chance.
            </p>
          </div>
        </div>

        <!-- ANÚNCIOS QUE FUNCIONAM Banner -->
        <div class="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white rounded-3xl p-8 shadow-xl text-center space-y-4">
          <span class="text-xs font-extrabold uppercase tracking-widest opacity-90 block">
            ANÚNCIOS QUE FUNCIONAM • PET SEARCHERS • TECNOLOGIA DE PONTA • COMUNIDADE UNIDA
          </span>
          <h3 class="text-2xl sm:text-3xl font-black">Anúncios que Funcionam</h3>
          <p class="text-sm text-amber-50 max-w-2xl mx-auto leading-relaxed">
            Nossa tecnologia de geolocalização alcança quem está por perto. Com passos claros e apoio comunitário, aumentamos as chances de um reencontro feliz e seguro.
          </p>
          <div class="pt-2">
            <a href="#/cadastrar" class="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-black text-sm px-8 py-3.5 rounded-full transition-all shadow-lg hover:scale-105">
              <span class="material-symbols-outlined text-amber-600">campaign</span>
              <span>Criar Campanha agora</span>
            </a>
          </div>
        </div>

        <!-- Escolha o guia ideal para o seu pet -->
        <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center space-y-6">
          <div class="max-w-2xl mx-auto space-y-2">
            <h3 class="text-2xl font-black text-slate-900">Escolha o guia ideal para o seu pet</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Agora escolha o guia certo para o seu amigo: clique em “Ver guia de cães” ou “Ver guia de gatos” para seguir o passo a passo ideal e aumentar as chances de reencontro.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
            <a href="#/achar-cachorro-desaparecido" class="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm py-4 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-3 group">
              <span class="material-symbols-outlined text-2xl">sound_detection_dog_barking</span>
              <span>Ver guia de cães</span>
              <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">east</span>
            </a>

            <a href="#/encontrar-gato-perdido" class="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-black text-sm py-4 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-3 group">
              <span class="material-symbols-outlined text-2xl">cat</span>
              <span>Ver guia de gatos</span>
              <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">east</span>
            </a>
          </div>
        </div>

        <!-- Recursos Adicionais e Prevenção -->
        <div class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span class="material-symbols-outlined text-amber-600">verified_user</span>
            <span>Recursos Adicionais e Prevenção</span>
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-slate-50 p-4 rounded-xl space-y-1 border border-slate-200">
              <strong class="text-slate-900 font-bold text-xs block">Registro de Microchip</strong>
              <p class="text-xs text-slate-600">Mantenha os dados de contato do microchip sempre atualizados em bancos de dados nacionais.</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl space-y-1 border border-slate-200">
              <strong class="text-slate-900 font-bold text-xs block">Coleiras e Identificação</strong>
              <p class="text-xs text-slate-600">Use coleiras com placas de identificação legíveis e QR Codes que facilitem o contato imediato.</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl space-y-1 border border-slate-200">
              <strong class="text-slate-900 font-bold text-xs block">Portões e Perímetros</strong>
              <p class="text-xs text-slate-600">Revise regularmente portões, telas e muros para garantir que não existam rotas de fuga.</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl space-y-1 border border-slate-200">
              <strong class="text-slate-900 font-bold text-xs block">Hábitos de Segurança</strong>
              <p class="text-xs text-slate-600">Mantenha o pet sempre na guia em locais abertos e use redes de proteção em apartamentos.</p>
            </div>
          </div>

          <div class="text-center pt-2">
            <p class="text-xs text-slate-600 italic font-semibold">
              "Prevenir é o maior ato de amor contínuo. Sua dedicação hoje é a segurança do amanhã."
            </p>
          </div>
        </div>

        <!-- Recursos Úteis -->
        <div class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div class="space-y-1">
            <h3 class="text-xl font-bold text-slate-900">Recursos Úteis</h3>
            <p class="text-xs text-slate-600">Conecte-se com comunidades e organizações que podem ampliar o alcance da sua busca.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="https://busca.pet" target="_blank" class="bg-slate-50 hover:bg-slate-100 p-4 rounded-2xl border border-slate-200 space-y-2 transition-all group flex flex-col justify-between">
              <div>
                <strong class="text-slate-900 font-bold text-sm block group-hover:text-amber-600">Busca Pet</strong>
                <span class="text-xs text-slate-600">Cães farejadores e drones térmicos</span>
              </div>
              <span class="text-xs font-bold text-amber-600 flex items-center gap-1">Acessar Página <span class="material-symbols-outlined text-xs">open_in_new</span></span>
            </a>

            <a href="https://www.nala.org.br" target="_blank" class="bg-slate-50 hover:bg-slate-100 p-4 rounded-2xl border border-slate-200 space-y-2 transition-all group flex flex-col justify-between">
              <div>
                <strong class="text-slate-900 font-bold text-sm block group-hover:text-amber-600">NALA (Belo Horizonte)</strong>
                <span class="text-xs text-slate-600">Rede de apoio a animais perdidos</span>
              </div>
              <span class="text-xs font-bold text-amber-600 flex items-center gap-1">Acessar Recurso <span class="material-symbols-outlined text-xs">open_in_new</span></span>
            </a>

            <a href="https://petspot.app" target="_blank" class="bg-slate-50 hover:bg-slate-100 p-4 rounded-2xl border border-slate-200 space-y-2 transition-all group flex flex-col justify-between">
              <div>
                <strong class="text-slate-900 font-bold text-sm block group-hover:text-amber-600">Petspot App</strong>
                <span class="text-xs text-slate-600">Plataforma de cadastro integrado</span>
              </div>
              <span class="text-xs font-bold text-amber-600 flex items-center gap-1">Acessar Recurso <span class="material-symbols-outlined text-xs">open_in_new</span></span>
            </a>

            <a href="https://www.clubedosviralatas.org.br" target="_blank" class="bg-slate-50 hover:bg-slate-100 p-4 rounded-2xl border border-slate-200 space-y-2 transition-all group flex flex-col justify-between">
              <div>
                <strong class="text-slate-900 font-bold text-sm block group-hover:text-amber-600">Clube dos Viralatas</strong>
                <span class="text-xs text-slate-600">ONG de proteção e apoio pet</span>
              </div>
              <span class="text-xs font-bold text-amber-600 flex items-center gap-1">Acessar Recurso <span class="material-symbols-outlined text-xs">open_in_new</span></span>
            </a>
          </div>
        </div>

      </div>
    </div>
  `;
}

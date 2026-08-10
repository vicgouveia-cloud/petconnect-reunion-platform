export function renderVolunteerHelpView(container, showToast) {
  container.innerHTML = `
    <div class="py-10 bg-background flex-grow">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        <!-- Hero Section -->
        <div class="text-center max-w-2xl mx-auto space-y-4">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary px-3 py-1 rounded-full bg-primary-container/20 border border-primary-container/40">
            Rede Colaborativa de Proteção
          </span>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Como você quer ajudar hoje?
          </h1>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            Seu apoio é fundamental. Cada ação aproxima um pet perdido de sua família. Escolha a melhor forma de fazer parte dessa rede de cuidado.
          </p>
        </div>

        <!-- Bento Grid Layout for Options -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Option 1: PIX Donation -->
          <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center space-y-6 relative overflow-hidden group shadow-xl">
            <div class="w-20 h-20 rounded-full bg-primary-container/20 flex items-center justify-center relative z-10 text-primary border border-primary-container/30">
              <span class="material-symbols-outlined text-4xl">volunteer_activism</span>
            </div>
            <div class="space-y-2 relative z-10">
              <h2 class="text-2xl font-bold text-on-surface">Fazer uma doação via PIX</h2>
              <p class="text-xs text-on-surface-variant max-w-md leading-relaxed">
                Contribua para manter nossa plataforma funcionando gratuitamente e ajudar a financiar resgates de emergência em áreas de risco.
              </p>
            </div>
            
            <div class="w-full max-w-sm bg-surface-container-high rounded-2xl p-6 flex flex-col items-center space-y-4 relative z-10 border border-outline-variant/30 shadow-inner">
              <div class="w-44 h-44 bg-white p-3 rounded-xl shadow-md flex items-center justify-center">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=00020126580014BR.GOV.BCB.PIX0136faro-pet-recovery%40faro.org.br520400005303986540510.005802BR5922Faro%20Pet%20Recovery6009Sao%20Paulo62070503***6304E21A" alt="QR Code PIX Faro" class="w-full h-full object-contain">
              </div>
              <div class="w-full">
                <label class="block text-xs font-bold text-on-surface-variant mb-1 text-left">Chave PIX (E-mail CNPJ)</label>
                <div class="flex items-center gap-2">
                  <input id="pix-key-input" class="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl py-2 px-3 text-on-surface font-mono text-xs text-center focus:outline-none" readonly type="text" value="doacoes@faro-petrecovery.org.br">
                </div>
              </div>
              <button id="btn-copy-pix" class="w-full bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-xs py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all">
                <span class="material-symbols-outlined text-sm">content_copy</span>
                <span>Copiar Chave PIX</span>
              </button>
            </div>
          </div>

          <!-- Option 2: Boost Ad -->
          <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center space-y-6 relative overflow-hidden group shadow-xl">
            <div class="w-20 h-20 rounded-full bg-secondary-container/20 flex items-center justify-center relative z-10 text-secondary border border-secondary-container/30">
              <span class="material-symbols-outlined text-4xl">campaign</span>
            </div>
            <div class="space-y-2 relative z-10">
              <h2 class="text-2xl font-bold text-on-surface">Impulsionar um anúncio</h2>
              <p class="text-xs text-on-surface-variant max-w-md leading-relaxed">
                Aumente o alcance de um cartaz de pet perdido na sua região enviando alertas direcionados num raio de até 5km.
              </p>
            </div>

            <div class="w-full max-w-sm bg-surface-container-high rounded-2xl p-6 flex flex-col items-center space-y-4 relative z-10 border border-outline-variant/30 shadow-inner">
              <div class="relative w-full h-40 bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 flex items-center justify-center">
                <div class="absolute inset-0 bg-cover bg-center opacity-30" style="background-image: url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80')"></div>
                <div class="absolute w-12 h-12 bg-primary-container rounded-full opacity-30 animate-ping"></div>
                <div class="absolute w-4 h-4 bg-primary-container rounded-full border-2 border-white shadow-md z-10"></div>
                <div class="absolute bottom-2 left-2 right-2 bg-surface-container/90 backdrop-blur-md rounded-lg p-2 text-left flex items-center gap-2.5 shadow-sm border border-outline-variant/30">
                  <span class="material-symbols-outlined text-primary text-base">radar</span>
                  <div>
                    <p class="text-xs font-bold text-on-surface">Alcance Geográfico Raio 5km</p>
                    <p class="text-[10px] text-on-surface-variant">Disparo direto para celulares locais</p>
                  </div>
                </div>
              </div>

              <a href="#/pets-perdidos" class="w-full bg-secondary-container hover:bg-secondary-container/90 text-on-secondary-container font-extrabold text-xs py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all">
                <span class="material-symbols-outlined text-sm">rocket_launch</span>
                <span>Escolher Pet para Impulsionar</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Impact Explanation -->
        <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-8 sm:p-12 text-center space-y-8 shadow-2xl">
          <h3 class="text-2xl font-bold text-on-surface">O impacto da sua ajuda comunitária</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="flex flex-col items-center space-y-3 p-4 bg-surface-container-high/40 rounded-2xl border border-outline-variant/20">
              <span class="material-symbols-outlined text-3xl text-primary">speed</span>
              <h4 class="font-bold text-base text-on-surface">Ação Rápida nas 24h</h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">Recursos imediatos permitem buscas e alertas nas primeiras 24h cruciais.</p>
            </div>
            <div class="flex flex-col items-center space-y-3 p-4 bg-surface-container-high/40 rounded-2xl border border-outline-variant/20">
              <span class="material-symbols-outlined text-3xl text-primary">visibility</span>
              <h4 class="font-bold text-base text-on-surface">Maior Alcance Geográfico</h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">Anúncios impulsionados chegam aos celulares das pessoas exatas da área do sumiço.</p>
            </div>
            <div class="flex flex-col items-center space-y-3 p-4 bg-surface-container-high/40 rounded-2xl border border-outline-variant/20">
              <span class="material-symbols-outlined text-3xl text-primary">favorite</span>
              <h4 class="font-bold text-base text-on-surface">Apoio Emocional aos Tutores</h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">Sua contribuição sustenta a infraestrutura da rede de suporte ao tutor em crise.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  container.querySelector('#btn-copy-pix')?.addEventListener('click', () => {
    const pixInput = container.querySelector('#pix-key-input');
    navigator.clipboard.writeText(pixInput.value);
    showToast('Chave PIX copiada para a área de transferência!', 'success');
  });
}

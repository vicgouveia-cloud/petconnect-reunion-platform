import { store } from '../store.js';

export function renderRegisterPetView(container, showToast) {
  // Check URL query for default status (lost / found)
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
  const defaultStatus = urlParams.get('status') === 'found' ? 'found' : 'lost';

  container.innerHTML = `
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-6xl mx-auto px-4 sm:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-10">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary">Divulgação Imediata</span>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mt-1">Cadastrar Alerta de Pet</h1>
          <p class="text-sm text-on-surface-variant mt-2 leading-relaxed">
            Preencha os dados detalhados para acionar o alerta na comunidade e gerar o cartaz de buscas automático.
          </p>
        </div>

        <!-- Stepper Indicators -->
        <div class="flex items-center justify-between max-w-xl mx-auto mb-12 relative">
          <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-surface-container-highest -translate-y-1/2 z-0"></div>
          
          <div id="step-pill-1" class="step-pill z-10 flex flex-col items-center gap-1.5">
            <div class="w-10 h-10 rounded-full bg-primary-container text-on-primary-container font-extrabold text-sm flex items-center justify-center shadow-lg">1</div>
            <span class="text-xs font-bold text-primary">Informações do Pet</span>
          </div>

          <div id="step-pill-2" class="step-pill z-10 flex flex-col items-center gap-1.5 opacity-50">
            <div class="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant text-on-surface font-extrabold text-sm flex items-center justify-center">2</div>
            <span class="text-xs font-bold text-on-surface-variant">Local do Desaparecimento</span>
          </div>

          <div id="step-pill-3" class="step-pill z-10 flex flex-col items-center gap-1.5 opacity-50">
            <div class="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant text-on-surface font-extrabold text-sm flex items-center justify-center">3</div>
            <span class="text-xs font-bold text-on-surface-variant">Contato & Tutor</span>
          </div>
        </div>

        <!-- Main Form & Live Card Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Form Steps Column -->
          <div class="lg:col-span-7 bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 shadow-xl">
            <form id="register-pet-form" class="space-y-6">
              
              <!-- STEP 1: PET DETAILS -->
              <div id="form-step-1" class="form-step space-y-5">
                <h3 class="font-bold text-lg text-on-surface border-b border-outline-variant/20 pb-3 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">pets</span>
                  <span>Passo 1: Tipo & Características</span>
                </h3>

                <!-- Status Selector -->
                <div>
                  <label class="block text-xs font-bold text-on-surface-variant mb-2">Qual é o motivo do cadastro?</label>
                  <div class="grid grid-cols-2 gap-3">
                    <label class="cursor-pointer">
                      <input type="radio" name="status" value="lost" ${defaultStatus === 'lost' ? 'checked' : ''} class="peer sr-only">
                      <div class="p-3 text-center rounded-xl border border-outline-variant peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary-container transition-all font-bold text-xs">
                        Perdi meu Pet
                      </div>
                    </label>
                    <label class="cursor-pointer">
                      <input type="radio" name="status" value="found" ${defaultStatus === 'found' ? 'checked' : ''} class="peer sr-only">
                      <div class="p-3 text-center rounded-xl border border-outline-variant peer-checked:bg-secondary-container peer-checked:text-on-secondary-container peer-checked:border-secondary-container transition-all font-bold text-xs">
                        Avistei um Pet
                      </div>
                    </label>
                  </div>
                </div>

                <!-- Name & Species -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Nome do Pet (ou 'Desconhecido')</label>
                    <input type="text" id="input-name" required value="Mel" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Espécie</label>
                    <select id="input-type" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                      <option value="dog">Cão</option>
                      <option value="cat">Gato</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                </div>

                <!-- Breed & Color -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Raça</label>
                    <input type="text" id="input-breed" value="Shih-Tzu / SRD" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Cor Predominante</label>
                    <input type="text" id="input-color" value="Branco e Marrom" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  </div>
                </div>

                <!-- Photo URL -->
                <div>
                  <label class="block text-xs font-semibold text-on-surface-variant mb-1">Link de Foto do Pet (Ou imagem de exemplo)</label>
                  <input type="url" id="input-photo" value="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary placeholder:text-on-surface-variant/50">
                  <span class="text-[11px] text-on-surface-variant/70 mt-1 block">Insira o link direto de uma foto nítida.</span>
                </div>

                <!-- Description -->
                <div>
                  <label class="block text-xs font-semibold text-on-surface-variant mb-1">Descrição / Sinais Particulares</label>
                  <textarea id="input-description" rows="3" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">Usava laçinho vermelho, manca levemente da pata traseira direita. Responde dócil ao chamado.</textarea>
                </div>

                <div class="flex justify-end pt-4">
                  <button type="button" id="btn-next-1" class="bg-primary text-on-primary font-bold text-sm px-6 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2">
                    <span>Próximo Passo</span>
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>

              <!-- STEP 2: LOCATION -->
              <div id="form-step-2" class="form-step space-y-5 hidden">
                <h3 class="font-bold text-lg text-on-surface border-b border-outline-variant/20 pb-3 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">location_on</span>
                  <span>Passo 2: Localização Visto pela Última Vez</span>
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Cidade</label>
                    <input type="text" id="input-city" value="São Paulo" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Bairro</label>
                    <input type="text" id="input-neighborhood" value="Vila Mariana" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-on-surface-variant mb-1">Endereço / Referência Exata</label>
                  <input type="text" id="input-location" value="Rua Domingos de Morais, próximo à estação Santa Cruz" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                </div>

                <div>
                  <label class="block text-xs font-semibold text-on-surface-variant mb-1">Oferece Recompensa?</label>
                  <input type="text" id="input-reward" value="R$ 500" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary" placeholder="Ex: R$ 500 ou Sem recompensa">
                </div>

                <div class="flex justify-between pt-4">
                  <button type="button" id="btn-back-2" class="bg-surface-container-high text-on-surface font-bold text-sm px-6 py-3 rounded-full hover:bg-surface-variant transition-all">
                    Voltar
                  </button>
                  <button type="button" id="btn-next-2" class="bg-primary text-on-primary font-bold text-sm px-6 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2">
                    <span>Próximo Passo</span>
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>

              <!-- STEP 3: CONTACT & FINISH -->
              <div id="form-step-3" class="form-step space-y-5 hidden">
                <h3 class="font-bold text-lg text-on-surface border-b border-outline-variant/20 pb-3 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">contact_phone</span>
                  <span>Passo 3: Seus Dados de Contato</span>
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Seu Nome Completo</label>
                    <input type="text" id="input-contact-name" value="Renata Vasconcelos" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Telefone / WhatsApp</label>
                    <input type="text" id="input-contact-phone" value="(11) 99887-1122" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-on-surface-variant mb-1">Número do Microchip (opcional)</label>
                  <input type="text" id="input-microchip" value="Não informado" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                </div>

                <div class="p-4 rounded-2xl bg-primary-container/10 border border-primary-container/30 text-xs text-on-surface space-y-1">
                  <p class="font-bold text-primary flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-sm">verified</span>
                    Ao publicar este alerta:
                  </p>
                  <p class="text-on-surface-variant">Ele será incluído automaticamente no Mapa ao vivo, no Feed de Alertas e notificará a comunidade da região.</p>
                </div>

                <div class="flex justify-between pt-4">
                  <button type="button" id="btn-back-3" class="bg-surface-container-high text-on-surface font-bold text-sm px-6 py-3 rounded-full hover:bg-surface-variant transition-all">
                    Voltar
                  </button>
                  <button type="submit" class="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-sm px-8 py-3.5 rounded-full transition-all shadow-xl flex items-center gap-2">
                    <span class="material-symbols-outlined text-lg">send</span>
                    <span>Publicar Alerta Agora</span>
                  </button>
                </div>
              </div>

            </form>
          </div>

          <!-- Live Preview Card Column -->
          <div class="lg:col-span-5 space-y-4">
            <h4 class="font-bold text-xs uppercase tracking-widest text-on-surface-variant">Pré-visualização em Tempo Real</h4>
            
            <div id="preview-card" class="bg-surface-container border border-surface-container-highest rounded-2xl overflow-hidden shadow-2xl">
              <div class="relative h-60 w-full bg-surface-container-high">
                <img id="prev-img" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover">
                <div class="absolute top-3 left-3 flex gap-2">
                  <span id="prev-badge" class="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary-container text-on-primary-container shadow-md">
                    PERDIDO
                  </span>
                  <span id="prev-reward" class="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-500 text-white shadow-md">
                    R$ 500
                  </span>
                </div>
              </div>
              <div class="p-5 space-y-3">
                <div class="flex justify-between items-start">
                  <h3 id="prev-name" class="font-bold text-xl text-on-surface">Mel</h3>
                  <span id="prev-breed" class="text-xs text-on-surface-variant font-medium">Shih-Tzu / SRD</span>
                </div>
                <p id="prev-loc" class="text-xs text-on-surface-variant flex items-center gap-1 font-medium">
                  <span class="material-symbols-outlined text-primary text-sm">location_on</span>
                  Vila Mariana, São Paulo
                </p>
                <p id="prev-desc" class="text-xs text-on-surface-variant/80 line-clamp-3 leading-relaxed">
                  Usava laçinho vermelho, manca levemente da pata traseira direita. Responde dócil ao chamado.
                </p>
                <div class="pt-3 border-t border-outline-variant/20 flex justify-between items-center text-xs text-on-surface-variant">
                  <span>Tutor: <strong id="prev-contact">Renata Vasconcelos</strong></span>
                  <span id="prev-phone" class="text-primary font-bold">(11) 99887-1122</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;

  // Step switching logic
  let currentStep = 1;
  const step1 = container.querySelector('#form-step-1');
  const step2 = container.querySelector('#form-step-2');
  const step3 = container.querySelector('#form-step-3');

  const pill1 = container.querySelector('#step-pill-1');
  const pill2 = container.querySelector('#step-pill-2');
  const pill3 = container.querySelector('#step-pill-3');

  function updateSteps() {
    step1.classList.add('hidden');
    step2.classList.add('hidden');
    step3.classList.add('hidden');

    pill1.classList.add('opacity-50');
    pill2.classList.add('opacity-50');
    pill3.classList.add('opacity-50');

    if (currentStep === 1) {
      step1.classList.remove('hidden');
      pill1.classList.remove('opacity-50');
    } else if (currentStep === 2) {
      step2.classList.remove('hidden');
      pill2.classList.remove('opacity-50');
    } else if (currentStep === 3) {
      step3.classList.remove('hidden');
      pill3.classList.remove('opacity-50');
    }
  }

  container.querySelector('#btn-next-1')?.addEventListener('click', () => { currentStep = 2; updateSteps(); });
  container.querySelector('#btn-next-2')?.addEventListener('click', () => { currentStep = 3; updateSteps(); });
  container.querySelector('#btn-back-2')?.addEventListener('click', () => { currentStep = 1; updateSteps(); });
  container.querySelector('#btn-back-3')?.addEventListener('click', () => { currentStep = 2; updateSteps(); });

  // Live preview update handlers
  const updatePreview = () => {
    const statusVal = container.querySelector('input[name="status"]:checked')?.value || 'lost';
    const nameVal = container.querySelector('#input-name')?.value || 'Nome do Pet';
    const breedVal = container.querySelector('#input-breed')?.value || 'Raça';
    const photoVal = container.querySelector('#input-photo')?.value || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80';
    const descVal = container.querySelector('#input-description')?.value || '';
    const cityVal = container.querySelector('#input-city')?.value || 'São Paulo';
    const neighVal = container.querySelector('#input-neighborhood')?.value || 'Bairro';
    const rewardVal = container.querySelector('#input-reward')?.value || 'Sem recompensa';
    const contactVal = container.querySelector('#input-contact-name')?.value || 'Seu Nome';
    const phoneVal = container.querySelector('#input-contact-phone')?.value || '';

    const prevBadge = container.querySelector('#prev-badge');
    if (statusVal === 'lost') {
      prevBadge.textContent = 'PERDIDO';
      prevBadge.className = 'text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary-container text-on-primary-container shadow-md';
    } else {
      prevBadge.textContent = 'ENCONTRADO';
      prevBadge.className = 'text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container shadow-md';
    }

    container.querySelector('#prev-name').textContent = nameVal;
    container.querySelector('#prev-breed').textContent = breedVal;
    container.querySelector('#prev-img').src = photoVal;
    container.querySelector('#prev-desc').textContent = descVal;
    container.querySelector('#prev-loc').innerHTML = `<span class="material-symbols-outlined text-primary text-sm">location_on</span> ${neighVal}, ${cityVal}`;
    container.querySelector('#prev-reward').textContent = rewardVal;
    container.querySelector('#prev-contact').textContent = contactVal;
    container.querySelector('#prev-phone').textContent = phoneVal;
  };

  container.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', updatePreview);
    el.addEventListener('change', updatePreview);
  });

  // Submit Handler
  container.querySelector('#register-pet-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = container.querySelector('input[name="status"]:checked')?.value || 'lost';
    const name = container.querySelector('#input-name').value;
    const type = container.querySelector('#input-type').value;
    const breed = container.querySelector('#input-breed').value;
    const color = container.querySelector('#input-color').value;
    const photo = container.querySelector('#input-photo').value;
    const description = container.querySelector('#input-description').value;
    const city = container.querySelector('#input-city').value;
    const neighborhood = container.querySelector('#input-neighborhood').value;
    const location = container.querySelector('#input-location').value;
    const reward = container.querySelector('#input-reward').value;
    const contactName = container.querySelector('#input-contact-name').value;
    const contactPhone = container.querySelector('#input-contact-phone').value;
    const microchip = container.querySelector('#input-microchip').value;

    // Approximate geocode for map demo
    const baseLat = -23.5505 + (Math.random() - 0.5) * 0.1;
    const baseLng = -46.6333 + (Math.random() - 0.5) * 0.1;

    store.addPet({
      name, type, breed, color, photo, description, city, state: 'SP',
      neighborhood, location, reward, contactName, contactPhone, microchip,
      status, lat: baseLat, lng: baseLng
    });

    showToast(`Alerta de ${name} cadastrado com sucesso!`, 'success');
    window.location.hash = status === 'lost' ? '#/pets-perdidos' : '#/pets-encontrados';
  });
}

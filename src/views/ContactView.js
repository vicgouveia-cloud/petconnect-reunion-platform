export function renderContactView(container, showToast) {
  container.innerHTML = `
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary">Suporte & Comunidade</span>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mt-1">Fale Conosco</h1>
          <p class="text-sm text-on-surface-variant mt-2 leading-relaxed">
            Dúvidas sobre o funcionamento da rede Faro, parcerias com veterinárias ou relatos de uso? Envie sua mensagem.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-10 shadow-xl">
          <form id="contact-form" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-on-surface-variant mb-1">Seu Nome</label>
                <input type="text" required placeholder="Ex: Ana Souza" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
              </div>
              <div>
                <label class="block text-xs font-semibold text-on-surface-variant mb-1">Seu E-mail</label>
                <input type="email" required placeholder="ana@exemplo.com" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-on-surface-variant mb-1">Assunto</label>
              <select class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                <option>Apoio na busca de pet perdido</option>
                <option>Cadastro de ONG / Clínica Veterinária</option>
                <option>Reportar erro no mapa</option>
                <option>Outros assuntos</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-on-surface-variant mb-1">Mensagem</label>
              <textarea rows="5" required placeholder="Escreva aqui os detalhes..." class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary"></textarea>
            </div>

            <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-on-primary font-bold text-sm py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-lg">send</span>
              <span>Enviar Mensagem</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  `;

  container.querySelector('#contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Mensagem enviada com sucesso! Nossa equipe responderá em breve.', 'success');
    container.querySelector('#contact-form').reset();
  });
}

export function renderInformativosView(container) {
  const articles = [
    {
      id: 'art-1',
      title: 'Caminhos de Cheiro: Uma Estratégia Afetiva para Reencontrar Seu Cachorro',
      category: 'Táticas de Busca',
      date: '05 de Agosto de 2026',
      readTime: '4 min de leitura',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
      summary: 'Entenda como utilizar peças de vestuário usadas do tutor para criar rastros olfativos radiais que orientam o cão de volta à sua residência.',
      content: `
        <p>O olfato de um cão é aproximadamente 40 vezes mais potente do que o humano. Quando um cachorro se perde em um ambiente urbano barulhento, os estímulos visuais e auditivos causam sobrecarga sensorial, mas o cheiro familiar do seu tutor é um farol inconfundível.</p>
        <h4 class="font-bold text-base text-on-surface mt-4 mb-2">Passo a Passo da Estratégia:</h4>
        <ol class="list-decimal list-inside space-y-2 text-xs text-on-surface-variant leading-relaxed">
          <li><strong>Selecione a peça ideal:</strong> Use uma camiseta ou moletom usado durante um treino ou dia inteiro, sem lavar. O suor retém feromônios individuais marcantes.</li>
          <li><strong>Traçado em Estrela:</strong> Parta dos locais onde o animal foi visto pela última vez e caminhe vagarosamente em direção à sua casa, arrastando o tecido no pavimento da calçada.</li>
          <li><strong>Estação final:</strong> Deixe a roupa dobrada perto do portão com uma tigela de água limpa.</li>
        </ol>
      `
    },
    {
      id: 'art-2',
      title: 'Gatos Assustados: Entenda o Comportamento de Fobia Pós-Fuga',
      category: 'Psicologia Felina',
      date: '02 de Agosto de 2026',
      readTime: '6 min de leitura',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
      summary: 'Diferente dos cães, felinos entram em estado de catatonia de medo. Saiba como identificar seus esconderijos em um raio de 50 metros.',
      content: `
        <p>Quando um gato doméstico escapa por uma porta ou janela, a resposta imediata do seu sistema nervoso é a paralisia e o isolamento. Ele procurará o local mais escuro, apertado e de difícil acesso na vizinhança imediata.</p>
        <h4 class="font-bold text-base text-on-surface mt-4 mb-2">Por que as buscas diurnas falham?</h4>
        <p class="text-xs text-on-surface-variant leading-relaxed mb-3">Durante o dia, o movimento de pedestres e barulho de motores faz com que o gato permaneça em silêncio absoluto, mesmo quando seu nome é chamado pelo tutor amado.</p>
        <p class="text-xs text-on-surface-variant leading-relaxed">A chave do reencontro felino é a <strong>Busca Noturna Silenciosa entre 02h e 04h da manhã</strong>, equipada com uma lanterna tática apontada para vãos baixos para captar o reflexo ocular.</p>
      `
    },
    {
      id: 'art-3',
      title: 'Como Fazer Cartazes Eficazes para Pets Desaparecidos e Onde Afixá-los',
      category: 'Divulgação',
      date: '28 de Julho de 2026',
      readTime: '5 min de leitura',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
      summary: 'Cartazes poludos e ilegíveis são ignorados por motoristas. Veja as regras visuais para criar um aviso que converte avistamentos em ligações.',
      content: `
        <p>Um bom cartaz de busca precisa ser lido e compreendido em 3 segundos por um motorista a 40 km/h ou por um pedestre caminhando apressado.</p>
        <h4 class="font-bold text-base text-on-surface mt-4 mb-2">3 Regras de Ouro:</h4>
        <ul class="list-disc list-inside space-y-2 text-xs text-on-surface-variant leading-relaxed">
          <li><strong>Contraste Extremo:</strong> Fundo amarelo com letras pretas grandes (Wordmark "PROCURA-SE").</li>
          <li><strong>Foto Única Focalizada:</strong> Evite colagens. Use a melhor foto onde o rosto e porte do pet estejam nítidos.</li>
          <li><strong>Telefone Gigante:</strong> O número de contato deve ocupar pelo menos 25% da área total do cartaz.</li>
        </ul>
      `
    }
  ];

  container.innerHTML = `
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 space-y-10">
        
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary px-3 py-1 rounded-full bg-primary-container/15 border border-primary-container/30">
            Faro Informativos & Artigos
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-on-surface tracking-tight mt-2">
            Base de Conhecimento em Resgate
          </h1>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            Artigos técnicos, dicas comportamentais e orientações de utilidade pública para tutores e protetores de animais.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${articles.map(art => `
            <article class="bg-surface-container border border-surface-container-highest rounded-3xl overflow-hidden shadow-xl hover:border-primary/40 transition-all flex flex-col justify-between">
              <div>
                <div class="h-48 w-full overflow-hidden bg-surface-container-high relative">
                  <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover">
                  <span class="absolute top-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                    ${art.category}
                  </span>
                </div>

                <div class="p-6 space-y-3">
                  <div class="flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span>${art.date}</span>
                    <span>${art.readTime}</span>
                  </div>

                  <h3 class="font-bold text-lg text-on-surface leading-snug">${art.title}</h3>
                  <p class="text-xs text-on-surface-variant leading-relaxed line-clamp-3">${art.summary}</p>
                </div>
              </div>

              <div class="p-6 pt-0">
                <button class="read-article-btn w-full bg-surface-container-high hover:bg-surface-variant text-primary font-bold text-xs py-3 rounded-xl border border-outline-variant/30 flex items-center justify-center gap-1.5 transition-all" data-id="${art.id}">
                  <span>Ler Artigo Completo</span>
                  <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </article>
          `).join('')}
        </div>

      </div>
    </div>
  `;

  // Article Modal
  container.querySelectorAll('.read-article-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const art = articles.find(a => a.id === btn.getAttribute('data-id'));
      if (!art) return;

      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto';
      modal.innerHTML = `
        <div class="bg-surface-container border border-surface-container-highest rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-4 relative my-8 shadow-2xl">
          <button id="close-art-modal" class="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface">
            <span class="material-symbols-outlined">close</span>
          </button>
          <span class="text-xs font-bold uppercase text-primary">${art.category} • ${art.readTime}</span>
          <h2 class="text-2xl font-extrabold text-on-surface">${art.title}</h2>
          <div class="text-sm text-on-surface leading-relaxed border-t border-outline-variant/20 pt-4">
            ${art.content}
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('#close-art-modal').addEventListener('click', () => modal.remove());
      modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
    });
  });
}

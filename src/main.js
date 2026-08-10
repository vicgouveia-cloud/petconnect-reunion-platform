import { store } from './store.js';
import { renderHomeView } from './views/HomeView.js';
import { renderMapView } from './views/MapView.js';
import { renderRegisterPetView } from './views/RegisterPetView.js';
import { renderPetsFeedView } from './views/PetsFeedView.js';
import { renderOngsDirectoryView } from './views/OngsDirectoryView.js';
import { renderReunionGuideView } from './views/ReunionGuideView.js';
import { renderInformativosView } from './views/InformativosView.js';
import { renderContactView } from './views/ContactView.js';
import { renderVolunteerHelpView } from './views/VolunteerHelpView.js';

// DOM Elements
const app = document.getElementById('app');
const toastContainer = document.getElementById('toast-container');
const emergencyModal = document.getElementById('emergency-modal');
const btnEmergency = document.getElementById('btn-emergency');
const closeEmergencyModal = document.getElementById('close-emergency-modal');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Theme Switcher Logic
function initTheme() {
  const savedTheme = localStorage.getItem('faro_theme') || 'dark';
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    if (themeIcon) themeIcon.textContent = 'light_mode';
  } else {
    document.documentElement.classList.remove('dark');
    if (themeIcon) themeIcon.textContent = 'dark_mode';
  }
}

themeToggleBtn?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  if (isDark) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('faro_theme', 'light');
    if (themeIcon) themeIcon.textContent = 'dark_mode';
    showToast('Modo Claro ativado (Design System Quicksand/Inter)', 'info');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('faro_theme', 'dark');
    if (themeIcon) themeIcon.textContent = 'light_mode';
    showToast('Modo Escuro ativado (Design System Dark Faro)', 'info');
  }
});

// Router Mapping
const routes = {
  '/': renderHomeView,
  '/mapa': renderMapView,
  '/cadastrar': renderRegisterPetView,
  '/pets-perdidos': (container, showToast, openPetModal) => {
    window.location.hash = '#/mapa?status=lost';
  },
  '/pets-encontrados': (container, showToast, openPetModal) => {
    window.location.hash = '#/mapa?status=found';
  },
  '/ongs': renderOngsDirectoryView,
  '/guia': renderReunionGuideView,
  '/ajudar': renderVolunteerHelpView,
  '/informativos': renderInformativosView,
  '/fale-conosco': renderContactView,
};

// Router Handler
function handleRoute() {
  const hash = window.location.hash || '#/';
  const routePath = hash.split('?')[0].replace('#', '') || '/';

  // Highlight active nav link
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const linkRoute = link.getAttribute('data-route');
    if (linkRoute === routePath) {
      link.classList.add('text-primary', 'font-bold');
      link.classList.remove('text-on-surface-variant');
    } else {
      link.classList.remove('text-primary', 'font-bold');
      link.classList.add('text-on-surface-variant');
    }
  });

  // Close mobile drawer on navigation
  mobileMenu?.classList.add('hidden');

  const renderFn = routes[routePath] || renderHomeView;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderFn(app, showToast, openPetModal);
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  handleRoute();
});

// Mobile drawer toggle
mobileMenuToggle?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('hidden');
});

// Emergency Modal
btnEmergency?.addEventListener('click', () => {
  emergencyModal?.classList.remove('hidden');
});
closeEmergencyModal?.addEventListener('click', () => {
  emergencyModal?.classList.add('hidden');
});

// Toast Notifications Helper
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-emerald-600 text-white' : 'bg-surface-container-high border border-primary/40 text-on-surface';

  toast.className = `toast-enter pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl ${bgClass} text-xs font-bold max-w-sm`;
  toast.innerHTML = `
    <span class="material-symbols-outlined text-base">${type === 'success' ? 'check_circle' : 'info'}</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Global Pet Detail Card (Floating Panel over Map / View)
function openPetModal(petId) {
  const pet = store.getPetById(petId);
  if (!pet) return;

  // Remove existing floating detail cards if any
  document.querySelectorAll('.floating-pet-detail-card').forEach(el => el.remove());

  const cardPanel = document.createElement('div');
  cardPanel.className = 'floating-pet-detail-card fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 max-w-lg w-[calc(100%-2rem)] sm:w-full max-h-[82vh] overflow-y-auto bg-surface-container/95 border border-surface-container-highest rounded-3xl shadow-2xl backdrop-blur-xl animate-fade-in p-5 space-y-4';
  
  const isLost = pet.status === 'lost';
  const badgeBg = isLost ? 'bg-primary-container text-on-primary-container' : 'bg-secondary-container text-on-secondary-container';

  cardPanel.innerHTML = `
    <div class="flex justify-between items-center border-b border-surface-container-highest pb-3">
      <div class="flex items-center gap-2">
        <span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${badgeBg} shadow-sm">
          ${isLost ? 'PERDIDO' : 'AVISTADO'}
        </span>
        ${pet.reward && pet.reward !== 'Sem recompensa' && pet.reward !== 'N/A' ? `
          <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500 text-white shadow-sm flex items-center gap-1">
            <span class="material-symbols-outlined text-xs">payments</span> ${pet.reward}
          </span>
        ` : ''}
      </div>
      <button id="close-pet-card" class="w-8 h-8 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-all">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>

    <div class="flex gap-4 items-start">
      <img src="${pet.photo}" alt="${pet.name}" class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover flex-shrink-0 border border-outline-variant/30 shadow-md">
      <div class="space-y-1 flex-grow">
        <h2 class="text-xl font-extrabold text-on-surface leading-tight">${pet.name}</h2>
        <p class="text-xs text-on-surface-variant font-medium">${pet.breed} • ${pet.gender} • ${pet.color}</p>
        <div class="text-[11px] text-on-surface-variant flex items-center gap-1 pt-1">
          <span class="material-symbols-outlined text-primary text-xs">location_on</span>
          <span>${pet.neighborhood}, ${pet.city} (${pet.state})</span>
        </div>
        <span class="inline-block text-[10px] text-on-surface-variant font-semibold bg-surface-container-high px-2 py-0.5 rounded-md mt-1 border border-outline-variant/30">
          Avistado em ${pet.date} (${pet.time})
        </span>
      </div>
    </div>

    <div class="space-y-1">
      <h4 class="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Descrição & Detalhes</h4>
      <p class="text-xs text-on-surface leading-relaxed bg-surface-container-low p-3 rounded-xl border border-outline-variant/20 max-h-28 overflow-y-auto">
        ${pet.description}
      </p>
    </div>

    <div class="grid grid-cols-2 gap-2 text-[11px] bg-surface-container-high p-3 rounded-xl border border-outline-variant/30">
      <div><span class="text-on-surface-variant">Responsável:</span> <strong class="block text-on-surface text-xs mt-0.5">${pet.contactName}</strong></div>
      <div><span class="text-on-surface-variant">Microchip:</span> <strong class="block text-on-surface text-xs mt-0.5">${pet.microchip || 'Não informado'}</strong></div>
    </div>

    <div class="pt-1 flex gap-2">
      <a href="tel:${pet.contactPhone.replace(/\D/g, '')}" class="flex-1 bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all">
        <span class="material-symbols-outlined text-sm">call</span>
        <span>Ligar</span>
      </a>
      <a href="https://wa.me/55${pet.contactPhone.replace(/\D/g, '')}?text=Olá%20${encodeURIComponent(pet.contactName)},%20vi%20o%20alerta%20do%20pet%20${encodeURIComponent(pet.name)}%20no%20Faro!" target="_blank" class="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all">
        <span class="material-symbols-outlined text-sm">chat</span>
        <span>WhatsApp</span>
      </a>
    </div>
  `;

  document.body.appendChild(cardPanel);

  cardPanel.querySelector('#close-pet-card')?.addEventListener('click', () => {
    cardPanel.remove();
  });
}

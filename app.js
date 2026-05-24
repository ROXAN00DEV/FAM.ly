 /* ═══════════════════════════════════════════
   FAM.LY — app.js
   Shared logic for ALL pages
   ═══════════════════════════════════════════ */

/* ── SET ACTIVE NAV based on current page ── */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const map = {
    'index.html':    'home',
    '':              'home',
    'gallery.html':  'gallery',
    'messages.html': 'messages',
    'tree.html':     'tree',
    'menu.html':     'menu',
  };
  const active = map[page] || 'home';
  document.querySelectorAll('.nb[data-page]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === active);
  });
}

/* ── PARTICLES ── */
function initParticles() {
  const c = document.getElementById('particles');
  if (!c) return;
  const colors = [
    'rgba(201,168,76,',
    'rgba(155,92,224,',
    'rgba(92,143,224,',
    'rgba(224,92,160,',
  ];
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'pt';
    const s   = Math.random() * 4 + 1;
    const col = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = `
      width:${s}px; height:${s}px;
      left:${Math.random() * 100}%;
      bottom:${Math.random() * 30}%;
      background:${col}${(Math.random() * .6 + .2).toFixed(2)});
      box-shadow: 0 0 ${s * 3}px ${col}.4);
      animation-duration:${Math.random() * 15 + 8}s;
      animation-delay:${Math.random() * 12}s;
    `;
    c.appendChild(p);
  }
}

/* ── SCROLL REVEAL ── */
function setupScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.rv:not(.vis)').forEach(el => obs.observe(el));
}

/* ── TOAST ── */
function toast(msg) {
  let c = document.getElementById('toasts');
  if (!c) { c = document.createElement('div'); c.id = 'toasts'; c.className = 'toasts'; document.body.appendChild(c); }
  const d = document.createElement('div');
  d.className = 'toast'; d.textContent = msg;
  c.appendChild(d);
  setTimeout(() => {
    d.style.opacity = '0';
    d.style.transform = 'translateY(10px)';
    d.style.transition = '.3s';
    setTimeout(() => d.remove(), 300);
  }, 2800);
}

/* ── LIGHTBOX ── */
function openLbx(src) {
  let lbx = document.getElementById('lbx');
  if (!lbx) {
    lbx = document.createElement('div');
    lbx.id = 'lbx'; lbx.className = 'lbx';
    lbx.onclick = (e) => { if (e.target === lbx) closeLbx(); };
    document.body.appendChild(lbx);
  }
  const isVideo = src.startsWith('data:video/') || src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm') || src.toLowerCase().endsWith('.mov');
  if (isVideo) {
    lbx.innerHTML = `
      <div class="lbx-close" onclick="closeLbx()">✕</div>
      <video id="lbxVideo" src="${src}" controls autoplay loop style="max-width:100%; max-height:88vh; border-radius:16px; outline:none; box-shadow:var(--sh);"></video>
    `;
  } else {
    lbx.innerHTML = `
      <div class="lbx-close" onclick="closeLbx()">✕</div>
      <img id="lbxImg" src="${src}" alt="memory">
    `;
  }
  lbx.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLbx() {
  const lbx = document.getElementById('lbx');
  if (lbx) {
    lbx.classList.remove('open');
    const video = lbx.querySelector('video');
    if (video) {
      video.pause();
      video.src = '';
    }
  }
  document.body.style.overflow = '';
}

/* ── REACTIONS ── */
function toggleReact(btnId, type) {
  const btn = document.getElementById(btnId);
  if (!btn) return;
  const on = btn.classList.toggle('on');
  const countEl = btn.querySelector('.react-count');
  if (countEl) {
    const cur = parseInt(countEl.textContent) || 0;
    countEl.textContent = on ? cur + 1 : Math.max(0, cur - 1);
  }
  btn.classList.add('bounce');
  setTimeout(() => btn.classList.remove('bounce'), 400);
}

/* ── COMMENTS ── */
function toggleComments(boxId) {
  const box = document.getElementById(boxId);
  if (box) box.classList.toggle('open');
}

function addComment(boxId, inputEl) {
  const txt = inputEl.value.trim();
  if (!txt) return;
  const box = document.getElementById(boxId);
  if (!box) return;
  const div = document.createElement('div');
  div.className = 'c-item';
  div.innerHTML = `
    <div class="c-mini-av cl0" style="font-size:.62rem;font-weight:700;color:#080608">ME</div>
    <div class="c-bub">
      <div class="c-bub-name">You</div>
      <div class="c-bub-text">${txt}</div>
    </div>`;
  box.insertBefore(div, box.querySelector('.c-inp-row'));
  inputEl.value = '';
  toast('💬 Comment added!');
}

/* ── SLIDER ── */
let slideIndex = 0;
let slideTimer = null;

function initSlider(items) {
  const slider = document.getElementById('slider');
  const dotsEl = document.getElementById('sliderDots');
  if (!slider || !items) return;

  slider.innerHTML = items.map((s, i) => `
    <div class="slide ${i === 0 ? 'on' : ''}" id="sl${i}">
      <img src="${s.img}" alt="memory" loading="lazy">
      <div class="slide-ov"></div>
      <div class="slide-text">
        <div class="slide-tag">${s.tag}</div>
        <div class="slide-cap">${s.caption}</div>
      </div>
    </div>
  `).join('') + `
    <button class="sl-prev" onclick="slideTo(-1)">&#8249;</button>
    <button class="sl-next" onclick="slideTo(1)">&#8250;</button>
  `;

  if (dotsEl) {
    dotsEl.innerHTML = items.map((_, i) => `<div class="sdot ${i === 0 ? 'on' : ''}" onclick="slideGo(${i})"></div>`).join('');
  }

  clearInterval(slideTimer);
  slideTimer = setInterval(() => slideTo(1), 4500);
}

function slideTo(dir) {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.sdot');
  if (!slides.length) return;
  slides[slideIndex].classList.remove('on');
  if (dots[slideIndex]) dots[slideIndex].classList.remove('on');
  slideIndex = (slideIndex + dir + slides.length) % slides.length;
  slides[slideIndex].classList.add('on');
  if (dots[slideIndex]) dots[slideIndex].classList.add('on');
  clearInterval(slideTimer);
  slideTimer = setInterval(() => slideTo(1), 4500);
}

function slideGo(i) {
  const diff = i - slideIndex;
  if (diff !== 0) slideTo(diff > 0 ? 1 : -1);
  slideIndex = i;
}

/* ── BUILD NAV HTML ── */
function buildNav() {
  return `
  <nav class="bottom-nav">
    <a href="index.html"    class="nb" data-page="home">
      <svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
      <span class="nb-lbl">Home</span>
    </a>
    <a href="gallery.html"  class="nb" data-page="gallery">
      <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
      <span class="nb-lbl">Gallery</span>
    </a>
    <a href="menu.html"     class="nb" data-page="menu">
      <svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      <span class="nb-lbl">Menu</span>
    </a>
    <a href="messages.html" class="nb" data-page="messages">
      <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <span class="nb-lbl">Wall</span>
    </a>
    <a href="tree.html"     class="nb" data-page="tree">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="4" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="16" r="2"/><path d="M12 6v4M12 10c0 0-3 2-6 4M12 10c0 0 3 2 6 4"/></svg>
      <span class="nb-lbl">Tree</span>
    </a>
  </nav>`;
}

/* ── INJECT NAV into every page ── */
function injectNav() {
  document.body.insertAdjacentHTML('beforeend', buildNav());
  setActiveNav();
}

/* ── THEME TOGGLE ── */
let isDark = localStorage.getItem('famly-theme') !== 'light';
function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  const ic = document.getElementById('themeIc');
  if (ic) ic.textContent = isDark ? '🌙' : '☀️';
}
function toggleTheme() {
  isDark = !isDark;
  localStorage.setItem('famly-theme', isDark ? 'dark' : 'light');
  applyTheme();
  toast(isDark ? '🌙 Dark mode' : '☀️ Light mode');
}

/* ── INIT (runs on every page) ── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  injectNav();
  initParticles();
  setupScrollReveal();
});

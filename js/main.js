// Viaja por Colombia — main.js
(function () {
    'use strict';

    /* =========================================================
       SPRITE — dibuja la silueta del departamento
       Funciona tanto en index.html como en cada departamento
       ========================================================= */
    const isIndex   = !document.body.classList.contains('dept-page');
    const spriteSrc = document.body.dataset.root
        ? document.body.dataset.root + 'img/cada departamento mapas.jpg'
        : (isIndex ? 'img/cada departamento mapas.jpg' : '../img/cada departamento mapas.jpg');

    const spriteImg = new Image();
    let spriteReady = false;

    spriteImg.onload = () => { spriteReady = true; renderAllSprites(); };
    spriteImg.onerror = () => console.warn('Sprite de mapas no encontrado:', spriteSrc);
    spriteImg.src = spriteSrc;

    function drawSprite(canvas, id, color) {
        if (typeof DEPT_COORDS === 'undefined') return;
        const coords = DEPT_COORDS[id];
        if (!coords || !spriteReady) return;

        const MAX   = parseInt(canvas.dataset.size || '110');
        const ratio = coords.w / coords.h;
        const cw    = ratio >= 1 ? MAX : Math.round(MAX * ratio);
        const ch    = ratio >= 1 ? Math.round(MAX / ratio) : MAX;

        canvas.width  = cw;
        canvas.height = ch;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(spriteImg, coords.x, coords.y, coords.w, coords.h, 0, 0, cw, ch);

        // Tint con multiply para colorear la silueta
        ctx.globalCompositeOperation = 'multiply';
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, cw, ch);
        ctx.globalCompositeOperation = 'source-over';
    }

    function renderAllSprites() {
        // Tarjetas del index
        document.querySelectorAll('.dept-card[data-dept]').forEach(card => {
            const id     = card.dataset.dept;
            const color  = card.dataset.color || '#3b82f6';
            card.style.setProperty('--c', color);
            const canvas = card.querySelector('canvas');
            if (canvas) drawSprite(canvas, id, color);
        });

        // Hero de página interna
        const heroCanvas = document.querySelector('.dept-hero-map canvas');
        if (heroCanvas) {
            const id    = heroCanvas.dataset.dept;
            const color = heroCanvas.dataset.color || '#3b82f6';
            drawSprite(heroCanvas, id, color);
        }
    }

    /* =========================================================
       FILTRO DE REGIÓN (solo index)
       ========================================================= */
    document.querySelectorAll('.rfbtn, .rpill').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.rfbtn, .rpill').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const region = btn.dataset.region;
            document.querySelectorAll('.dept-card').forEach(card => {
                const show = region === 'all' || card.dataset.region === region;
                card.classList.toggle('hidden', !show);
            });
        });
    });

    /* =========================================================
       TABS de navegación interna (scroll spy ligero)
       ========================================================= */
    const tabs = document.querySelectorAll('.dept-tab');
    if (tabs.length) {
        const targets = Array.from(tabs).map(t => document.querySelector(t.getAttribute('href')));
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tabs.forEach(t => t.classList.remove('active'));
                    const active = document.querySelector(`.dept-tab[href="#${entry.target.id}"]`);
                    if (active) active.classList.add('active');
                }
            });
        }, { rootMargin: '-50% 0px -45% 0px' });
        targets.forEach(t => { if (t) observer.observe(t); });
    }

    /* =========================================================
       LIGHTBOX
       ========================================================= */
    const lb      = document.getElementById('lightbox');
    const lbImg   = lb ? lb.querySelector('img')             : null;
    const lbClose = lb ? lb.querySelector('.lightbox-close') : null;

    function openLightbox(src, alt) {
        if (!lb || !lbImg) return;
        lbImg.src = src;
        if (alt) lbImg.alt = alt;
        lb.classList.add('active');
        lb.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
        if (!lb) return;
        lb.classList.remove('active');
        lb.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => { if (lbImg) lbImg.src = ''; }, 280);
    }

    document.addEventListener('click', e => {
        const trigger = e.target.closest('.galeria a, .gastronomia a');
        if (trigger) {
            const img = trigger.querySelector('img');
            if (img && img.src) { e.preventDefault(); openLightbox(img.src, img.alt); }
        }
    });

    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lb)      lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

    if (lb) {
        let startY = 0;
        lb.addEventListener('touchstart', e => { startY = e.touches[0].clientY; }, { passive: true });
        lb.addEventListener('touchend',   e => { if (e.changedTouches[0].clientY - startY > 120) closeLightbox(); });
    }

})();

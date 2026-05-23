function initInfiniteCarousel({ grid, btnLeft, btnRight, scrollAmt, speed }) {
    const origCards = Array.from(grid.children);
    origCards.slice().reverse().forEach(c => grid.prepend(c.cloneNode(true)));
    origCards.forEach(c => grid.append(c.cloneNode(true)));

    const setWidth = grid.scrollWidth / 3;
    grid.scrollLeft = setWidth;

    let rafId;
    let animating = false; // true during button click smooth scroll

    function reposition() {
        const cur = grid.scrollLeft;
        if (cur >= setWidth * 2) grid.scrollLeft -= setWidth;
        else if (cur < setWidth)  grid.scrollLeft += setWidth;
    }

    function tick() {
        if (!animating) {
            grid.scrollLeft += speed;
            reposition();
        }
        rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

    grid.addEventListener('mouseenter', () => cancelAnimationFrame(rafId));
    grid.addEventListener('mouseleave', () => { rafId = requestAnimationFrame(tick); });

    function smoothScrollBy(delta) {
        animating = true;
        reposition();
        const start = grid.scrollLeft;
        const duration = 420;
        const t0 = performance.now();

        function step(now) {
            const p = Math.min((now - t0) / duration, 1);
            const ease = p < 0.5 ? 2*p*p : -1 + (4 - 2*p)*p;
            grid.scrollLeft = start + delta * ease;
            if (p < 1) {
                requestAnimationFrame(step);
            } else {
                reposition();
                animating = false;
            }
        }
        requestAnimationFrame(step);
    }

    btnLeft.addEventListener('click',  () => smoothScrollBy(-scrollAmt));
    btnRight.addEventListener('click', () => smoothScrollBy(scrollAmt));
}

initInfiniteCarousel({
    grid:      document.getElementById('certsGrid'),
    btnLeft:   document.getElementById('certLeft'),
    btnRight:  document.getElementById('certRight'),
    scrollAmt: 340,
    speed:     0.5,
});

initInfiniteCarousel({
    grid:      document.getElementById('skillsGrid'),
    btnLeft:   document.getElementById('skillLeft'),
    btnRight:  document.getElementById('skillRight'),
    scrollAmt: 200,
    speed:     0.6,
});

const panels = [
    { button: document.getElementById('h7Button'),     content: document.getElementById('h7Text'),     key: 'h7Text' },
    { button: document.getElementById('luantaButton'), content: document.getElementById('luantaText'), key: 'luantaText' },
    { button: document.getElementById('hessButton'),   content: document.getElementById('hessText'),   key: 'hessText' },
];

panels.forEach(panel => {
    panel.button.addEventListener('click', () => {
        const isOpen = panel.content.style.display === 'block';
        panels.forEach(p => { p.content.style.display = 'none'; });
        if (!isOpen) {
            panel.content.innerHTML = translations[currentLang][panel.key];
            panel.content.style.display = 'block';
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Update the node pulses randomly to simulate processing
const glowNodes = document.querySelectorAll('.glow-node');
glowNodes.forEach(node => {
    // randomize animation delay slightly so they don't pulse perfectly in sync
    const randomDelay = Math.random() * 2;
    node.style.animationDelay = `${randomDelay}s`;
});

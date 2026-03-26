const canvas = document.getElementById('hero-canvas');
const ctx = canvas?.getContext('2d');

if (canvas && ctx) {
    let particles = [];
    const mouse = {
        x: null,
        y: null,
        radius: 150
    };

    function isMobileViewport() {
        return window.innerWidth < 768;
    }

    const desktopOptions = {
        particleColor: "rgba(0, 255, 100, 0.5)",
        lineColorRgb: "0, 255, 100",
        lineAlpha: 0.22,
        particleAmount: 50,
        defaultRadius: 2,
        variantRadius: 2,
        defaultSpeed: 0.5,
        variantSpeed: 0.5,
        linkRadius: 200,
    };

    const mobileOptions = {
        ...desktopOptions,
        defaultRadius: 1.4,
        variantRadius: 1.2,
        lineAlpha: 0.15,
        particleAmount: 34,
    };

    let options = isMobileViewport() ? mobileOptions : desktopOptions;

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function resizeCanvas() {
        const heroSection = document.getElementById('hero');
        const previousWidth = canvas.width || heroSection.offsetWidth;
        const previousHeight = canvas.height || heroSection.offsetHeight;
        options = isMobileViewport() ? mobileOptions : desktopOptions;
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
        if (isMobileViewport()) {
            clearPointer();
        }

        return {
            previousWidth,
            previousHeight,
            nextWidth: canvas.width,
            nextHeight: canvas.height,
        };
    }

    function updatePointer(clientX, clientY) {
        if (isMobileViewport()) {
            clearPointer();
            return;
        }

        const heroRect = canvas.getBoundingClientRect();
        mouse.x = clientX - heroRect.left;
        mouse.y = clientY - heroRect.top;
    }

    function clearPointer() {
        mouse.x = null;
        mouse.y = null;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = options.defaultRadius + Math.random() * options.variantRadius;

            this.speedX = (Math.random() - 0.5) * options.defaultSpeed;
            this.speedY = (Math.random() - 0.5) * options.defaultSpeed;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x <= 0 || this.x >= canvas.width) {
                this.speedX *= -1;
                this.x = clamp(this.x, 0, canvas.width);
            }

            if (this.y <= 0 || this.y >= canvas.height) {
                this.speedY *= -1;
                this.y = clamp(this.y, 0, canvas.height);
            }

            if (mouse.x === null || mouse.y === null) {
                return;
            }

            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.hypot(dx, dy);

            if (distance === 0 || distance >= mouse.radius) {
                return;
            }

            // Push particles away from the pointer while keeping their base drift.
            const safeDistance = Math.max(distance, 0.001);
            const force = (mouse.radius - safeDistance) / mouse.radius;
            const push = force * 2.2;

            this.x += (dx / safeDistance) * push;
            this.y += (dy / safeDistance) * push;
            this.x = clamp(this.x, 0, canvas.width);
            this.y = clamp(this.y, 0, canvas.height);
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = options.particleColor;
            ctx.fill();
        }
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < options.particleAmount; i++) {
            particles.push(new Particle());
        }
    }

    function syncParticlesToCanvas(size) {
        if (!particles.length) {
            return;
        }

        const scaleX = size.previousWidth > 0 ? size.nextWidth / size.previousWidth : 1;
        const scaleY = size.previousHeight > 0 ? size.nextHeight / size.previousHeight : 1;

        particles.forEach((particle) => {
            particle.x = clamp(particle.x * scaleX, 0, size.nextWidth);
            particle.y = clamp(particle.y * scaleY, 0, size.nextHeight);
        });

        if (particles.length > options.particleAmount) {
            particles.length = options.particleAmount;
            return;
        }

        while (particles.length < options.particleAmount) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
            particle.update();
            particle.draw();
        });
        connectParticles();
        requestAnimationFrame(animate);
    }

    function connectParticles() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.hypot(dx, dy);

                if (distance >= options.linkRadius) {
                    continue;
                }

                const opacity = (1 - distance / options.linkRadius) * options.lineAlpha;
                if (opacity <= 0) {
                    continue;
                }

                ctx.strokeStyle = `rgba(${options.lineColorRgb}, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }

    window.addEventListener('resize', () => {
        const size = resizeCanvas();
        syncParticlesToCanvas(size);
    });

    window.addEventListener('mousemove', (event) => {
        updatePointer(event.clientX, event.clientY);
    }, { passive: true });

    window.addEventListener('mouseout', (event) => {
        if (!event.relatedTarget) {
            clearPointer();
        }
    });

    window.addEventListener('touchstart', clearPointer, { passive: true });
    window.addEventListener('touchmove', clearPointer, { passive: true });
    window.addEventListener('touchend', clearPointer, { passive: true });
    window.addEventListener('touchcancel', clearPointer, { passive: true });
    window.addEventListener('blur', clearPointer);

    resizeCanvas();
    createParticles();
    animate();
}


const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let mouse = {
    x: null,
    y: null,
    radius: 150
};

// --- Configuration ---
const options = {
    particleColor: "rgba(0, 255, 100, 0.5)", // Greenish, semi-transparent
    lineColor: "rgba(0, 255, 100, 0.15)",
    particleAmount: 50,
    defaultRadius: 2,
    variantRadius: 2,
    defaultSpeed: 0.5,
    variantSpeed: 0.5,
    linkRadius: 200,
};
// --------------------

function resizeCanvas() {
    const heroSection = document.getElementById('hero');
    canvas.width = heroSection.offsetWidth;
    canvas.height = heroSection.offsetHeight;
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
        // Mouse attraction
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= forceDirectionX * force * 2;
            this.y -= forceDirectionY * force * 2;
        } else {
             // Wall bouncing
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

            this.x += this.speedX;
            this.y += this.speedY;
        }
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

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    connectParticles();
    requestAnimationFrame(animate);
}

function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < options.linkRadius) {
                ctx.strokeStyle = options.lineColor;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

window.addEventListener('resize', () => {
    resizeCanvas();
    createParticles();
});

window.addEventListener('mousemove', (e) => {
    const heroRect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - heroRect.left;
    mouse.y = e.clientY - heroRect.top;
});

window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});


// Initial setup
resizeCanvas();
createParticles();
animate();

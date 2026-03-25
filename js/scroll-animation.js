/**
 * OakDev & AI AB — scroll-animation.js
 * Scrolling grid animation
 */
'use strict';

class ScrollGridAnimation {
    constructor() {
        // This animation is disabled on mobile devices for performance reasons.
        this.canvas = document.getElementById('scroll-grid-canvas');
        if (!this.canvas || typeof THREE === 'undefined' || typeof gsap === 'undefined') {
            console.log('ScrollGridAnimation: Missing canvas, THREE.js, or GSAP');
            return;
        }

        this.time = 0;
        this.isVisible = true;
        this.raf = null;

        this.setup();
        this.createGrid();
        this.createLightningDot();
        this.bindEvents();
        this.animate();
    }

    setup() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(
            75,
            this.canvas.clientWidth / this.canvas.clientHeight,
            0.1,
            1000
        );
        this.camera.position.z = 10;

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true,
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.setClearColor(0x000000, 0);
    }

    createGrid() {
        const count = 500;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        const color = new THREE.Color(0x76b900); // --green

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 20;
            positions[i3 + 1] = (Math.random() - 0.5) * 40;
            positions[i3 + 2] = (Math.random() - 0.5) * 10;

            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;

            sizes[i] = 0.05 + Math.random() * 0.1;
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

        const mat = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uPR: { value: Math.min(window.devicePixelRatio, 2) },
            },
            vertexShader: `
                attribute float aSize;
                attribute vec3 color;
                uniform float uTime;
                uniform float uPR;
                varying vec3 vColor;
                varying float vAlpha;
                void main() {
                    vColor = color;
                    vec3 pos = position;
                    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = aSize * uPR * (100.0 / -mv.z);
                    gl_Position = projectionMatrix * mv;
                    vAlpha = 0.1 + 0.2 * sin(uTime + pos.x * 0.1 + pos.y * 0.1);
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
                varying float vAlpha;
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    gl_FragColor = vec4(vColor, vAlpha);
                }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true,
        });

        this.grid = new THREE.Points(geo, mat);
        this.scene.add(this.grid);
    }

    createLightningDot() {
        const geo = new THREE.SphereGeometry(0.1, 16, 16);
        const mat = new THREE.MeshBasicMaterial({
            color: 0x39ff14, // --green-bright
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
        });
        this.lightningDot = new THREE.Mesh(geo, mat);
        this.lightningDot.position.y = 10;
        this.scene.add(this.lightningDot);

        const light = new THREE.PointLight(0x39ff14, 1, 10);
        light.position.copy(this.lightningDot.position);
        this.scene.add(light);

        gsap.to(this.lightningDot.position, {
            y: -10,
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            },
        });

        gsap.to(light.position, {
            y: -10,
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            },
        });
    }

    animate() {
        this.raf = requestAnimationFrame(() => this.animate());
        if (!this.isVisible) return;

        this.time += 0.01;

        if (this.grid) {
            this.grid.material.uniforms.uTime.value = this.time;
        }

        this.renderer.render(this.scene, this.camera);
    }

    bindEvents() {
        window.addEventListener('resize', () => this.onResize(), { passive: true });
        document.addEventListener('visibilitychange', () => {
            this.isVisible = !document.hidden;
        });
    }

    onResize() {
        const w = this.canvas.clientWidth;
        const h = this.canvas.clientHeight;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
}

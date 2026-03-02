/**
 * OakDev & AI AB — main.js
 * Three.js · GSAP · Lenis · i18n · Cookie Consent
 */
'use strict';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const TRANSLATIONS = {
  en: {
    /* Navbar */
    nav_home:        'Home',
    nav_studio:      'App Studio',
    nav_ai:          'AI & Automation',
    nav_consulting:  'Consulting',
    nav_about:       'About',
    nav_contact:     'Contact',
    nav_book:        'Book a Call',
    /* Cookie */
    cookie_title:    'We use cookies',
    cookie_text:     'We use cookies to improve your experience. You can accept all cookies or decline non-essential ones.',
    cookie_privacy:  'Privacy Policy',
    cookie_terms:    'Terms of Use',
    cookie_accept:   'Accept All',
    cookie_decline:  'Decline',
    /* Hero */
    hero_badge:      'App Studio & AI Product Company',
    hero_line1:      'From Idea',
    hero_line2:      'to Global',
    hero_line3:      'Scale.',
    hero_sub:        'OakDev is a premium app studio building mobile applications, AI platforms, and automation systems — from concept to launch for founders and forward-thinking companies.',
    hero_cta1:       'Start a Project',
    hero_cta2:       'Explore Our Work',
    scroll:          'Scroll',
    /* Services */
    services_tag:    'What We Build',
    services_title:  'Core Services',
    services_desc:   'From mobile apps to AI systems — we build production-ready products that deliver real user value at global scale.',
    service_01:      '01',
    service_02:      '02',
    service_03:      '03',
    studio_title:    'App Studio',
    studio_desc:     'Mobile and web applications built for production — from concept and MVP to App Store launch with rock-solid technical foundations and long-term scalability.',
    ai_title:        'AI & Automation',
    ai_desc:         'Intelligent systems, AI integrations, and workflow automation that transform how businesses operate — built with modern LLMs, APIs, and cloud infrastructure.',
    consulting_title:'Consulting',
    consulting_desc: 'Strategic technology guidance for startups and enterprises. Architecture reviews, product strategy, tech stack decisions, and execution roadmaps.',
    learn_more:      'Learn More',
    /* Stats */
    stat1_val:       '100',
    stat1_suf:       '%',
    stat1_label:     'Execution Focus',
    stat2_val:       'AI',
    stat2_suf:       '',
    stat2_label:     'First Approach',
    stat3_val:       '∞',
    stat3_suf:       '',
    stat3_label:     'Scalability',
    stat4_val:       '24',
    stat4_suf:       'h',
    stat4_label:     'Response Time',
    /* About */
    about_tag:       'About OakDev',
    about_title:     'A Product Studio Built for Execution',
    about_text1:     'OakDev is a modern app and AI product studio focused on building scalable digital products from idea to launch. We design, develop, and deploy high-quality mobile applications and AI-powered platforms for startups, founders, and forward-thinking companies.',
    about_text2:     'We operate at the intersection of technology, product strategy, and artificial intelligence — combining rapid execution with long-term scalability.',
    feat1:           'Production-ready from day one',
    feat2:           'Founder-driven, execution-focused',
    feat3:           'AI-first product development',
    feat4:           'Global scale architecture',
    about_card_label:'Our Mission',
    about_card_title:'Building software that delivers real user value and sustainable growth.',
    about_card_text: 'Rather than acting as a traditional agency, OakDev operates as a product-driven studio — emphasizing ownership, execution, and measurable outcomes.',
    /* Process */
    process_tag:     'How We Work',
    process_title:   'From Discovery to Launch',
    process_desc:    'A clear, proven process that takes your idea from concept to a production-ready product.',
    step1_num:       '01',
    step1_title:     'Discovery',
    step1_desc:      'We dive deep into your idea, market, and goals to define a clear product vision and technical roadmap.',
    step2_num:       '02',
    step2_title:     'Design & Plan',
    step2_desc:      'Architecture, UI/UX design, and technical planning — every detail mapped before a line of code is written.',
    step3_num:       '03',
    step3_title:     'Build',
    step3_desc:      'Rapid, high-quality development with weekly milestones and full transparency throughout the build.',
    step4_num:       '04',
    step4_title:     'Launch',
    step4_desc:      'App Store submission, deployment, monitoring, and ongoing support to ensure a successful launch.',
    /* Contact */
    contact_tag:     'Get in Touch',
    contact_title:   'Ready to Build Something',
    contact_title2:  'Extraordinary?',
    contact_desc:    "Let's talk about your project. We typically respond within 24 hours.",
    contact_h3:      'Contact Details',
    form_name:       'Full Name',
    form_email:      'Email Address',
    form_company:    'Company (optional)',
    form_service:    'Service of Interest',
    svc_app:         'App Development',
    svc_ai:          'AI & Automation',
    svc_consulting:  'Consulting',
    svc_other:       'Other',
    form_message:    'Tell us about your project',
    form_submit:     'Send Message',
    form_success:    "Message sent! We'll get back to you within 24 hours.",
    form_error:      'Something went wrong. Please try again or email us directly.',
    form_validation: 'Please fill in all required fields correctly.',
    /* Footer */
    footer_company:  'Company',
    footer_services: 'Services',
    footer_legal:    'Legal',
    footer_connect:  'Connect',
    footer_desc:     'Premium app studio and AI product company. Building tomorrow\'s digital products today.',
    footer_privacy:  'Privacy Policy',
    footer_terms:    'Terms of Use',
  },

  sv: {
    /* Navbar */
    nav_home:        'Hem',
    nav_studio:      'App Studio',
    nav_ai:          'AI & Automation',
    nav_consulting:  'Konsulting',
    nav_about:       'Om oss',
    nav_contact:     'Kontakt',
    nav_book:        'Boka samtal',
    /* Cookie */
    cookie_title:    'Vi använder cookies',
    cookie_text:     'Vi använder cookies för att förbättra din upplevelse. Du kan acceptera alla cookies eller avböja icke-nödvändiga.',
    cookie_privacy:  'Integritetspolicy',
    cookie_terms:    'Användarvillkor',
    cookie_accept:   'Acceptera alla',
    cookie_decline:  'Avböj',
    /* Hero */
    hero_badge:      'App Studio & AI-produktbolag',
    hero_line1:      'Från idé',
    hero_line2:      'till global',
    hero_line3:      'skala.',
    hero_sub:        'OakDev är ett premium app studio som bygger mobilapplikationer, AI-plattformar och automationssystem — från idé till lansering för grundare och framtidsorienterade företag.',
    hero_cta1:       'Starta ett projekt',
    hero_cta2:       'Utforska vårt arbete',
    scroll:          'Scrolla',
    /* Services */
    services_tag:    'Vad vi bygger',
    services_title:  'Våra tjänster',
    services_desc:   'Från mobilappar till AI-system — vi bygger produktionsfärdiga produkter som skapar verkligt användarvärde i global skala.',
    service_01:      '01',
    service_02:      '02',
    service_03:      '03',
    studio_title:    'App Studio',
    studio_desc:     'Mobila och webbaserade applikationer byggda för produktion — från koncept och MVP till lansering i App Store med starka tekniska grunder och långsiktig skalbarhet.',
    ai_title:        'AI & Automation',
    ai_desc:         'Intelligenta system, AI-integrationer och arbetsflödesautomation som transformerar hur företag verkar — byggda med moderna LLM:er, API:er och molninfrastruktur.',
    consulting_title:'Konsulting',
    consulting_desc: 'Strategisk teknologivägledning för startups och företag. Arkitekturgranskning, produktstrategi, teknologibeslut och genomförandefärdplaner.',
    learn_more:      'Läs mer',
    /* Stats */
    stat1_val:       '100',
    stat1_suf:       '%',
    stat1_label:     'Genomförandefokus',
    stat2_val:       'AI',
    stat2_suf:       '',
    stat2_label:     'Förstahandsmetod',
    stat3_val:       '∞',
    stat3_suf:       '',
    stat3_label:     'Skalbarhet',
    stat4_val:       '24',
    stat4_suf:       'h',
    stat4_label:     'Svarstid',
    /* About */
    about_tag:       'Om OakDev',
    about_title:     'Ett produktstudio byggt för genomförande',
    about_text1:     'OakDev är ett modernt app- och AI-produktstudio fokuserat på att bygga skalbara digitala produkter från idé till lansering. Vi designar, utvecklar och driftsätter mobilapplikationer och AI-drivna plattformar för startups, grundare och framtidsorienterade företag.',
    about_text2:     'Vi verkar i skärningspunkten mellan teknologi, produktstrategi och artificiell intelligens — kombinerar snabb genomförande med långsiktig skalbarhet.',
    feat1:           'Produktionsfärdig från dag ett',
    feat2:           'Grundardriven, genomförandefokuserad',
    feat3:           'AI-first produktutveckling',
    feat4:           'Global skalarkitektur',
    about_card_label:'Vår mission',
    about_card_title:'Att bygga programvara som skapar verkligt användarvärde och hållbar tillväxt.',
    about_card_text: 'Snarare än att agera som ett traditionellt byrå verkar OakDev som ett produktdrivet studio — med betoning på ägandeskap, genomförande och mätbara resultat.',
    /* Process */
    process_tag:     'Hur vi arbetar',
    process_title:   'Från idé till lansering',
    process_desc:    'En tydlig, beprövad process som tar din idé från koncept till en produktionsfärdig produkt.',
    step1_num:       '01',
    step1_title:     'Discovery',
    step1_desc:      'Vi fördjupar oss i din idé, marknad och mål för att definiera en tydlig produktvision och teknisk färdplan.',
    step2_num:       '02',
    step2_title:     'Design & planering',
    step2_desc:      'Arkitektur, UI/UX-design och teknisk planering — varje detalj kartlagd innan en rad kod skrivs.',
    step3_num:       '03',
    step3_title:     'Bygg',
    step3_desc:      'Snabb, högkvalitativ utveckling med veckovisa milstolpar och full transparens under hela bygget.',
    step4_num:       '04',
    step4_title:     'Lansering',
    step4_desc:      'App Store-inlämning, driftsättning, övervakning och löpande support för att säkerställa en framgångsrik lansering.',
    /* Contact */
    contact_tag:     'Kontakta oss',
    contact_title:   'Redo att bygga något',
    contact_title2:  'extraordinärt?',
    contact_desc:    'Låt oss prata om ditt projekt. Vi svarar vanligtvis inom 24 timmar.',
    contact_h3:      'Kontaktuppgifter',
    form_name:       'Fullständigt namn',
    form_email:      'E-postadress',
    form_company:    'Företag (valfritt)',
    form_service:    'Tjänst av intresse',
    svc_app:         'Apputveckling',
    svc_ai:          'AI & Automation',
    svc_consulting:  'Konsulting',
    svc_other:       'Övrigt',
    form_message:    'Berätta om ditt projekt',
    form_submit:     'Skicka meddelande',
    form_success:    'Meddelande skickat! Vi återkommer inom 24 timmar.',
    form_error:      'Något gick fel. Försök igen eller mejla oss direkt.',
    form_validation: 'Vänligen fyll i alla obligatoriska fält korrekt.',
    /* Footer */
    footer_company:  'Företag',
    footer_services: 'Tjänster',
    footer_legal:    'Juridik',
    footer_connect:  'Kontakta',
    footer_desc:     'Premium app studio och AI-produktbolag. Bygger morgondagens digitala produkter idag.',
    footer_privacy:  'Integritetspolicy',
    footer_terms:    'Användarvillkor',
  },
};

/* ============================================================
   LANGUAGE SYSTEM
   ============================================================ */
const Lang = (() => {
  const STORAGE_KEY = 'oakdev_lang';
  const SUPPORTED   = ['en', 'sv'];
  let current = 'en';

  function detect() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || 'en').split('-')[0];
    return SUPPORTED.includes(browser) ? browser : 'en';
  }

  function apply(lang) {
    if (!SUPPORTED.includes(lang)) return;
    current = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Translate all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const val = TRANSLATIONS[lang][key];
      if (val !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else if (el.tagName === 'OPTION') {
          el.textContent = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Update select option text (need special handling)
    document.querySelectorAll('[data-i18n-label]').forEach((el) => {
      const key = el.dataset.i18nLabel;
      const val = TRANSLATIONS[lang][key];
      if (val !== undefined) el.textContent = val;
    });

    // Update lang buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
  }

  function init() {
    current = detect();
    apply(current);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => apply(btn.dataset.lang));
    });
  }

  return { init, apply, get: () => current };
})();

/* ============================================================
   COOKIE CONSENT
   ============================================================ */
const Cookies = (() => {
  const STORAGE_KEY = 'oakdev_cookies';

  function show() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    // Delay show for a slick entrance
    setTimeout(() => banner.classList.remove('hidden'), 800);
  }

  function hide() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    banner.classList.add('hidden');
  }

  function init() {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (consent) return; // Already decided

    show();

    document.getElementById('cookieAccept')?.addEventListener('click', () => {
      localStorage.setItem(STORAGE_KEY, 'accepted');
      hide();
    });

    document.getElementById('cookieDecline')?.addEventListener('click', () => {
      localStorage.setItem(STORAGE_KEY, 'declined');
      hide();
    });
  }

  return { init };
})();

/* ============================================================
   THREE.JS HERO SCENE
   ============================================================ */
class HeroScene {
  constructor() {
    this.canvas = document.getElementById('hero-canvas');
    if (!this.canvas || typeof THREE === 'undefined') return;

    this.time       = 0;
    this.mouse      = { x: 0, y: 0 };
    this.targetMouse = { x: 0, y: 0 };
    this.isVisible  = true;
    this.raf        = null;
    this.glowLayers = [];

    // Reduce particles on mobile for performance
    this.particleCount = window.innerWidth < 768 ? 600 : 1400;

    this.setup();
    this.createParticles();
    this.createOrb();
    this.bindEvents();
    this.animate();
  }

  setup() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 90;

    this.renderer = new THREE.WebGLRenderer({
      canvas:           this.canvas,
      antialias:        true,
      alpha:            true,
      powerPreference:  'high-performance',
      precision:        'mediump',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);
  }

  createParticles() {
    const count     = this.particleCount;
    const positions = new Float32Array(count * 3);
    const colors    = new Float32Array(count * 3);
    const sizes     = new Float32Array(count);

    const c1 = new THREE.Color(0x76b900); // Nvidia green
    const c2 = new THREE.Color(0x39ff14); // Bright neon
    const c3 = new THREE.Color(0xaaffaa); // Pale green
    const c4 = new THREE.Color(0xffffff); // White

    for (let i = 0; i < count; i++) {
      const i3  = i * 3;
      // Spherical shell distribution — dense in mid-range
      const r   = 35 + Math.pow(Math.random(), 0.5) * 85;
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;

      positions[i3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi);

      // Color mixing
      const mix = Math.random();
      let c;
      if (mix < 0.50) c = c1;
      else if (mix < 0.75) c = c2;
      else if (mix < 0.90) c = c3;
      else c = c4;

      colors[i3]     = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;

      sizes[i] = 0.08 + Math.random() * 0.45;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('aSize',    new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime:  { value: 0 },
        uPR:    { value: Math.min(window.devicePixelRatio, 2) },
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

          // Gentle drift wave
          float wave = sin(uTime * 0.4 + pos.x * 0.025 + pos.y * 0.018) * 0.5;
          pos.z += wave;

          vec4 mv = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = aSize * uPR * (280.0 / -mv.z);
          gl_Position  = projectionMatrix * mv;

          // Twinkle
          vAlpha = 0.35 + 0.35 * sin(uTime * 1.2 + pos.x * 0.15 + pos.z * 0.1);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = 1.0 - smoothstep(0.2, 0.5, d);
          gl_FragColor = vec4(vColor, a * vAlpha);
        }
      `,
      transparent: true,
      depthWrite:  false,
      blending:    THREE.AdditiveBlending,
      vertexColors: true,
    });

    this.particles = new THREE.Points(geo, mat);
    this.scene.add(this.particles);
  }

  createOrb() {
    /* ── Core sphere ── */
    const orbGeo = new THREE.SphereGeometry(8, 64, 64);
    const orbMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime:   { value: 0 },
        uColor1: { value: new THREE.Color(0x76b900) },
        uColor2: { value: new THREE.Color(0x39ff14) },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewDir;
        varying vec2 vUv;

        void main() {
          vNormal  = normalize(normalMatrix * normal);
          vUv      = uv;
          vec4 mv  = modelViewMatrix * vec4(position, 1.0);
          vViewDir = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3  uColor1;
        uniform vec3  uColor2;
        varying vec3  vNormal;
        varying vec3  vViewDir;
        varying vec2  vUv;

        void main() {
          float fresnel = pow(1.0 - max(dot(vNormal, vViewDir), 0.0), 2.2);
          float pulse   = 0.5 + 0.5 * sin(uTime * 1.8);
          float band    = 0.5 + 0.5 * sin(vUv.y * 12.0 - uTime * 2.0);

          vec3 col = mix(uColor1, uColor2, fresnel + pulse * 0.25);
          float alpha = 0.12 + fresnel * 0.65 + band * 0.06;
          gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
        }
      `,
      transparent: true,
      side:        THREE.DoubleSide,
      blending:    THREE.AdditiveBlending,
      depthWrite:  false,
    });

    this.orb = new THREE.Mesh(orbGeo, orbMat);
    this.scene.add(this.orb);

    /* ── Atmospheric glow layers ── */
    const glowRadii  = [13, 18, 25];
    const glowAlphas = [0.30, 0.18, 0.08];

    glowRadii.forEach((r, idx) => {
      const glowGeo = new THREE.SphereGeometry(r, 32, 32);
      const glowMat = new THREE.ShaderMaterial({
        uniforms: {
          uTime:  { value: 0 },
          uColor: { value: new THREE.Color(0x76b900) },
          uAlpha: { value: glowAlphas[idx] },
        },
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform vec3  uColor;
          uniform float uAlpha;
          varying vec3  vNormal;

          void main() {
            float f = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.8);
            float p = 0.7 + 0.3 * sin(uTime * 1.4 + float(${idx}) * 1.1);
            gl_FragColor = vec4(uColor, f * p * uAlpha);
          }
        `,
        transparent: true,
        side:        THREE.BackSide,
        blending:    THREE.AdditiveBlending,
        depthWrite:  false,
      });

      const mesh = new THREE.Mesh(glowGeo, glowMat);
      this.scene.add(mesh);
      this.glowLayers.push({ mesh, mat: glowMat });
    });

    /* ── Orbiting rings ── */
    const ring1Geo = new THREE.TorusGeometry(11, 0.07, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color:       0x76b900,
      transparent: true,
      opacity:     0.35,
      blending:    THREE.AdditiveBlending,
    });
    this.ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    this.ring1.rotation.x = Math.PI * 0.3;
    this.scene.add(this.ring1);

    const ring2Geo = new THREE.TorusGeometry(15, 0.04, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color:       0x39ff14,
      transparent: true,
      opacity:     0.18,
      blending:    THREE.AdditiveBlending,
    });
    this.ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    this.ring2.rotation.x = Math.PI * 0.5;
    this.ring2.rotation.y = Math.PI * 0.2;
    this.scene.add(this.ring2);
  }

  animate() {
    this.raf = requestAnimationFrame(() => this.animate());
    if (!this.isVisible) return;

    this.time += 0.008;

    /* Particles */
    if (this.particles) {
      this.particles.material.uniforms.uTime.value = this.time;
      this.particles.rotation.y = this.time * 0.018;
      this.particles.rotation.x = this.time * 0.007;
    }

    /* Orb */
    if (this.orb) {
      this.orb.material.uniforms.uTime.value = this.time;
      this.orb.rotation.y = this.time * 0.25;
      this.orb.rotation.z = this.time * 0.12;
    }

    /* Glow layers */
    this.glowLayers.forEach(({ mat }) => {
      mat.uniforms.uTime.value = this.time;
    });

    /* Rings */
    if (this.ring1) this.ring1.rotation.z  = this.time * 0.28;
    if (this.ring2) {
      this.ring2.rotation.z = -this.time * 0.18;
      this.ring2.rotation.x += 0.001;
    }

    /* Smooth mouse parallax */
    this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.045;
    this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.045;
    this.camera.position.x = this.mouse.x * 12;
    this.camera.position.y = this.mouse.y * 8;
    this.camera.lookAt(0, 0, 0);

    this.renderer.render(this.scene, this.camera);
  }

  bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.targetMouse.x =  (e.clientX / window.innerWidth  - 0.5) * 2;
      this.targetMouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    // Touch support
    window.addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      this.targetMouse.x =  (t.clientX / window.innerWidth  - 0.5) * 2;
      this.targetMouse.y = -(t.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    window.addEventListener('resize', () => this.onResize(), { passive: true });

    document.addEventListener('visibilitychange', () => {
      this.isVisible = !document.hidden;
    });
  }

  onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}

/* ============================================================
   SMOOTH SCROLL — LENIS
   ============================================================ */
function initLenis() {
  if (typeof Lenis === 'undefined') return null;

  const lenis = new Lenis({
    duration:   1.2,
    easing:     (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction:  'vertical',
    smooth:     true,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  // Connect to GSAP ticker if available
  if (typeof gsap !== 'undefined') {
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // Smooth anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) lenis.scrollTo(target, { offset: -72 });
    });
  });

  return lenis;
}

/* ============================================================
   GSAP SCROLL ANIMATIONS
   ============================================================ */
function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* Hero entrance — stagger in elements */
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .from('.hero-badge',       { opacity: 0, y: 20, duration: 0.8 }, 0.3)
    .from('.headline-line',    { opacity: 0, y: 40, stagger: 0.12, duration: 0.9 }, 0.5)
    .from('.hero-subtext',     { opacity: 0, y: 20, duration: 0.8 }, 1.1)
    .from('.hero-ctas',        { opacity: 0, y: 20, duration: 0.7 }, 1.35)
    .from('.hero-social',      { opacity: 0, y: 15, duration: 0.6 }, 1.55)
    .from('.scroll-hint',      { opacity: 0, duration: 0.6 }, 2.0);

  /* Generic scroll reveal via data-reveal attributes
     Use gsap.set() to hide initially (no CSS opacity:0 needed),
     then gsap.to() to explicitly animate to visible — avoids CSS conflicts. */
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    const dir   = el.dataset.reveal;
    const init  = { opacity: 0 };
    if (!dir || dir === 'up') init.y = 40;
    else if (dir === 'left')  init.x = -50;
    else if (dir === 'right') init.x =  50;
    else if (dir === 'scale') { init.scale = 0.88; init.y = 20; }
    gsap.set(el, init);
  });

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay || 0) * 0.12;
    ScrollTrigger.create({
      trigger: el,
      start:   'top 88%',
      once:    true,
      onEnter: () => gsap.to(el, {
        opacity: 1, y: 0, x: 0, scale: 1,
        duration: 0.9, ease: 'power3.out', delay,
      }),
    });
  });

  /* Service cards stagger */
  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y:       50,
      duration: 0.85,
      delay:    i * 0.12,
      ease:    'power3.out',
      scrollTrigger: {
        trigger: card,
        start:   'top 90%',
        once:    true,
      },
    });
  });

  /* Process steps stagger */
  gsap.utils.toArray('.process-step').forEach((step, i) => {
    gsap.from(step, {
      opacity: 0,
      y:       35,
      duration: 0.8,
      delay:    i * 0.1,
      ease:    'power2.out',
      scrollTrigger: {
        trigger: step,
        start:   'top 88%',
        once:    true,
      },
    });
  });

  /* Section titles */
  gsap.utils.toArray('.section-title').forEach((title) => {
    gsap.from(title, {
      opacity: 0,
      y:       30,
      duration: 1.0,
      ease:    'power3.out',
      scrollTrigger: {
        trigger: title,
        start:   'top 88%',
        once:    true,
      },
    });
  });
}

/* ============================================================
   NAVBAR — scroll behaviour
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScroll = 0;
  let ticking    = false;

  window.addEventListener('scroll', () => {
    lastScroll = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('scrolled', lastScroll > 40);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu   = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  let open = false;

  toggle.addEventListener('click', () => {
    open = !open;
    toggle.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    // Prevent body scroll when menu open
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      open = false;
      toggle.classList.remove('open');
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (open && !navbar?.contains(e.target)) {
      open = false;
      toggle.classList.remove('open');
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
}

/* ============================================================
   STAT COUNTERS
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      observer.unobserve(target);

      const end      = parseFloat(target.dataset.count);
      const duration = 1800;
      const start    = performance.now();

      function update(now) {
        const t       = Math.min((now - start) / duration, 1);
        const eased   = 1 - Math.pow(1 - t, 3); // ease-out-cubic
        const current = Math.round(eased * end);
        target.textContent = current.toLocaleString();
        if (t < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    });
  }, { threshold: 0.5 });

  counters.forEach((c) => observer.observe(c));
}

/* ============================================================
   SCROLL REVEAL (IntersectionObserver fallback when GSAP unavailable)
   ============================================================ */
function initReveal() {
  if (typeof gsap !== 'undefined') return; // GSAP handles this

  // Hide elements via inline styles (no CSS dependency)
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    const dir = el.dataset.reveal;
    el.style.opacity    = '0';
    el.style.transition = 'opacity 0.85s ease, transform 0.85s ease';
    if (!dir || dir === 'up')  el.style.transform = 'translateY(30px)';
    else if (dir === 'left')   el.style.transform = 'translateX(-40px)';
    else if (dir === 'right')  el.style.transform = 'translateX(40px)';
    else if (dir === 'scale')  el.style.transform = 'scale(0.9) translateY(20px)';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) {
        target.style.opacity   = '1';
        target.style.transform = 'none';
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
}

/* ============================================================
   CONTACT FORM
   Input validation + honeypot + Formspree submission
   ============================================================ */
function initContactForm() {
  const form   = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form || !status) return;

  // Basic sanitize — strip HTML tags from text inputs
  function sanitize(str) {
    return String(str).replace(/[<>"'&]/g, (c) => ({
      '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '&': '&amp;',
    }[c]));
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const lang = Lang.get();
    const t    = TRANSLATIONS[lang];

    // Honeypot check
    const honey = form.querySelector('[name="website"]');
    if (honey && honey.value) return; // Silently reject bots

    const nameEl    = form.querySelector('[name="name"]');
    const emailEl   = form.querySelector('[name="email"]');
    const messageEl = form.querySelector('[name="message"]');
    const submitBtn = form.querySelector('[type="submit"]');

    // Validate
    const name    = nameEl?.value.trim() || '';
    const email   = emailEl?.value.trim() || '';
    const message = messageEl?.value.trim() || '';

    if (!name || !validateEmail(email) || message.length < 10) {
      status.textContent = t.form_validation;
      status.className   = 'form-status error';
      return;
    }

    // Submit
    submitBtn.disabled = true;
    submitBtn.textContent = '...';
    status.className = 'form-status';

    try {
      const res = await fetch(form.action, {
        method:  'POST',
        headers: { 'Accept': 'application/json' },
        body:    new FormData(form),
      });

      if (res.ok) {
        status.textContent = t.form_success;
        status.className   = 'form-status success';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      status.textContent = t.form_error;
      status.className   = 'form-status error';
    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = t.form_submit;
    }
  });
}

/* ============================================================
   MARQUEE — clone children for seamless loop fallback
   ============================================================ */
function initMarquee() {
  // Handled via CSS animation on duplicated HTML — nothing needed here
  // But we can reduce speed on mobile if desired
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  if (window.innerWidth < 480) {
    track.style.animationDuration = '20s';
  }
}

/* ============================================================
   ACTIVE NAV LINK — based on current page
   ============================================================ */
function setActiveNavLink() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-link, .mobile-link').forEach((a) => {
    const href = a.getAttribute('href')?.replace(/\/$/, '') || '';
    const isActive = (path === href) || (path === '' && href === '/');
    a.classList.toggle('active', isActive);
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Core
  Lang.init();
  Cookies.init();
  setActiveNavLink();
  initNavbar();
  initMobileMenu();
  initCounters();
  initReveal();
  initContactForm();
  initMarquee();

  // Three.js (non-blocking)
  if (typeof THREE !== 'undefined') {
    new HeroScene();
  }

  // Smooth scroll
  initLenis();

  // GSAP (after Lenis since it hooks into ticker)
  initGSAP();
});

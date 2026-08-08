/**
 * OakDev & AI AB — main.js
 * Three.js · GSAP · Lenis · i18n · Cookie Consent · Analytics
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
    nav_ai:          'AI in Apps',
    nav_consulting:  'How We Build',
    nav_insights:    'Inspiration',
    nav_about:       'About',
    nav_contact:     'Contact',
    nav_book:        'Start an App',
    nav_chatbot:     'Try our chatbot',
    chat_title:      'oakBot',
    chat_status:     'OakDev assistant online',
    chat_intro:      'Hi, I am oakBot. Ask me about mobile apps, web apps, AI features, or the products from OakDev App Studio.',
    chat_placeholder:'Ask about an app, an AI feature, or our studio...',
    chat_send:       'Send',
    chat_close:      'Close chat',
    chat_minimize:   'Minimize chat',
    chat_resume:     'Resume chat',
    chat_dock_label: 'oakBot minimized',
    chat_typing:     'Mapping signal...',
    chat_error:      'I can still help you find the right path. Tell me about the app you want to build or the AI feature you are considering.',
    explore_services: 'Explore the Studio',
    /* Cookie */
    cookie_title:    'We use cookies',
    cookie_text:     'We use cookieless measurement for basic traffic stats. Optional analytics cookies improve accuracy.',
    cookie_privacy:  'Privacy Policy',
    cookie_terms:    'Terms of Use',
    cookie_accept:   'Accept All',
    cookie_decline:  'Decline',
    /* Hero */
    hero_badge:      'Independent App Studio in Uddevalla',
    hero_line1:      'We turn ideas',
    hero_line2:      'into apps',
    hero_line3:      'people want to use.',
    hero_sub:        'OakDev designs, builds, and launches mobile apps, web apps, and thoughtful AI-powered product experiences — from the first prototype to the App Store.',
    hero_cta1:       'Start an App Project',
    hero_cta2:       'See Our Apps',
    hero_offer1_title: 'App MVP from SEK 39,000',
    hero_offer1_desc:  'A focused first version built to test and learn.',
    hero_offer2_title: 'Studio Build from SEK 89,000',
    hero_offer2_desc:  'Design, development, backend, and launch.',
    hero_offer3_title: 'AI That Belongs in the App',
    hero_offer3_desc:  'Search, assistants, personalization, voice, and vision.',
    scroll:          'Scroll',
    /* Services */
    services_tag:    'What We Build',
    services_title:  'Product Focus',
    services_desc:   'One studio, one clear focus: useful apps with strong design, reliable technology, and AI where it creates genuine product value.',
    service_01:      '01',
    service_02:      '02',
    service_03:      '03',
    studio_title:    'App Studio',
    studio_desc:     'Mobile and web applications built for production. From concept and MVP to App Store launch, with solid technical foundations and long-term scalability.',
    ai_title:        'AI in Apps',
    ai_desc:         'Natural AI features inside mobile and web apps: assistants, smart search, personalization, generation, voice, vision, and app-native automation.',
    consulting_title:'How We Build',
    consulting_desc: 'A focused studio process from product idea and prototype to development, store launch, learning, and the next release.',
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
    about_text2:     'We operate at the intersection of technology, product strategy, and artificial intelligence. Rapid execution combined with long-term scalability.',
    feat1:           'Production-ready from day one',
    feat2:           'Founder-driven, execution-focused',
    feat3:           'AI-first product development',
    feat4:           'Global scale architecture',
    about_card_label:'Our Mission',
    about_card_title:'Building software that delivers real user value and sustainable growth.',
    about_card_text: 'Rather than acting as a traditional agency, OakDev operates as a product-driven studio with a focus on ownership, execution, and measurable outcomes.',
    /* Process */
    process_tag:     'How we Work',
    process_title:   'From Discovery to Launch',
    process_desc:    'A clear, proven process that takes your idea from concept to a production-ready product.',
    step1_num:       '01',
    step1_title:     'Discovery',
    step1_desc:      'We dive deep into your idea, market, and goals to define a clear product vision and technical roadmap.',
    step2_num:       '02',
    step2_title:     'Design & Plan',
    step2_desc:      'Architecture, UI/UX design, and technical planning. Every detail is mapped out before a single line of code is written.',
    step3_num:       '03',
    step3_title:     'Build',
    step3_desc:      'Rapid, high-quality development with weekly milestones and full transparency throughout the build.',
    step4_num:       '04',
    step4_title:     'Launch',
    step4_desc:      'App Store submission, deployment, monitoring, and ongoing support to ensure a successful launch.',
    /* Contact */
    contact_tag:     'Get in Touch',
    contact_title:   'Ready to build something',
    contact_title2:  'Extraordinary?',
    contact_desc:    "Let's talk about your project. We typically respond within 24 hours.",
    contact_h3:      'Contact Details',
    form_name:       'Full Name',
    form_email:      'Email Address',
    form_company:    'Company (optional)',
    form_service:    'Project Type',
    svc_app:         'App Development',
    svc_ai:          'AI Feature in an App',
    svc_consulting:  'App Partnership',
    svc_other:       'Own Product / Collaboration',
    form_message:    'Tell us about your project',
    form_submit:     'Send Message',
    form_sending:    'Sending...',
    form_success:    "Thanks! We've received your message and will get back to you within 24 hours.",
    form_error:      'Something went wrong. Please try again or email us directly.',
    form_validation: 'Please fill in all required fields correctly.',
    /* Footer */
    footer_company:  'Company',
    footer_services: 'Studio',
    footer_local:    'Explore',
    footer_guides:   'Guides',
    footer_legal:    'Legal',
    footer_connect:  'Connect',
    footer_desc:     'Premium app studio and AI product company. Building tomorrow\'s digital products today.',
    footer_privacy:  'Privacy Policy',
    footer_terms:    'Terms of Use',
    /* App Studio page */
    studio_hero_badge:    'App Studio',
    studio_hero_title1:   'We Build Apps',
    studio_hero_title2:   'The World Uses.',
    studio_hero_sub:      'From idea to App Store, OakDev designs and ships native, cross-platform, and AI-powered applications that users love and companies scale on.',
    studio_see_apps:      'See Our Apps',
    studio_types_tag:     'What We Build',
    studio_types_title:   'Every Type of App.',
    studio_types_desc:    'We cover the full spectrum of mobile and web development — from native performance and AI intelligence to SaaS infrastructure and rapid MVPs.',
    type_native_title:    'Native iOS & Android',
    type_native_desc:     'Pure native apps built with Swift and Kotlin. Maximum performance, platform-perfect UX, and full hardware access.',
    type_cross_title:     'Cross-Platform',
    type_cross_desc:      'One codebase, two platforms. React Native and Flutter for fast time-to-market without sacrificing quality.',
    type_ai_title:        'AI-Powered Apps',
    type_ai_desc:         'Apps with integrated intelligence — LLM backends, real-time AI features, personalization engines, and smart automation built in.',
    type_web_title:       'Web & PWA',
    type_web_desc:        'Progressive Web Apps and modern web platforms. Installable, offline-capable, and blazing fast on any device.',
    type_saas_title:      'SaaS Platforms',
    type_saas_desc:       'Subscription platforms with admin panels, user management, billing systems, and scalable cloud infrastructure.',
    type_mvp_title:       'MVP & Rapid Build',
    type_mvp_desc:        'From idea to working product in weeks. Validated MVPs built for speed so you can test, learn, and iterate fast.',
    portfolio_tag:        'Our Portfolio',
    portfolio_h_pre:      'Apps From Our',
    portfolio_h_main:     'Studio',
    portfolio_desc:       'Live products, upcoming releases, and focused app concepts from OakDev.',
    vp_tagline:           'Live app',
    vp_name:              'VikingPal',
    vp_desc:              'A Viking-themed app with wisdom inspired by Asatru gods and Norse legends, designed as an atmospheric companion for daily reflection, mythic stories, and timeless guidance.',
    vp_cta:               'Open VikingPal',
    inkmeld_tagline:      'Coming Soon',
    inkmeld_name:         'inkMeld',
    inkmeld_desc:         'inkMeld is a coming creative writing app for turning loose ideas into polished drafts. It helps writers shape notes, scenes, and longer texts with a focused flow from spark to finished piece.',
    inkmeld_cta:          'Open inkMeld',
    cb_tagline:           'Faith Community Platform',
    cb_name:              'ChristBay',
    cb_desc:              'A spiritual community platform connecting believers through prayer, worship, and devotional content. Built for deep engagement and meaningful connections.',
    cb_cta:               'Visit ChristBay',
    tp_tagline:           'Smart Tipping Assistant',
    tp_name:              'TipsyPal',
    tp_desc:              'A smart drinking companion that helps users track their alcohol intake, make better decisions, and create more balanced social experiences.',
    tp_cta:               'Visit TipsyPal',
    vespera_tagline:      'Evening Prayer App',
    vespera_name:         'Vespera',
    vespera_desc:         'Vespera is a beautifully designed Catholic devotional app offering evening prayer, Scripture readings, and spiritual reflections—crafted for moments of stillness, prayer, and deeper faith every day.',
    vespera_cta:          'Visit Vespera',
    nuria_tagline:         'Islamic Companion',
    nuria_name:            'Nuria',
    nuria_desc:            'An inclusive Islamic app offering daily prayers, Quran readings, hadith, and guidance — beautifully designed for Muslims seeking a deeper connection to their faith.',
    nuria_cta:             'Visit Nuria',
    ayara_tagline:         'Shia Islamic Wisdom',
    ayara_name:            'Ayara',
    ayara_desc:            'A reverent Shia Islamic app delivering daily Du’a, Quran, and teachings of the Ahl al-Bayt — crafted with deep respect for Shia tradition and spiritual practice.',
    ayara_cta:             'Visit Ayara',
    tech_tag:             'Tech Stack',
    tech_title:           'Modern Technology',
    tech_desc:            'We use cutting-edge tools and frameworks to deliver production-grade apps that perform at global scale.',
    studio_cta_tag:       'Start Building',
    studio_cta_title:     'Your App Idea Deserves to Exist.',
    studio_cta_desc:      'Tell us what you\'re building. We\'ll take it from concept to launch.',
    studio_cta_btn:       'Start a Project',
    /* Shared pricing */
    pkg_popular:          'Most Popular',
    pkg_from:             'From',
    pkg_get_started:      'Start a Project',
    pkg_contact_us:       'Contact Us',
    /* App Studio pricing */
    app_pricing_tag:      'Pricing',
    app_pricing_title:    'App Development Packages',
    app_pricing_desc:     'Starting and example prices in SEK, excl. VAT. We start with a focused first version and quote larger builds after a short review.',
    pkg_mvp_name:         'MVP',
    pkg_mvp_tagline:      'Validate your idea fast',
    pkg_mvp_price:        'SEK 39,000',
    pkg_pro_name:         'Studio',
    pkg_pro_tagline:      'Full-featured production app',
    pkg_pro_price:        'SEK 89,000',
    pkg_ent_name:         'Enterprise',
    pkg_ent_tagline:      'Complex systems at scale',
    pkg_ent_price:        'SEK 149,000',
    /* AI in Apps page */
    ai_hero_badge:        'AI in Apps',
    ai_hero_title1:       'AI Should Make the App',
    ai_hero_title2:       'Feel More Useful.',
    ai_hero_sub:          'OakDev builds AI into mobile and web apps when it improves the actual product: smarter search, natural assistants, personalization, creation, voice, vision, and automation inside the user experience.',
    ai_see_more:          'See What\'s Possible',
    ai_types_tag:         'What We Build',
    ai_types_title:       'AI Features Users Understand.',
    ai_types_desc:        'We choose the smallest, clearest AI capability that improves the app — then design it as part of the product instead of adding a generic chatbot on top.',
    type_agents_title:    'In-App Assistants',
    type_agents_desc:     'Helpful assistants that understand the current screen, the user\'s intent, and the product\'s boundaries — with clear controls and predictable behavior.',
    type_llm_title:       'Generative Features',
    type_llm_desc:        'Text, ideas, summaries, recommendations, and creative tools powered by leading models and shaped around one focused product job.',
    type_rag_title:       'Smart Search & Knowledge',
    type_rag_desc:        'Fast, grounded answers from the app\'s own content and data, with sources, permissions, and fallbacks designed into the experience.',
    type_workflow_title:  'App-Native Automation',
    type_workflow_desc:   'Multi-step actions completed inside the product — always connected to a visible user goal, sensible confirmation, and human control.',
    type_ai_analytics:    'Personalization',
    type_ai_analytics_desc: 'Relevant recommendations, adaptive onboarding, and intelligent defaults that make the product feel simpler without becoming intrusive.',
    type_voice_vision:    'Voice & Vision AI',
    type_voice_vision_desc: 'Transcription, speech synthesis, image recognition, and video analysis. Multimodal AI for next-generation product interfaces.',
    agents_tag:           'Product Principles',
    agents_title:         'AI That Feels Native to the Product',
    agents_desc:          'The best AI feature is not the loudest one. It appears at the right moment, solves a clear user problem, and stays understandable when the model is uncertain.',
    benefit1_title:       'Useful in the Moment',
    benefit1_desc:        'AI appears where it helps the user finish a real task — not as a disconnected novelty or a chat window without context.',
    benefit2_title:       'Clear User Control',
    benefit2_desc:        'People can review, edit, confirm, or undo important AI actions. The interface makes the boundary between suggestion and decision obvious.',
    benefit3_title:       'Built for Real Usage',
    benefit3_desc:        'Latency, cost, fallbacks, model limits, and edge cases are product decisions from day one, not cleanup work after launch.',
    benefit4_title:       'Grounded by Design',
    benefit4_desc:        'When accuracy matters, the feature is anchored in approved product data and shows the user where an answer comes from.',
    benefit5_title:       'Privacy Considered Early',
    benefit5_desc:        'Data flows, retention, permissions, and model choices are shaped alongside the user experience before the feature ships.',
    benefit6_title:       'Improves with the Product',
    benefit6_desc:        'Feedback, quality signals, and usage data inform each release so the AI experience becomes more useful over time.',
    ai_pricing_tag:       'Pricing',
    ai_pricing_title:     'AI App Add-ons',
    ai_pricing_desc:      'Starting and example prices in SEK, excl. VAT, for AI capabilities added to an app project. Every feature is scoped around one user outcome.',
    pkg_ai1_name:         'AI Feature Sprint',
    pkg_ai1_tagline:      'Prototype one useful capability',
    pkg_ai1_price:        'SEK 24,900',
    pkg_ai2_name:         'AI-Powered MVP',
    pkg_ai2_tagline:      'A complete first app experience',
    pkg_ai2_price:        'SEK 59,000',
    pkg_ai3_name:         'AI Product',
    pkg_ai3_tagline:      'A larger app where AI is core',
    pkg_ai3_from:         'Scoped quote',
    pkg_ai3_price:        'Let\'s talk',
    ai_process_tag:       'How We Work',
    ai_process_title:     'From Use Case to Shipped Feature',
    ai_process_desc:      'A product-led process for finding the right AI behavior, proving it quickly, and shipping it as a reliable part of the app.',
    ai_step1_title:       'Product Fit',
    ai_step1_desc:        'We define the user problem, the success signal, and why AI is a better interface for this moment than ordinary software.',
    ai_step2_title:       'Prototype',
    ai_step2_desc:        'We test the interaction, model behavior, data boundaries, and fallbacks before committing to the full build.',
    ai_step3_title:       'Build',
    ai_step3_desc:        'The feature is developed as part of the app, with real interfaces, evaluation, telemetry, safeguards, and sensible cost controls.',
    ai_step4_title:       'Ship & Learn',
    ai_step4_desc:        'We release, measure how the feature helps, and improve it alongside the rest of the product.',
    ai_cta_title:         'Have an App That Could Be Smarter?',
    ai_cta_desc:          'Tell us what the user is trying to achieve. We will help shape the smallest AI feature worth putting into the product.',

    // AI Trends section
    ai_trends_tag:        'Product Patterns',
    ai_trends_sub:        'The technology changes quickly; these product principles remain useful. We choose models and architecture after the user experience is clear.',
    ai_trend1_title:      'Context-Aware UX',
    ai_trend1_desc:       'The feature understands the current screen, user intent, permissions, and relevant product data before it responds.',
    ai_trend2_title:      'Evaluation Loops',
    ai_trend2_desc:       'Real examples, quality criteria, and repeatable tests help the AI experience improve without relying on guesswork.',
    ai_trend3_title:      'Multimodal Interfaces',
    ai_trend3_desc:       'Text, voice, images, and camera input can become one natural interaction when the product use case calls for it.',
    ai_trend4_title:      'Model Flexibility',
    ai_trend4_desc:       'The product is designed around capabilities and quality targets so the underlying model can evolve without rewriting the experience.',

    // App Studio process page
    cons_hero_badge:       'Inside the App Studio',
    cons_hero_title1:      'From First Sketch',
    cons_hero_title2:      'to App Store',
    cons_hero_sub:         'OakDev is built around one craft: turning focused product ideas into polished mobile and web apps. Strategy, design, development, AI features, launch, and iteration live in the same studio.',
    cons_type_web_title:   'Product Discovery',
    cons_type_web_desc:    'We turn a promising idea into a clear user problem, a focused first release, and a product plan that can actually be built.',
    cons_type_ecom_title:  'UX & UI Design',
    cons_type_ecom_desc:   'Flows, prototypes, and interfaces designed for the device, the audience, and the job the app needs to do.',
    cons_type_db_title:    'iOS & Android',
    cons_type_db_desc:     'Native or cross-platform mobile apps with the performance, polish, and platform behavior users expect.',
    cons_type_cloud_title: 'Backend & APIs',
    cons_type_cloud_desc:  'Authentication, data, payments, notifications, and integrations shaped specifically around the product.',
    cons_type_cto_title:   'AI Features',
    cons_type_cto_desc:    'Assistants, smart search, personalization, generation, voice, and vision designed as natural parts of the app.',
    cons_type_soft_title:  'Launch & Growth',
    cons_type_soft_desc:   'Store preparation, release, measurement, feedback, and focused product improvements after launch.',
    cons_why_title:        'Built Like a Product Company',
    cons_why_sub:          'OakDev works as a small product studio: close to the idea, close to the code, and focused on shipping an app people can use.',
    cons_why1_title:       'Product Before Features',
    cons_why1_desc:        'Every feature must support a real user need and the smallest coherent first release.',
    cons_why2_title:       'Design and Code Together',
    cons_why2_desc:        'Interaction, visual design, backend, and mobile behavior evolve as one product instead of separate handoffs.',
    cons_why3_title:       'Clear Product Scope',
    cons_why3_desc:        'Each build has a visible goal, a defined release, and an agreed price before production starts.',
    cons_why4_title:       'Small Releases, Fast Learning',
    cons_why4_desc:        'We prefer a focused app in users\' hands over a large roadmap that never reaches the market.',
    cons_why5_title:       'Your Product, Your IP',
    cons_why5_desc:        'The product, source code, and design assets produced for your app belong to you.',
    cons_why6_title:       'Built Beyond Version One',
    cons_why6_desc:        'Architecture, analytics, and release practices are chosen so the app can keep improving after launch.',
    cons_process_title:    'From Idea to Release',
    cons_process_sub:      'A focused four-step studio process for moving from an early product thought to a real app.',
    cons_step1_num:        '01',
    cons_step1_title:      'Frame the Product',
    cons_step1_desc:       'We define the user, the core problem, and what a valuable first version must do — then leave the rest for later releases.',
    cons_step2_num:        '02',
    cons_step2_title:      'Prototype the Experience',
    cons_step2_desc:       'Key flows become a clickable experience so product decisions can be tested before the full build begins.',
    cons_step3_num:        '03',
    cons_step3_title:      'Build the App',
    cons_step3_desc:       'The product is designed, developed, and tested in short milestones with a working version visible throughout.',
    cons_step4_num:        '04',
    cons_step4_title:      'Launch & Learn',
    cons_step4_desc:       'We prepare the store release, monitor the first signals, and turn real feedback into the next focused version.',
    cons_pricing_title:    'Ways to Start',
    cons_pricing_sub:      'Start with the smallest useful step, then grow the product when the evidence supports it.',
    pkg_cons1_name:        'Prototype',
    pkg_cons1_price:       'SEK 19,000',
    pkg_cons1_period:      '',
    pkg_cons1_desc:        'Turn an idea into a testable product experience.',
    pkg_cons1_f1:          'Focused product brief',
    pkg_cons1_f2:          'Core user flows',
    pkg_cons1_f3:          'Clickable prototype',
    pkg_cons1_f4:          'Next-release recommendation',
    pkg_cons1_cta:         'Start a Prototype',
    pkg_cons2_name:        'MVP',
    pkg_cons2_price:       'SEK 39,000',
    pkg_cons2_period:      ' from',
    pkg_cons2_desc:        'A focused, working first version for real users.',
    pkg_cons2_f1:          'Product and UX design',
    pkg_cons2_f2:          'Core app functionality',
    pkg_cons2_f3:          'Backend where needed',
    pkg_cons2_f4:          'Test build and analytics',
    pkg_cons2_f5:          'Launch plan',
    pkg_cons2_cta:         'Build an MVP',
    pkg_cons3_name:        'Studio Build',
    pkg_cons3_price:       'From SEK 89,000',
    pkg_cons3_period:      '',
    pkg_cons3_desc:        'A polished production app designed for launch and growth.',
    pkg_cons3_f1:          'Complete product design',
    pkg_cons3_f2:          'Mobile or web app build',
    pkg_cons3_f3:          'Backend and integrations',
    pkg_cons3_f4:          'Store launch support',
    pkg_cons3_cta:         'Discuss Your App',
    cons_cta_title:        'Ready to Turn the Idea into an App?',
    cons_cta_desc:         'Tell us who the app is for and what it should help them do. We will shape the smallest strong first release.',

    // Contact page
    contact_hero_badge:     'Contact',
    contact_hero_title:     'Let\'s build something',
    contact_hero_title2:    'Together',
    contact_hero_sub:       'We are a small team of tech enthusiasts with over 20 years in the game — and we genuinely love talking about new technology. Reach out however feels right.',
    contact_ch_email_title: 'Email',
    contact_ch_email_desc:  'Best for project inquiries and detailed proposals',
    contact_ch_phone_title: 'Phone',
    contact_ch_phone_desc:  'Mon–Fri, 08:00–18:00 CET',
    contact_ch_wa_title:    'WhatsApp',
    contact_ch_wa_desc:     'Quick questions, ideas, or just to say hi',
    contact_ch_discord_title:'Discord',
    contact_ch_discord_desc: 'Join our community — nerds welcome',
    contact_form_title:     'Send a Message',
    contact_form_name:      'Your Name',
    contact_form_email:     'Your Email',
    contact_form_subject:   'Subject',
    contact_form_msg:       'Message',
    contact_form_placeholder:'Tell us about your project, ask a question, or just say hello...',
    contact_about_title:    'Who we Are',
    contact_about_text:     'OakDev & AI AB is an independent Swedish app studio based in Uddevalla on the west coast. We build mobile apps, web apps, and our own digital products with more than 20 years of combined software experience.',
    contact_about_text2:    'Our focus is apps. AI is part of the toolkit when it makes the product more useful, personal, or creative for the people using it.',
    contact_location_title: 'Based In',
    /* Privacy Policy */
    privacy_badge:          'Privacy Policy',
    privacy_title:          'Your Privacy',
    privacy_title2:         'Matters to Us',
    privacy_sub:            'We are committed to protecting your personal data and your rights under GDPR. This policy explains what we collect, why, and how you can control it.',
    privacy_updated:        'Last Updated: March 3, 2026',
    privacy_toc:            'Table of Contents',
    privacy_s1_title:       '1. Who We Are',
    privacy_s2_title:       '2. What Data We Collect',
    privacy_s3_title:       '3. How We Use Your Data',
    privacy_s4_title:       '4. Legal Basis for Processing',
    privacy_s5_title:       '5. Data Sharing & Third Parties',
    privacy_s6_title:       '6. Data Retention',
    privacy_s7_title:       '7. Cookies & Tracking',
    privacy_s8_title:       '8. Your Rights (GDPR)',
    privacy_s9_title:       '9. Children´s Privacy',
    privacy_s10_title:      '10. Third-Party Links',
    privacy_s11_title:      '11. Changes to This Policy',
    privacy_s12_title:      '12. Contact & Data Protection',
    privacy_rights_access:  'Right of Access',
    privacy_rights_rectify: 'Right to Rectification',
    privacy_rights_erase:   'Right to Erasure',
    privacy_rights_port:    'Right to Data Portability',
    privacy_rights_object:  'Right to Object',
    privacy_rights_restrict:'Right to Restrict Processing',
    privacy_rights_withdraw:'Right to Withdraw Consent',
    privacy_contact_dpa:    'Contact Us / DPA',
    privacy_back_top:       '↑ Back to Top',
    /* Terms of Use */
    terms_badge:            'Terms of Use',
    terms_title:            'Terms &',
    terms_title2:           'Conditions',
    terms_sub:              'By using our website and services you agree to these terms. Please read them carefully. They are governed by Swedish law.',
    terms_updated:          'Last Updated: March 3, 2026',
    terms_toc:              'Table of Contents',
    terms_s1_title:         '1. Acceptance of Terms',
    terms_s2_title:         '2. Our Services',
    terms_s3_title:         '3. Permitted Use',
    terms_s4_title:         '4. Intellectual Property',
    terms_s5_title:         '5. User Communications',
    terms_s6_title:         '6. Disclaimer of Warranties',
    terms_s7_title:         '7. Limitation of Liability',
    terms_s8_title:         '8. Indemnification',
    terms_s9_title:         '9. Third-Party Services',
    terms_s10_title:        '10. Governing Law',
    terms_s11_title:        '11. Changes to These Terms',
    terms_s12_title:        '12. Contact',
    terms_back_top:         '↑ Back to Top',
    /* About Page */
    about_badge:            'Our Story',
    about_title:            '20 Years of',
    about_title2:           'Building the Future',
    about_sub:              'More than two decades of building software have led to one clear focus: an independent app studio creating useful products with thoughtful design and AI where it earns its place.',
    about_story_tag:        'The Journey',
    about_story_title:      'Born in Uddevalla. Wired for the Future.',
    about_story_p1:         'It started with a love for code and an obsession with making complex technology feel useful. Over more than 20 years, that craft has moved through databases, web systems, mobile software, and complete digital products.',
    about_story_p2:         'Today OakDev is focused on apps: our own products and selected app builds with a clear user need. AI is used inside those products when it creates a better search, assistant, creative tool, personalized flow, or entirely new interaction.',
    about_story_p3:         'We are based in Kristevik, Uddevalla on the beautiful Swedish west coast. A small but razor-sharp team with big ambitions — and the track record to back them up.',
    about_stats_years:      'Years in Tech',
    about_stats_projects:   'Projects Delivered',
    about_stats_stacks:     'AI Models in Use',
    about_stats_uptime:     'On-Time Delivery',
    about_team_tag:         'The People',
    about_team_title:       'Meet the Team',
    about_team_sub:         'A tight-knit crew of engineers, AI builders, and creative thinkers — united by a love for cutting-edge technology and a deep shared interest in theology. Our team includes a Muslim, a Christian, and a Catholic, and this diversity of faith shapes the inclusive and meaningful products we build.',
    about_philip_title:     'Founder & App Developer',
    about_philip_bio:       '20+ years turning complex problems into useful software. Philip shapes OakDev’s products, builds the core app experiences, and brings AI into the product where it creates genuine user value.',
    about_elin_title:       'Developer & AI Integration',
    about_elin_bio:         'Elin bridges raw AI capabilities and real product experiences. She shapes the data, model behavior, and app flows that make OakDev’s AI-powered features useful and dependable.',
    about_jonna_title:      'Customer & Technical Support',
    about_jonna_bio:        'Jonna is responsible for support and operational structure, ensuring that both clients and projects receive the guidance and coordination needed to perform at their best.',
    about_jonathan_title:   'Marketing & Communication',
    about_jonathan_bio:     'Jonathan shapes how the world sees OakDev. From brand strategy to content and growth and he builds the signal that cuts through the noise.',
    about_adam_title:       'Product Manager',
    about_adam_bio:         'Adam leads product strategy and roadmap, making sure every feature we ship creates real value. He also works closely with marketing to ensure OakDev’s products are positioned and presented to the world in the best possible way.',
    about_clients_tag:      'Trusted By',
    about_clients_title:    'Companies we have worked with',
    about_values_tag:       'How We Work',
    about_values_title:     'Our Principles',
    about_v1_title:         'AI-Native by Default',
    about_v1_desc:          'Every solution we build is designed with AI in mind from day one and not bolted on as an afterthought.',
    about_v2_title:         'Craft over Shortcuts',
    about_v2_desc:          'We care deeply about quality. Clean architecture, maintainable code, and products that stand the test of time.',
    about_v3_title:         'Fast & Transparent',
    about_v3_desc:          'No bloated processes. You talk directly to the developer building your product. We ship fast, we communicate clearly.',
    about_v4_title:         'Always Learning',
    about_v4_desc:          'The tech landscape moves fast. We move faster — constantly exploring new models, tools, and frameworks to stay ahead.',
    about_cta_title:        'Ready to build something Remarkable?',
    about_cta_sub:          'Whether you have a fully-formed idea or just a spark, let us talk. We love early conversations.',
    about_cta_btn:          'Start a conversation',
  },

  sv: {
    /* Navbar */
    nav_home:        'Hem',
    nav_studio:      'App-Studio',
    nav_ai:          'AI i appar',
    nav_consulting:  'Så bygger vi',
    nav_insights:    'Inspiration',
    nav_about:       'Om oss',
    nav_contact:     'Kontakt',
    nav_book:        'Starta en app',
    nav_chatbot:     'Prova vår chatbot',
    chat_title:      'oakBot',
    chat_status:     'OakDev-assistent online',
    chat_intro:      'Hej, jag är oakBot. Fråga mig om mobilappar, webbappar, AI-funktioner eller produkterna från OakDev App Studio.',
    chat_placeholder:'Fråga om en app, en AI-funktion eller studion...',
    chat_send:       'Skicka',
    chat_close:      'Stäng chatten',
    chat_minimize:   'Minimera chatten',
    chat_resume:     'Öppna chatten igen',
    chat_dock_label: 'oakBot minimerad',
    chat_typing:     'Kartlägger signal...',
    chat_error:      'Jag kan fortfarande hjälpa dig hitta rätt väg. Berätta om appen du vill bygga eller AI-funktionen du funderar på.',
    explore_services: 'Utforska studion',
    /* Cookie */
    cookie_title:    'Vi använder cookies',
    cookie_text:     'Vi använder cookieless mätning för enkel trafikstatistik. Valfria analyscookies förbättrar precisionen.',
    cookie_privacy:  'Integritetspolicy',
    cookie_terms:    'Användarvillkor',
    cookie_accept:   'Acceptera alla',
    cookie_decline:  'Avböj',
    /* Hero */
    hero_badge:      'Fristående appstudio i Uddevalla',
    hero_line1:      'Vi gör idéer',
    hero_line2:      'till appar',
    hero_line3:      'människor vill använda.',
    hero_sub:        'OakDev designar, bygger och lanserar mobilappar, webbappar och genomtänkta AI-drivna produktupplevelser — från första prototypen till App Store.',
    hero_cta1:       'Starta ett appprojekt',
    hero_cta2:       'Se våra appar',
    hero_offer1_title: 'App-MVP från 39 000 kr',
    hero_offer1_desc:  'En fokuserad första version för att testa och lära.',
    hero_offer2_title: 'Studio-bygge från 89 000 kr',
    hero_offer2_desc:  'Design, utveckling, backend och lansering.',
    hero_offer3_title: 'AI som hör hemma i appen',
    hero_offer3_desc:  'Sök, assistenter, personalisering, röst och bild.',
    scroll:          'Scrolla',
    /* Services */
    services_tag:    'Vad vi bygger',
    services_title:  'Produktfokus',
    services_desc:   'En studio, ett tydligt fokus: användbara appar med stark design, stabil teknik och AI där det skapar verkligt produktvärde.',
    service_01:      '01',
    service_02:      '02',
    service_03:      '03',
    studio_title:    'App-Studio',
    studio_desc:     'Mobila och webbaserade applikationer byggda för produktion. Från koncept och MVP till App Store-lansering, med starka tekniska grunder och långsiktig skalbarhet.',
    ai_title:        'AI i appar',
    ai_desc:         'Naturliga AI-funktioner i mobil- och webbappar: assistenter, smart sök, personalisering, generering, röst, bild och automation i användarupplevelsen.',
    consulting_title:'Så bygger vi',
    consulting_desc: 'En fokuserad studioprocess från produktidé och prototyp till utveckling, butikslansering, lärande och nästa version.',
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
    about_title:     'En produktstudio byggd för genomförande',
    about_text1:     'OakDev är en modern app- och AI-produktstudio fokuserad på att bygga skalbara digitala produkter från idé till lansering. Vi designar, utvecklar och driftsätter mobilapplikationer och AI-drivna plattformar för startups och innovationssökande och framtidsorienterade företag.',
    about_text2:     'Vi verkar i skärningspunkten mellan teknologi, produktstrategi och artificiell intelligens. Snabbt genomförande kombinerat med långsiktig skalbarhet.',
    feat1:           'Produktionsfärdig från dag ett',
    feat2:           'Grundardriven, genomförandefokuserad',
    feat3:           'AI-first produktutveckling',
    feat4:           'Global skalarkitektur',
    about_card_label:'Vår mission',
    about_card_title:'Att bygga programvara som skapar verkligt användarvärde och hållbar tillväxt.',
    about_card_text: 'Snarare än att agera som en traditionell byrå verkar OakDev som en produktdriven studio med fokus på ägandeskap, genomförande och mätbara resultat.',
    /* Process */
    process_tag:     'Hur vi arbetar',
    process_title:   'Från idé till lansering',
    process_desc:    'En tydlig, beprövad process som tar din idé från koncept till en produktionsfärdig produkt.',
    step1_num:       '01',
    step1_title:     'Discovery',
    step1_desc:      'Vi fördjupar oss i din idé, marknad och mål för att definiera en tydlig produktvision och teknisk färdplan.',
    step2_num:       '02',
    step2_title:     'Design & planering',
    step2_desc:      'Arkitektur, UI/UX-design och teknisk planering. Varje detalj kartläggs innan en rad kod skrivs.',
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
    form_service:    'Typ av appprojekt',
    svc_app:         'Apputveckling',
    svc_ai:          'AI-funktion i en app',
    svc_consulting:  'App-partnerskap',
    svc_other:       'Egen produkt / samarbete',
    form_message:    'Berätta om ditt projekt',
    form_submit:     'Skicka meddelande',
    form_sending:    'Skickar...',
    form_success:    'Tack! Vi har tagit emot ditt meddelande och återkommer inom 24 timmar.',
    form_error:      'Något gick fel. Försök igen eller mejla oss direkt.',
    form_validation: 'Vänligen fyll i alla obligatoriska fält korrekt.',
    /* Footer */
    footer_company:  'Företag',
    footer_services: 'Studion',
    footer_local:    'Utforska',
    footer_guides:   'Guider',
    footer_legal:    'Juridik',
    footer_connect:  'Kontakta',
    footer_desc:     'App-Studio och AI-produktbolag, stationerat i Uddevalla. Bygger morgondagens digitala produkter idag.',
    footer_privacy:  'Integritetspolicy',
    footer_terms:    'Användarvillkor',
    /* App Studio page */
    studio_hero_badge:    'App-Studio',
    studio_hero_title1:   'Vi bygger appar',
    studio_hero_title2:   'som världen använder.',
    studio_hero_sub:      'Från idé till App Store skapar och lanserar OakDev nativa, plattformsoberoende och AI-drivna applikationer som användare uppskattar och företag kan växa med.',
    studio_see_apps:      'Se våra appar',
    studio_types_tag:     'Vad vi bygger',
    studio_types_title:   'Alla typer av appar.',
    studio_types_desc:    'Vi täcker hela spektrumet av mobil- och webbutveckling, från native-prestanda och AI-intelligens till SaaS-infrastruktur och snabba MVP:er.',
    type_native_title:    'Native iOS & Android',
    type_native_desc:     'Rena native-appar byggda med Swift och Kotlin. Maximal prestanda, plattformsanpassad UX och full hårdvaruåtkomst.',
    type_cross_title:     'Cross-Platform',
    type_cross_desc:      'En kodbas, två plattformar. React Native och Flutter för snabb marknadslansering utan att offra kvalitet.',
    type_ai_title:        'AI-drivna appar',
    type_ai_desc:         'Appar med integrerad intelligens, LLM-backends, realtids-AI-funktioner, personaliseringsmotorer och smart inbyggd automation.',
    type_web_title:       'Webb & PWA',
    type_web_desc:        'Progressive Web Apps och moderna webbplattformar. Installerbara, offline-kapabla och blixtsnabba på alla enheter.',
    type_saas_title:      'SaaS-plattformar',
    type_saas_desc:       'Prenumerationsplattformar med adminpaneler, användarhantering, faktureringssystem och skalbar molninfrastruktur.',
    type_mvp_title:       'MVP & Snabbbygge',
    type_mvp_desc:        'Från idé till fungerande produkt på några veckor. Fokuserade MVP:er byggda för att testa, lära och iterera snabbt.',
    portfolio_tag:        'Vår portfölj',
    portfolio_h_pre:      'Appar från',
    portfolio_h_main:     'studion',
    portfolio_desc:       'Lanserade produkter, kommande appar och fokuserade appkoncept från OakDev.',
    vp_tagline:           'Lanserad app',
    vp_name:              'VikingPal',
    vp_desc:              'En app med vikingatema, visdomar inspirerade av Asatrons gudar och nordiska legender — skapad som en stämningsfull följeslagare för daglig reflektion, mytiska berättelser och tidlös vägledning.',
    vp_cta:               'Öppna VikingPal',
    inkmeld_tagline:      'Kommande app',
    inkmeld_name:         'inkMeld',
    inkmeld_desc:         'inkMeld är en kommande skriv- och idéapp för att förvandla lösa tankar till genomarbetade texter. Den hjälper skribenter att forma anteckningar, scener och längre utkast i ett fokuserat flöde från första gnista till färdig text.',
    inkmeld_cta:          'Öppna inkMeld',
    cb_tagline:           'Plattform för troendegemenskap',
    cb_name:              'ChristBay',
    cb_desc:              'En andlig communityplattform som förenar troende genom bön, gudstjänst och andaktsinnehåll. Byggd för djupt engagemang och meningsfulla kopplingar.',
    cb_cta:               'Besök ChristBay',
    tp_tagline:           'Smart dricksassistent',
    tp_name:              'TipsyPal',
    tp_desc:              'En smart dryckesapp som hjälper användare att hålla koll på sitt alkoholintag, fatta bättre beslut och skapa mer balanserade sociala upplevelser.',
    tp_cta:               'Besök TipsyPal',
    vespera_tagline:      'App för aftonbön',
    vespera_name:         'Vespera',
    vespera_desc:         'Vespera är en vackert designad daglig andaktsapp med aftonbön, skriftläsning och katolsk andlig reflektion – skapad för stillhet, bön och fördjupning varje dag.',
    vespera_cta:          'Besök Vespera',
    nuria_tagline:         'Islamisk följeslagare',
    nuria_name:            'Nuria',
    nuria_desc:            'En inkluderande islamisk app med dagliga böner, koranläsning, hadith och vägledning — vackert utformad för muslimer som söker en djupare kontakt med sin tro.',
    nuria_cta:             'Besök Nuria',
    ayara_tagline:         'ShiaIslamisk visdom',
    ayara_name:            'Ayara',
    ayara_desc:            'En hängiven shiaIslamisk app med daglig Du’a, Koranen och undervisning från Ahl al-Bayt — skapad med djup respekt för shiaIslamisk tradition och andlig praktik.',
    ayara_cta:             'Besök Ayara',
    tech_tag:             'Teknikstack',
    tech_title:           'Modern Technology',
    tech_desc:            'Vi använder banbrytande verktyg och ramverk för att leverera produktionsfärdiga appar som presterar i global skala.',
    studio_cta_tag:       'Börja bygga',
    studio_cta_title:     'Din appidé förtjänar att existera.',
    studio_cta_desc:      'Berätta vad du vill skapa. Vi tar det från koncept till lansering.',
    studio_cta_btn:       'Starta ett projekt',
    /* Shared pricing */
    pkg_popular:          'Mest populär',
    pkg_from:             'Från',
    pkg_get_started:      'Starta ett projekt',
    pkg_contact_us:       'Kontakta oss',
    /* App Studio pricing */
    app_pricing_tag:      'Priser',
    app_pricing_title:    'App-utvecklingspaket',
    app_pricing_desc:     'Från- och exempelpriser i SEK exkl. moms. Vi börjar gärna med en fokuserad första version och offererar större byggen efter en kort genomgång.',
    pkg_mvp_name:         'MVP',
    pkg_mvp_tagline:      'Validera din idé snabbt',
    pkg_mvp_price:        '39 000 kr',
    pkg_pro_name:         'Studio',
    pkg_pro_tagline:      'Fullfunktionell produktionsapp',
    pkg_pro_price:        '89 000 kr',
    pkg_ent_name:         'Enterprise',
    pkg_ent_tagline:      'Komplexa system i stor skala',
    pkg_ent_price:        '149 000 kr',
    /* AI i appar */
    ai_hero_badge:        'AI i appar',
    ai_hero_title1:       'AI ska göra appen',
    ai_hero_title2:       'mer användbar.',
    ai_hero_sub:          'OakDev bygger in AI i mobil- och webbappar när det förbättrar själva produkten: smartare sök, naturliga assistenter, personalisering, skapande, röst, bild och automation i användarupplevelsen.',
    ai_see_more:          'Se vad som är möjligt',
    ai_types_tag:         'Vad vi bygger',
    ai_types_title:       'AI-funktioner användaren förstår.',
    ai_types_desc:        'Vi väljer den minsta och tydligaste AI-förmågan som förbättrar appen — och designar den som en del av produkten i stället för att lägga en generell chatbot ovanpå.',
    type_agents_title:    'Assistenter i appen',
    type_agents_desc:     'Hjälpsamma assistenter som förstår den aktuella vyn, användarens avsikt och produktens gränser — med tydliga kontroller och förutsägbart beteende.',
    type_llm_title:       'Generativa funktioner',
    type_llm_desc:        'Text, idéer, sammanfattningar, rekommendationer och kreativa verktyg drivna av ledande modeller och formade kring ett tydligt produktjobb.',
    type_rag_title:       'Smart sök & kunskap',
    type_rag_desc:        'Snabba, grundade svar från appens eget innehåll och data, med källor, behörigheter och reservlägen inbyggda i upplevelsen.',
    type_workflow_title:  'Appnära automation',
    type_workflow_desc:   'Flerstegshandlingar som utförs i produkten — alltid kopplade till ett synligt användarmål, tydlig bekräftelse och mänsklig kontroll.',
    type_ai_analytics:    'Personalisering',
    type_ai_analytics_desc: 'Relevanta rekommendationer, anpassad onboarding och intelligenta standardval som gör produkten enklare utan att bli påträngande.',
    type_voice_vision:    'Röst & visuell AI',
    type_voice_vision_desc: 'Transkription, talsyntes, bildigenkänning och videoanalys. Multimodal AI för nästa generations produktgränssnitt.',
    agents_tag:           'Produktprinciper',
    agents_title:         'AI som känns naturlig i produkten',
    agents_desc:          'Den bästa AI-funktionen är inte den mest högljudda. Den dyker upp i rätt ögonblick, löser ett tydligt användarproblem och förblir begriplig när modellen är osäker.',
    benefit1_title:       'Användbar i stunden',
    benefit1_desc:        'AI visas där den hjälper användaren att slutföra en verklig uppgift — inte som en frikopplad nyhet eller ett chattfönster utan kontext.',
    benefit2_title:       'Tydlig användarkontroll',
    benefit2_desc:        'Användaren kan granska, redigera, bekräfta eller ångra viktiga AI-handlingar. Gränsen mellan förslag och beslut är tydlig.',
    benefit3_title:       'Byggd för verklig användning',
    benefit3_desc:        'Svarstid, kostnad, reservlägen, modellgränser och kantfall är produktbeslut från dag ett — inte städarbete efter lansering.',
    benefit4_title:       'Grundad genom design',
    benefit4_desc:        'När precision är viktig förankras funktionen i godkänd produktdata och visar användaren var svaret kommer ifrån.',
    benefit5_title:       'Integritet från början',
    benefit5_desc:        'Dataflöden, lagring, behörigheter och modellval formas tillsammans med användarupplevelsen innan funktionen lanseras.',
    benefit6_title:       'Förbättras med produkten',
    benefit6_desc:        'Feedback, kvalitetssignaler och användningsdata vägleder varje version så AI-upplevelsen blir mer användbar över tid.',
    ai_pricing_tag:       'Priser',
    ai_pricing_title:     'AI-tillägg för appar',
    ai_pricing_desc:      'Från- och exempelpriser i SEK exkl. moms för AI-förmågor i ett appprojekt. Varje funktion avgränsas kring ett tydligt användarresultat.',
    pkg_ai1_name:         'AI Feature Sprint',
    pkg_ai1_tagline:      'Prototypa en användbar förmåga',
    pkg_ai1_price:        '24 900 kr',
    pkg_ai2_name:         'AI-driven MVP',
    pkg_ai2_tagline:      'En komplett första appupplevelse',
    pkg_ai2_price:        '59 000 kr',
    pkg_ai3_name:         'AI-produkt',
    pkg_ai3_tagline:      'En större app där AI är central',
    pkg_ai3_from:         'Offert efter scope',
    pkg_ai3_price:        'Vi pratar först',
    ai_process_tag:       'Hur vi arbetar',
    ai_process_title:     'Från användningsfall till lanserad funktion',
    ai_process_desc:      'En produktledd process för att hitta rätt AI-beteende, bevisa det snabbt och lansera det som en pålitlig del av appen.',
    ai_step1_title:       'Produktpassning',
    ai_step1_desc:        'Vi definierar användarproblemet, framgångssignalen och varför AI är ett bättre gränssnitt i just detta ögonblick än vanlig mjukvara.',
    ai_step2_title:       'Prototyp',
    ai_step2_desc:        'Vi testar interaktionen, modellbeteendet, datagränserna och reservlägena innan hela bygget startar.',
    ai_step3_title:       'Bygg',
    ai_step3_desc:        'Funktionen utvecklas som en del av appen, med riktiga gränssnitt, utvärdering, mätning, skyddsräcken och rimlig kostnadskontroll.',
    ai_step4_title:       'Lansera & lär',
    ai_step4_desc:        'Vi släpper funktionen, mäter hur den hjälper och förbättrar den tillsammans med resten av produkten.',
    ai_cta_title:         'Har du en app som kan bli smartare?',
    ai_cta_desc:          'Berätta vad användaren försöker uppnå. Vi hjälper dig forma den minsta AI-funktion som är värd att bygga in i produkten.',

    // AI Trends section (SV)
    ai_trends_tag:        'Produktmönster',
    ai_trends_sub:        'Tekniken förändras snabbt, men de här produktprinciperna håller. Vi väljer modell och arkitektur först när användarupplevelsen är tydlig.',
    ai_trend1_title:      'Kontextmedveten UX',
    ai_trend1_desc:       'Funktionen förstår den aktuella vyn, användarens avsikt, behörigheter och relevant produktdata innan den svarar.',
    ai_trend2_title:      'Utvärderingsloopar',
    ai_trend2_desc:       'Verkliga exempel, kvalitetskriterier och upprepningsbara tester gör att AI-upplevelsen kan förbättras utan gissningar.',
    ai_trend3_title:      'Multimodala gränssnitt',
    ai_trend3_desc:       'Text, röst, bilder och kamera kan bli en naturlig interaktion när produktens användningsfall motiverar det.',
    ai_trend4_title:      'Modellflexibilitet',
    ai_trend4_desc:       'Produkten designas kring förmågor och kvalitetsmål så att modellen kan utvecklas utan att hela upplevelsen behöver byggas om.',

    // App Studio-process (SV)
    cons_hero_badge:       'Inne i App Studion',
    cons_hero_title1:      'Från första skiss',
    cons_hero_title2:      'till App Store',
    cons_hero_sub:         'OakDev är byggt kring ett hantverk: att förvandla fokuserade produktidéer till polerade mobil- och webbappar. Strategi, design, utveckling, AI-funktioner, lansering och iteration finns i samma studio.',
    cons_type_web_title:   'Produktupptäckt',
    cons_type_web_desc:    'Vi gör en lovande idé till ett tydligt användarproblem, en fokuserad första version och en produktplan som faktiskt går att bygga.',
    cons_type_ecom_title:  'UX & UI-design',
    cons_type_ecom_desc:   'Flöden, prototyper och gränssnitt utformade för enheten, målgruppen och jobbet appen ska hjälpa till med.',
    cons_type_db_title:    'iOS & Android',
    cons_type_db_desc:     'Native- eller cross-platform-appar med den prestanda, finish och plattformslogik användarna förväntar sig.',
    cons_type_cloud_title: 'Backend & API:er',
    cons_type_cloud_desc:  'Autentisering, data, betalningar, notiser och integrationer formade specifikt kring produkten.',
    cons_type_cto_title:   'AI-funktioner',
    cons_type_cto_desc:    'Assistenter, smart sök, personalisering, generering, röst och bild designade som naturliga delar av appen.',
    cons_type_soft_title:  'Lansering & tillväxt',
    cons_type_soft_desc:   'Butiksförberedelser, release, mätning, feedback och fokuserade produktförbättringar efter lansering.',
    cons_why_title:        'Byggt som ett produktbolag',
    cons_why_sub:          'OakDev arbetar som en liten produktstudio: nära idén, nära koden och fokuserad på att lansera en app som går att använda.',
    cons_why1_title:       'Produkt före funktioner',
    cons_why1_desc:        'Varje funktion ska stödja ett verkligt användarbehov och den minsta sammanhängande första versionen.',
    cons_why2_title:       'Design och kod tillsammans',
    cons_why2_desc:        'Interaktion, visuell design, backend och mobilbeteende utvecklas som en produkt i stället för separata överlämningar.',
    cons_why3_title:       'Tydligt produktscope',
    cons_why3_desc:        'Varje bygge har ett synligt mål, en definierad release och ett överenskommet pris innan produktionen startar.',
    cons_why4_title:       'Små releaser, snabbt lärande',
    cons_why4_desc:        'Vi föredrar en fokuserad app i användarnas händer framför en stor roadmap som aldrig når marknaden.',
    cons_why5_title:       'Din produkt, din IP',
    cons_why5_desc:        'Produkten, källkoden och designmaterialet som tas fram för din app tillhör dig.',
    cons_why6_title:       'Byggd bortom version ett',
    cons_why6_desc:        'Arkitektur, analys och releasepraxis väljs så att appen kan fortsätta förbättras efter lanseringen.',
    cons_process_title:    'Från idé till release',
    cons_process_sub:      'En fokuserad fyrstegsprocess från en tidig produkttanke till en verklig app.',
    cons_step1_num:        '01',
    cons_step1_title:      'Rama in produkten',
    cons_step1_desc:       'Vi definierar användaren, kärnproblemet och vad en värdefull första version måste göra — resten sparas till senare releaser.',
    cons_step2_num:        '02',
    cons_step2_title:      'Prototypa upplevelsen',
    cons_step2_desc:       'Nyckelflöden blir en klickbar upplevelse så att produktbeslut kan testas innan hela bygget börjar.',
    cons_step3_num:        '03',
    cons_step3_title:      'Bygg appen',
    cons_step3_desc:       'Produkten designas, utvecklas och testas i korta milstolpar med en fungerande version synlig genom hela arbetet.',
    cons_step4_num:        '04',
    cons_step4_title:      'Lansera & lär',
    cons_step4_desc:       'Vi förbereder butikslanseringen, följer de första signalerna och gör verklig feedback till nästa fokuserade version.',
    cons_pricing_title:    'Sätt att börja',
    cons_pricing_sub:      'Börja med minsta användbara steg och utveckla produkten när verkliga signaler motiverar det.',
    pkg_cons1_name:        'Prototyp',
    pkg_cons1_price:       '19 000 kr',
    pkg_cons1_period:      '',
    pkg_cons1_desc:        'Gör en idé till en testbar produktupplevelse.',
    pkg_cons1_f1:          'Fokuserad produktbrief',
    pkg_cons1_f2:          'Viktigaste användarflödena',
    pkg_cons1_f3:          'Klickbar prototyp',
    pkg_cons1_f4:          'Rekommendation för nästa release',
    pkg_cons1_cta:         'Starta en prototyp',
    pkg_cons2_name:        'MVP',
    pkg_cons2_price:       '39 000 kr',
    pkg_cons2_period:      ' från',
    pkg_cons2_desc:        'En fokuserad, fungerande första version för riktiga användare.',
    pkg_cons2_f1:          'Produkt- och UX-design',
    pkg_cons2_f2:          'Appens kärnfunktion',
    pkg_cons2_f3:          'Backend där det behövs',
    pkg_cons2_f4:          'Testversion och analys',
    pkg_cons2_f5:          'Lanseringsplan',
    pkg_cons2_cta:         'Bygg en MVP',
    pkg_cons3_name:        'Studio-bygge',
    pkg_cons3_price:       'Från 89 000 kr',
    pkg_cons3_period:      '',
    pkg_cons3_desc:        'En polerad produktionsapp byggd för lansering och tillväxt.',
    pkg_cons3_f1:          'Komplett produktdesign',
    pkg_cons3_f2:          'Mobil- eller webbappsbygge',
    pkg_cons3_f3:          'Backend och integrationer',
    pkg_cons3_f4:          'Stöd vid butikslansering',
    pkg_cons3_cta:         'Prata om din app',
    cons_cta_title:        'Redo att göra idén till en app?',
    cons_cta_desc:         'Berätta vem appen är till för och vad den ska hjälpa till med. Vi formar den minsta starka första versionen.',

    // Contact page (SV)
    contact_hero_badge:     'Kontakt',
    contact_hero_title:     'Låt oss bygga något',
    contact_hero_title2:    'Tillsammans',
    contact_hero_sub:       'Vi är ett litet team av teknikentusiaster med över 20 år i branschen, och vi älskar verkligen att prata om ny teknik. Hör av dig hur det passar dig bäst.',
    contact_ch_email_title: 'E-post',
    contact_ch_email_desc:  'Bäst för projektförfrågningar och detaljerade offerter',
    contact_ch_phone_title: 'Telefon',
    contact_ch_phone_desc:  'Mån–fre, 08:00–18:00 CET',
    contact_ch_wa_title:    'WhatsApp',
    contact_ch_wa_desc:     'Snabba frågor, idéer eller bara ett hej',
    contact_ch_discord_title:'Discord',
    contact_ch_discord_desc: 'Gå med i vår community — nördar välkomna',
    contact_form_title:     'Skicka ett Meddelande',
    contact_form_name:      'Ditt Namn',
    contact_form_email:     'Din E-post',
    contact_form_subject:   'Ämne',
    contact_form_msg:       'Meddelande',
    contact_form_placeholder:'Berätta om ditt projekt, ställ en fråga eller bara säg hej...',
    contact_about_title:    'Vilka vi Är',
    contact_about_text:     'OakDev & AI AB är en fristående svensk appstudio i Uddevalla på västkusten. Vi bygger mobilappar, webbappar och egna digitala produkter med mer än 20 års samlad erfarenhet av mjukvara.',
    contact_about_text2:    'Vårt fokus är appar. AI är en del av verktygslådan när den gör produkten mer användbar, personlig eller kreativ för människorna som använder den.',
    contact_location_title: 'Baserade I',
    /* Privacy Policy */
    privacy_badge:          'Integritetspolicy',
    privacy_title:          'Din Integritet',
    privacy_title2:         'Är Viktig För Oss',
    privacy_sub:            'Vi värnar om ditt personuppgiftsskydd och dina rättigheter enligt GDPR. Den här policyn förklarar vad vi samlar in, varför, och hur du kan styra det.',
    privacy_updated:        'Senast Uppdaterad: 3 mars 2026',
    privacy_toc:            'Innehållsförteckning',
    privacy_s1_title:       '1. Vem Vi Är',
    privacy_s2_title:       '2. Vilka Uppgifter Vi Samlar In',
    privacy_s3_title:       '3. Hur Vi Använder Dina Uppgifter',
    privacy_s4_title:       '4. Rättslig Grund för Behandling',
    privacy_s5_title:       '5. Delning & Tredje Part',
    privacy_s6_title:       '6. Lagringstid',
    privacy_s7_title:       '7. Cookies & Spårning',
    privacy_s8_title:       '8. Dina Rättigheter (GDPR)',
    privacy_s9_title:       '9. Barns Integritet',
    privacy_s10_title:      '10. Externa Länkar',
    privacy_s11_title:      '11. Ändringar av Denna Policy',
    privacy_s12_title:      '12. Kontakt & Dataskydd',
    privacy_rights_access:  'Rätt till Tillgång',
    privacy_rights_rectify: 'Rätt till Rättelse',
    privacy_rights_erase:   'Rätt till Radering',
    privacy_rights_port:    'Rätt till Dataportabilitet',
    privacy_rights_object:  'Rätt att Göra Invändningar',
    privacy_rights_restrict:'Rätt till Begränsning av Behandling',
    privacy_rights_withdraw:'Rätt att Återkalla Samtycke',
    privacy_contact_dpa:    'Kontakta Oss / Dataskydd',
    privacy_back_top:       '↑ Tillbaka Till Toppen',
    /* Terms of Use */
    terms_badge:            'Användarvillkor',
    terms_title:            'Villkor &',
    terms_title2:           'Bestämmelser',
    terms_sub:              'Genom att använda vår webbplats och tjänster godkänner du dessa villkor. Läs dem noggrant. De regleras av svensk rätt.',
    terms_updated:          'Senast Uppdaterad: 3 mars 2026',
    terms_toc:              'Innehållsförteckning',
    terms_s1_title:         '1. Godkännande av Villkor',
    terms_s2_title:         '2. Våra Tjänster',
    terms_s3_title:         '3. Tillåten Användning',
    terms_s4_title:         '4. Immateriella Rättigheter',
    terms_s5_title:         '5. Användarkommunikation',
    terms_s6_title:         '6. Ansvarsfriskrivning',
    terms_s7_title:         '7. Ansvarsbegränsning',
    terms_s8_title:         '8. Skadeståndsskyldighet',
    terms_s9_title:         '9. Tredjepartstjänster',
    terms_s10_title:        '10. Tillämplig Lag',
    terms_s11_title:        '11. Ändringar av Villkoren',
    terms_s12_title:        '12. Kontakt',
    terms_back_top:         '↑ Tillbaka Till Toppen',
    /* About Page */
    about_badge:            'Vår Historia',
    about_title:            '20 år av skapande',
    about_title2:           'att bygga Framtiden',
    about_sub:              'Mer än två decennier av mjukvarubyggande har lett till ett tydligt fokus: en fristående appstudio som skapar användbara produkter med genomtänkt design och AI där den förtjänar sin plats.',
    about_story_tag:        'Resan',
    about_story_title:      'Grundat i Uddevalla. Redo för framtiden.',
    about_story_p1:         'Det började med en kärlek till kod och en besatthet av att göra komplex teknik användbar. Under mer än 20 år har hantverket rört sig genom databaser, webbsystem, mobil mjukvara och kompletta digitala produkter.',
    about_story_p2:         'I dag fokuserar OakDev på appar: våra egna produkter och utvalda appbyggen med ett tydligt användarbehov. AI används i produkterna när den skapar bättre sök, assistans, kreativitet, personalisering eller ett helt nytt sätt att interagera.',
    about_story_p3:         'Vi finns i Kristevik, Uddevalla på Sveriges vackra västkust. Ett litet men vasst team med stora ambitioner och ett track record som backar upp dem.',
    about_stats_years:      'År i Branschen',
    about_stats_projects:   'Levererade Projekt',
    about_stats_stacks:     'AI-modeller i bruk',
    about_stats_uptime:     'Drifttidsgaranti',
    about_team_tag:         'Teamet',
    about_team_title:       'Möt Teamet',
    about_team_sub:         'Ett sammansvetsat team av ingenjörer, AI-byggare och kreativa tänkare — förenade av kärleken till teknik och ett djupt gemensamt intresse för teologi. I vårt team finns en muslim, en kristen och en katolik, och denna mångfald av tro formar de inkluderande och meningsfulla produkter vi bygger.',
    about_philip_title:     'Grundare & apputvecklare',
    about_philip_bio:       '20+ år av att göra komplexa problem till användbar mjukvara. Philip formar OakDevs produkter, bygger apparnas kärnupplevelser och använder AI där den skapar verkligt användarvärde.',
    about_elin_title:       'Utvecklare & AI-integration',
    about_elin_bio:         'Elin överbryggar råa AI-förmågor och verkliga produktupplevelser. Hon formar data, modellbeteende och appflöden som gör OakDevs AI-drivna funktioner användbara och pålitliga.',
    about_jonna_title:      'Kund- & Teknisk Support',
    about_jonna_bio:        'Jonna ansvarar för support och operativ struktur, och ser till att både kunder och projekt får det stöd som krävs för att leverera på topp.',
    about_jonathan_title:   'Marknadsföring & Kommunikation',
    about_jonathan_bio:     'Jonathan formar hur världen ser OakDev. Från varumärkesstrategi till innehåll och tillväxt och han bygger signalen som skär genom bruset.',
    about_adam_title:         'Produktchef',
    about_adam_bio:           'Adam leder produktstrategi och roadmap och säkerställer att varje funktion vi lanserar skapar verkligt värde. Han arbetar också nära marknadsföringen för att se till att OakDevs produkter positioneras och presenteras för världen på bästa möjliga sätt.',
    about_clients_tag:      'Samarbeten',
    about_clients_title:    'Företag vi arbetat med.',
    about_values_tag:       'Hur Vi Arbetar',
    about_values_title:     'Våra Principer',
    about_v1_title:         'AI-nativt som Standard',
    about_v1_desc:          'Varje lösning vi bygger är designad med AI i åtanke från dag ett och inte påklistrat i efterhand.',
    about_v2_title:         'Hantverk över Genvägar.',
    about_v2_desc:          'Vi bryr oss djupt om kvalitet. Ren arkitektur, underhållbar kod och produkter som håller tidens test.',
    about_v3_title:         'Snabbt & Transparent',
    about_v3_desc:          'Inga uppsvällda processer. Du pratar direkt med expertisen som bygger din produkt. Vi levererar snabbt, vi kommunicerar tydligt.',
    about_v4_title:         'Alltid Lärande',
    about_v4_desc:          'Tekniklandskapet rör sig snabbt. Vi rör oss snabbare och utforskar ständigt nya modeller, verktyg och ramverk för att ligga steget före.',
    about_cta_title:        'Redo att bygga något Enastående?',
    about_cta_sub:          'Oavsett om du har en fullt formad idé eller bara en gnista, hör av er. Vi älskar tidiga samtal.',
    about_cta_btn:          'Starta en konversation',
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

    // Visitors in Sweden default to Swedish, even with an English browser/OS.
    if (inSweden()) return 'sv';

    // Otherwise honour the browser/OS language preferences in order.
    const prefs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || 'en'];
    for (const pref of prefs) {
      const code = String(pref).toLowerCase().split('-')[0];
      if (SUPPORTED.includes(code)) return code;
    }
    return 'en';
  }

  // Heuristic: detect Swedish visitors without an IP lookup. Matches a
  // Swedish timezone, region, or any Swedish entry in the language list.
  function inSweden() {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (tz === 'Europe/Stockholm') return true;
    } catch (e) { /* Intl unavailable */ }
    const langs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ''];
    return langs.some((l) => {
      const v = String(l).toLowerCase();
      return v === 'sv' || v.startsWith('sv-') || v.endsWith('-se');
    });
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

    // Translate input/textarea placeholders marked with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const val = TRANSLATIONS[lang][key];
      if (val !== undefined) el.setAttribute('placeholder', val);
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
   ANALYTICS
   Google Analytics 4 uses cookieless consent mode until cookies are accepted.
   ============================================================ */
const Analytics = (() => {
  const META_NAME = 'oakdev-ga4-id';
  const COOKIE_CONSENT_KEY = 'oakdev_cookies';
  const DEFAULT_MEASUREMENT_ID = 'G-BJ58JS0TCX';
  const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '::1']);
  let loaded = false;

  function getMeasurementId() {
    const fromWindow = typeof window.OAKDEV_GA4_ID === 'string' ? window.OAKDEV_GA4_ID : '';
    const fromMeta = document.querySelector(`meta[name="${META_NAME}"]`)?.content || '';
    const id = (fromWindow || fromMeta || DEFAULT_MEASUREMENT_ID).trim().toUpperCase();
    return /^G-[A-Z0-9]+$/.test(id) ? id : '';
  }

  function isLocalPreview() {
    return window.location.protocol === 'file:' || LOCAL_HOSTS.has(window.location.hostname);
  }

  function ensureDataLayer() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  function setDisabled(disabled) {
    const measurementId = getMeasurementId();
    if (!measurementId) return;
    window[`ga-disable-${measurementId}`] = disabled;
  }

  function setConsent(analyticsStorage, command = 'update') {
    ensureDataLayer();
    window.gtag('consent', command, {
      ad_personalization: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      analytics_storage: analyticsStorage,
      functionality_storage: 'granted',
      security_storage: 'granted',
    });
  }

  function hasConsent() {
    try {
      return localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted';
    } catch {
      return false;
    }
  }

  function load(analyticsStorage = 'denied') {
    const measurementId = getMeasurementId();
    if (!measurementId || isLocalPreview()) return;

    setDisabled(false);
    ensureDataLayer();
    setConsent(analyticsStorage, loaded ? 'update' : 'default');

    if (loaded) return;
    loaded = true;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);

    window.gtag('set', 'ads_data_redaction', true);
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      allow_ad_personalization_signals: false,
      allow_google_signals: false,
      page_path: window.location.pathname + window.location.search + window.location.hash,
      page_title: document.title,
      send_page_view: true,
      transport_type: 'beacon',
    });
  }

  function accept() {
    load('granted');
  }

  function decline() {
    load('denied');
  }

  function init() {
    if (hasConsent()) {
      accept();
    } else {
      decline();
    }
  }

  function track(eventName, params = {}) {
    if (!loaded || typeof window.gtag !== 'function') return;
    window.gtag('event', eventName, params);
  }

  return { accept, decline, init, track };
})();

/* ============================================================
   COOKIE CONSENT
   ============================================================ */
const Cookies = (() => {
  const STORAGE_KEY = 'oakdev_cookies';

  function ensureBanner() {
    if (document.getElementById('cookie-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.className = 'cookie-banner hidden';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-modal', 'true');
    banner.setAttribute('aria-labelledby', 'cookie-title');
    banner.innerHTML = `
      <div class="cookie-inner">
        <div class="cookie-icon" aria-hidden="true">&#127850;</div>
        <div class="cookie-text">
          <h3 id="cookie-title" data-i18n="cookie_title">We use cookies</h3>
          <p data-i18n="cookie_text">We use cookieless measurement for basic traffic stats. Optional analytics cookies improve accuracy.</p>
          <p class="cookie-links">
            <a href="/privacy/" data-i18n="cookie_privacy">Privacy Policy</a>
            <span class="cookie-sep" aria-hidden="true">&middot;</span>
            <a href="/terms/" data-i18n="cookie_terms">Terms of Use</a>
          </p>
        </div>
        <div class="cookie-actions">
          <button id="cookieAccept" class="btn-cookie-accept" data-i18n="cookie_accept">Accept All</button>
          <button id="cookieDecline" class="btn-cookie-decline" data-i18n="cookie_decline">Decline</button>
        </div>
      </div>
    `;
    document.body.prepend(banner);
  }

  function show() {
    ensureBanner();
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
    ensureBanner();
    Lang.apply(Lang.get());
    Analytics.init();

    const consent = localStorage.getItem(STORAGE_KEY);
    if (consent) return; // Already decided

    show();

    document.getElementById('cookieAccept')?.addEventListener('click', () => {
      localStorage.setItem(STORAGE_KEY, 'accepted');
      Analytics.accept();
      hide();
    });

    document.getElementById('cookieDecline')?.addEventListener('click', () => {
      localStorage.setItem(STORAGE_KEY, 'declined');
      Analytics.decline();
      hide();
    });
  }

  return { init };
})();

/* ============================================================
   PERFORMANCE BUDGET
   ============================================================ */
const PerformanceBudget = (() => {
  const mq = (query) => window.matchMedia?.(query).matches || false;
  const prefersReducedMotion = mq('(prefers-reduced-motion: reduce)');
  const coarsePointer = mq('(pointer: coarse)');
  const lowMemory = Number(navigator.deviceMemory || 4) <= 4;
  const lowCores = Number(navigator.hardwareConcurrency || 4) <= 4;
  const smallViewport = window.innerWidth < 768;
  const constrained = prefersReducedMotion || coarsePointer || lowMemory || lowCores || smallViewport;
  const continuousMotionAllowed = !prefersReducedMotion && !coarsePointer && !smallViewport;
  const maxDpr = constrained ? 1.15 : 1.5;
  const canvasFps = prefersReducedMotion ? 24 : constrained ? 30 : 45;

  return {
    prefersReducedMotion,
    coarsePointer,
    constrained,
    continuousMotionAllowed,
    canvasFps,
    getDpr: () => Math.min(window.devicePixelRatio || 1, maxDpr),
  };
})();

function rafDebounce(fn) {
  let raf = null;
  return (...args) => {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      raf = null;
      fn(...args);
    });
  };
}

function scheduleIdle(fn, timeout = 1800) {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(fn, { timeout });
  }
  return window.setTimeout(fn, timeout);
}

function initMotionBudget() {
  document.documentElement.classList.toggle('page-motion-paused', document.hidden);
  document.addEventListener('visibilitychange', () => {
    document.documentElement.classList.toggle('page-motion-paused', document.hidden);
  });

  if (!('IntersectionObserver' in window)) return;

  const roots = document.querySelectorAll('.hero, .section, .marquee-wrapper, .client-marquee-wrap, .oak-chatbot');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('motion-paused', !entry.isIntersecting);
    });
  }, {
    rootMargin: '220px 0px',
    threshold: 0.01,
  });

  roots.forEach((root) => observer.observe(root));
}

/* ============================================================
   THREE.JS HERO SCENE
   ============================================================ */
class HeroScene {
  constructor() {
    this.canvas = document.getElementById('hero-canvas');
    if (!this.canvas || typeof THREE === 'undefined') return;

    this.hero        = this.canvas.closest('.hero') || this.canvas;
    this.time        = 0;
    this.mouse       = { x: 0, y: 0 };
    this.targetMouse = { x: 0, y: 0 };
    this.isInView    = true;
    this.raf         = null;
    this.lastFrame   = 0;
    this.frameGap    = 1000 / PerformanceBudget.canvasFps;
    this.glowLayers  = [];

    // Keep the hero rich, but avoid overdraw on high-DPI and low-power devices.
    this.particleCount = PerformanceBudget.constrained
      ? (window.innerWidth < 768 ? 280 : 760)
      : 1000;

    this.setup();
    this.createParticles();
    this.createOrb();
    this.bindEvents();
    this.start();
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
      antialias:        !PerformanceBudget.constrained,
      alpha:            true,
      powerPreference:  'high-performance',
      precision:        'mediump',
    });
    this.renderer.setPixelRatio(PerformanceBudget.getDpr());
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
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
        uPR:    { value: PerformanceBudget.getDpr() },
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
    const sphereSegments = PerformanceBudget.constrained ? 40 : 64;
    const glowSegments = PerformanceBudget.constrained ? 24 : 32;
    const torusSegments = PerformanceBudget.constrained ? 72 : 100;
    const orbGeo = new THREE.SphereGeometry(8, sphereSegments, sphereSegments);
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
      const glowGeo = new THREE.SphereGeometry(r, glowSegments, glowSegments);
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
    const ring1Geo = new THREE.TorusGeometry(11, 0.07, 16, torusSegments);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color:       0x76b900,
      transparent: true,
      opacity:     0.35,
      blending:    THREE.AdditiveBlending,
    });
    this.ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    this.ring1.rotation.x = Math.PI * 0.3;
    this.scene.add(this.ring1);

    const ring2Geo = new THREE.TorusGeometry(15, 0.04, 16, torusSegments);
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

  shouldRun() {
    return this.isInView && !document.hidden;
  }

  start() {
    if (this.raf || !this.shouldRun()) return;
    this.raf = requestAnimationFrame((now) => this.animate(now));
  }

  stop() {
    if (!this.raf) return;
    cancelAnimationFrame(this.raf);
    this.raf = null;
  }

  updateRunState() {
    if (this.shouldRun()) this.start();
    else this.stop();
  }

  animate(now = performance.now()) {
    this.raf = null;
    if (!this.shouldRun()) return;

    const elapsed = this.lastFrame ? now - this.lastFrame : this.frameGap;
    if (elapsed < this.frameGap) {
      this.start();
      return;
    }

    const delta = Math.min(elapsed / 16.67, 2.2);
    this.lastFrame = now;
    this.time += 0.008 * delta;

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
      this.ring2.rotation.x += 0.001 * delta;
    }

    /* Smooth mouse parallax */
    this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.045;
    this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.045;
    this.camera.position.x = this.mouse.x * 12;
    this.camera.position.y = this.mouse.y * 8;
    this.camera.lookAt(0, 0, 0);

    this.renderer.render(this.scene, this.camera);
    this.start();
  }

  bindEvents() {
    let pendingPointer = null;
    let pointerRaf = null;
    const queuePointer = (clientX, clientY) => {
      if (!this.isInView) return;
      pendingPointer = { clientX, clientY };
      if (pointerRaf) return;
      pointerRaf = requestAnimationFrame(() => {
        pointerRaf = null;
        if (!pendingPointer) return;
        this.targetMouse.x = (pendingPointer.clientX / window.innerWidth - 0.5) * 2;
        this.targetMouse.y = -(pendingPointer.clientY / window.innerHeight - 0.5) * 2;
      });
    };

    window.addEventListener('mousemove', (e) => {
      queuePointer(e.clientX, e.clientY);
    }, { passive: true });

    // Touch support
    window.addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      if (t) queuePointer(t.clientX, t.clientY);
    }, { passive: true });

    window.addEventListener('resize', rafDebounce(() => this.onResize()), { passive: true });

    document.addEventListener('visibilitychange', () => {
      this.lastFrame = 0;
      this.updateRunState();
    });

    if ('IntersectionObserver' in window) {
      this.visibilityObserver = new IntersectionObserver(([entry]) => {
        this.isInView = entry.isIntersecting;
        this.lastFrame = 0;
        this.updateRunState();
      }, {
        rootMargin: '180px 0px',
        threshold: 0.01,
      });
      this.visibilityObserver.observe(this.hero);
    }
  }

  onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    const dpr = PerformanceBudget.getDpr();
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(w, h, false);
    if (this.particles) this.particles.material.uniforms.uPR.value = dpr;
  }
}

/* ============================================================
   SMOOTH SCROLL — LENIS
   ============================================================ */
function initLenis() {
  if (typeof Lenis === 'undefined') return null;
  if (!PerformanceBudget.continuousMotionAllowed) return null;

  const lenis = new Lenis({
    duration:   PerformanceBudget.constrained ? 0.85 : 1.05,
    easing:     (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction:  'vertical',
    smooth:     !PerformanceBudget.coarsePointer,
    smoothWheel: !PerformanceBudget.coarsePointer,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  // Connect to GSAP ticker if available
  if (typeof gsap !== 'undefined') {
    gsap.ticker.add((time) => {
      if (!document.hidden) lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(500, 33);
  } else {
    let rafId = null;
    function raf(time) {
      rafId = null;
      if (document.hidden) return;
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    const start = () => {
      if (!rafId && !document.hidden) rafId = requestAnimationFrame(raf);
    };
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      } else {
        start();
      }
    });
    start();
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
  if (!PerformanceBudget.continuousMotionAllowed) return;

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ force3D: true });
  ScrollTrigger.config({ ignoreMobileResize: true });

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
      onEnter: () => {
        el.style.willChange = 'transform, opacity';
        gsap.to(el, {
          opacity: 1, y: 0, x: 0, scale: 1,
          duration: 0.9, ease: 'power3.out', delay,
          onComplete: () => { el.style.willChange = ''; },
        });
      },
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
   Input validation + honeypot + FormSubmit.co submission
   No account needed — uses hello@oakdev.app directly.
   ============================================================ */
function initContactForm() {
  const forms = document.querySelectorAll('form[data-ajax-action]');
  if (!forms.length) return;

  const sentParam = new URLSearchParams(window.location.search).get('sent');

  forms.forEach((form, index) => {
    const status = form.querySelector('.form-status');
    if (!status) return;

    function getText(key, fallback = '') {
      const lang = Lang.get();
      return TRANSLATIONS[lang]?.[key] || TRANSLATIONS.en?.[key] || fallback;
    }

    function showStatus(type, message, shouldScroll = false) {
      status.textContent = message;
      status.className = `form-status ${type}`;
      if (shouldScroll) {
        window.setTimeout(() => {
          status.scrollIntoView({ behavior: 'smooth', block: 'center' });
          status.focus?.({ preventScroll: true });
        }, 80);
      }
    }

    if (sentParam === '1' && index === 0) {
      showStatus('success', getText('form_success'), true);
      window.history.replaceState(null, '', window.location.pathname + window.location.hash);
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const honey = form.querySelector('[name="_honey"]');
      if (honey && honey.value) return;

      if (!form.checkValidity()) {
        showStatus('error', getText('form_validation'));
        form.reportValidity?.();
        return;
      }

      const email = form.querySelector('[name="email"]')?.value.trim() || '';
      const payload = Object.fromEntries(new FormData(form).entries());
      if (email) payload._replyto = email;

      const submitBtn = form.querySelector('[type="submit"]');
      const submitBtnHTML = submitBtn?.innerHTML || '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = getText('form_sending', 'Sending...');
      }
      status.className = 'form-status';

      try {
        const res = await fetch(form.dataset.ajaxAction || form.action, {
          method:  'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept':       'application/json',
          },
          body: JSON.stringify(payload),
        });

        const contentType = res.headers.get('content-type') || '';
        const data = contentType.includes('application/json')
          ? await res.json().catch(() => ({}))
          : {};

        if (!res.ok || String(data.success ?? '').toLowerCase() === 'false') {
          throw new Error(data.message || 'Server error');
        }

        showStatus('success', getText('form_success'), true);
        form.reset();
        Analytics.track('generate_lead', { method: form.id || 'lead_form' });
      } catch {
        showStatus('error', getText('form_error'));
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = submitBtnHTML || getText('form_submit', 'Send Message');
        }
      }
    });
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
   CHATBOT WIDGET
   ============================================================ */
const CHATBOT_STORAGE_KEY = 'oakdev_oakbot_state';

function getStoredChatbotState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CHATBOT_STORAGE_KEY) || '{}');
    return {
      open: parsed.open === true,
      minimized: parsed.minimized === true,
    };
  } catch {
    return { open: false, minimized: false };
  }
}

function ensureChatbotLaunchers() {
  const getCopy = () => TRANSLATIONS[Lang.get()] || TRANSLATIONS.en;

  function makeLauncher(className) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = className;
    button.dataset.chatbotOpen = 'true';
    button.dataset.i18n = 'nav_chatbot';
    button.textContent = getCopy().nav_chatbot;
    return button;
  }

  const navActions = document.querySelector('.nav-actions');
  if (navActions && !navActions.querySelector('[data-chatbot-open]')) {
    const launcher = makeLauncher('btn-chatbot-nav');
    const bookButton = navActions.querySelector('.btn-book');
    navActions.insertBefore(launcher, bookButton || navActions.firstChild);
  }

  document.querySelectorAll('.mobile-actions').forEach((actions) => {
    if (actions.querySelector('[data-chatbot-open]')) return;
    const launcher = makeLauncher('btn-chatbot-mobile');
    const bookButton = actions.querySelector('.btn-book');
    actions.insertBefore(launcher, bookButton || null);
  });
}

function initChatbotLazy() {
  ensureChatbotLaunchers();

  const openOnDemand = (event) => {
    event?.preventDefault();
    initChatbot({ open: true });
  };

  document.querySelectorAll('[data-chatbot-open]').forEach((button) => {
    button.addEventListener('click', openOnDemand, { once: true });
  });

  const storedState = getStoredChatbotState();
  if (storedState.open || storedState.minimized) {
    initChatbot();
    return;
  }

  const idleDelay = PerformanceBudget.constrained ? 3600 : 1200;
  window.setTimeout(() => {
    scheduleIdle(() => initChatbot(), 1400);
  }, idleDelay);
}

function initChatbot(options = {}) {
  if (document.getElementById('oakChatbot')) return;

  const STORAGE_KEY = CHATBOT_STORAGE_KEY;
  const MAX_STORED_MESSAGES = 30;
  const getCopy = () => TRANSLATIONS[Lang.get()] || TRANSLATIONS.en;
  const defaultApiUrl = ['localhost', '127.0.0.1'].includes(window.location.hostname)
    ? '/api/chatbot'
    : 'https://gf365.vercel.app/api/chatbot';
  const apiUrl = window.OAKDEV_CHATBOT_API_URL
    || document.querySelector('meta[name="oakdev-chatbot-api"]')?.content?.trim()
    || defaultApiUrl;
  const gsapSrc = 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js';
  let gsapPromise = null;
  let isClosing = false;
  let isMinimizing = false;
  let sessionId = 0;

  function isLegacyTechnicalMessage(content) {
    return /OPENAI_API_KEY|secure API endpoint|säkra API-endpointen|API-endpointen|not active here yet|Jag kan hjälpa dig ringa in rätt lösning|I can help you find the right path/i.test(content);
  }

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      const storedMessages = Array.isArray(parsed.messages) ? parsed.messages : [];
      return {
        open: parsed.open === true,
        minimized: parsed.minimized === true,
        messages: storedMessages
          .map((message) => ({
            role: message?.role === 'assistant' ? 'assistant' : 'user',
            content: String(message?.content || '').trim().slice(0, 1200),
          }))
          .filter((message) => message.content && !isLegacyTechnicalMessage(message.content)),
      };
    } catch {
      return { open: false, minimized: false, messages: [] };
    }
  }

  const initialState = loadState();
  const messages = initialState.messages;

  function loadGsap() {
    if (typeof gsap !== 'undefined') return Promise.resolve(gsap);
    if (gsapPromise) return gsapPromise;

    gsapPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${gsapSrc}"]`);
      if (existing) {
        existing.addEventListener('load', () => resolve(window.gsap));
        existing.addEventListener('error', reject);
        return;
      }

      const script = document.createElement('script');
      script.src = gsapSrc;
      script.async = true;
      script.onload = () => resolve(window.gsap);
      script.onerror = reject;
      document.head.appendChild(script);
    });

    return gsapPromise;
  }

  function closeMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    toggle?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    menu?.classList.remove('open');
    menu?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  ensureChatbotLaunchers();

  const widget = document.createElement('section');
  widget.id = 'oakChatbot';
  widget.className = 'oak-chatbot';
  widget.setAttribute('aria-hidden', 'true');
  widget.innerHTML = `
    <div class="oak-chatbot-portal" aria-hidden="true">
      <span class="oak-chatbot-portal-ring ring-1"></span>
      <span class="oak-chatbot-portal-ring ring-2"></span>
      <span class="oak-chatbot-portal-ring ring-3"></span>
      <span class="oak-chatbot-portal-beam"></span>
    </div>
    <button type="button" class="oak-chatbot-dock" data-chatbot-restore aria-label="${getCopy().chat_resume}">
      <span class="oak-chatbot-dock-orbit" aria-hidden="true"></span>
      <span class="oak-chatbot-dock-avatar" aria-hidden="true">
        <span></span>
        <span></span>
      </span>
      <span class="oak-chatbot-dock-copy" data-i18n="chat_dock_label">${getCopy().chat_dock_label}</span>
      <span class="oak-chatbot-dock-wave" aria-hidden="true"></span>
    </button>
    <div class="oak-chatbot-panel" role="dialog" aria-modal="false" aria-labelledby="oakChatbotTitle">
      <div class="oak-chatbot-topline" aria-hidden="true"></div>
      <div class="oak-chatbot-grid" aria-hidden="true"></div>
      <header class="oak-chatbot-header">
        <div class="oak-chatbot-avatar" aria-hidden="true">
          <span class="oak-chatbot-ring ring-a"></span>
          <span class="oak-chatbot-ring ring-b"></span>
          <span class="oak-chatbot-scanner"></span>
          <span class="oak-chatbot-face">
            <span></span>
            <span></span>
          </span>
        </div>
        <div>
          <h2 id="oakChatbotTitle" data-i18n="chat_title">${getCopy().chat_title}</h2>
          <p><span class="oak-chatbot-pulse" aria-hidden="true"></span><span data-i18n="chat_status">${getCopy().chat_status}</span></p>
        </div>
        <div class="oak-chatbot-header-actions">
          <button type="button" class="oak-chatbot-control oak-chatbot-minimize" data-chatbot-minimize aria-label="${getCopy().chat_minimize}">&minus;</button>
          <button type="button" class="oak-chatbot-control oak-chatbot-close" data-chatbot-close aria-label="${getCopy().chat_close}">&times;</button>
        </div>
      </header>
      <div class="oak-chatbot-messages" aria-live="polite"></div>
      <form class="oak-chatbot-form">
        <textarea class="oak-chatbot-input" name="message" rows="1" maxlength="1200" data-i18n="chat_placeholder" placeholder="${getCopy().chat_placeholder}"></textarea>
        <button type="submit" class="oak-chatbot-send" data-i18n="chat_send">${getCopy().chat_send}</button>
      </form>
    </div>
  `;
  document.body.appendChild(widget);

  const messageList = widget.querySelector('.oak-chatbot-messages');
  const form = widget.querySelector('.oak-chatbot-form');
  const input = widget.querySelector('.oak-chatbot-input');
  const sendButton = widget.querySelector('.oak-chatbot-send');
  const closeButton = widget.querySelector('[data-chatbot-close]');
  const minimizeButton = widget.querySelector('[data-chatbot-minimize]');
  const restoreButton = widget.querySelector('[data-chatbot-restore]');
  const panel = widget.querySelector('.oak-chatbot-panel');
  const portal = widget.querySelector('.oak-chatbot-portal');
  const dock = widget.querySelector('.oak-chatbot-dock');

  function saveState(
    open = widget.classList.contains('open'),
    minimized = widget.classList.contains('minimized') && !widget.classList.contains('open')
  ) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        open,
        minimized,
        messages: messages.slice(-MAX_STORED_MESSAGES),
      }));
    } catch {
      // Storage can be unavailable in private modes; oakBot still works for the current page.
    }
  }

  function clearStoredState() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Storage can be unavailable in private modes; closing still resets the current session.
    }
  }

  function friendlyLinkLabel(href) {
    const lang = Lang.get();
    const isSv = lang === 'sv';
    const baseUrl = /^https?:$/.test(window.location.protocol) ? window.location.origin : 'https://oakdev.app';
    const url = new URL(href, baseUrl);
    const path = url.pathname.replace(/\/$/, '/') + url.hash;

    if (url.protocol === 'mailto:') return 'hello@oakdev.app';
    if (url.protocol === 'tel:') return isSv ? 'ring oss' : 'call us';

    const labels = {
      '/boka-samtal-om-ai/#booking-form': isSv ? 'boka ett appsamtal' : 'book an app call',
      '/boka-samtal-om-ai/': isSv ? 'boka ett appsamtal' : 'book an app call',
      '/contact/': isSv ? 'kontakta oss' : 'contact us',
      '/ai-chatbot-foretag/': isSv ? 'AI i appar' : 'AI in apps',
      '/ai-automation/': isSv ? 'AI i appar' : 'AI in apps',
      '/app-studio/': 'App Studio',
      '/sa-bygger-vi-appar/': isSv ? 'så bygger vi appar' : 'how we build apps',
      '/webbplats-foretag-uddevalla/': 'App Studio',
      '/mobilapp-foretag-uddevalla/': isSv ? 'mobilappar' : 'mobile apps',
      '/about/': isSv ? 'om OakDev' : 'about OakDev',
    };

    return labels[path] || (isSv ? 'öppna länken' : 'open the link');
  }

  function createLink(label, href) {
    const anchor = document.createElement('a');
    const baseUrl = /^https?:$/.test(window.location.protocol) ? window.location.origin : 'https://oakdev.app';
    const url = new URL(href, baseUrl);
    const isSameOrigin = url.origin === window.location.origin;

    anchor.className = 'oak-chatbot-link';
    anchor.textContent = label || friendlyLinkLabel(href);
    anchor.href = isSameOrigin ? `${url.pathname}${url.search}${url.hash}` : url.href;

    if (!isSameOrigin) {
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    }

    return anchor;
  }

  function appendTextWithBreaks(parent, text) {
    text.split('\n').forEach((part, index) => {
      if (index > 0) parent.appendChild(document.createElement('br'));
      if (part) parent.appendChild(document.createTextNode(part));
    });
  }

  function appendAutolinkedText(parent, text) {
    const rawUrlPattern = /(^|[\s(])((?:https?:\/\/[^\s<)]+)|(?:\/[a-z0-9][a-z0-9_./#?=&%-]*))/gi;
    let cursor = 0;
    let match;

    while ((match = rawUrlPattern.exec(text)) !== null) {
      appendTextWithBreaks(parent, text.slice(cursor, match.index) + match[1]);
      parent.appendChild(createLink(friendlyLinkLabel(match[2]), match[2]));
      cursor = match.index + match[0].length;
    }

    appendTextWithBreaks(parent, text.slice(cursor));
  }

  function renderAssistantContent(parent, text) {
    const markdownLinkPattern = /\[([^\]]{1,120})\]\(\s*(https?:\/\/[^\s)]+|\/[^\s)]+|mailto:[^\s)]+|tel:[^\s)]+)\s*\)/g;
    let cursor = 0;
    let match;

    while ((match = markdownLinkPattern.exec(text)) !== null) {
      appendAutolinkedText(parent, text.slice(cursor, match.index));
      parent.appendChild(createLink(match[1], match[2]));
      cursor = match.index + match[0].length;
    }

    appendAutolinkedText(parent, text.slice(cursor));
  }

  function userLooksSwedish(text) {
    return Lang.get() === 'sv' || /[åäöÅÄÖ]|(^|\s)(vad|kan|hjälp|hjalp|företag|foretag|webb|offert|boka|pris|kostar)(\s|$)/i.test(text);
  }

  function includesAny(text, words) {
    return words.some((word) => text.includes(word));
  }

  function buildFallbackReply(userText) {
    const isSv = userLooksSwedish(userText);
    const text = userText.toLowerCase();
    const conversationText = messages
      .map((message) => String(message.content || '').toLowerCase())
      .join(' ');
    const budgetMatch = text.match(/\b(\d[\d\s.,]*)\s*(kr|sek|kronor|:-)?\b/i);
    const budget = budgetMatch
      ? Number(budgetMatch[1].replace(/\s/g, '').replace(',', '.'))
      : null;
    const hasPriceContext = includesAny(conversationText, ['pris', 'kostar', 'budget', 'offert', 'price', 'cost', 'quote']);
    const asksWeather = includesAny(text, ['väder', 'vader', 'weather', 'regn', 'soligt', 'temperatur']);
    const greets = /^(hej|hejsan|hallå|hallo|hello|hi)\b/i.test(text.trim());
    const asksPrice = includesAny(text, ['pris', 'kostar', 'budget', 'paket', 'offert', 'price', 'cost', 'quote']);
    const asksBudgetFollowup = budget && includesAny(text, ['får jag', 'far jag', 'för det', 'for det', 'räcker', 'racker', 'kan man få', 'kan man fa']);
    const asksAi = includesAny(text, ['ai', 'chatbot', 'chattbot', 'assistent', 'agent', 'smart sök', 'smart sok', 'personalisering', 'voice', 'vision']);
    const asksApp = includesAny(text, ['app', 'mobil', 'mvp', 'ios', 'android', 'webbapp', 'web app', 'pwa', 'saas']);
    const asksWebsite = includesAny(text, ['hemsida', 'website', 'webpage', 'landningssida', 'seo']);
    const asksConsulting = includesAny(text, ['konsult', 'consulting', 'rådgivning', 'radgivning', 'cto', 'tech lead']);
    const asksBusinessAutomation = includesAny(text, ['offertuppföljning', 'offertuppfoljning', 'crm', 'inkorgstriage', 'business automation', 'verksamhetsautomation']);

    if (isSv) {
      if (greets) {
        return 'Hej! Kul att du testar oakBot. Jag hjälper dig gärna med mobilappar, webbappar, app-MVP:er och AI-funktioner som hör hemma i produkten. Vad vill du bygga?';
      }
      if (asksWeather) {
        return 'Jag har ingen liveväderkoppling här. Däremot hjälper jag gärna med frågor om OakDevs appar, App Studio eller AI-funktioner i en app.';
      }
      if (asksWebsite || asksConsulting || asksBusinessAutomation) {
        return 'OakDev erbjuder inte fristående hemsidor, verksamhetsautomation eller IT-konsulting. Studion fokuserar på mobilappar, webbappar och AI som en naturlig del av appupplevelsen. Om behovet egentligen är en digital produkt är [App Studio](/app-studio/) rätt startpunkt.';
      }
      if (budget && (hasPriceContext || asksBudgetFollowup)) {
        if (budget < 19000) {
          return `Med ${budget.toLocaleString('sv-SE')} kr behöver appidén avgränsas hårt. En komplett prototyp börjar från 19 000 kr, så ett rimligt nästa steg är att tydliggöra användaren, kärnflödet och vad som kan vänta till version två.`;
        }
        if (budget < 39000) {
          return `Med cirka ${budget.toLocaleString('sv-SE')} kr ligger en fokuserad app-prototyp nära till hands. OakDevs prototyppaket börjar från 19 000 kr, medan en fungerande app-MVP börjar från 39 000 kr exkl. moms.`;
        }
        return `Med en budget runt ${budget.toLocaleString('sv-SE')} kr kan en fokuserad första appversion vara realistisk. OakDev listar app-MVP från 39 000 kr, Studio-bygge från 89 000 kr och större appar från 149 000 kr exkl. moms.`;
      }
      if (asksPrice) {
        if (asksAi) {
          return 'Som del av ett appprojekt börjar ett AI Feature Sprint från 24 900 kr och en AI-driven app-MVP från 59 000 kr exkl. moms. Priset påverkas främst av appflödet, datakällor, modellbeteende, kvalitetskrav och om funktionen ska kunna utföra handlingar.';
        }
        return 'OakDev listar app-prototyp från 19 000 kr, app-MVP från 39 000 kr, Studio-bygge från 89 000 kr och större appar från 149 000 kr exkl. moms. Det viktigaste för priset är vilken kärnuppgift första versionen ska lösa.';
      }
      if (asksAi) {
        return 'OakDev bygger AI som en del av appupplevelsen: assistenter, smart sök, personalisering, generering, röst, bild och appnära automation. Läs mer på [AI i appar](/ai-automation/) eller beskriv vad användaren ska kunna göra.';
      }
      if (asksApp) {
        return 'OakDev hjälper till från produktidé och prototyp till design, apputveckling, test och butikslansering. Se [App Studio](/app-studio/) eller skriv vem appen är till för och vad första versionen måste kunna.';
      }
      if (includesAny(text, ['kontakt', 'mail', 'mejl', 'telefon', 'boka', 'möte', 'mote'])) {
        return 'Du kan nå OakDev via [kontakt](/contact/) eller [boka ett appsamtal](/boka-samtal-om-ai/#booking-form). Skriv gärna vem appen är till för och vilket problem den ska lösa.';
      }
      return 'OakDev är en fristående appstudio med fokus på mobilappar, webbappar och AI-funktioner i appar. Börja gärna på [App Studio](/app-studio/), utforska [AI i appar](/ai-automation/) eller [boka ett appsamtal](/boka-samtal-om-ai/#booking-form).';
    }

    if (greets) {
      return 'Hi! I can help with mobile apps, web apps, app MVPs, and AI features that belong inside the product. What are you looking to build?';
    }
    if (asksWeather) {
      return 'I do not have live weather access. I can help with OakDev App Studio, app ideas, MVPs, and AI features in apps.';
    }
    if (asksWebsite || asksConsulting || asksBusinessAutomation) {
      return 'OakDev does not offer standalone websites, business automation, or IT consulting. The studio focuses on mobile apps, web apps, and AI as a natural part of the app experience. If the need is really a digital product, [App Studio](/app-studio/) is the right starting point.';
    }
    if (budget && (hasPriceContext || asksBudgetFollowup)) {
      if (budget < 19000) {
        return `With ${budget.toLocaleString('en-US')} SEK, the app idea needs a very tight scope. A complete prototype starts from SEK 19,000, so the next useful step is to clarify the user, core flow, and what can wait until version two.`;
      }
      if (budget < 39000) {
        return `With around ${budget.toLocaleString('en-US')} SEK, a focused app prototype is realistic. OakDev prototypes start from SEK 19,000, while a working app MVP starts from SEK 39,000 excl. VAT.`;
      }
      return `With a budget around ${budget.toLocaleString('en-US')} SEK, a focused first app version may be realistic. OakDev lists app MVPs from SEK 39,000, Studio builds from SEK 89,000, and larger apps from SEK 149,000 excl. VAT.`;
    }
    if (asksPrice) {
      if (asksAi) {
        return 'As part of an app project, an AI Feature Sprint starts from SEK 24,900 and an AI-powered app MVP from SEK 59,000 excl. VAT. Scope depends on the app flow, data sources, model behavior, quality requirements, and whether the feature can take actions.';
      }
      return 'OakDev lists app prototypes from SEK 19,000, app MVPs from SEK 39,000, Studio builds from SEK 89,000, and larger apps from SEK 149,000 excl. VAT. The biggest price driver is the core job version one must solve.';
    }
    if (asksAi) {
      return 'OakDev builds AI as part of the app experience: assistants, smart search, personalization, generation, voice, vision, and app-native automation. Explore [AI in Apps](/ai-automation/) or describe what the user should be able to do.';
    }
    if (asksApp) {
      return 'OakDev works from product idea and prototype through design, app development, testing, and store launch. See [App Studio](/app-studio/) or tell me who the app is for and what version one must do.';
    }
    if (includesAny(text, ['contact', 'email', 'phone', 'book', 'meeting'])) {
      return 'You can reach OakDev through [contact](/contact/) or [book an app call](/boka-samtal-om-ai/#booking-form). Share who the app is for and the problem it should solve.';
    }
    return 'OakDev is an independent app studio focused on mobile apps, web apps, and AI features inside apps. Start with [App Studio](/app-studio/), explore [AI in Apps](/ai-automation/), or [book an app call](/boka-samtal-om-ai/#booking-form).';
  }
  function appendMessage(role, text, options = {}) {
    const bubble = document.createElement('div');
    bubble.className = `oak-chatbot-message ${role}`;
    if (options.pending) {
      bubble.dataset.pending = 'true';
      bubble.innerHTML = `
        <span class="oak-chatbot-loader" aria-hidden="true">
          <span class="oak-chatbot-loader-core"></span>
          <span class="oak-chatbot-loader-orbit orbit-a"></span>
          <span class="oak-chatbot-loader-orbit orbit-b"></span>
          <span class="oak-chatbot-loader-scan"></span>
        </span>
        <span class="oak-chatbot-loader-text">${text}</span>
        <span class="oak-chatbot-typing" aria-hidden="true"><i></i><i></i><i></i></span>
      `;
    } else if (role === 'assistant') {
      renderAssistantContent(bubble, text);
    } else {
      bubble.textContent = text;
    }
    messageList.appendChild(bubble);
    messageList.scrollTop = messageList.scrollHeight;

    if (widget.classList.contains('open') && !options.skipAnimation) {
      loadGsap()
        .then((g) => {
          if (!g) return;
          g.fromTo(bubble, { opacity: 0, y: 12, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.32, ease: 'power3.out' });
        })
        .catch(() => {});
    }

    return bubble;
  }

  function setBusy(isBusy) {
    input.disabled = isBusy;
    sendButton.disabled = isBusy;
    widget.classList.toggle('thinking', isBusy);
    sendButton.textContent = isBusy ? getCopy().chat_typing : getCopy().chat_send;
  }

  function ensureIntroMessage(render = false) {
    if (messages.length) return;
    const intro = getCopy().chat_intro;
    messages.push({ role: 'assistant', content: intro });
    if (render) appendMessage('assistant', intro, { skipAnimation: true });
  }

  function clearConversation() {
    messages.length = 0;
    messageList.innerHTML = '';
    input.value = '';
    input.style.height = 'auto';
    clearStoredState();
  }

  function openChatbot(options = {}) {
    const fromDock = options.fromDock === true || widget.classList.contains('minimized');
    isClosing = false;
    isMinimizing = false;
    widget.classList.remove('closing', 'minimizing');
    widget.classList.add('open');
    widget.setAttribute('aria-hidden', 'false');
    ensureIntroMessage(true);
    saveState(true, false);
    closeMobileMenu();
    Analytics.track('select_content', {
      content_type: 'chatbot',
      item_id: 'oakbot',
    });
    window.setTimeout(() => input.focus(), 120);

    loadGsap()
      .then((g) => {
        if (!g) {
          widget.classList.remove('minimized');
          return;
        }
        g.killTweensOf([panel, portal, dock]);
        if (fromDock) {
          g.to(dock, {
            opacity: 0,
            y: 16,
            scale: 0.82,
            duration: 0.24,
            ease: 'power2.in',
            onComplete: () => widget.classList.remove('minimized'),
          });
        } else {
          widget.classList.remove('minimized');
        }
        g.fromTo(
          portal,
          { opacity: 0, scale: 0.25, rotate: -18 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.72, ease: 'expo.out' }
        );
        g.fromTo(
          panel,
          {
            opacity: 0,
            y: 34,
            scale: 0.86,
            rotateX: -18,
            filter: 'blur(10px)',
            clipPath: 'circle(18% at 88% 92%)',
            transformOrigin: '82% 100%',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: 'blur(0px)',
            clipPath: 'circle(140% at 50% 50%)',
            duration: 0.78,
            ease: 'expo.out',
          }
        );
        g.fromTo(
          widget.querySelectorAll('.oak-chatbot-avatar, .oak-chatbot-header h2, .oak-chatbot-header p, .oak-chatbot-message, .oak-chatbot-form'),
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.48, stagger: 0.055, delay: 0.08, ease: 'power3.out' }
        );
      })
      .catch(() => {
        widget.classList.remove('minimized');
      });
  }

  function closeChatbot() {
    if (isClosing || (!widget.classList.contains('open') && !widget.classList.contains('minimized'))) return;
    isClosing = true;
    isMinimizing = false;
    sessionId += 1;
    setBusy(false);
    widget.classList.add('closing');

    const finishClose = () => {
      widget.classList.remove('open', 'minimized', 'closing', 'thinking', 'minimizing');
      widget.setAttribute('aria-hidden', 'true');
      clearConversation();
      isClosing = false;
    };

    loadGsap()
      .then((g) => {
        if (!g) {
          window.setTimeout(finishClose, 360);
          return;
        }
        g.killTweensOf([panel, portal, dock]);
        const tl = g.timeline({ onComplete: finishClose });
        if (widget.classList.contains('open')) {
          tl.to(
            widget.querySelectorAll('.oak-chatbot-message, .oak-chatbot-form, .oak-chatbot-header h2, .oak-chatbot-header p'),
            { opacity: 0, y: -8, duration: 0.16, stagger: 0.018, ease: 'power2.in' },
            0
          )
            .to(panel, {
              opacity: 0,
              y: 20,
              scale: 0.84,
              rotateX: 16,
              filter: 'blur(12px)',
              clipPath: 'circle(7% at 88% 92%)',
              duration: 0.42,
              ease: 'power3.in',
            }, 0.04)
            .to(portal, {
              opacity: 0,
              scale: 0.18,
              rotate: 24,
              duration: 0.42,
              ease: 'power3.in',
            }, 0.05);
        } else {
          tl.to(dock, {
            opacity: 0,
            y: 20,
            scale: 0.62,
            filter: 'blur(10px)',
            duration: 0.34,
            ease: 'power3.in',
          }, 0);
        }
      })
      .catch(() => {
        window.setTimeout(finishClose, 360);
      });
  }

  function minimizeChatbot() {
    if (isClosing || isMinimizing || !widget.classList.contains('open')) return;
    isMinimizing = true;
    saveState(false, true);
    widget.classList.add('minimized', 'minimizing');
    widget.setAttribute('aria-hidden', 'false');

    const finishMinimize = () => {
      widget.classList.remove('open', 'minimizing');
      widget.classList.add('minimized');
      widget.setAttribute('aria-hidden', 'false');
      saveState(false, true);
      isMinimizing = false;
    };

    loadGsap()
      .then((g) => {
        if (!g) {
          window.setTimeout(finishMinimize, 300);
          return;
        }
        g.killTweensOf([panel, portal, dock]);
        g.set(dock, { opacity: 0, y: 18, scale: 0.78, filter: 'blur(8px)' });
        const tl = g.timeline({ onComplete: finishMinimize });
        tl.to(
          widget.querySelectorAll('.oak-chatbot-message, .oak-chatbot-form, .oak-chatbot-header h2, .oak-chatbot-header p'),
          { opacity: 0, y: 8, duration: 0.14, stagger: 0.015, ease: 'power2.in' },
          0
        )
          .to(panel, {
            opacity: 0,
            y: 22,
            scale: 0.7,
            rotateX: 18,
            filter: 'blur(14px)',
            clipPath: 'circle(9% at 88% 92%)',
            duration: 0.36,
            ease: 'power3.in',
          }, 0.02)
          .to(portal, {
            opacity: 0,
            scale: 0.28,
            rotate: 18,
            duration: 0.34,
            ease: 'power3.in',
          }, 0.04)
          .to(dock, {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.42,
            ease: 'back.out(1.7)',
          }, 0.16);
      })
      .catch(() => {
        window.setTimeout(finishMinimize, 300);
      });
  }

  ensureIntroMessage(false);
  messages.forEach((message) => appendMessage(message.role, message.content, { skipAnimation: true }));
  saveState(initialState.open, initialState.minimized && !initialState.open);

  document.querySelectorAll('[data-chatbot-open]').forEach((button) => {
    button.addEventListener('click', openChatbot);
  });

  closeButton.addEventListener('click', closeChatbot);
  minimizeButton.addEventListener('click', minimizeChatbot);
  restoreButton.addEventListener('click', () => openChatbot({ fromDock: true }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && (widget.classList.contains('open') || widget.classList.contains('minimized'))) closeChatbot();
  });

  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = `${Math.min(input.scrollHeight, 140)}px`;
  });

  input.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || event.shiftKey || event.isComposing) return;
    event.preventDefault();
    form.requestSubmit();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    input.style.height = 'auto';
    appendMessage('user', text);
    messages.push({ role: 'user', content: text });
    saveState();

    const pending = appendMessage('assistant', getCopy().chat_typing, { pending: true });
    setBusy(true);
    const requestSession = sessionId;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages,
          page: {
            path: window.location.pathname,
            title: document.title,
          },
        }),
      });
      const data = await response.json().catch(() => ({}));

      if (requestSession !== sessionId) return;

      if (!response.ok || !data.reply) {
        throw new Error(data.error || 'Chatbot request failed');
      }

      pending.remove();
      appendMessage('assistant', data.reply);
      messages.push({ role: 'assistant', content: data.reply });
      saveState();
    } catch {
      if (requestSession !== sessionId) return;
      pending.remove();
      const fallbackText = buildFallbackReply(text) || getCopy().chat_error;
      appendMessage('assistant', fallbackText);
      messages.push({ role: 'assistant', content: fallbackText });
      saveState();
    } finally {
      if (requestSession === sessionId) {
        setBusy(false);
        if (widget.classList.contains('open')) input.focus();
      }
    }
  });

  Lang.apply(Lang.get());

  if (options.open) {
    window.setTimeout(openChatbot, 0);
  } else if (initialState.open) {
    window.setTimeout(openChatbot, 120);
  } else if (initialState.minimized) {
    widget.classList.add('minimized');
    widget.setAttribute('aria-hidden', 'false');
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
  initMotionBudget();
  initChatbotLazy();

  // Three.js (non-blocking)
  if (typeof THREE !== 'undefined') {
    new HeroScene();
    if (typeof ScrollGridAnimation !== 'undefined') {
      new ScrollGridAnimation();
    }
  }

  // Smooth scroll
  initLenis();

  // GSAP (after Lenis since it hooks into ticker)
  initGSAP();
});

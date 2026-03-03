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
    explore_services: 'Explore Services',
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
    hero_sub:        'OakDev is a premium app studio building mobile applications, AI platforms, and automation systems. We take ideas from concept to launch for founders and forward-thinking companies.',
    hero_cta1:       'Start a Project',
    hero_cta2:       'Explore Our Work',
    scroll:          'Scroll',
    /* Services */
    services_tag:    'What We Build',
    services_title:  'Services',
    services_desc:   'From mobile apps to AI systems, we build production-ready products that deliver real user value at global scale.',
    service_01:      '01',
    service_02:      '02',
    service_03:      '03',
    studio_title:    'App Studio',
    studio_desc:     'Mobile and web applications built for production. From concept and MVP to App Store launch, with solid technical foundations and long-term scalability.',
    ai_title:        'AI & Automation',
    ai_desc:         'Intelligent systems, AI integrations, and workflow automation that transform how businesses operate. Built with modern LLMs, APIs, and cloud infrastructure.',
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
    portfolio_h_pre:      'Apps We\'ve',
    portfolio_h_main:     'Shipped',
    portfolio_desc:       'Real products, real users. These are some of the apps we have built and launched.',
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
    tech_tag:             'Tech Stack',
    tech_title:           'Modern Technology',
    tech_desc:            'We use cutting-edge tools and frameworks to deliver production-grade apps that perform at global scale.',
    studio_cta_tag:       'Start Building',
    studio_cta_title:     'Your App Idea Deserves to Exist.',
    studio_cta_desc:      'Tell us what you\'re building. We\'ll take it from concept to launch.',
    studio_cta_btn:       'Start a Project',
    /* Shared pricing */
    pkg_popular:          'Most Popular',
    pkg_from:             'Starting from',
    pkg_get_started:      'Start a Project',
    pkg_contact_us:       'Contact Us',
    /* App Studio pricing */
    app_pricing_tag:      'Pricing',
    app_pricing_title:    'App Development Packages',
    app_pricing_desc:     'Transparent pricing for every project size. From first prototype to enterprise launch. All prices excl. VAT.',
    pkg_mvp_name:         'MVP',
    pkg_mvp_tagline:      'Validate your idea fast',
    pkg_pro_name:         'Studio',
    pkg_pro_tagline:      'Full-featured production app',
    pkg_ent_name:         'Enterprise',
    pkg_ent_tagline:      'Complex systems at scale',
    /* AI & Automation page */
    ai_hero_badge:        'AI & Automation',
    ai_hero_title1:       'The Future of Business',
    ai_hero_title2:       'Is Automated.',
    ai_hero_sub:          'OakDev builds intelligent systems, autonomous AI agents, and workflow automation that transform how companies operate, freeing your team to focus on what matters.',
    ai_see_more:          'See What\'s Possible',
    ai_types_tag:         'What We Build',
    ai_types_title:       'Every Type of AI System.',
    ai_types_desc:        'From standalone integrations to full autonomous agent networks — we design and deploy intelligent systems that work for your business around the clock.',
    type_agents_title:    'AI Agents',
    type_agents_desc:     'Autonomous AI workers that plan, decide, and execute complex multi-step tasks using tools, APIs, and data, operating 24/7 with minimal human oversight.',
    type_llm_title:       'LLM Integration',
    type_llm_desc:        'GPT, Claude, Gemini — we embed the world\'s most powerful language models into your products, workflows, and customer experiences.',
    type_rag_title:       'RAG Knowledge Systems',
    type_rag_desc:        'AI trained on your company\'s data. Instant, accurate answers from your documents, wikis, databases, and internal tools — no hallucinations.',
    type_workflow_title:  'Workflow Automation',
    type_workflow_desc:   'End-to-end automation of repetitive business processes. Trigger-based flows connecting your tools, CRMs, databases, and APIs seamlessly.',
    type_ai_analytics:    'AI Analytics',
    type_ai_analytics_desc: 'Automated reporting, anomaly detection, and intelligent insights that turn raw business data into clear, actionable decisions in real time.',
    type_voice_vision:    'Voice & Vision AI',
    type_voice_vision_desc: 'Transcription, speech synthesis, image recognition, and video analysis. Multimodal AI for next-generation product interfaces.',
    agents_tag:           'Why AI Agents',
    agents_title:         'Autonomous AI Workers for Your Business',
    agents_desc:          'AI agents are programs that independently plan, decide, and act to achieve goals. Unlike basic automation, they adapt to unexpected situations and learn from context.',
    benefit1_title:       '24/7 Operation',
    benefit1_desc:        'AI agents never sleep. They process tasks and respond to events continuously — no breaks, no sick days, no time zones.',
    benefit2_title:       '80% Less Manual Work',
    benefit2_desc:        'Automate repetitive tasks consuming your team — data entry, reporting, customer queries, scheduling, and routine decisions.',
    benefit3_title:       'Scale Without Hiring',
    benefit3_desc:        'Handle 10x the workload without adding headcount. AI capacity scales instantly with your business demands.',
    benefit4_title:       'Error-Free Execution',
    benefit4_desc:        'Consistent, accurate task completion every time. No human errors, no forgotten steps, no missed deadlines.',
    benefit5_title:       'Instant Insights',
    benefit5_desc:        'Process thousands of data points in seconds. Real-time business intelligence, alerts, and recommendations on demand.',
    benefit6_title:       'Compound Efficiency',
    benefit6_desc:        'Every automated process frees your team for creative and strategic work — building a compounding productivity advantage over time.',
    ai_pricing_tag:       'Pricing',
    ai_pricing_title:     'AI & Automation Packages',
    ai_pricing_desc:      'Clear pricing for intelligent systems. From first integration to full automation. All prices excl. VAT.',
    pkg_ai1_name:         'AI Starter',
    pkg_ai1_tagline:      'Your first AI integration',
    pkg_ai2_name:         'AI Platform',
    pkg_ai2_tagline:      'Full AI-powered system',
    pkg_ai3_name:         'Enterprise AI',
    pkg_ai3_tagline:      'Complete automation transformation',
    ai_process_tag:       'How We Work',
    ai_process_title:     'From Audit to Deployed Intelligence',
    ai_process_desc:      'A structured approach to building AI systems that actually work in production — and keep improving.',
    ai_step1_title:       'Audit',
    ai_step1_desc:        'We map your workflows, data, and goals to identify the highest-impact automation opportunities.',
    ai_step2_title:       'Design',
    ai_step2_desc:        'Architecture, model selection, and integration planning. Full technical blueprint before any code is written.',
    ai_step3_title:       'Build',
    ai_step3_desc:        'Rapid development with weekly demos. Built for production reliability and real-world edge cases from day one.',
    ai_step4_title:       'Deploy',
    ai_step4_desc:        'Launch, monitoring, team training, and ongoing optimization to ensure real, measurable business impact.',
    ai_cta_title:         'Ready to Automate Your Business?',
    ai_cta_desc:          'Tell us about your workflows. We\'ll design an AI system that transforms how your company operates.',

    // AI Trends section
    ai_trends_tag:        'Latest Trends',
    ai_trends_sub:        'We stay ahead of the AI curve — integrating the latest models, frameworks, and architectures into production-ready systems for real business impact.',
    ai_trend1_title:      'Multi-Agent Systems',
    ai_trend1_desc:       'Networks of specialized AI agents that collaborate, delegate, and solve complex problems beyond the reach of any single model.',
    ai_trend2_title:      'Long-Context AI',
    ai_trend2_desc:       'GPT-4o and Claude with 128k+ context windows. AI that can read entire codebases, documents, and conversations in a single pass.',
    ai_trend3_title:      'Multimodal AI',
    ai_trend3_desc:       'AI that sees, hears, and reads. Vision models, audio transcription, and document understanding combined into unified intelligent pipelines.',
    ai_trend4_title:      'On-Premise AI',
    ai_trend4_desc:       'Open-source models like Llama, Mistral, and Mixtral deployed on your infrastructure. Full data sovereignty with no API dependency.',

    // Consulting page
    cons_hero_badge:       'IT Consulting',
    cons_hero_title1:      'Expert Solutions',
    cons_hero_title2:      'for every Challenge',
    cons_hero_sub:         'From a single website to full digital transformation, we bring senior expertise to businesses of all sizes. Websites, webshops, databases, cloud, and everything in between.',
    cons_type_web_title:   'Web Development',
    cons_type_web_desc:    'Fast, beautiful websites and landing pages that convert. Built for performance and scalability from day one.',
    cons_type_ecom_title:  'E-Commerce',
    cons_type_ecom_desc:   'Online stores that sell. WooCommerce, Shopify, or fully custom — we handle the stack end to end.',
    cons_type_db_title:    'Database Design',
    cons_type_db_desc:     'Relational, NoSQL, or hybrid. We architect, migrate, and optimise databases for your exact workload.',
    cons_type_cloud_title: 'Cloud & Infrastructure',
    cons_type_cloud_desc:  'AWS, Azure, GCP — we design resilient infrastructure, CI/CD pipelines, and container orchestration.',
    cons_type_cto_title:   'CTO Advisory',
    cons_type_cto_desc:    'Fractional CTO service. Strategic technology leadership without the full-time cost. Roadmaps, team scaling, tech audits.',
    cons_type_soft_title:  'Custom Software',
    cons_type_soft_desc:   'Bespoke applications, internal tools, integrations, and APIs, engineered to fit your business precisely.',
    cons_why_title:        'Why OakDev Consulting?',
    cons_why_sub:          'We are hands-on tech nerds, not PowerPoint consultants. We write the code, run the infrastructure, and stay accountable for the result.',
    cons_why1_title:       'Senior-Only Expertise',
    cons_why1_desc:        'No juniors. Every engagement is handled by IT-experts with 20+ years of production experience.',
    cons_why2_title:       'Full-Stack Capability',
    cons_why2_desc:        'Front-end to back-end, mobile to cloud — one team, zero handoff gaps.',
    cons_why3_title:       'Transparent Pricing',
    cons_why3_desc:        'Fixed fees or clear retainers. No surprise invoices. Scope locked before a single line is written.',
    cons_why4_title:       'Fast Turnaround',
    cons_why4_desc:        'Sprints of one to four weeks. Most projects go live in under a month.',
    cons_why5_title:       'IP Ownership',
    cons_why5_desc:        'You own 100 % of everything we build. No lock-in, no licensing fees.',
    cons_why6_title:       'Ongoing Support',
    cons_why6_desc:        'Post-launch retainers available. We stick around as long as you need us.',
    cons_process_title:    'How We Work',
    cons_process_sub:      'A focused four-step process that keeps every project on time, on budget, and on point.',
    cons_step1_num:        '01',
    cons_step1_title:      'Discovery',
    cons_step1_desc:       'We start with a deep-dive into your business, tech stack, and goals. No assumptions — just facts.',
    cons_step2_num:        '02',
    cons_step2_title:      'Strategy',
    cons_step2_desc:       'We deliver a clear plan: architecture, timeline, and budget — reviewed and agreed before any work starts.',
    cons_step3_num:        '03',
    cons_step3_title:      'Execution',
    cons_step3_desc:       'Senior developers build, test, and iterate in rapid sprints with weekly demos and full transparency.',
    cons_step4_num:        '04',
    cons_step4_title:      'Handover',
    cons_step4_desc:       'Clean code, full documentation, and a live knowledge-transfer session. You are always in control.',
    cons_pricing_title:    'Consulting Packages',
    cons_pricing_sub:      'Flexible options — whether you need an hour of advice or a dedicated development team.',
    pkg_cons1_name:        'Hourly',
    pkg_cons1_price:       '€105',
    pkg_cons1_period:      '/h',
    pkg_cons1_desc:        'Perfect for targeted advice, code reviews, or quick fixes.',
    pkg_cons1_f1:          'Senior IT-expert on demand',
    pkg_cons1_f2:          'Code review & audit',
    pkg_cons1_f3:          'Architecture consultancy',
    pkg_cons1_f4:          'No minimum commitment',
    pkg_cons1_cta:         'Book an Hour',
    pkg_cons2_name:        'Retainer',
    pkg_cons2_price:       '€3,900',
    pkg_cons2_period:      '/mo',
    pkg_cons2_desc:        'Ongoing IT support and strategic advisory every month.',
    pkg_cons2_f1:          '40 hrs/mo dedicated time',
    pkg_cons2_f2:          'Priority response (< 4 hrs)',
    pkg_cons2_f3:          'Monthly strategy session',
    pkg_cons2_f4:          'Full-stack capability',
    pkg_cons2_f5:          'Flexible scope each month',
    pkg_cons2_cta:         'Start Retainer',
    pkg_cons3_name:        'Project',
    pkg_cons3_price:       'Custom',
    pkg_cons3_period:      '',
    pkg_cons3_desc:        'End-to-end project delivery with fixed scope, timeline, and price.',
    pkg_cons3_f1:          'Fixed-price contract',
    pkg_cons3_f2:          'Dedicated project team',
    pkg_cons3_f3:          'Full documentation & handover',
    pkg_cons3_f4:          'Post-launch support included',
    pkg_cons3_cta:         'Discuss Your Project',
    cons_cta_title:        'Ready to Move Forward?',
    cons_cta_desc:         'Tell us what you need. We will scope it, price it, and start building — usually within a week.',

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
    contact_about_text:     'OakDev & AI AB is a Swedish app studio and AI product company, stationiert in Uddevalla on the west coast of Sweden. We are a tight-knit team of passionate developers with over 20 years of combined experience in software, web, and product development.',
    contact_about_text2:    'We love learning and working with cutting-edge technology — from mobile apps and AI systems to webshops and cloud infrastructure. If it involves code and creativity, we are in.',
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
    about_sub:              'From IT consultants on Sweden’s west coast to a premium app studio with a strong passion for AI, we have been at the forefront of technology for over two decades. Passionate, persistent, and always pushing forward.',
    about_story_tag:        'The Journey',
    about_story_title:      'Born in Uddevalla. Wired for the Future.',
    about_story_p1:         'It started with a love for code and an obsession with solving problems. For over 20 years we have been deep in the trenches of software development — building databases, web systems, e-commerce platforms, and enterprise tools for clients across Sweden and beyond.',
    about_story_p2:         'As AI began reshaping the industry, we did not just watch — we dove in headfirst. We retooled, rebuilt, and reinvented ourselves as an AI-native product studio. Today we design and ship AI agents, automation pipelines, machine-learning integrations, and custom LLM-powered applications.',
    about_story_p3:         'We are based in Kristevik, Uddevalla on the beautiful Swedish west coast. A small but razor-sharp team with big ambitions — and the track record to back them up.',
    about_stats_years:      'Years in Tech',
    about_stats_projects:   'Projects Delivered',
    about_stats_stacks:     'AI Models in Use',
    about_stats_uptime:     'On-Time Delivery',
    about_team_tag:         'The People',
    about_team_title:       'Meet the Team',
    about_team_sub:         'A tight-knit crew of IT-experts and developers, AI builders and creative thinkers, united by a love for cutting-edge technology.',
    about_philip_title:     'Lead Developer & AI Specialist',
    about_philip_bio:       '20+ years turning complex problems into elegant code. Philip architects our systems, leads AI integrations, and keeps the tech stack running at peak performance. The engine room of OakDev.',
    about_elin_title:       'Developer & AI Integration',
    about_elin_bio:         'Elin bridges the gap between raw AI capabilities and real-world applications. She builds the pipelines, agents, and automation flows that make our AI products work and shine, reliably and at great scale.',
    about_jonna_title:      'Customer & Technical Support',
    about_jonna_bio:        'Jonna is responsible for support and operational structure, ensuring that both clients and projects receive the guidance and coordination needed to perform at their best.',
    about_jonathan_title:   'Marketing & Communication',
    about_jonathan_bio:     'Jonathan shapes how the world sees OakDev. From brand strategy to content and growth and he builds the signal that cuts through the noise.',
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
    nav_studio:      'App Studio',
    nav_ai:          'AI & Automation',
    nav_consulting:  'Konsult',
    nav_about:       'Om oss',
    nav_contact:     'Kontakt',
    nav_book:        'Boka samtal',
    explore_services: 'Utforska tjänster',
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
    hero_sub:        'OakDev är en premium app studio som bygger mobilapplikationer, AI-plattformar och automationssystem, från idé till lansering för innovationssökande och framtidsorienterade företag.',
    hero_cta1:       'Starta ett projekt',
    hero_cta2:       'Utforska vårt arbete',
    scroll:          'Scrolla',
    /* Services */
    services_tag:    'Vad vi bygger',
    services_title:  'Tjänster',
    services_desc:   'Från mobilappar till AI-system bygger vi produktionsfärdiga produkter som skapar verkligt användarvärde i global skala.',
    service_01:      '01',
    service_02:      '02',
    service_03:      '03',
    studio_title:    'App Studio',
    studio_desc:     'Mobila och webbaserade applikationer byggda för produktion. Från koncept och MVP till App Store-lansering, med starka tekniska grunder och långsiktig skalbarhet.',
    ai_title:        'AI & Automation',
    ai_desc:         'Intelligenta system, AI-integrationer och arbetsflödesautomation som transformerar hur företag arbetar. Byggda med moderna LLM:er, API:er och molninfrastruktur.',
    consulting_title:'Konsult',
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
    about_title:     'En produktstudio byggt för genomförande',
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
    form_service:    'Tjänst av intresse',
    svc_app:         'Apputveckling',
    svc_ai:          'AI & Automation',
    svc_consulting:  'Konsult',
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
    footer_desc:     'App studio och AI-produktbolag, stationerat i Uddevalla. Bygger morgondagens digitala produkter idag.',
    footer_privacy:  'Integritetspolicy',
    footer_terms:    'Användarvillkor',
    /* App Studio page */
    studio_hero_badge:    'App Studio',
    studio_hero_title1:   'Vi bygger appar',
    studio_hero_title2:   'som världen använder.',
    studio_hero_sub:      'Från idé till App Store skapar och lanserar OakDev nativa, plattformsoberoende och AI-drivna applikationer som användare uppskattar och företag kan växa med.',
    studio_see_apps:      'Se våra appar',
    studio_types_tag:     'Vad vi bygger',
    studio_types_title:   'Application.',
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
    type_mvp_desc:        'Från idé till fungerande produkt på cirka en vecka. Validerade MVP:er byggda för snabbhet så du kan testa, lära och iterera.',
    portfolio_tag:        'Vår portfölj',
    portfolio_h_pre:      'Appar vi',
    portfolio_h_main:     'lanserat',
    portfolio_desc:       'Riktiga produkter, riktiga användare. Här är några av apparna vi har byggt och lanserat.',
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
    app_pricing_desc:     'Transparent prissättning för alla projektstorlekar. Från första prototyp till företagslansering. Alla priser exkl. moms.',
    pkg_mvp_name:         'MVP',
    pkg_mvp_tagline:      'Validera din idé snabbt',
    pkg_pro_name:         'Studio',
    pkg_pro_tagline:      'Fullfunktionell produktionsapp',
    pkg_ent_name:         'Enterprise',
    pkg_ent_tagline:      'Komplexa system i stor skala',
    /* AI & Automation page */
    ai_hero_badge:        'AI & Automation',
    ai_hero_title1:       'Företagens framtid',
    ai_hero_title2:       'är automatiserad.',
    ai_hero_sub:          'OakDev bygger intelligenta system, autonoma AI-agenter och arbetsflödesautomation som transformerar hur företag verkar och frigör ditt team att fokusera på det som verkligen spelar roll.',
    ai_see_more:          'Se vad som är möjligt',
    ai_types_tag:         'Vad vi bygger',
    ai_types_title:       'Varje typ av AI-system.',
    ai_types_desc:        'Från fristående integrationer till fullständiga autonoma agentnätverk designar och driftsätter vi intelligenta system som arbetar för ditt företag dygnet runt.',
    type_agents_title:    'AI-agenter',
    type_agents_desc:     'Autonoma AI-arbetare som planerar, beslutar och utför komplexa flerstegsuppgifter med verktyg, API:er och data och verkar dygnet runt med minimal mänsklig tillsyn.',
    type_llm_title:       'LLM-integration',
    type_llm_desc:        'GPT, Claude, Gemini — vi integrerar världens mest kraftfulla språkmodeller i dina produkter, arbetsflöden och kundupplevelser.',
    type_rag_title:       'RAG-kunskapssystem',
    type_rag_desc:        'AI tränad på ditt företags data. Omedelbara, korrekta svar från dina dokument, wikis, databaser och interna verktyg utan hallucinationer.',
    type_workflow_title:  'Arbetsflödesautomation',
    type_workflow_desc:   'Helautomatisering av repetitiva affärsprocesser. Triggerbaserade flöden som kopplar samman dina verktyg, CRM:er, databaser och API:er sömlöst.',
    type_ai_analytics:    'AI-analys',
    type_ai_analytics_desc: 'Automatiserad rapportering, anomalidetektering och intelligenta insikter som omvandlar råa affärsdata till tydliga, handlingsbara beslut i realtid.',
    type_voice_vision:    'Röst & visuell AI',
    type_voice_vision_desc: 'Transkription, talsyntes, bildigenkänning och videoanalys. Multimodal AI för nästa generations produktgränssnitt.',
    agents_tag:           'Varför AI-agenter',
    agents_title:         'Autonoma AI-arbetare för ditt företag',
    agents_desc:          'AI-agenter är program som självständigt planerar, beslutar och agerar för att uppnå mål. Till skillnad från grundläggande automation anpassar de sig till oväntade situationer och lär av kontexten.',
    benefit1_title:       'Drift dygnet runt',
    benefit1_desc:        'AI-agenter sover aldrig. De behandlar uppgifter och svarar på händelser kontinuerligt utan raster, sjukdagar eller tidszoner.',
    benefit2_title:       '80% mindre manuellt arbete',
    benefit2_desc:        'Automatisera repetitiva uppgifter som konsumerar ditt team — datainmatning, rapportering, kundförfrågningar, schemaläggning och rutinbeslut.',
    benefit3_title:       'Skala utan att anställa',
    benefit3_desc:        'Hantera 10 gånger arbetsbelastningen utan att öka personalstyrkan. AI-kapacitet skalas omedelbart med dina affärsbehov.',
    benefit4_title:       'Felfri exekvering',
    benefit4_desc:        'Konsekvent, korrekt uppgiftsutförande varje gång. Inga mänskliga fel, inga glömda steg, inga missade deadlines.',
    benefit5_title:       'Omedelbara insikter',
    benefit5_desc:        'Bearbeta tusentals datapunkter på sekunder. Affärsintelligens i realtid, varningar och rekommendationer på begäran.',
    benefit6_title:       'Sammansatt effektivitet',
    benefit6_desc:        'Varje automatiserad process frigör ditt team för kreativt och strategiskt arbete och bygger upp en sammansatt produktivitetsfördel över tid.',
    ai_pricing_tag:       'Priser',
    ai_pricing_title:     'AI & Automationspaket',
    ai_pricing_desc:      'Tydliga priser för intelligenta system. Från första integrationen till fullständig automation. Alla priser exkl. moms.',
    pkg_ai1_name:         'AI Starter',
    pkg_ai1_tagline:      'Din första AI-integration',
    pkg_ai2_name:         'AI Platform',
    pkg_ai2_tagline:      'Fullt AI-drivet system',
    pkg_ai3_name:         'Enterprise AI',
    pkg_ai3_tagline:      'Fullständig automationstransformation',
    ai_process_tag:       'Hur vi arbetar',
    ai_process_title:     'Från analys till driftsatt intelligens',
    ai_process_desc:      'Ett strukturerat tillvägagångssätt för att bygga AI-system som faktiskt fungerar i produktion och fortsätter att förbättras.',
    ai_step1_title:       'Analys',
    ai_step1_desc:        'Vi kartlägger dina arbetsflöden, data och mål för att identifiera automation-möjligheter med störst genomslagskraft.',
    ai_step2_title:       'Design',
    ai_step2_desc:        'Arkitektur, modellval och integrationsplanering. Fullständigt tekniskt schema innan en rad kod skrivs.',
    ai_step3_title:       'Bygg',
    ai_step3_desc:        'Snabb utveckling med veckovisa demos. Byggd för produktionstillförlitlighet och verkliga kantfall från dag ett.',
    ai_step4_title:       'Driftsätt',
    ai_step4_desc:        'Lansering, övervakning, teamutbildning och löpande optimering för att säkerställa verklig, mätbar affärspåverkan.',
    ai_cta_title:         'Redo att automatisera ditt företag?',
    ai_cta_desc:          'Berätta om dina arbetsflöden. Vi designar ett AI-system som transformerar hur ditt företag verkar.',

    // AI Trends section (SV)
    ai_trends_tag:        'Senaste Trender',
    ai_trends_sub:        'Vi ligger steget före inom AI och integrerar de senaste modellerna, ramverken och arkitekturerna i produktionsklara system som skapar verkligt affärsvärde.',
    ai_trend1_title:      'Multi-Agent Systems',
    ai_trend1_desc:       'Nätverk av specialiserade AI-agenter som samarbetar, delegerar uppgifter och löser komplexa problem bortom vad en enskild modell kan hantera.',
    ai_trend2_title:      'Long-Context AI',
    ai_trend2_desc:       'GPT och Claude med kontextfönster på 128k+ tokens. AI som kan läsa hela kodbaser, dokument och konversationer i ett enda svep.',
    ai_trend3_title:      'Multimodal AI',
    ai_trend3_desc:       'AI som ser, hör och läser. Vision-modeller, ljudtranskribering och dokumentförståelse sammanslaget i enhetliga, intelligenta arbetsflöden.',
    ai_trend4_title:      'On-Premise AI',
    ai_trend4_desc:       'Open source-modeller som Llama, Mistral och Mixtral driftsatta i din egen infrastruktur – med full datasuveränitet och utan beroende av externa API:er.',

    // Consulting page (SV)
    cons_hero_badge:       'IT-konsultation',
    cons_hero_title1:      'Expertlösningar',
    cons_hero_title2:      'för varje Utmaning',
    cons_hero_sub:         'Från en enkel webbplats till fullständig digital transformation, vi tar med oss senior kompetens till företag av alla storlekar. Webbplatser, webbutiker, databaser, molnet och allt däremellan.',
    cons_type_web_title:   'Webbutveckling',
    cons_type_web_desc:    'Snabba, snygga webbplatser och landningssidor som konverterar. Byggda för prestanda och skalbarhet från dag ett.',
    cons_type_ecom_title:  'E-handel',
    cons_type_ecom_desc:   'Webbutiker som säljer. WooCommerce, Shopify eller helt skräddarsydd — vi hanterar hela stacken.',
    cons_type_db_title:    'Databasdesign',
    cons_type_db_desc:     'Relationell, NoSQL eller hybrid. Vi designar, migrerar och optimerar databaser för exakt din arbetsbelastning.',
    cons_type_cloud_title: 'Moln & Infrastruktur',
    cons_type_cloud_desc:  'AWS, Azure, GCP — vi designar motståndskraftig infrastruktur, CI/CD-pipelines och containerorkestrering.',
    cons_type_cto_title:   'CTO-rådgivning',
    cons_type_cto_desc:    'Fraktionell CTO-tjänst. Strategiskt teknologiledarskap utan heltidskostnad. Färdplaner, teamskalning, teknikrevision.',
    cons_type_soft_title:  'Skräddarsydd Mjukvara',
    cons_type_soft_desc:   'Bespoke applikationer, interna verktyg, integrationer och API:er — konstruerade för att passa ditt företag exakt.',
    cons_why_title:        'Varför OakDev Consulting?',
    cons_why_sub:          'Vi är hands-on IT-nördar, inte PowerPoint-konsulter. Vi tar fram koden, driver infrastrukturen och tar ansvar för resultatet.',
    cons_why1_title:       'Endast Seniora Utvecklare',
    cons_why1_desc:        'Inga juniorer. Varje uppdrag hanteras av utvecklare med 20+ års produktionserfarenhet.',
    cons_why2_title:       'Full-Stack Kapacitet',
    cons_why2_desc:        'Front-end till back-end, mobil till moln. Ett team, inga glapp.',
    cons_why3_title:       'Transparent Prissättning',
    cons_why3_desc:        'Fasta arvoden eller tydliga retainrar. Inga överraskningsfakturor. Scope låst innan en rad skrivs.',
    cons_why4_title:       'Snabb Leverans',
    cons_why4_desc:        'Sprintar på en till fyra veckor. De flesta projekt lanseras på under en månad.',
    cons_why5_title:       'IP-Äganderätt',
    cons_why5_desc:        'Du äger 100 % av allt vi bygger. Ingen inlåsning, inga licensavgifter.',
    cons_why6_title:       'Löpande Support',
    cons_why6_desc:        'Retainrar efter lansering tillgängliga. Vi stannar kvar så länge du behöver oss.',
    cons_process_title:    'Så arbetar Vi',
    cons_process_sub:      'En fokuserad fyrastegsprocess som håller varje projekt i tid, inom budget och på rätt spår.',
    cons_step1_num:        '01',
    cons_step1_title:      'Discovery',
    cons_step1_desc:       'Vi börjar med en djupdykning i din verksamhet, teknikstack och mål. Inga antaganden — bara fakta.',
    cons_step2_num:        '02',
    cons_step2_title:      'Strategi',
    cons_step2_desc:       'Vi levererar en tydlig plan: arkitektur, tidslinje och budget — granskad och godkänd innan arbetet börjar.',
    cons_step3_num:        '03',
    cons_step3_title:      'Genomförande',
    cons_step3_desc:       'Seniora utvecklare bygger, testar och itererar i snabba sprintar med veckovisa demos och full transparens.',
    cons_step4_num:        '04',
    cons_step4_title:      'Överlämning',
    cons_step4_desc:       'Ren kod, fullständig dokumentation och en live kunskapsöverföringssession. Du har alltid kontroll.',
    cons_pricing_title:    'Konsultpaket',
    cons_pricing_sub:      'Flexibla alternativ — oavsett om du behöver en timmes råd eller ett dedikerat utvecklar-team.',
    pkg_cons1_name:        'Timvis',
    pkg_cons1_price:       '€105',
    pkg_cons1_period:      '/tim',
    pkg_cons1_desc:        'Perfekt för riktad rådgivning, kodgranskning eller snabba åtgärder.',
    pkg_cons1_f1:          'Senior IT-expertis on demand',
    pkg_cons1_f2:          'Kodgranskning & revision',
    pkg_cons1_f3:          'Arkitekturkonsultation',
    pkg_cons1_f4:          'Inget minimiåtagande',
    pkg_cons1_cta:         'Boka en Timme',
    pkg_cons2_name:        'Retainer',
    pkg_cons2_price:       '€3 900',
    pkg_cons2_period:      '/mån',
    pkg_cons2_desc:        'Löpande IT-stöd och strategisk rådgivning varje månad.',
    pkg_cons2_f1:          '40 tim/mån dedikerad tid',
    pkg_cons2_f2:          'Prioriterad respons (< 4 tim)',
    pkg_cons2_f3:          'Månatlig strategisession',
    pkg_cons2_f4:          'Full-stack kapacitet',
    pkg_cons2_f5:          'Flexibelt scope varje månad',
    pkg_cons2_cta:         'Starta Retainer',
    pkg_cons3_name:        'Projekt',
    pkg_cons3_price:       'Custom',
    pkg_cons3_period:      '',
    pkg_cons3_desc:        'Helhetsleverans av projekt med fast scope, tidslinje och pris.',
    pkg_cons3_f1:          'Fast pris-kontrakt',
    pkg_cons3_f2:          'Dedikerat projektteam',
    pkg_cons3_f3:          'Full dokumentation & överlämning',
    pkg_cons3_f4:          'Support efter lansering ingår',
    pkg_cons3_cta:         'Diskutera Ditt Projekt',
    cons_cta_title:        'Redo att Komma Igång?',
    cons_cta_desc:         'Berätta vad du behöver. Vi skisserar det, sätter pris och börjar bygga, första draft eller leverans vanligtvis inom en vecka.',

    // Contact page (SV)
    contact_hero_badge:     'Kontakt',
    contact_hero_title:     'Låt Oss Bygga Något',
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
    contact_about_text:     'OakDev & AI AB är en svensk app-studio och ett AI-produktbolag, stationerat i Uddevalla på Sveriges västkust. Vi är ett tight-knit team av passionerade utvecklare med över 20 års samlad erfarenhet inom mjukvara, webb och produktutveckling.',
    contact_about_text2:    'Vi älskar att lära oss och arbeta med banbrytande teknik, från mobilappar och AI-system till webbutiker och molninfrastruktur. Om det handlar om kod och kreativitet är vi med.',
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
    about_title:            '20 År av',
    about_title2:           'Att Bygga Framtiden',
    about_sub:              'Från IT-konsulter på svenska västkusten till en premium app-studio med ett starkt brinnande intresse för AI, har vi stått i teknikens framkant i över två decennier. Passionerade, envisa och alltid på gång.',
    about_story_tag:        'Resan',
    about_story_title:      'Grundat i Uddevalla. Redo för framtiden.',
    about_story_p1:         'Det började med en kärlek till att bygga datorer och koda samt en besatthet av att lösa problem. I över 20 år har vi befunnit oss djupt i programvaruutvecklingens skyttegravar och byggt bland annat databaser, webbsystem, e-handelsplattformar och företagssystem för kunder i hela Sverige och utomlands.',
    about_story_p2:         'När AI började omforma branschen stod vi inte vid sidan och tittade på bara, vi kastade oss in. Vi verktygsbytte, byggde om och uppfann oss själva på nytt som en AI-nativ produktstudio. Idag designar och levererar vi bland annat AI-agenter, automatiseringspipelines, maskininlärningsintegrationer och skräddarsydda LLM-drivna applikationer.',
    about_story_p3:         'Vi finns i Kristevik, Uddevalla på Sveriges vackra västkust. Ett litet men vasst team med stora ambitioner och ett track record som backar upp dem.',
    about_stats_years:      'År i Branschen',
    about_stats_projects:   'Levererade Projekt',
    about_stats_stacks:     'AI-modeller i bruk',
    about_stats_uptime:     'Drifttidsgaranti',
    about_team_tag:         'Teamet',
    about_team_title:       'Möt Teamet',
    about_team_sub:         'Ett sammansvetsat team av IT-expertis och utvecklare, AI-byggare och kreativa tänkare, förenade av kärleken till den senaste tekniken.',
    about_philip_title:     'Lead Developer & AI-specialist',
    about_philip_bio:       '20+ år av att omvandla komplexa problem till elegant kod. Philip designar våra system, leder AI-integrationer och håller teknikstacken på toppnivå. OakDevs maskinrum.',
    about_elin_title:       'Utvecklare & AI-integration',
    about_elin_bio:         'Elin överbryggar klyftan mellan råa AI-förmågor och verkliga applikationer. Hon bygger de pipelines, agenter och automationsflöden som gör att våra AI-produkter briljerar, pålitligt och i stor skala.',
    about_jonna_title:      'Kund- & Teknisk Support',
    about_jonna_bio:        'Jonna ansvarar för support och operativ struktur, och ser till att både kunder och projekt får det stöd som krävs för att leverera på topp.',
    about_jonathan_title:   'Marknadsföring & Kommunikation',
    about_jonathan_bio:     'Jonathan formar hur världen ser OakDev. Från varumärkesstrategi till innehåll och tillväxt och han bygger signalen som skär genom bruset.',
    about_clients_tag:      'Betrodda Av',
    about_clients_title:    'Företag vi samarbetat med.',
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
   Input validation + honeypot + FormSubmit.co submission
   No account needed — uses hello@oakdev.app directly.
   ============================================================ */
function initContactForm() {
  const form   = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form || !status) return;

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const lang = Lang.get();
    const t    = TRANSLATIONS[lang];

    // Honeypot check (_honey field — bots fill it, humans don't)
    const honey = form.querySelector('[name="_honey"]');
    if (honey && honey.value) return; // Silently reject bots

    const nameEl    = form.querySelector('[name="name"]');
    const emailEl   = form.querySelector('[name="email"]');
    const messageEl = form.querySelector('[name="message"]');
    const submitBtn = form.querySelector('[type="submit"]');

    // Validate
    const name    = nameEl?.value.trim() || '';
    const email   = emailEl?.value.trim() || '';
    const message = messageEl?.value.trim() || '';

    if (!name || !validateEmail(email) || message.length < 5) {
      status.textContent = t.form_validation;
      status.className   = 'form-status error';
      return;
    }

    // Submit via AJAX to FormSubmit.co
    submitBtn.disabled = true;
    submitBtn.textContent = '...';
    status.className = 'form-status';

    try {
      const res = await fetch(form.action, {
        method:  'POST',
        headers: { 'Accept': 'application/json' },
        body:    new FormData(form),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success !== 'false') {
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

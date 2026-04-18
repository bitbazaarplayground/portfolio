import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import heroLayer from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import jjMotorsPreview from './assets/work-jjmotors-landing.jpg'
import traverPreview from './assets/work-traver-landing.jpg'
import './App.css'

const sharedContactLinks = [
  {
    id: 'email',
    value: 'n.traver@hotmail.com',
    href: 'mailto:n.traver@hotmail.com',
  },
  {
    id: 'whatsapp',
    value: '+44 7599 032503',
    href: 'https://wa.me/447599032503',
  },
  {
    id: 'linkedin',
    value: 'Nicolas Traver',
    href: 'https://www.linkedin.com/in/nicolas-traver-ba1ba2111',
  },
]

const portfolioCopy = {
  en: {
    meta: {
      lang: 'en-GB',
      locale: 'en_GB',
      title: 'Nicolas Traver | Frontend Developer, Websites & SEO',
      description:
        'Portfolio of Nicolas Traver, a freelance frontend developer and SEO-aware website builder creating React websites, ecommerce foundations, and conversion-focused digital work for English and Spanish markets.',
    },
    brand: {
      mark: 'NT',
      name: 'Nicolas Traver',
      small: 'Digital portfolio',
      backToTop: 'Back to top',
    },
    nav: {
      label: 'Primary navigation',
      work: 'Work',
      lab: 'Lab',
      profile: 'Profile',
      services: 'Services',
      systems: 'Systems',
      contact: 'Brief',
    },
    language: {
      label: 'Switch portfolio language',
      current: 'English',
    },
    intro: {
      aria: 'Portfolio launch calibration',
      kicker: 'Initializing portfolio signal',
      title: 'Calibrating the launch room.',
      command: 'npm run impress',
      held: 'held',
      ready: 'ready',
      hold: 'Hold',
      opens: 'Portal opens in',
      enterAria: 'Enter the portfolio now',
      enter: 'Enter the portal',
      replay: 'Replay intro',
      replayAria: 'Replay the portfolio intro',
      steps: ['Offer signal locked', 'Speed budget armed', 'Search intent mapped', 'Conversion path online'],
    },
    hero: {
      eyebrow: 'Websites, ecommerce, SEO, and launch systems',
      title: 'Digital work that feels premium and performs with purpose.',
      lede:
        'A portfolio for employers and business owners who need more than a pretty screen: strategy, speed, trust, and a site that helps people take the next step.',
      primaryCta: 'Start a website brief',
      secondaryCta: 'Trigger signal burst',
      ctaLabel: 'Primary calls to action',
      outcomesLabel: 'Portfolio focus areas',
      visualLabel: 'Modern website delivery cockpit',
      liveMode: 'Live mode',
      searchLabel: 'Search',
      searchTitle: 'Schema ready',
      searchText: 'Pages mapped by intent',
      commerceLabel: 'Commerce',
      commerceTitle: 'Checkout flow',
      commerceText: 'Trust, product proof, urgency, clarity',
    },
    outcomes: [
      { value: '01', label: 'Launch-ready websites' },
      { value: '02', label: 'Ecommerce foundations' },
      { value: '03', label: 'Technical SEO systems' },
      { value: '04', label: 'Conversion-led UX' },
    ],
    tickerLabel: 'High value delivery signals',
    ticker: ['Responsive build', 'Technical SEO', 'Fast storefronts', 'Conversion copy', 'Analytics clarity'],
    selectedWork: [
      {
        id: 'traver',
        title: 'Traver Decoración Textil',
        category: 'Home services website',
        url: 'https://www.traverdecoraciontextil.es',
        image: traverPreview,
        imageAlt: 'Outdoor living area with textile shade and soft furnishings',
        summary:
          'A full digital renovation for custom curtains, blinds, awnings, automation, mosquito screens, and textile decoration in Castellón and Valencia.',
        focus: ['Legacy rebuild', 'Conversion paths', 'Local SEO architecture'],
        result: 'A premium, search-ready website renovation for an established regional business',
        lensAccent: '#d8ff55',
        lensSignal: 'Renovation + local SEO',
        lensDetail: 'Legacy site rebuilt around clearer services, premium trust, and enquiry momentum.',
        caseStudy: {
          intro:
            'Traver needed a full website renovation: replace a long-running legacy site, sharpen the service journey, improve enquiry paths, and build stronger foundations for local Google visibility.',
          sections: [
            {
              title: 'Brief',
              text: 'Modernise an established decoration textile business without losing trust, making the new website feel premium, current, and easier for customers to understand.',
            },
            {
              title: 'What I built',
              text: 'A responsive React site with a refined landing experience, service routes, consultation CTAs, contact paths, and visual direction that fits interiors, shade, and made-to-measure work.',
            },
            {
              title: 'SEO & conversion',
              text: 'Route-level metadata, canonical URLs, local business schema, Open Graph data, service-specific pages, privacy/cookie handling, and clearer calls to action.',
            },
            {
              title: 'Public outcome',
              text: 'The case study focuses on visible improvements: a stronger brand presentation, clearer service discovery, and a more confident route from visitor interest to enquiry.',
            },
          ],
          stack: ['React', 'Vite', 'Netlify', 'Schema.org', 'Responsive images', 'Cookie consent'],
        },
      },
      {
        id: 'jjmotors',
        title: 'J&J Motors Garage',
        category: 'Automotive service website',
        url: 'https://www.jjmotorsgarage.es',
        image: jjMotorsPreview,
        imageAlt: 'Mechanic inspecting a car brake assembly in a workshop',
        summary:
          'A focused workshop website for mechanical repairs, maintenance, brakes, suspension, electronic diagnosis, location, and WhatsApp-led enquiries.',
        focus: ['Trust-first content', 'Service architecture', 'Maps and FAQ content'],
        result: 'A clean local presence with a fast path from search to contact',
        lensAccent: '#19bda7',
        lensSignal: 'Trust + fast contact',
        lensDetail: 'A direct local workshop presence with service clarity, map context, and WhatsApp-led action.',
        caseStudy: {
          intro:
            'J&J Motors Garage needed a focused, professional web presence where local drivers could quickly understand the workshop, check services, and make contact.',
          sections: [
            {
              title: 'Brief',
              text: 'Create a polished online presence for an automotive workshop in Castellón, with enough structure to build trust without overcomplicating the visitor journey.',
            },
            {
              title: 'What I built',
              text: 'A dark, direct React site with service pages, a location page, Google Maps embed, FAQs, legal pages, and practical CTAs for repair and maintenance enquiries.',
            },
            {
              title: 'SEO & trust',
              text: 'AutoRepair schema, organization data, FAQ structure, service content for maintenance and diagnosis, Google Maps context, cookie consent, and analytics readiness.',
            },
            {
              title: 'Public outcome',
              text: 'The public story is intentionally simple: a credible workshop website that helps people move from local search to service information, location, and contact.',
            },
          ],
          stack: ['React', 'Vite', 'Netlify', 'AutoRepair schema', 'Google Maps', 'Analytics consent'],
        },
      },
    ],
    work: {
      eyebrow: 'Selected work',
      title: 'Real businesses with live websites on real domains.',
      text:
        'These come first because they prove the work can leave the build folder and support actual businesses with search, trust, and clear customer action.',
      viewLive: 'View live site',
      focusLabelSuffix: 'focus areas',
      impact: 'Impact',
      lensEyebrow: 'Project lens',
      lensStatus: 'Active signal',
      lensInstruction: 'Hover, focus, or tap a project to tune the section.',
      openWebsite: 'Open website',
      viewCaseStudy: 'View case study',
      hideCaseStudy: 'Hide case study',
      caseStudy: 'Case study',
      stack: 'Stack',
      visitLive: 'Visit live website',
    },
    productLab: {
      eyebrow: 'Product lab',
      title: 'Apps, dashboards, and product builds beyond business websites.',
      text:
        'A separate space for React builds that show product thinking: QR flows, admin dashboards, Supabase/Stripe foundations, and larger ideas still being shaped.',
      label: 'Product lab projects',
      viewProject: 'Open project',
      pending: 'Deployment pending',
      statusLabel: 'Status',
      techLabel: 'Signals',
      projects: [
        {
          id: 'to-talks',
          title: 'TO Talks Questionnaire',
          category: 'QR survey tool',
          status: 'Live conference tool',
          url: 'https://to-talks-questionnaire.netlify.app',
          description:
            'QR-based questionnaire developed for the Santander Technology Department to use during a conference talk, capturing audience views on technology, AI, questions, and feedback in real time.',
          signals: ['QR access', 'Live survey', 'Audience insight', 'Conference support'],
          accent: '#d8ff55',
          command: 'scan -> answer -> discuss',
        },
        {
          id: 'community-events',
          title: 'Community Events Platform',
          category: 'Dashboard product build',
          status: 'Being restored',
          url: 'https://communityeventsplatform.netlify.app',
          description:
            'React + Vite product environment for frontend practice and platform features, including admin and superadmin areas for sales views, daily and weekly reporting, and KPI-style dashboard work.',
          signals: ['Admin roles', 'KPI views', 'Supabase restore', 'Stripe restore'],
          accent: '#19bda7',
          command: 'events -> sales -> kpis',
        },
        {
          id: 'tabfair',
          title: 'TabFair',
          category: 'Ride-sharing product',
          status: 'Flagship build in progress',
          url: 'https://jade-rolypoly-5d4274.netlify.app',
          description:
            'A shared-ride website connecting users travelling to nearby destinations so they can split transport costs and travel together. This is the biggest product build and will become a deeper case study once reactivated.',
          signals: ['Product logic', 'User matching', 'Travel costs', 'Supabase planning'],
          accent: '#ff6b5f',
          command: 'route -> match -> share',
        },
        {
          id: 'movie-finder',
          title: 'Movie Finder',
          category: 'Early frontend project',
          status: 'Deployment pending',
          url: '',
          description:
            'One of the first classic app builds: a movie search experience focused on API handling, search state, UI feedback, and the fundamentals behind interactive frontend work.',
          signals: ['Search UI', 'API practice', 'State handling', 'Early build'],
          accent: '#2f77e8',
          command: 'search -> filter -> discover',
        },
      ],
    },
    profile: {
      eyebrow: 'Profile',
      title: 'Practical freelance experience with the frontend instincts employers look for.',
      text:
        'Nicolas Traver builds responsive websites for real businesses, combining visual polish with conversion thinking, SEO foundations, and production-friendly React workflows.',
      signalsLabel: 'Professional profile signals',
      strengthsLabel: 'Professional strengths',
      signals: [
        {
          label: 'Role',
          value: 'Freelance frontend developer, SEO-aware website builder, and self-employed digital partner.',
        },
        {
          label: 'Focus',
          value:
            'React interfaces, responsive HTML and CSS, JavaScript interaction, SEO structure, and launch-ready websites.',
        },
        {
          label: 'Markets',
          value: 'Comfortable working across English, Spanish, and Catalan conversations for local or international projects.',
        },
      ],
      strengths: [
        {
          title: 'Client Mindset',
          text: 'Experience turning real business goals into clearer pages, sharper calls to action, and websites people can trust.',
        },
        {
          title: 'Frontend Craft',
          text: 'Modern JavaScript, React, HTML, CSS, responsive layouts, interactive details, and clean deployment workflows.',
        },
        {
          title: 'Search Awareness',
          text: 'Technical SEO foundations, local business structure, metadata, schema, service pages, and performance-conscious builds.',
        },
      ],
    },
    servicesHeading: {
      eyebrow: 'Built to attract the right work',
      title: 'Everything a serious website needs before the project gallery arrives.',
    },
    services: [
      {
        id: 'build',
        title: 'Build',
        kicker: 'Websites',
        command: 'site forge',
        score: '98',
        mode: 'Conversion shell',
        accent: '#d8ff55',
        text:
          'Premium, responsive websites with sharp messaging, clean architecture, and a buying journey that feels obvious.',
        points: ['React interfaces', 'Landing pages', 'CMS-ready structure'],
      },
      {
        id: 'sell',
        title: 'Sell',
        kicker: 'Ecommerce',
        command: 'checkout pulse',
        score: '91',
        mode: 'Storefront engine',
        accent: '#19bda7',
        text:
          'Storefronts shaped around product discovery, trust signals, checkout confidence, and the details that lift order value.',
        points: ['Product pages', 'Checkout flow', 'Performance tuning'],
      },
      {
        id: 'grow',
        title: 'Grow',
        kicker: 'SEO',
        command: 'search radar',
        score: '94',
        mode: 'Intent map',
        accent: '#ff6b5f',
        text:
          'Search foundations that help the right people find you: technical fixes, content structure, schema, and measurable intent.',
        points: ['Core Web Vitals', 'Schema markup', 'Search intent maps'],
      },
    ],
    systems: {
      eyebrow: 'Modern stack, practical results',
      title: 'Sharp enough for employers. Useful enough for business owners.',
      text:
        'The site frames the work around outcomes clients understand while still giving hiring teams strong signals: product thinking, frontend craft, SEO literacy, performance, and maintainable systems.',
      label: 'Capability list',
      capabilities: [
        'AI-assisted content workflows',
        'Motion that supports the message',
        'Analytics and event tracking',
        'React, JavaScript, HTML, CSS',
        'Netlify and Supabase-ready builds',
        'Accessible responsive layouts',
        'Local business search signals',
      ],
    },
    process: {
      eyebrow: 'How the work moves',
      title: 'A clean path from idea to launch.',
      steps: [
        {
          step: 'Discover',
          text: 'Clarify the offer, audience, strongest proof, and the action every page should create.',
        },
        {
          step: 'Prototype',
          text: 'Turn the strategy into a clickable experience with real copy, responsive states, and performance budgets.',
        },
        {
          step: 'Launch',
          text: 'Ship the site with SEO basics, analytics, speed checks, and a tidy path for the next project story.',
        },
      ],
    },
    contact: {
      eyebrow: 'Ready when the details are',
      title: 'Nicolas Traver builds websites that look sharp, load cleanly, and give people a clear next step.',
      text:
        'Freelance experience across real business websites, SEO foundations, frontend delivery, and launch-ready builds for English and Spanish-speaking markets.',
      routesLabel: 'Best ways to work together',
      routes: [
        {
          title: 'Business owners',
          text: 'Website builds, renovation projects, local SEO, ecommerce foundations, and sharper enquiry journeys.',
        },
        {
          title: 'Hiring teams',
          text: 'Frontend development, React interfaces, responsive CSS, JavaScript features, and production-minded delivery.',
        },
      ],
      languageLabel: 'Languages and markets',
      languageSignals: ['Spanish native', 'Catalan native', 'Advanced English', 'English and Spanish markets'],
      panelTitle: 'Start the conversation',
      linkLabels: {
        email: 'Email',
        whatsapp: 'WhatsApp',
        linkedin: 'LinkedIn',
      },
      promptsTitle: 'Useful first details',
      prompts: [
        'Website, SEO, ecommerce, or frontend role',
        'Current site or project idea',
        'Main goal and preferred launch timing',
      ],
    },
    footer: {
      name: 'Nicolas Traver portfolio',
      backToTop: 'Back to top',
    },
  },
  es: {
    meta: {
      lang: 'es-ES',
      locale: 'es_ES',
      title: 'Nicolas Traver | Desarrollador Frontend, Webs y SEO',
      description:
        'Portfolio de Nicolas Traver, desarrollador frontend freelance y creador de webs con enfoque SEO, React, ecommerce y conversiones para mercados en español e inglés.',
    },
    brand: {
      mark: 'NT',
      name: 'Nicolas Traver',
      small: 'Portfolio digital',
      backToTop: 'Volver arriba',
    },
    nav: {
      label: 'Navegación principal',
      work: 'Trabajos',
      lab: 'Lab',
      profile: 'Perfil',
      services: 'Servicios',
      systems: 'Sistemas',
      contact: 'Brief',
    },
    language: {
      label: 'Cambiar idioma del portfolio',
      current: 'Español',
    },
    intro: {
      aria: 'Calibración de lanzamiento del portfolio',
      kicker: 'Inicializando señal del portfolio',
      title: 'Calibrando la sala de lanzamiento.',
      command: 'npm run impress',
      held: 'pausa',
      ready: 'listo',
      hold: 'Pausa',
      opens: 'El portal abre en',
      enterAria: 'Entrar al portfolio ahora',
      enter: 'Entrar al portal',
      replay: 'Repetir intro',
      replayAria: 'Repetir la intro del portfolio',
      steps: ['Oferta detectada', 'Velocidad preparada', 'Intención SEO mapeada', 'Conversión activada'],
    },
    hero: {
      eyebrow: 'Webs, ecommerce, SEO y sistemas de lanzamiento',
      title: 'Trabajo digital con presencia premium y propósito real.',
      lede:
        'Un portfolio para empresas y equipos que necesitan más que una pantalla bonita: estrategia, velocidad, confianza y una web que ayude a dar el siguiente paso.',
      primaryCta: 'Empezar un brief web',
      secondaryCta: 'Activar señal',
      ctaLabel: 'Llamadas a la acción principales',
      outcomesLabel: 'Áreas clave del portfolio',
      visualLabel: 'Panel moderno de entrega web',
      liveMode: 'Modo activo',
      searchLabel: 'Búsqueda',
      searchTitle: 'Schema preparado',
      searchText: 'Páginas mapeadas por intención',
      commerceLabel: 'Comercio',
      commerceTitle: 'Flujo de compra',
      commerceText: 'Confianza, prueba, urgencia y claridad',
    },
    outcomes: [
      { value: '01', label: 'Webs listas para lanzar' },
      { value: '02', label: 'Bases ecommerce' },
      { value: '03', label: 'Sistemas de SEO técnico' },
      { value: '04', label: 'UX orientada a conversión' },
    ],
    tickerLabel: 'Señales de entrega de alto valor',
    ticker: ['Diseño responsive', 'SEO técnico', 'Tiendas rápidas', 'Copy de conversión', 'Analítica clara'],
    selectedWork: [
      {
        id: 'traver',
        title: 'Traver Decoración Textil',
        category: 'Web de servicios para el hogar',
        url: 'https://www.traverdecoraciontextil.es',
        image: traverPreview,
        imageAlt: 'Zona exterior con sombra textil y decoración',
        summary:
          'Una renovación digital completa para cortinas, estores, toldos, automatización, mosquiteras y decoración textil en Castellón y Valencia.',
        focus: ['Renovación web', 'Rutas de conversión', 'Arquitectura SEO local'],
        result: 'Una renovación premium, preparada para SEO, para una empresa regional consolidada',
        lensAccent: '#d8ff55',
        lensSignal: 'Renovación + SEO local',
        lensDetail: 'Web antigua reconstruida alrededor de servicios más claros, confianza premium y consultas mejor guiadas.',
        caseStudy: {
          intro:
            'Traver necesitaba renovar una web con muchos años de recorrido, mejorar el viaje de servicios, reforzar las vías de contacto y crear mejores bases para la visibilidad local en Google.',
          sections: [
            {
              title: 'Brief',
              text: 'Modernizar una empresa consolidada de decoración textil sin perder confianza, haciendo que la nueva web se sintiera premium, actual y fácil de entender.',
            },
            {
              title: 'Qué construí',
              text: 'Una web responsive en React con una entrada visual cuidada, rutas de servicio, CTAs de consulta, vías de contacto y dirección visual alineada con interiores, sombra y trabajo a medida.',
            },
            {
              title: 'SEO y conversión',
              text: 'Metadatos por ruta, URLs canónicas, schema de negocio local, Open Graph, páginas de servicio, privacidad/cookies y llamadas a la acción más claras.',
            },
            {
              title: 'Resultado público',
              text: 'El caso se centra en mejoras visibles: presentación de marca más sólida, descubrimiento de servicios más claro y un camino más seguro desde el interés hasta la consulta.',
            },
          ],
          stack: ['React', 'Vite', 'Netlify', 'Schema.org', 'Imágenes responsive', 'Consentimiento cookies'],
        },
      },
      {
        id: 'jjmotors',
        title: 'J&J Motors Garage',
        category: 'Web de taller mecánico',
        url: 'https://www.jjmotorsgarage.es',
        image: jjMotorsPreview,
        imageAlt: 'Mecánico revisando un freno en un taller',
        summary:
          'Una web enfocada para reparaciones mecánicas, mantenimiento, frenos, suspensión, diagnosis electrónica, ubicación y consultas por WhatsApp.',
        focus: ['Contenido de confianza', 'Arquitectura de servicios', 'Mapa y FAQs'],
        result: 'Una presencia local clara con un camino rápido desde la búsqueda hasta el contacto',
        lensAccent: '#19bda7',
        lensSignal: 'Confianza + contacto rápido',
        lensDetail: 'Una presencia local directa con servicios claros, contexto de mapa y acción enfocada en WhatsApp.',
        caseStudy: {
          intro:
            'J&J Motors Garage necesitaba una presencia web profesional y directa para que conductores locales pudieran entender el taller, revisar servicios y contactar rápido.',
          sections: [
            {
              title: 'Brief',
              text: 'Crear una presencia online cuidada para un taller en Castellón, con estructura suficiente para generar confianza sin complicar el recorrido del visitante.',
            },
            {
              title: 'Qué construí',
              text: 'Una web React oscura y directa con páginas de servicio, página de ubicación, Google Maps, FAQs, páginas legales y CTAs prácticos para consultas de reparación y mantenimiento.',
            },
            {
              title: 'SEO y confianza',
              text: 'Schema AutoRepair, datos de organización, estructura FAQ, contenido de servicios, contexto de Google Maps, consentimiento de cookies y base para analítica.',
            },
            {
              title: 'Resultado público',
              text: 'La historia pública es sencilla: una web creíble para un taller que ayuda a pasar de la búsqueda local a servicios, ubicación y contacto.',
            },
          ],
          stack: ['React', 'Vite', 'Netlify', 'Schema AutoRepair', 'Google Maps', 'Consentimiento analítica'],
        },
      },
    ],
    work: {
      eyebrow: 'Trabajos seleccionados',
      title: 'Empresas reales con webs activas en dominios reales.',
      text:
        'Aparecen primero porque demuestran que el trabajo sale del entorno de desarrollo y ayuda a negocios reales con búsqueda, confianza y acción clara del cliente.',
      viewLive: 'Ver web en vivo',
      focusLabelSuffix: 'áreas de enfoque',
      impact: 'Impacto',
      lensEyebrow: 'Lente del proyecto',
      lensStatus: 'Señal activa',
      lensInstruction: 'Pasa el cursor, enfoca o toca un proyecto para ajustar la sección.',
      openWebsite: 'Abrir web',
      viewCaseStudy: 'Ver caso',
      hideCaseStudy: 'Ocultar caso',
      caseStudy: 'Caso de estudio',
      stack: 'Stack',
      visitLive: 'Visitar web en vivo',
    },
    productLab: {
      eyebrow: 'Product lab',
      title: 'Apps, dashboards y productos más allá de webs de negocio.',
      text:
        'Un espacio separado para proyectos React que muestran pensamiento de producto: flujos QR, paneles de administración, bases con Supabase/Stripe e ideas más grandes todavía en evolución.',
      label: 'Proyectos del product lab',
      viewProject: 'Abrir proyecto',
      pending: 'Pendiente de despliegue',
      statusLabel: 'Estado',
      techLabel: 'Señales',
      projects: [
        {
          id: 'to-talks',
          title: 'TO Talks Questionnaire',
          category: 'Herramienta QR de encuesta',
          status: 'Herramienta live para conferencia',
          url: 'https://to-talks-questionnaire.netlify.app',
          description:
            'Cuestionario basado en QR desarrollado para Santander Technology Department durante una charla, capturando opiniones sobre tecnología, IA, preguntas y feedback del público en tiempo real.',
          signals: ['Acceso QR', 'Encuesta live', 'Insight de audiencia', 'Apoyo a conferencia'],
          accent: '#d8ff55',
          command: 'scan -> answer -> discuss',
        },
        {
          id: 'community-events',
          title: 'Community Events Platform',
          category: 'Producto con dashboard',
          status: 'En restauración',
          url: 'https://communityeventsplatform.netlify.app',
          description:
            'Entorno React + Vite para práctica frontend y funcionalidades de plataforma, incluyendo áreas admin y superadmin para ventas, reporting diario/semanal y paneles tipo KPI.',
          signals: ['Roles admin', 'Vistas KPI', 'Restaurando Supabase', 'Restaurando Stripe'],
          accent: '#19bda7',
          command: 'events -> sales -> kpis',
        },
        {
          id: 'tabfair',
          title: 'TabFair',
          category: 'Producto de viajes compartidos',
          status: 'Proyecto principal en progreso',
          url: 'https://jade-rolypoly-5d4274.netlify.app',
          description:
            'Web para conectar usuarios que viajan a destinos cercanos, ayudándoles a dividir costes de transporte y viajar juntos. Es el producto más grande y pasará a caso de estudio cuando esté reactivado.',
          signals: ['Lógica de producto', 'Matching usuarios', 'Costes de viaje', 'Plan Supabase'],
          accent: '#ff6b5f',
          command: 'route -> match -> share',
        },
        {
          id: 'movie-finder',
          title: 'Movie Finder',
          category: 'Primer proyecto frontend',
          status: 'Despliegue pendiente',
          url: '',
          description:
            'Uno de los primeros proyectos clásicos: una experiencia de búsqueda de películas enfocada en APIs, estado de búsqueda, feedback de interfaz y fundamentos de frontend interactivo.',
          signals: ['UI de búsqueda', 'Práctica API', 'Manejo de estado', 'Build inicial'],
          accent: '#2f77e8',
          command: 'search -> filter -> discover',
        },
      ],
    },
    profile: {
      eyebrow: 'Perfil',
      title: 'Experiencia freelance práctica con criterio frontend para equipos y clientes.',
      text:
        'Nicolas Traver crea webs responsive para negocios reales, combinando acabado visual, pensamiento de conversión, bases SEO y flujos de trabajo en React preparados para producción.',
      signalsLabel: 'Señales del perfil profesional',
      strengthsLabel: 'Fortalezas profesionales',
      signals: [
        {
          label: 'Rol',
          value: 'Desarrollador frontend freelance, creador de webs con enfoque SEO y socio digital autónomo.',
        },
        {
          label: 'Enfoque',
          value: 'Interfaces React, HTML y CSS responsive, interacción JavaScript, estructura SEO y webs listas para lanzar.',
        },
        {
          label: 'Mercados',
          value: 'Trabajo cómodo en inglés, español y catalán para proyectos locales o internacionales.',
        },
      ],
      strengths: [
        {
          title: 'Mentalidad Cliente',
          text: 'Experiencia convirtiendo objetivos reales de negocio en páginas claras, llamadas a la acción mejores y webs que transmiten confianza.',
        },
        {
          title: 'Criterio Frontend',
          text: 'JavaScript moderno, React, HTML, CSS, layouts responsive, detalles interactivos y despliegues limpios.',
        },
        {
          title: 'Visión SEO',
          text: 'Bases de SEO técnico, estructura para negocio local, metadatos, schema, páginas de servicio y rendimiento cuidado.',
        },
      ],
    },
    servicesHeading: {
      eyebrow: 'Construido para atraer el trabajo adecuado',
      title: 'Todo lo que una web seria necesita antes de ampliar la galería de proyectos.',
    },
    services: [
      {
        id: 'build',
        title: 'Crear',
        kicker: 'Webs',
        command: 'site forge',
        score: '98',
        mode: 'Sistema de conversión',
        accent: '#d8ff55',
        text:
          'Webs premium y responsive con mensaje claro, arquitectura limpia y un recorrido de compra que se entiende rápido.',
        points: ['Interfaces React', 'Landing pages', 'Estructura preparada para CMS'],
      },
      {
        id: 'sell',
        title: 'Vender',
        kicker: 'Ecommerce',
        command: 'checkout pulse',
        score: '91',
        mode: 'Motor de tienda',
        accent: '#19bda7',
        text:
          'Tiendas diseñadas para descubrir producto, reforzar confianza, facilitar checkout y cuidar los detalles que elevan el pedido.',
        points: ['Páginas de producto', 'Flujo de checkout', 'Optimización de rendimiento'],
      },
      {
        id: 'grow',
        title: 'Crecer',
        kicker: 'SEO',
        command: 'search radar',
        score: '94',
        mode: 'Mapa de intención',
        accent: '#ff6b5f',
        text:
          'Bases de búsqueda para que te encuentre la gente adecuada: mejoras técnicas, estructura de contenido, schema e intención medible.',
        points: ['Core Web Vitals', 'Schema markup', 'Mapas de intención SEO'],
      },
    ],
    systems: {
      eyebrow: 'Stack moderno, resultados prácticos',
      title: 'Técnico para empleadores. Útil para negocios.',
      text:
        'La web presenta el trabajo alrededor de resultados que entienden los clientes y señales que valoran los equipos: producto, frontend, SEO, rendimiento y sistemas mantenibles.',
      label: 'Lista de capacidades',
      capabilities: [
        'Flujos de contenido asistidos por IA',
        'Movimiento que apoya el mensaje',
        'Analítica y seguimiento de eventos',
        'React, JavaScript, HTML, CSS',
        'Builds preparados para Netlify y Supabase',
        'Layouts responsive accesibles',
        'Señales de búsqueda para negocio local',
      ],
    },
    process: {
      eyebrow: 'Cómo avanza el trabajo',
      title: 'Un camino claro desde la idea hasta el lanzamiento.',
      steps: [
        {
          step: 'Descubrir',
          text: 'Aclarar la oferta, audiencia, prueba más fuerte y la acción que debe provocar cada página.',
        },
        {
          step: 'Prototipar',
          text: 'Convertir la estrategia en una experiencia navegable con copy real, estados responsive y objetivos de rendimiento.',
        },
        {
          step: 'Lanzar',
          text: 'Publicar la web con bases SEO, analítica, revisiones de velocidad y una ruta clara para el siguiente proyecto.',
        },
      ],
    },
    contact: {
      eyebrow: 'Listo cuando haya detalles',
      title: 'Nicolas Traver crea webs con buen aspecto, carga limpia y un siguiente paso evidente.',
      text:
        'Experiencia freelance en webs de negocios reales, bases SEO, entrega frontend y lanzamientos para mercados en español e inglés.',
      routesLabel: 'Mejores formas de trabajar juntos',
      routes: [
        {
          title: 'Negocios',
          text: 'Creación de webs, renovaciones, SEO local, bases ecommerce y recorridos de consulta más claros.',
        },
        {
          title: 'Equipos técnicos',
          text: 'Desarrollo frontend, interfaces React, CSS responsive, JavaScript y entrega orientada a producción.',
        },
      ],
      languageLabel: 'Idiomas y mercados',
      languageSignals: ['Español nativo', 'Catalán nativo', 'Inglés avanzado', 'Mercados en español e inglés'],
      panelTitle: 'Empezar la conversación',
      linkLabels: {
        email: 'Email',
        whatsapp: 'WhatsApp',
        linkedin: 'LinkedIn',
      },
      promptsTitle: 'Primeros detalles útiles',
      prompts: [
        'Web, SEO, ecommerce o rol frontend',
        'Web actual o idea de proyecto',
        'Objetivo principal y fecha ideal de lanzamiento',
      ],
    },
    footer: {
      name: 'Portfolio de Nicolas Traver',
      backToTop: 'Volver arriba',
    },
  },
}

const INTRO_SECONDS = 10
const INTRO_GRID_SIZE = 42

function IntroGridWake() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const canvas = canvasRef.current

    if (!canvas || !canHover) {
      return undefined
    }

    const context = canvas.getContext('2d')
    const pulses = []
    let animationFrame = 0
    let height = 0
    let width = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const addPulse = (event) => {
      const rect = canvas.getBoundingClientRect()
      const pointerX = event.clientX - rect.left
      const pointerY = event.clientY - rect.top
      const baseX = Math.round(pointerX / INTRO_GRID_SIZE) * INTRO_GRID_SIZE
      const baseY = Math.round(pointerY / INTRO_GRID_SIZE) * INTRO_GRID_SIZE
      const now = performance.now()

      for (let x = -1; x <= 1; x += 1) {
        for (let y = -1; y <= 1; y += 1) {
          const distance = Math.abs(x) + Math.abs(y)

          if (distance < 3) {
            pulses.push({
              born: now + distance * 38,
              x: baseX + x * INTRO_GRID_SIZE,
              y: baseY + y * INTRO_GRID_SIZE,
            })
          }
        }
      }

      if (pulses.length > 90) {
        pulses.splice(0, pulses.length - 90)
      }
    }

    const draw = (time) => {
      context.clearRect(0, 0, width, height)

      for (let index = pulses.length - 1; index >= 0; index -= 1) {
        const pulse = pulses[index]
        const age = time - pulse.born

        if (age < 0) {
          continue
        }

        const progress = age / 900

        if (progress >= 1) {
          pulses.splice(index, 1)
          continue
        }

        const alpha = (1 - progress) * 0.32
        const inset = 4 + progress * 9
        const size = INTRO_GRID_SIZE - inset * 2

        context.globalAlpha = alpha
        context.fillStyle = index % 3 === 0 ? '#d8ff55' : '#19bda7'
        context.fillRect(pulse.x - INTRO_GRID_SIZE / 2 + inset, pulse.y - INTRO_GRID_SIZE / 2 + inset, size, size)
        context.globalAlpha = alpha * 1.5
        context.strokeStyle = '#ffffff'
        context.strokeRect(pulse.x - INTRO_GRID_SIZE / 2 + inset, pulse.y - INTRO_GRID_SIZE / 2 + inset, size, size)
      }

      context.globalAlpha = 1
      animationFrame = window.requestAnimationFrame(draw)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    canvas.addEventListener('pointermove', addPulse)
    resize()
    draw(performance.now())

    return () => {
      observer.disconnect()
      canvas.removeEventListener('pointermove', addPulse)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas className="intro-grid-wake" ref={canvasRef} aria-hidden="true" />
}

function IntroGate({ copy, onFinish }) {
  const doneRef = useRef(false)
  const [shouldHoldIntro] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('intro') === 'hold'
  })
  const [countdown, setCountdown] = useState(INTRO_SECONDS)
  const [isExiting, setIsExiting] = useState(false)

  const finish = useCallback(() => {
    if (doneRef.current) {
      return
    }

    doneRef.current = true
    setIsExiting(true)
    window.setTimeout(onFinish, 420)
  }, [onFinish])

  useEffect(() => {
    if (shouldHoldIntro) {
      return undefined
    }

    const startTime = Date.now()
    const interval = window.setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000)
      setCountdown(Math.max(INTRO_SECONDS - elapsedSeconds, 0))
    }, 200)
    const timer = window.setTimeout(finish, INTRO_SECONDS * 1000)

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(timer)
    }
  }, [finish, shouldHoldIntro])

  return (
    <div
      className={`intro-gate ${isExiting ? 'is-exiting' : ''}`}
      aria-label={copy.aria}
      role="dialog"
    >
      <IntroGridWake />
      <div className="intro-panel">
        <p className="intro-kicker">{copy.kicker}</p>
        <h2>{copy.title}</h2>
        <div className="intro-code" aria-hidden="true">
          <span>{copy.command}</span>
          <strong>{shouldHoldIntro ? copy.held : copy.ready}</strong>
        </div>
        <div className="intro-countdown" aria-live="polite">
          <span>{shouldHoldIntro ? copy.hold : copy.opens}</span>
          <strong>{shouldHoldIntro ? '∞' : String(countdown).padStart(2, '0')}</strong>
        </div>
        <div className="intro-steps">
          {copy.steps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
        <div className="intro-progress" aria-hidden="true">
          <span></span>
        </div>
        <button
          aria-label={copy.enterAria}
          className="portal-button"
          type="button"
          onClick={finish}
        >
          <span>{copy.enter}</span>
        </button>
      </div>
    </div>
  )
}

function SignalCanvas({ burst }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const pointer = { active: false, x: 0, y: 0 }
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animationFrame = 0
    let height = 0
    let nodes = []
    let width = 0

    const createNodes = () => {
      const count = Math.min(88, Math.max(34, Math.round((width * height) / 26000)))
      nodes = Array.from({ length: count }, (_, index) => ({
        x: (Math.sin(index * 76.91 + burst * 2.7) * 0.5 + 0.5) * width,
        y: (Math.cos(index * 48.37 + burst * 1.8) * 0.5 + 0.5) * height,
        vx: Math.sin(index * 1.37) * 0.22,
        vy: Math.cos(index * 1.91) * 0.22,
        size: index % 5 === 0 ? 3 : 2,
      }))
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      createNodes()
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      context.lineWidth = 1

      nodes.forEach((node, index) => {
        if (!prefersReducedMotion) {
          const dx = pointer.x - node.x
          const dy = pointer.y - node.y
          const distance = Math.hypot(dx, dy)

          if (pointer.active && distance < 190) {
            node.vx -= dx * 0.000018
            node.vy -= dy * 0.000018
          }

          node.x += node.vx
          node.y += node.vy
          node.vx *= 0.997
          node.vy *= 0.997

          if (node.x < -20) node.x = width + 20
          if (node.x > width + 20) node.x = -20
          if (node.y < -20) node.y = height + 20
          if (node.y > height + 20) node.y = -20
        }

        for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
          const next = nodes[nextIndex]
          const distance = Math.hypot(node.x - next.x, node.y - next.y)

          if (distance < 142) {
            context.globalAlpha = (142 - distance) / 520
            context.strokeStyle = '#10120f'
            context.beginPath()
            context.moveTo(node.x, node.y)
            context.lineTo(next.x, next.y)
            context.stroke()
          }
        }

        context.globalAlpha = index % 7 === 0 ? 0.42 : 0.24
        context.fillStyle = index % 3 === 0 ? '#19bda7' : '#10120f'
        context.fillRect(node.x, node.y, node.size, node.size)
      })

      context.globalAlpha = 1

      if (!prefersReducedMotion) {
        animationFrame = window.requestAnimationFrame(draw)
      }
    }

    const updatePointer = (event) => {
      const rect = canvas.getBoundingClientRect()
      pointer.active = true
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
    }

    const clearPointer = () => {
      pointer.active = false
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    window.addEventListener('pointermove', updatePointer)
    window.addEventListener('pointerleave', clearPointer)
    resize()
    draw()

    return () => {
      observer.disconnect()
      window.removeEventListener('pointermove', updatePointer)
      window.removeEventListener('pointerleave', clearPointer)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [burst])

  return <canvas className="signal-canvas" ref={canvasRef} aria-hidden="true" />
}

function CaseStudyPanel({ labels, order, work }) {
  return (
    <aside
      aria-labelledby={`${work.id}-case-study-title`}
      className="work-case-study"
      id={`${work.id}-case-study`}
      style={{ '--work-order': order }}
    >
      <div className="case-study-header">
        <p>{labels.caseStudy}</p>
        <h3 id={`${work.id}-case-study-title`}>{work.title}</h3>
        <span>{work.caseStudy.intro}</span>
      </div>
      <div className="case-study-grid">
        {work.caseStudy.sections.map((section) => (
          <section className="case-study-block" key={section.title}>
            <h4>{section.title}</h4>
            <p>{section.text}</p>
          </section>
        ))}
        <section className="case-study-block case-study-stack">
          <h4>{labels.stack}</h4>
          <div>
            {work.caseStudy.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </div>
      <a className="case-study-live-link" href={work.url} target="_blank" rel="noreferrer">
        {labels.visitLive}
      </a>
    </aside>
  )
}

function App() {
  const [language, setLanguage] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const requestedLanguage = params.get('lang')

      if (requestedLanguage === 'es' || requestedLanguage === 'en') {
        return requestedLanguage
      }

      return window.localStorage.getItem('portfolio-language') === 'es' ? 'es' : 'en'
    } catch {
      return 'en'
    }
  })
  const content = portfolioCopy[language]
  const [activeServiceId, setActiveServiceId] = useState('build')
  const [activeWorkId, setActiveWorkId] = useState('traver')
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(null)
  const [burst, setBurst] = useState(0)
  const [isIntroVisible, setIsIntroVisible] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const introMode = params.get('intro')

      if (introMode === 'hold' || introMode === 'replay') {
        return true
      }

      if (introMode === 'skip') {
        return false
      }

      return window.localStorage.getItem('portfolio-intro-seen') !== 'true'
    } catch {
      return true
    }
  })

  const activeService = useMemo(
    () => content.services.find((service) => service.id === activeServiceId) ?? content.services[0],
    [activeServiceId, content.services],
  )

  const activeWork = useMemo(
    () => content.selectedWork.find((work) => work.id === activeWorkId) ?? content.selectedWork[0],
    [activeWorkId, content.selectedWork],
  )

  useEffect(() => {
    document.documentElement.lang = content.meta.lang
    document.title = content.meta.title

    const metaUpdates = [
      ['name', 'description', content.meta.description],
      ['property', 'og:title', content.meta.title],
      ['property', 'og:description', content.meta.description],
      ['property', 'og:locale', content.meta.locale],
      ['name', 'twitter:title', content.meta.title],
      ['name', 'twitter:description', content.meta.description],
    ]

    metaUpdates.forEach(([attribute, key, value]) => {
      const element = document.querySelector(`meta[${attribute}="${key}"]`)
      element?.setAttribute('content', value)
    })
  }, [content.meta])

  useEffect(() => {
    const targetId = window.location.hash.replace('#', '')

    if (!targetId) {
      return
    }

    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: 'start' })
    })
  }, [])

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => {
      const nextLanguage = currentLanguage === 'en' ? 'es' : 'en'

      try {
        window.localStorage.setItem('portfolio-language', nextLanguage)
      } catch {
        // Language persistence is a nicety; the switch still works without storage.
      }

      return nextLanguage
    })
  }

  const triggerBurst = () => {
    setBurst((currentBurst) => currentBurst + 1)
  }

  const finishIntro = useCallback(() => {
    try {
      window.localStorage.setItem('portfolio-intro-seen', 'true')
    } catch {
      // The intro still closes if storage is unavailable.
    }

    setIsIntroVisible(false)
  }, [])

  const replayIntro = () => {
    setIsIntroVisible(true)
  }

  const handleHeroPointerMove = (event) => {
    const { currentTarget, clientX, clientY } = event
    const rect = currentTarget.getBoundingClientRect()
    const x = (clientX - rect.left) / rect.width - 0.5
    const y = (clientY - rect.top) / rect.height - 0.5

    currentTarget.style.setProperty('--tilt-x', `${(-y * 7).toFixed(2)}deg`)
    currentTarget.style.setProperty('--tilt-y', `${(x * 9).toFixed(2)}deg`)
  }

  const handleHeroPointerLeave = (event) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg')
    event.currentTarget.style.setProperty('--tilt-y', '0deg')
  }

  const handleMagneticPointerMove = (event) => {
    const { currentTarget, clientX, clientY } = event
    const rect = currentTarget.getBoundingClientRect()
    const x = (clientX - rect.left) / rect.width
    const y = (clientY - rect.top) / rect.height

    currentTarget.style.setProperty('--mx', `${(x * 100).toFixed(2)}%`)
    currentTarget.style.setProperty('--my', `${(y * 100).toFixed(2)}%`)
    currentTarget.style.setProperty('--rx', `${((0.5 - y) * 9).toFixed(2)}deg`)
    currentTarget.style.setProperty('--ry', `${((x - 0.5) * 11).toFixed(2)}deg`)
  }

  const handleMagneticPointerLeave = (event) => {
    event.currentTarget.style.setProperty('--mx', '50%')
    event.currentTarget.style.setProperty('--my', '50%')
    event.currentTarget.style.setProperty('--rx', '0deg')
    event.currentTarget.style.setProperty('--ry', '0deg')
  }

  const handleServiceKeyDown = (event, serviceId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setActiveServiceId(serviceId)
      triggerBurst()
    }
  }

  const toggleCaseStudy = (workId) => {
    setActiveWorkId(workId)
    setActiveCaseStudyId((currentId) => (currentId === workId ? null : workId))
  }

  return (
    <>
      {isIntroVisible && <IntroGate copy={content.intro} onFinish={finishIntro} />}
      <main className="site-shell">
        <SignalCanvas burst={burst} />
        <header className="topbar" aria-label={content.nav.label}>
          <a className="brand" href="#top" aria-label={content.brand.backToTop}>
            <span className="brand-mark" aria-hidden="true">
              {content.brand.mark}
            </span>
            <span>
              <strong>{content.brand.name}</strong>
              <small>{content.brand.small}</small>
            </span>
          </a>
          <div className="topbar-actions">
            <nav className="nav-links">
              <a href="#work">{content.nav.work}</a>
              <a href="#lab">{content.nav.lab}</a>
              <a href="#profile">{content.nav.profile}</a>
              <a href="#services">{content.nav.services}</a>
              <a href="#systems">{content.nav.systems}</a>
              <a href="#contact">{content.nav.contact}</a>
            </nav>
            <button
              aria-label={content.language.label}
              aria-pressed={language === 'es'}
              className="language-toggle"
              title={content.language.current}
              type="button"
              onClick={toggleLanguage}
            >
              <span className={language === 'en' ? 'is-active' : ''}>EN</span>
              <span className={language === 'es' ? 'is-active' : ''}>ES</span>
            </button>
            <button
              aria-label={content.intro.replayAria}
              className="intro-replay"
              type="button"
              onClick={replayIntro}
            >
              {content.intro.replay}
            </button>
          </div>
        </header>

        <section
          className="hero-section"
          id="top"
          onPointerMove={handleHeroPointerMove}
          onPointerLeave={handleHeroPointerLeave}
        >
          <div className="hero-copy">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className="hero-lede">{content.hero.lede}</p>
            <div className="cta-row" aria-label={content.hero.ctaLabel}>
              <a className="button button-primary" href="#contact">
                {content.hero.primaryCta}
              </a>
              <button className="button button-secondary pulse-trigger" type="button" onClick={triggerBurst}>
                {content.hero.secondaryCta}
              </button>
            </div>
            <dl className="signal-strip" aria-label={content.hero.outcomesLabel}>
              {content.outcomes.map((item) => (
                <div key={item.value}>
                  <dt>{item.value}</dt>
                  <dd>{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero-visual" aria-label={content.hero.visualLabel}>
            <div className="visual-stage" style={{ '--active-accent': activeService.accent }}>
              <div className="mode-badge" key={`${activeService.id}-${burst}`}>
                <span>{activeService.mode}</span>
              </div>
              <div className="browser-shell">
                <div className="browser-bar" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                  <strong>launchroom.dev</strong>
                </div>
                <div className="command-line">
                  <span>{activeService.command}</span>
                  <strong>{activeService.score}</strong>
                </div>
                <div className="dashboard-grid">
                  <div className="live-panel performance-panel">
                    <span className="panel-label">{content.hero.liveMode}</span>
                    <strong>{activeService.kicker}</strong>
                    <p>{activeService.text}</p>
                    <div className="bar-stack" aria-hidden="true">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="live-panel search-panel">
                    <span className="panel-label">{content.hero.searchLabel}</span>
                    <strong>{content.hero.searchTitle}</strong>
                    <p>{content.hero.searchText}</p>
                  </div>
                  <div className="live-panel commerce-panel">
                    <span className="panel-label">{content.hero.commerceLabel}</span>
                    <strong>{content.hero.commerceTitle}</strong>
                    <p>{content.hero.commerceText}</p>
                  </div>
                </div>
                <div className="traffic-row" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <img
                className="hero-layer"
                src={heroLayer}
                width="343"
                height="361"
                alt="Layered platform illustration"
              />
              <img className="tech-logo react-logo" src={reactLogo} alt="React" />
              <img className="tech-logo vite-logo" src={viteLogo} alt="Vite" />
            </div>
          </div>
        </section>

        <section className="ticker-band" aria-label={content.tickerLabel}>
          {content.ticker.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section
          className="work-section"
          id="work"
          style={{ '--lens-accent': activeWork.lensAccent }}
        >
          <div className="section-heading work-heading">
            <div>
              <p className="eyebrow">{content.work.eyebrow}</p>
              <h2>{content.work.title}</h2>
            </div>
            <p>{content.work.text}</p>
          </div>
          <div className="project-lens" aria-live="polite">
            <div>
              <p>{content.work.lensEyebrow}</p>
              <h3>{activeWork.title}</h3>
            </div>
            <div>
              <span>{content.work.lensStatus}</span>
              <strong>{activeWork.lensSignal}</strong>
              <small>{activeWork.lensDetail}</small>
            </div>
            <em>{content.work.lensInstruction}</em>
          </div>
          <div className="work-grid">
            {content.selectedWork.map((work, index) => {
              const isCaseStudyOpen = activeCaseStudyId === work.id
              const caseStudyOrder = Math.ceil((index + 1) / 2) * 2 + 1

              return (
                <Fragment key={work.id}>
                  <article
                    className={`work-card ${activeWork.id === work.id ? 'is-lensed' : ''}`}
                    onClick={() => setActiveWorkId(work.id)}
                    onFocusCapture={() => setActiveWorkId(work.id)}
                    onPointerEnter={() => setActiveWorkId(work.id)}
                    style={{ '--work-accent': work.lensAccent, '--work-order': index + 1 }}
                  >
                    <a className="work-media" href={work.url} target="_blank" rel="noreferrer">
                      <img src={work.image} alt={work.imageAlt} loading="lazy" />
                      <span>{content.work.viewLive}</span>
                    </a>
                    <div className="work-content">
                      <div>
                        <p>{work.category}</p>
                        <h3>{work.title}</h3>
                      </div>
                      <span>{work.summary}</span>
                      <ul aria-label={`${work.title} ${content.work.focusLabelSuffix}`}>
                        {work.focus.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <div className="work-result">
                        <strong>{content.work.impact}</strong>
                        <span>{work.result}</span>
                      </div>
                      <div className="work-actions">
                        <a className="work-link" href={work.url} target="_blank" rel="noreferrer">
                          {content.work.openWebsite}
                        </a>
                        <button
                          aria-controls={`${work.id}-case-study`}
                          aria-expanded={isCaseStudyOpen}
                          className="case-study-toggle"
                          type="button"
                          onClick={() => toggleCaseStudy(work.id)}
                        >
                          {isCaseStudyOpen ? content.work.hideCaseStudy : content.work.viewCaseStudy}
                        </button>
                      </div>
                    </div>
                  </article>
                  {isCaseStudyOpen && <CaseStudyPanel labels={content.work} order={caseStudyOrder} work={work} />}
                </Fragment>
              )
            })}
          </div>
        </section>

        <section className="product-lab-section" id="lab">
          <div className="section-heading lab-heading">
            <div>
              <p className="eyebrow">{content.productLab.eyebrow}</p>
              <h2>{content.productLab.title}</h2>
            </div>
            <p>{content.productLab.text}</p>
          </div>
          <div className="product-lab-grid" aria-label={content.productLab.label}>
            {content.productLab.projects.map((project, index) => (
              <article
                className="lab-card"
                key={project.id}
                style={{ '--lab-accent': project.accent, '--lab-index': index + 1 }}
              >
                <div className="lab-visual" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{project.command}</strong>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className="lab-card-content">
                  <div className="lab-card-kicker">
                    <span>{project.category}</span>
                    <strong>{project.status}</strong>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="lab-signal-list" aria-label={`${project.title} ${content.productLab.techLabel}`}>
                    {project.signals.map((signal) => (
                      <span key={signal}>{signal}</span>
                    ))}
                  </div>
                  {project.url ? (
                    <a className="lab-link" href={project.url} target="_blank" rel="noreferrer">
                      {content.productLab.viewProject}
                    </a>
                  ) : (
                    <span className="lab-link is-disabled">{content.productLab.pending}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-section" id="profile">
          <div className="profile-copy">
            <p className="eyebrow">{content.profile.eyebrow}</p>
            <h2>{content.profile.title}</h2>
            <p>{content.profile.text}</p>
            <div className="profile-signal-list" aria-label={content.profile.signalsLabel}>
              {content.profile.signals.map((signal) => (
                <div className="profile-signal" key={signal.label}>
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="profile-strength-grid" aria-label={content.profile.strengthsLabel}>
            {content.profile.strengths.map((strength) => (
              <article className="profile-strength" key={strength.title}>
                <h3>{strength.title}</h3>
                <p>{strength.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">{content.servicesHeading.eyebrow}</p>
            <h2>{content.servicesHeading.title}</h2>
          </div>
          <div className="service-grid">
            {content.services.map((service) => (
              <article
                aria-pressed={activeService.id === service.id}
                className={`service-card ${activeService.id === service.id ? 'is-active' : ''}`}
                data-signal={service.command}
                key={service.id}
                onFocus={() => setActiveServiceId(service.id)}
                onKeyDown={(event) => handleServiceKeyDown(event, service.id)}
                onClick={() => {
                  setActiveServiceId(service.id)
                  triggerBurst()
                }}
                onPointerEnter={() => setActiveServiceId(service.id)}
                onPointerLeave={handleMagneticPointerLeave}
                onPointerMove={handleMagneticPointerMove}
                role="button"
                style={{ '--card-accent': service.accent }}
                tabIndex="0"
              >
                <p>{service.kicker}</p>
                <h3>{service.title}</h3>
                <span>{service.text}</span>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="systems-section" id="systems">
          <div className="systems-copy">
            <p className="eyebrow">{content.systems.eyebrow}</p>
            <h2>{content.systems.title}</h2>
            <p>{content.systems.text}</p>
          </div>
          <div className="capability-grid" aria-label={content.systems.label}>
            {content.systems.capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="section-heading">
            <p className="eyebrow">{content.process.eyebrow}</p>
            <h2>{content.process.title}</h2>
          </div>
          <div className="process-list">
            {content.process.steps.map((item, index) => (
              <article className="process-item" key={item.step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.step}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">{content.contact.eyebrow}</p>
            <h2>{content.contact.title}</h2>
            <p>{content.contact.text}</p>
            <div className="contact-route-grid" aria-label={content.contact.routesLabel}>
              {content.contact.routes.map((route) => (
                <article className="contact-route" key={route.title}>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                </article>
              ))}
            </div>
            <div className="language-strip" aria-label={content.contact.languageLabel}>
              {content.contact.languageSignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </div>
          <div className="contact-panel">
            <p>{content.contact.panelTitle}</p>
            <div className="contact-link-list">
              {sharedContactLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.id}
                  rel={link.id === 'email' ? undefined : 'noreferrer'}
                  target={link.id === 'email' ? undefined : '_blank'}
                >
                  <span>{content.contact.linkLabels[link.id]}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>
            <div className="brief-prompts">
              <span>{content.contact.promptsTitle}</span>
              <ul>
                {content.contact.prompts.map((prompt) => (
                  <li key={prompt}>{prompt}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <span>{content.footer.name}</span>
          <a href="#top">{content.footer.backToTop}</a>
        </footer>
      </main>
    </>
  )
}

export default App

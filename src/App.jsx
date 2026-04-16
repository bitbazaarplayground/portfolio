import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import heroLayer from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import jjMotorsPreview from './assets/work-jjmotors-landing.jpg'
import traverPreview from './assets/work-traver-landing.jpg'
import './App.css'

const outcomes = [
  { value: '01', label: 'Launch-ready websites' },
  { value: '02', label: 'Ecommerce foundations' },
  { value: '03', label: 'Technical SEO systems' },
  { value: '04', label: 'Conversion-led UX' },
]

const selectedWork = [
  {
    title: 'Traver Decoración Textil',
    category: 'Home services website',
    url: 'https://www.traverdecoraciontextil.es',
    image: traverPreview,
    imageAlt: 'Outdoor living area with textile shade and soft furnishings',
    summary:
      'A local-service website for custom curtains, blinds, awnings, automation, mosquito screens, and textile decoration in Castellón and Valencia.',
    focus: ['Route-level SEO', 'Service landing pages', 'Structured local business data'],
    result: 'Premium service positioning for a real regional business',
  },
  {
    title: 'J&J Motors Garage',
    category: 'Automotive service website',
    url: 'https://www.jjmotorsgarage.es',
    image: jjMotorsPreview,
    imageAlt: 'Mechanic inspecting a car brake assembly in a workshop',
    summary:
      'A modern workshop website for mechanical repairs, maintenance, brakes, suspension, electronic diagnosis, location, and WhatsApp-led enquiries.',
    focus: ['AutoRepair schema', 'Service architecture', 'Maps and FAQ content'],
    result: 'Clear trust path for drivers looking for a mechanic in Castellón',
  },
]

const services = [
  {
    id: 'build',
    title: 'Build',
    kicker: 'Websites',
    command: 'site forge',
    score: '98',
    mode: 'Conversion shell',
    accent: '#d8ff55',
    text: 'Premium, responsive websites with sharp messaging, clean architecture, and a buying journey that feels obvious.',
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
    text: 'Storefronts shaped around product discovery, trust signals, checkout confidence, and the details that lift order value.',
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
    text: 'Search foundations that help the right people find you: technical fixes, content structure, schema, and measurable intent.',
    points: ['Core Web Vitals', 'Schema markup', 'Search intent maps'],
  },
]

const capabilities = [
  'AI-assisted content workflows',
  'Motion that supports the message',
  'Analytics and event tracking',
  'Fast builds with modern tooling',
  'Accessible responsive layouts',
  'Local business search signals',
]

const process = [
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
]

const introSteps = [
  'Offer signal locked',
  'Speed budget armed',
  'Search intent mapped',
  'Conversion path online',
]

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

function IntroGate({ onFinish }) {
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
      aria-label="Portfolio launch calibration"
      role="dialog"
    >
      <IntroGridWake />
      <div className="intro-panel">
        <p className="intro-kicker">Initializing portfolio signal</p>
        <h2>Calibrating the launch room.</h2>
        <div className="intro-code" aria-hidden="true">
          <span>npm run impress</span>
          <strong>{shouldHoldIntro ? 'held' : 'ready'}</strong>
        </div>
        <div className="intro-countdown" aria-live="polite">
          <span>{shouldHoldIntro ? 'Hold' : 'Portal opens in'}</span>
          <strong>{shouldHoldIntro ? '∞' : String(countdown).padStart(2, '0')}</strong>
        </div>
        <div className="intro-steps">
          {introSteps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
        <div className="intro-progress" aria-hidden="true">
          <span></span>
        </div>
        <button
          aria-label="Enter the portfolio now"
          className="portal-button"
          type="button"
          onClick={finish}
        >
          <span>Enter the portal</span>
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

function App() {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id)
  const [burst, setBurst] = useState(0)
  const [isIntroVisible, setIsIntroVisible] = useState(true)

  const activeService = useMemo(
    () => services.find((service) => service.id === activeServiceId) ?? services[0],
    [activeServiceId],
  )

  const triggerBurst = () => {
    setBurst((currentBurst) => currentBurst + 1)
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

  return (
    <>
      {isIntroVisible && <IntroGate onFinish={() => setIsIntroVisible(false)} />}
      <main className="site-shell">
        <SignalCanvas burst={burst} />
        <header className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Back to top">
            <span className="brand-mark" aria-hidden="true">
              NN
            </span>
            <span>
              <strong>NicNat</strong>
              <small>Digital portfolio</small>
            </span>
          </a>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#systems">Systems</a>
          <a href="#contact">Brief</a>
          </nav>
        </header>

        <section
          className="hero-section"
          id="top"
          onPointerMove={handleHeroPointerMove}
          onPointerLeave={handleHeroPointerLeave}
        >
          <div className="hero-copy">
            <p className="eyebrow">Websites, ecommerce, SEO, and launch systems</p>
            <h1>Digital work that feels premium and performs with purpose.</h1>
            <p className="hero-lede">
              A portfolio for employers and business owners who need more than a
              pretty screen: strategy, speed, trust, and a site that helps people
              take the next step.
            </p>
            <div className="cta-row" aria-label="Primary calls to action">
              <a className="button button-primary" href="#contact">
                Start a website brief
              </a>
              <button className="button button-secondary pulse-trigger" type="button" onClick={triggerBurst}>
                Trigger signal burst
              </button>
            </div>
            <dl className="signal-strip" aria-label="Portfolio focus areas">
              {outcomes.map((item) => (
                <div key={item.value}>
                  <dt>{item.value}</dt>
                  <dd>{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero-visual" aria-label="Modern website delivery cockpit">
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
                    <span className="panel-label">Live mode</span>
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
                    <span className="panel-label">Search</span>
                    <strong>Schema ready</strong>
                    <p>Pages mapped by intent</p>
                  </div>
                  <div className="live-panel commerce-panel">
                    <span className="panel-label">Commerce</span>
                    <strong>Checkout flow</strong>
                    <p>Trust, product proof, urgency, clarity</p>
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

        <section className="ticker-band" aria-label="High value delivery signals">
          <span>Responsive build</span>
          <span>Technical SEO</span>
          <span>Fast storefronts</span>
          <span>Conversion copy</span>
          <span>Analytics clarity</span>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading work-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Real businesses with live websites on real domains.</h2>
            </div>
            <p>
              These come first because they prove the work can leave the build
              folder and support actual businesses with search, trust, and clear
              customer action.
            </p>
          </div>
          <div className="work-grid">
            {selectedWork.map((work) => (
              <article className="work-card" key={work.title}>
                <a className="work-media" href={work.url} target="_blank" rel="noreferrer">
                  <img src={work.image} alt={work.imageAlt} loading="lazy" />
                  <span>View live site</span>
                </a>
                <div className="work-content">
                  <div>
                    <p>{work.category}</p>
                    <h3>{work.title}</h3>
                  </div>
                  <span>{work.summary}</span>
                  <ul aria-label={`${work.title} focus areas`}>
                    {work.focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="work-result">
                    <strong>Impact</strong>
                    <span>{work.result}</span>
                  </div>
                  <a className="work-link" href={work.url} target="_blank" rel="noreferrer">
                    Open website
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Built to attract the right work</p>
            <h2>Everything a serious website needs before the project gallery arrives.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article
                aria-pressed={activeService.id === service.id}
                className={`service-card ${activeService.id === service.id ? 'is-active' : ''}`}
                data-signal={service.command}
                key={service.id}
                onFocus={() => setActiveServiceId(service.id)}
                onKeyDown={(event) => handleServiceKeyDown(event, service.id)}
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
            <p className="eyebrow">Modern stack, practical results</p>
            <h2>Sharp enough for employers. Useful enough for business owners.</h2>
            <p>
              The site frames the work around outcomes clients understand while
              still giving hiring teams strong signals: product thinking,
              frontend craft, SEO literacy, performance, and maintainable systems.
            </p>
          </div>
          <div className="capability-grid" aria-label="Capability list">
            {capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="section-heading">
            <p className="eyebrow">How the work moves</p>
            <h2>A clean path from idea to launch.</h2>
          </div>
          <div className="process-list">
            {process.map((item, index) => (
              <article className="process-item" key={item.step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.step}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Ready when the details are</p>
            <h2>Bring the offer, the audience, and the ambition. The site can do the heavy lifting.</h2>
          </div>
          <div className="brief-panel">
            <p>Website brief starter</p>
            <ul>
              <li>What are you selling?</li>
              <li>Who should say yes?</li>
              <li>What action matters most?</li>
              <li>What proof should people trust?</li>
            </ul>
          </div>
        </section>

        <footer className="site-footer">
          <span>NicNat portfolio</span>
          <a href="#top">Back to top</a>
        </footer>
      </main>
    </>
  )
}

export default App

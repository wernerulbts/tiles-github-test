import { useEffect } from 'react'

export default function DankePage() {
  useEffect(() => {
    document.title = 'Wichtig: Schau dir jetzt das Video an! | tiles'
    document.body.classList.add('page-danke')

    const robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'noindex, nofollow'
    document.head.appendChild(robots)

    return () => {
      document.body.classList.remove('page-danke')
      document.head.removeChild(robots)
      document.title = 'KI-Pilotprojekt für B2B-Unternehmen | tiles'
    }
  }, [])

  return (
    <>
      <div className="card-top">
        <div className="logo-wrap">
          <img src="/tiles-logo.png" alt="tiles" width="500" height="166" />
        </div>

        <h1>
          Danke – wir rufen dich
          <br />
          in 3 Minuten an!
        </h1>

        <div className="urgency-box">
          <svg viewBox="0 0 24 24">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
          <span>
            Schau dir jetzt das Video an, damit du vorbereitet bist – unsere digitale
            Mitarbeiterin Sophie meldet sich gleich bei dir.
          </span>
        </div>

        <div className="video-wrap">
          <div className="wistia_responsive_padding">
            <div className="wistia_responsive_wrapper">
              <iframe
                src="https://fast.wistia.net/embed/iframe/08zdxrmk1h?seo=true&videoFoam=true"
                title="tiles Video"
                allow="autoplay; fullscreen"
                frameBorder="0"
                scrolling="no"
                style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }}
              />
            </div>
          </div>
        </div>

        <div className="social-proof">
          <div className="avatar-stack">
            <div className="avatar"><img src="https://onecdn.io/media/248c088a-e07d-45c4-b3a5-95ca025543a0/sm" alt="" /></div>
            <div className="avatar"><img src="https://onecdn.io/media/dd055f77-0cdc-457f-98e6-c037c613bcb4/sm" alt="" /></div>
            <div className="avatar"><img src="https://onecdn.io/media/4c300a54-7fac-4e79-934e-7014be31100e/sm" alt="" /></div>
            <div className="avatar"><img src="https://onecdn.io/media/bea77666-4731-451e-9437-d45d044db1a1/sm" alt="" /></div>
            <div className="avatar"><img src="https://onecdn.io/media/3661e5b8-27f1-4dbc-8c94-93dd6bdabb17/sm" alt="" /></div>
            <div className="avatar"><img src="https://onecdn.io/media/d094bbf2-22ed-47ef-95be-a314755dd682/sm" alt="" /></div>
          </div>
          <div className="social-proof-content">
            <span className="stars">★★★★★</span>
            <span className="social-proof-text">ÜBER 400 UNTERNEHMEN ERFOLGREICH BEGLEITET</span>
          </div>
        </div>

        <div className="logo-slider">
          <div className="logo-track">
            <img src="https://onecdn.io/media/67ae7fd2-244c-4212-9a71-70a8d6408e15/sm" alt="Land Niederösterreich" />
            <img src="https://onecdn.io/media/92adf4c0-7c8b-48e4-bc54-eaeaa597e2bc/sm" alt="Meta Business Partner" />
            <img src="https://onecdn.io/media/6e73cf71-264d-484d-b802-2867ef02e785/sm" alt="Stadt Wien" />
            <img src="https://onecdn.io/media/2330063a-9859-4b10-a996-a7f26be3691a/sm" alt="Google Partner" />
            <img src="https://onecdn.io/media/d6baf345-086b-49dd-a02d-6cc4d0058822/sm" alt="KMU Digital" />
            <img src="https://onecdn.io/media/67ae7fd2-244c-4212-9a71-70a8d6408e15/sm" alt="Land Niederösterreich" />
            <img src="https://onecdn.io/media/92adf4c0-7c8b-48e4-bc54-eaeaa597e2bc/sm" alt="Meta Business Partner" />
            <img src="https://onecdn.io/media/6e73cf71-264d-484d-b802-2867ef02e785/sm" alt="Stadt Wien" />
            <img src="https://onecdn.io/media/2330063a-9859-4b10-a996-a7f26be3691a/sm" alt="Google Partner" />
            <img src="https://onecdn.io/media/d6baf345-086b-49dd-a02d-6cc4d0058822/sm" alt="KMU Digital" />
          </div>
        </div>
      </div>

      <div className="card-bottom">
        <div className="card-bottom-inner">
          <div className="divider"></div>

          <h2>So läuft das Pilotprojekt ab</h2>
          <p className="text-body">In drei klaren Schritten vom Ist-Zustand zu echten Ergebnissen.</p>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Sophie kontaktiert dich</h3>
              <p>Unsere digitale Mitarbeiterin meldet sich in wenigen Minuten bei dir, um alle Details und den nächsten Termin zu klären.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>Prozessanalyse</h3>
              <p>Wir analysieren eure Abläufe im Detail und identifizieren, wo KI den größten Hebel hat.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Erste Automatisierung</h3>
              <p>Die wichtigsten Prozesse werden automatisiert und in eure bestehenden Systeme integriert.</p>
            </div>
          </div>

          <div className="divider"></div>

          <h2>Was dich als Pilotunternehmen erwartet</h2>

          <div className="benefit-grid">
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <p>Detailanalyse eurer wiederkehrenden Prozesse und Abläufe</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <p>Identifikation der größten Zeithebel in eurem Unternehmen</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <p>Automatisierung der ersten Abläufe in Marketing, Vertrieb oder Leadgenerierung</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <p>Bis zu 20 Wochenstunden Ersparnis pro Mitarbeiter</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <p>Persönliche Betreuung durch unser Expertenteam</p>
            </div>
          </div>

          <div className="divider"></div>

          <h2>Was mit KI-Automatisierung möglich ist</h2>
          <p className="text-body">
            Nicht mehr Tools. Nicht mehr Komplexität. Sondern weniger manuelle Arbeit und mehr
            Wirkung mit den vorhandenen Systemen.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Automatische Leadgenerierung</h3>
              <p>Vollautomatische Leadrecherche, automatisierte Kontaktaufnahme, Follow-Up Erinnerungen und Social Media Lead Import.</p>
            </div>
            <div className="feature-card">
              <h3>Vertrieb</h3>
              <p>Transkripte von Telefonaten, automatische Angebotserstellung, Cross- und Upselling Automation, automatisches CRM-Management.</p>
            </div>
            <div className="feature-card">
              <h3>Marketing</h3>
              <p>Automatische Social Media Posts, Blogposts, Newsletter. Automatisierter Videoschnitt und personalisiertes E-Mail Marketing.</p>
            </div>
            <div className="feature-card">
              <h3>Fulfillment &amp; Backoffice</h3>
              <p>Klar zugeordnete To-Do-Listen, vereinfachte Freigabeprozesse, automatisierte Zeiterfassung und smarte Erinnerungen.</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="metrics">
            <div className="metric">
              <div className="number">400+</div>
              <div className="label">Kunden</div>
            </div>
            <div className="metric">
              <div className="number">10+</div>
              <div className="label">Jahre Erfahrung</div>
            </div>
            <div className="metric">
              <div className="number">50%</div>
              <div className="label">Effizienzsteigerung</div>
            </div>
          </div>

          <div className="divider"></div>

          <h2>5 fatale Fehler, die B2B-Unternehmen ihre Marge kosten</h2>
          <p className="text-body">(Und die trotzdem fast jedes B2B-Unternehmen macht)</p>

          <ul className="error-list">
            <li>
              <span className="warn-icon">!</span>
              <div><strong>Empfehlungen als Hauptvertriebsstrategie</strong> – Wer fast nur von Empfehlungen lebt, macht sich abhängig und verschenkt planbares Wachstum.</div>
            </li>
            <li>
              <span className="warn-icon">!</span>
              <div><strong>Keine automatische Leadrecherche</strong> – Das Vertriebsteam hat keine Chance, weil du mit der Kontaktaufnahme immer langsamer bist als die Konkurrenz.</div>
            </li>
            <li>
              <span className="warn-icon">!</span>
              <div><strong>Wertvolle Infos landen nicht sauber im CRM</strong> – Gesprächsnotizen, Messekontakte und Follow-ups gehen verloren.</div>
            </li>
            <li>
              <span className="warn-icon">!</span>
              <div><strong>Marketing passiert nur, wenn gerade Zeit ist</strong> – Fehlende Sichtbarkeit sorgt dafür, dass dein Unternehmen trotz guter Leistung zu selten wahrgenommen wird.</div>
            </li>
            <li>
              <span className="warn-icon">!</span>
              <div><strong>Kontakte werden nicht konsequent nachverfolgt</strong> – Fehlendes Nachfassen kostet genau die Abschlüsse, die eigentlich schon greifbar waren.</div>
            </li>
          </ul>

          <div className="divider"></div>

          <h2>Ergebnisse aus der Praxis</h2>

          <div className="case-grid">
            <div className="case-card">
              <div className="case-logo-text">MAPEI</div>
              <div className="case-label">Fallstudie</div>
              <h3>MAPEI Austria GmbH</h3>
              <p>Vom manuellen Layoutprozess zum automatisiert erstellten 800-Produkte-Katalog auf Knopfdruck.</p>
              <span className="result">✓ Extremer Zeitgewinn, fehlerfreie Daten</span>
            </div>
            <div className="case-card">
              <div className="case-logo-text">DWSE</div>
              <div className="case-label">Fallstudie</div>
              <h3>Dachverband Wiener Sozialeinrichtungen</h3>
              <p>Vollautomatisierter Einreichungsprozess ersetzt wochenlangen E-Mail-Verkehr und Meetings.</p>
              <span className="result">✓ Klar definierter digitaler Prozess</span>
            </div>
            <div className="case-card">
              <div className="case-logo">
                <img src="https://onecdn.io/media/67ae7fd2-244c-4212-9a71-70a8d6408e15/sm" alt="Land Niederösterreich" />
              </div>
              <div className="case-label">Fallstudie</div>
              <h3>Land NÖ – Talente Check</h3>
              <p>Manuelle Terminvereinbarung durch vollautomatisierte Anmelde- und Verwaltungsprozesse ersetzt.</p>
              <span className="result">✓ Drastisch reduzierter Zeitaufwand</span>
            </div>
          </div>

          <div className="divider"></div>

          <h2>Das sagen unsere Kunden</h2>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="tc-stars">★★★★★</div>
              <blockquote>
                „tiles sind stets für wahre Herkules-Aufgaben gerüstet, wobei sie nicht nur
                professionell und zuverlässig, sondern auch mit viel Gespür für die passende
                Tonalität bei komplexen Themenstellungen sind."
              </blockquote>
              <div className="t-author"><div className="name">ZKW Group</div></div>
            </div>
            <div className="testimonial-card">
              <div className="tc-stars">★★★★★</div>
              <blockquote>
                „Stets on-time, perfekt aufbereitete Inhalte und den Fokus immer auf die
                reibungslose Umsetzbarkeit bedacht – können wir das Team von tiles nur
                wärmstens empfehlen!"
              </blockquote>
              <div className="t-author">
                <div className="name">Mag. Elisabeth Sunk</div>
                <div className="role">Marketing &amp; Innovation Specialist</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="tc-stars">★★★★★</div>
              <blockquote>
                „Kreative Ansätze, eine rasche und professionelle Umsetzung, gepaart mit dem
                Verständnis für unser umfangreiches Produktportfolio, ermöglicht es uns, das
                Augenmerk auf unser Kerngeschäft zu konzentrieren."
              </blockquote>
              <div className="t-author">
                <div className="name">DI Josef Wolfbeißer</div>
                <div className="role">CEO, ConPlusUltra</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="tc-stars">★★★★★</div>
              <blockquote>
                „tiles? Mit schneller, kompetenter und zuverlässiger Beratung und Begleitung
                fachgerecht zur individuellen Lösung gelangt. Gerne wieder mit euch."
              </blockquote>
              <div className="t-author">
                <div className="name">Anton Schmalhofer</div>
                <div className="role">Ressortleiter</div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <p className="team-names">Michael Rohrböck &amp; Matthias Königsberger</p>
          <p className="team-desc">
            Geschäftsführer und Gründer von tiles. Seit über 10 Jahren unterstützen wir
            Unternehmen dabei, mit modernsten Lösungen zu wachsen – immer am Puls der Zeit.
          </p>
          <p className="team-contact">
            tiles Media GmbH · Wienerstraße 3 · A-3100 St. Pölten ·{' '}
            <a href="https://www.tiles.at" target="_blank" rel="noopener noreferrer">www.tiles.at</a>
          </p>
        </div>
      </div>

      <footer className="footer">
        <span>© 2026 tiles media GmbH. Alle Rechte vorbehalten</span>
        <div className="footer-links">
          <a href="https://www.tiles.at/impressum" target="_blank" rel="noopener noreferrer">Impressum</a>
          <a href="https://www.tiles.at/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutz</a>
        </div>
      </footer>
    </>
  )
}

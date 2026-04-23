import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const WEBHOOK_URL = ''

export default function IndexPage() {
  const navigate = useNavigate()
  const formRef = useRef(null)

  useEffect(() => {
    document.body.classList.add('page-index')
    return () => document.body.classList.remove('page-index')
  }, [])

  function validateField(field) {
    const group = field.closest('.form-group') || field.parentElement
    const errorMsg = group?.querySelector('.error-msg')

    let valid = true
    if (field.required && !field.value.trim()) valid = false
    if (field.type === 'email' && field.value.trim()) {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())
    }
    if (field.tagName === 'SELECT' && field.required && !field.value) valid = false

    field.classList.toggle('error', !valid)
    if (errorMsg) errorMsg.classList.toggle('visible', !valid)
    return valid
  }

  function handleBlur(e) {
    validateField(e.target)
  }

  function handleInput(e) {
    if (e.target.classList.contains('error')) validateField(e.target)
  }

  function handleSelectChange(e) {
    e.target.classList.toggle('placeholder-shown', !e.target.value)
    if (e.target.classList.contains('error')) validateField(e.target)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    const fields = form.querySelectorAll('.form-control')
    let allValid = true
    fields.forEach((field) => {
      if (!validateField(field)) allValid = false
    })
    if (!allValid) return

    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, { method: 'POST', body: new FormData(form) })
      } catch {
        // ignore — trotzdem weiterleiten
      }
    }

    navigate('/danke')
  }

  return (
    <>
      <div className="card">
        <div className="logo-wrap">
          <img src="/tiles-logo.png" alt="tiles" width="500" height="166" />
        </div>

        <p className="pre-headline">***NUR FÜR B2B-HÄNDLER &amp; PRODUZENTEN***</p>

        <h1 className="main-headline">
          <span className="hand-underline">KI-Pilotprojekt</span>
        </h1>

        <p className="sub-headline">
          Wir suchen aktuell 3 B2B-Unternehmen, die ihre Abläufe automatisieren wollen,
          um pro Mitarbeiter bis zu 20 Wochenstunden einzusparen.
        </p>

        <div className="form-wrap">
          <form
            ref={formRef}
            id="leadform"
            onSubmit={handleSubmit}
            noValidate
          >
            <input type="hidden" name="variant" value="ki-pilotprojekt" />

            <div className="form-group">
              <input
                type="text"
                name="unternehmen"
                className="form-control"
                placeholder="Unternehmen *"
                required
                onBlur={handleBlur}
                onInput={handleInput}
              />
              <div className="error-msg">Bitte gib deinen Firmennamen ein.</div>
            </div>

            <div className="form-group form-row">
              <div>
                <input
                  type="text"
                  name="vorname"
                  className="form-control"
                  placeholder="Vorname *"
                  required
                  onBlur={handleBlur}
                  onInput={handleInput}
                />
                <div className="error-msg">Bitte gib deinen Vornamen ein.</div>
              </div>
              <div>
                <input
                  type="text"
                  name="nachname"
                  className="form-control"
                  placeholder="Nachname *"
                  required
                  onBlur={handleBlur}
                  onInput={handleInput}
                />
                <div className="error-msg">Bitte gib deinen Nachnamen ein.</div>
              </div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="E-Mail Adresse *"
                required
                onBlur={handleBlur}
                onInput={handleInput}
              />
              <div className="error-msg">Bitte gib eine gültige E-Mail Adresse ein.</div>
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="telefon"
                className="form-control"
                placeholder="Telefonnummer *"
                required
                onBlur={handleBlur}
                onInput={handleInput}
              />
              <div className="error-msg">Bitte gib deine Telefonnummer ein.</div>
            </div>

            <div className="form-group form-row">
              <div>
                <input
                  type="number"
                  name="mitarbeiter"
                  className="form-control"
                  placeholder="Anzahl Mitarbeiter *"
                  min="1"
                  required
                  onBlur={handleBlur}
                  onInput={handleInput}
                />
                <div className="error-msg">Bitte gib die Anzahl der Mitarbeiter ein.</div>
              </div>
              <div>
                <select
                  name="umsatz"
                  className="form-control placeholder-shown"
                  defaultValue=""
                  required
                  onBlur={handleBlur}
                  onChange={handleSelectChange}
                >
                  <option value="" disabled>Jahresumsatz *</option>
                  <option value="unter-300k">Unter 300.000 €</option>
                  <option value="300k-1m">300.000 € – 1 Mio. €</option>
                  <option value="1m-5m">1 Mio. € – 5 Mio. €</option>
                  <option value="5m-20m">5 Mio. € – 20 Mio. €</option>
                  <option value="ueber-20m">Über 20 Mio. €</option>
                </select>
                <div className="error-msg">Bitte wähle den Jahresumsatz.</div>
              </div>
            </div>

            <button type="submit" className="btn-cta">JETZT FÜR PILOTPROJEKT BEWERBEN</button>

            <p className="privacy-note">
              Nach deiner Eintragung wirst du von unserer digitalen Mitarbeiterin Sophie
              kontaktiert, um weitere Details zu besprechen.
            </p>
          </form>
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

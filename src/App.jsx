import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <header className="navbar">
        <div className="container navbar-content">

          <div className="logo">
            <span className="logo-main">TRANS</span>
            <span className="logo-accent">PORT</span>
          </div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#fleet">Our Fleet</a>
            <a href="#contact">Contact</a>
            <a href="#quote">Get a Quote</a>
          </nav>

          <button className="quote-button">
            Request a Quote
          </button>

        </div>
      </header>


      {/* Hero Section */}
      <main>

        {/* Hero Section */}
<section id="home" className="hero">

  <div className="hero-overlay"></div>

  <div className="container hero-content">

    <div className="hero-text">

      <p className="hero-subtitle">
        SAFE • RELIABLE • PROFESSIONAL
      </p>

      <h1>
        Your Journey,
        <br />
        <span>Our Priority.</span>
      </h1>

      <p className="hero-description">
        Reliable passenger transport solutions for airport
        transfers, corporate travel, private journeys and group travel.
      </p>

      <div className="hero-buttons">

        <a href="#quote" className="primary-button">
          Request a Quote
        </a>

        <a href="#services" className="secondary-button">
          Explore Our Services
        </a>

      </div>

    </div>

    {/* Quote Card */}

    <div className="hero-quote-card">

      <div className="quote-card-header">
        <p>QUICK QUOTE</p>
        <h3>Plan Your Journey</h3>
      </div>

      <div className="quote-fields">

        <div className="quote-field">
          <label>Pickup Location</label>
          <input
            type="text"
            placeholder="Where are you travelling from?"
          />
        </div>

        <div className="quote-field">
          <label>Destination</label>
          <input
            type="text"
            placeholder="Where are you going?"
          />
        </div>

        <div className="quote-row">

          <div className="quote-field">
            <label>Date</label>
            <input type="date" />
          </div>

          <div className="quote-field">
            <label>Passengers</label>

            <select>
              <option>1 Passenger</option>
              <option>2 Passengers</option>
              <option>3 Passengers</option>
              <option>4 Passengers</option>
              <option>5+ Passengers</option>
            </select>

          </div>

        </div>

        <button className="quote-submit">
          Get a Quote →
        </button>

      </div>

    </div>

  </div>

</section>


        {/* Services Section */}
        <section id="services" className="services">
          <div className="container">

            <div className="section-heading">
              <p className="section-subtitle">WHAT WE OFFER</p>

              <h2>
                Transport Solutions
                <span> For Every Journey</span>
              </h2>

              <p>
                Whether you are travelling for business, leisure or
                need a reliable airport transfer, we have you covered.
              </p>
            </div>


            <div className="service-grid">

              <div className="service-card">
                <div className="service-icon">✈</div>

                <h3>Airport Transfers</h3>

                <p>
                  Comfortable and reliable transfers to and from
                  airports, with professional drivers and punctual service.
                </p>

                <a href="#contact">Learn More →</a>
              </div>


              <div className="service-card">
                <div className="service-icon">💼</div>

                <h3>Corporate Travel</h3>

                <p>
                  Professional transport solutions for businesses,
                  meetings, conferences and corporate events.
                </p>

                <a href="#contact">Learn More →</a>
              </div>


              <div className="service-card">
                <div className="service-icon">🚐</div>

                <h3>Private Transfers</h3>

                <p>
                  Personalised transport for individuals, families
                  and groups travelling to their destination.
                </p>

                <a href="#contact">Learn More →</a>
              </div>

            </div>

          </div>
        </section>


        {/* About Section */}
        <section id="about" className="about">
          <div className="container">

            <div className="about-content">

              <div className="about-image">
                <div className="image-placeholder">
                  Transport Image
                </div>
              </div>

              <div className="about-text">

                <p className="section-subtitle">
                  ABOUT US
                </p>

                <h2>
                  Moving People.
                  <br />
                  <span>Connecting Destinations.</span>
                </h2>

                <p>
                  We provide professional passenger transport services
                  focused on safety, comfort and reliability.
                </p>

                <p>
                  From airport transfers to corporate travel and private
                  journeys, our goal is to provide a seamless experience
                  from pickup to destination.
                </p>

                <button className="primary-button">
                  Learn More About Us
                </button>

              </div>

            </div>

          </div>
        </section>


        {/* Fleet Section */}
        <section id="fleet" className="fleet">
          <div className="container">

            <div className="section-heading">
              <p className="section-subtitle">OUR FLEET</p>

              <h2>
                Travel In
                <span> Comfort & Style</span>
              </h2>
            </div>


            <div className="fleet-grid">

              <div className="fleet-card">
                <div className="fleet-image">
                  Vehicle Image
                </div>

                <div className="fleet-info">
                  <h3>Executive Sedan</h3>
                  <p>1–3 Passengers</p>
                </div>
              </div>


              <div className="fleet-card">
                <div className="fleet-image">
                  Vehicle Image
                </div>

                <div className="fleet-info">
                  <h3>Executive Van</h3>
                  <p>4–8 Passengers</p>
                </div>
              </div>


              <div className="fleet-card">
                <div className="fleet-image">
                  Vehicle Image
                </div>

                <div className="fleet-info">
                  <h3>Group Transport</h3>
                  <p>9+ Passengers</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Quote Section */}

<section id="quote" className="quote-section">

  <div className="container">

    <div className="section-heading">

      <p className="section-subtitle">
        REQUEST A QUOTE
      </p>

      <h2>
        Let's Plan Your
        <span> Journey</span>
      </h2>

      <p>
        Tell us where you are going and we'll help you find
        the right transport solution.
      </p>

    </div>


    <div className="quote-form">

      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Your full name"
        />
      </div>


      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
        />
      </div>


      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="+27 ..."
        />
      </div>


      <div className="form-group">
        <label>Pickup Location</label>
        <input
          type="text"
          placeholder="Pickup location"
        />
      </div>


      <div className="form-group">
        <label>Destination</label>
        <input
          type="text"
          placeholder="Destination"
        />
      </div>


      <div className="form-group">
        <label>Travel Date</label>
        <input type="date" />
      </div>


      <div className="form-group">
        <label>Passengers</label>

        <select>
          <option>1 Passenger</option>
          <option>2 Passengers</option>
          <option>3 Passengers</option>
          <option>4 Passengers</option>
          <option>5+ Passengers</option>
        </select>

      </div>


      <div className="form-group">
        <label>Service Type</label>

        <select>
          <option>Airport Transfer</option>
          <option>Corporate Travel</option>
          <option>Private Transfer</option>
          <option>Group Transport</option>
          <option>Other</option>
        </select>

      </div>


      <div className="form-group full-width">

        <label>Additional Information</label>

        <textarea
          rows="5"
          placeholder="Tell us anything else we should know..."
        ></textarea>

      </div>


      <div className="form-submit">

        <button className="primary-button">
          Request My Quote →
        </button>

      </div>

    </div>

  </div>

</section>
        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container contact-content">

            <div>
              <p className="section-subtitle">GET IN TOUCH</p>

              <h2>
                Ready to
                <span> Get Moving?</span>
              </h2>

              <p>
                Tell us about your journey and we'll prepare a
                transport solution that works for you.
              </p>
            </div>

            <button className="primary-button">
              Request a Quote
            </button>

          </div>
        </section>

      </main>


      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">

          <div className="logo">
            <span className="logo-main">TRANS</span>
            <span className="logo-accent">PORT</span>
          </div>

          <p>
            © 2026 Transport Company. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  )
}

export default App
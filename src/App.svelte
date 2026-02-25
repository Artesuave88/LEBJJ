<script>
  import logo from './assets/LEBJJ.png'
  import { siFacebook, siInstagram, siWhatsapp } from 'simple-icons'

  const location = 'Unit A2 West End Mills, Leopold Street, Long Eaton, Derbyshire, England, United Kingdom'
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(location)}`
  const whatsappNumber = '07765 990501'
  const whatsappIntl = '447765990501'
  const phoneUrl = `tel:+${whatsappIntl}`
  const whatsappUrl = `https://wa.me/${whatsappIntl}`
  const instagramUrl = 'https://www.instagram.com/longeatonbjj/?hl=en'
  const facebookUrl = 'https://www.facebook.com/LongEatonBJJ/?locale=en_GB'

  const stats = [
    { label: 'Weekly Sessions', value: '17' },
    { label: 'Training Days', value: '7' },
    { label: 'Junior and Teen Sessions', value: '8' },
    { label: 'Ladies Gi Sessions', value: '2' }
  ]

  const programs = [
    {
      name: 'Junior BJJ',
      audience: 'Gi and No-Gi',
      details: 'Junior classes run on Monday, Tuesday, Thursday, and Saturday.'
    },
    {
      name: 'Teens BJJ',
      audience: 'Gi and No-Gi',
      details: 'Teens classes run on Tuesday, Wednesday, Thursday, and Saturday.'
    },
    {
      name: 'Ladies Gi BJJ',
      audience: '16+',
      details: 'Ladies Gi classes run on Monday and Wednesday evenings.'
    },
    {
      name: 'All Levels + Open Mat',
      audience: 'All Levels',
      details: 'All levels Gi and No-Gi sessions plus Sunday Open Mat.'
    }
  ]

  const schedule = [
    {
      day: 'Monday',
      classes: [
        '5:00 PM - 6:00 PM Junior No-Gi BJJ',
        '6:00 PM - 7:00 PM Ladies Gi BJJ (16+)',
        '7:00 PM - 8:30 PM All Levels No-Gi BJJ'
      ]
    },
    {
      day: 'Tuesday',
      classes: [
        '4:30 PM - 5:30 PM Junior Gi BJJ',
        '5:30 PM - 6:30 PM Teens Gi BJJ',
        '6:30 PM - 8:00 PM All Levels Gi BJJ'
      ]
    },
    {
      day: 'Wednesday',
      classes: [
        '5:00 PM - 6:00 PM Teens No-Gi BJJ',
        '6:00 PM - 7:00 PM Ladies Gi BJJ (16+)',
        '7:00 PM - 8:30 PM All Levels No-Gi BJJ'
      ]
    },
    {
      day: 'Thursday',
      classes: [
        '4:30 PM - 5:30 PM Juniors Gi BJJ',
        '5:30 PM - 6:30 PM Teens Gi BJJ',
        '6:30 PM - 8:00 PM All Levels Gi BJJ'
      ]
    },
    {
      day: 'Friday',
      classes: ['6:15 PM - 7:15 PM Frost-fit Fitness Circuit']
    },
    {
      day: 'Saturday',
      classes: [
        '9:00 AM - 10:00 AM Junior Gi BJJ',
        '10:00 AM - 11:00 AM Teens Gi BJJ',
        '11:00 AM - 12:30 PM All Levels Gi BJJ'
      ]
    },
    {
      day: 'Sunday',
      classes: ['9:00 AM - 11:00 AM Open Mat']
    }
  ]

  const faqs = [
    {
      question: 'Do you run both Gi and No-Gi classes?',
      answer: 'Yes. The timetable includes both Gi and No-Gi classes across the week.'
    },
    {
      question: 'Are there junior and teen sessions?',
      answer: 'Yes. Junior and teen classes run on multiple weekdays plus Saturday.'
    },
    {
      question: 'Where is the club based?',
      answer: 'Unit A2 West End Mills, Leopold Street, Long Eaton, Derbyshire, England, United Kingdom.'
    },

  ]

  const year = new Date().getFullYear()
</script>

<svelte:head>
  <title>Long Eaton BJJ | Class Timetable</title>
  <meta
    name="description"
    content="Long Eaton BJJ class timetable, programs, and location details in Long Eaton, Derbyshire."
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap"
  />
</svelte:head>

<div class="site">
  <header class="topbar">
    <a class="brand" href="#top">
      <img class="brand-logo" src={logo} alt="Long Eaton BJJ logo" />
      <span class="brand-copy">
        Long Eaton
        <span>BJJ</span>
      </span>
    </a>

    <nav aria-label="Main navigation">
      <a href="#programs">Programs</a>
      <a href="#schedule">Timetable</a>
      <a href="#contact">Location</a>
    </nav>

    <a class="button button-small button-solid" href={mapsUrl} target="_blank" rel="noreferrer">
      Directions
    </a>
  </header>

  <main id="top">
    <section class="hero panel">
      <p class="eyebrow">Long Eaton, Derbyshire</p>
      <h1>Long Eaton BJJ</h1>
      <p class="lead">
        Brazilian Jiu-Jitsu classes for juniors, teens, ladies, and all levels. This read-only site shares class
        times and location details.
      </p>

      <div class="hero-actions">
        <a class="button button-solid" href="#schedule">View Timetable</a>
        <a class="button button-outline" href="#contact">Find the Club</a>
      </div>
    </section>

    <section class="stats" aria-label="Club stats">
      {#each stats as stat}
        <article class="stat-card">
          <p class="stat-value">{stat.value}</p>
          <p class="stat-label">{stat.label}</p>
        </article>
      {/each}
    </section>

    <section class="panel" id="programs">
      <div class="section-head">
        <p class="eyebrow">Class Types</p>
        <h2>Programs at Long Eaton BJJ</h2>
      </div>

      <div class="card-grid">
        {#each programs as program}
          <article class="info-card">
            <h3>{program.name}</h3>
            <p class="tag">{program.audience}</p>
            <p>{program.details}</p>
          </article>
        {/each}
      </div>
    </section>

    <section class="panel" id="schedule">
      <div class="section-head">
        <p class="eyebrow">Weekly Timetable</p>
        <h2>Class Schedule</h2>
      </div>

      <div class="schedule-grid">
        {#each schedule as day}
          <article class="day-card">
            <h3>{day.day}</h3>
            <ul>
              {#each day.classes as classTime}
                <li>{classTime}</li>
              {/each}
            </ul>
          </article>
        {/each}
      </div>
    </section>

    <section class="panel" aria-label="Frequently asked questions">
      <div class="section-head">
        <p class="eyebrow">Questions</p>
        <h2>FAQ</h2>
      </div>

      <div class="faq-list">
        {#each faqs as faq}
          <article class="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        {/each}
      </div>
    </section>

    <section class="panel contact" id="contact">
      <div class="section-head">
        <p class="eyebrow">Find Us</p>
        <h2>Long Eaton BJJ Location</h2>
      </div>

      <div class="contact-grid">
        <article>
          <h3>Address</h3>
          <p>Unit A2 West End Mills</p>
          <p>Leopold Street</p>
          <p>Long Eaton, Derbyshire</p>
          <p>England, United Kingdom</p>
        </article>
        <article>
          <h3>Contact</h3>
          <p>
            WhatsApp:
            <a href={whatsappUrl} target="_blank" rel="noreferrer">{whatsappNumber}</a>
          </p>
          <div class="contact-actions">
            <a class="button button-solid social-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d={siWhatsapp.path}></path>
              </svg>
              <span>WhatsApp</span>
            </a>
            <a class="button button-outline" href={phoneUrl}>Call</a>
            <a
              class="button button-outline social-button"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d={siInstagram.path}></path>
              </svg>
              <span>Instagram</span>
            </a>
            <a class="button button-outline social-button" href={facebookUrl} target="_blank" rel="noreferrer">
              <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d={siFacebook.path}></path>
              </svg>
              <span>Facebook</span>
            </a>
            <a class="button button-outline" href={mapsUrl} target="_blank" rel="noreferrer">Open in Maps</a>
          </div>
        </article>
      </div>
    </section>
  </main>

  <footer>
    <p>© {year} Long Eaton BJJ. Informational, read-only website built with Svelte.</p>
  </footer>
</div>

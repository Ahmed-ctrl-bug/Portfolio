import React from 'react';
import { Droplets, Shovel, Bug, Tractor, GraduationCap, Sprout } from 'lucide-react';

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  header: {
    backgroundColor: '#2c3e50', // Dark slate for header
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    padding: '1rem 0',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 1rem',
    color: '#ecf0f1', // Light gray for nav items
    textDecoration: 'none',
  },
  section: {
    padding: '4rem 0',
  },
  hero: {
    textAlign: 'center',
    backgroundColor: '#34495e', // Darker slate for hero
    color: '#000', // Changed to black
  },
  title: {
    fontSize: '2.5rem',
    color: '#2ecc71', // Emerald green for titles
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#000', // Changed to black
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: '#27ae60', // Nephritis green for buttons
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
  },
  card: {
    backgroundColor: '#ecf0f1', // Light gray for cards
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    color: '#000', // Added black color for text inside cards
  },
  cardTitle: {
    fontSize: '1.25rem',
    color: '#000', // Changed to black
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  cardIcon: {
    marginRight: '0.5rem',
    color: '#27ae60', // Nephritis green for icons
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '0 auto',
  },
  input: {
    margin: '0.5rem 0',
    padding: '0.5rem',
    backgroundColor: '#fff !important',
    borderRadius: '0.25rem',
    border: '1px solid #27ae60', // Nephritis green border
  },
  footer: {
    backgroundColor: '#2c3e50', // Dark slate for footer
    color: '#ecf0f1', // Light gray text
    textAlign: 'center',
    padding: '1rem 0',
  },
};

export default function Portfolio() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}> {/* Light gray background */}
      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.nav}>
          <a href="#about" style={styles.navItem}>About</a>
          <a href="#education" style={styles.navItem}>Education</a>
          <a href="#skills" style={styles.navItem}>Skills</a>
          <a href="#projects" style={styles.navItem}>Projects</a>
          <a href="#contact" style={styles.navItem}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ ...styles.section, ...styles.hero }}>
        <div style={styles.container}>
          <h1 style={styles.title}>Ahmed Yar Khan</h1>
          <p style={styles.subtitle}>Horticulture Student | Plant Enthusiast</p>
          <button style={styles.button}>Download CV</button>
        </div>
      </section>

      {/* About Me */}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.title}>About Me</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            I am a final year student pursuing a bachelor's degree in Horticulture at SKAUST Kashmir. 
            Over the past four years, I have gained extensive knowledge and hands-on experience in 
            cultivating a wide variety of crops, including fruits, vegetables, spices, and flowers. 
            My practical work has involved various aspects of horticulture such as weeding, irrigation, 
            seed sowing, disease identification, and plowing. I am passionate about sustainable 
            agriculture and eager to contribute to the field of horticulture.
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education" style={{ ...styles.section, backgroundColor: 'white' }}>
        <div style={styles.container}>
          <h2 style={styles.title}>Education</h2>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              <GraduationCap style={styles.cardIcon} />
              Bachelor's in Horticulture
            </h3>
            <p>SKAUST Kashmir | 2020 - 2024 (Expected)</p>
            <p>Four-year degree program focusing on various aspects of horticulture, including crop cultivation, plant science, and agricultural practices.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.title}>Skills</h2>
          <div style={styles.skillsGrid}>
            <SkillCard title="Crop Cultivation" description="Experience with fruits, vegetables, spices, and flowers" />
            <SkillCard icon={<Droplets />} title="Irrigation Techniques" description="Knowledge of various irrigation systems and water management" />
            <SkillCard icon={<Shovel />} title="Soil Management" description="Understanding of soil types, preparation, and maintenance" />
            <SkillCard icon={<Bug />} title="Pest Management" description="Identification and control of common plant diseases and pests" />
            <SkillCard icon={<Tractor />} title="Farm Equipment" description="Familiarity with plowing and other agricultural machinery" />
            <SkillCard icon={<Sprout />} title="Sustainable Practices" description="Focus on environmentally friendly horticultural methods" />
          </div>
        </div>
      </section>

      {/* Projects/Experience */}
      <section id="projects" style={{ ...styles.section, backgroundColor: 'white' }}>
        <div style={styles.container}>
          <h2 style={styles.title}>Projects & Experience</h2>
          <ExperienceCard 
            title="Crop Rotation Study" 
            description="Conducted a year-long study on the effects of crop rotation on soil health and yield in vegetable gardens."
          />
          <ExperienceCard 
            title="Organic Pest Control Methods" 
            description="Researched and implemented organic pest control methods in the university's experimental orchard."
          />
          <ExperienceCard 
            title="Hydroponic Lettuce Production" 
            description="Designed and managed a small-scale hydroponic system for lettuce production as part of a sustainable agriculture project."
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.title}>Contact Me</h2>
          <form style={styles.form}>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
            <textarea placeholder="Your Message" rows={4} style={styles.input}></textarea>
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2023 Ahmed Yar Khan. All rights reserved.</p>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>
        {icon && React.cloneElement(icon, { style: styles.cardIcon })}
        {title}
      </h3>
      <p>{description}</p>
    </div>
  );
}

function ExperienceCard({ title, description }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

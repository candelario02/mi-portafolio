import { useState } from 'react'
import './App.css'

import miFoto from './assets/perfil.jpg';

function App() {
  const [esIngles, setEsIngles] = useState(false)

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="logo-text">Portfolio</div>
        <div className="nav-links">
          <span>{esIngles ? 'Home' : 'Inicio'}</span>
          <button onClick={() => setEsIngles(!esIngles)} className="lang-btn">
            {esIngles ? 'ES' : 'EN'}
          </button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          {/* MODIFICACIÓN AQUÍ: Ahora BIENVENIDO usa la clase 'name' para heredar tamaño y color */}
          <h1 className="name">{esIngles ? 'WELCOME' : 'BIENVENIDO'}</h1>
          
          <p className="greeting">{esIngles ? "Hello, I'm" : "Hola, soy"}</p>
          <h1 className="name">CANDELARIO</h1>
          <h2 className="role">Frontend Developer</h2>
          <p className="description">
            {esIngles 
              ? "Developing modern and interactive web interfaces with React." 
              : "Desarrollando interfaces web modernas e interactivas con React."}
          </p>
          
          <button className="main-btn">{esIngles ? "Let's Talk" : "Hablemos"}</button>

          <div className="social-links">
            <p>{esIngles ? "Check Out My" : "Sígueme en"}</p>
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">In</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">Gh</a>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="hexagon-shape">
            <img src={miFoto} alt="Cande" />
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-header">
          <p className="services-subtitle">{esIngles ? "My services" : "Mis servicios"}</p>
          <h3 className="services-title">{esIngles ? "What I Do" : "Lo que hago"}</h3>
        </div>

        <div className="service-cards">
          <div className="s-card">
            <div className="s-icon">📱</div>
            <h4>{esIngles ? "Mobile Apps" : "App Móviles"}</h4>
            <p>{esIngles ? "Native development with Kotlin for Android." : "Desarrollo nativo con Kotlin para Android."}</p>
          </div>

          <div className="s-card">
            <div className="s-icon">🧪</div>
            <h4>{esIngles ? "Static Sites" : "Sitios Estáticos"}</h4>
            <p>{esIngles ? "Experience with Jekyll templates and Liquid." : "Experiencia con plantillas de Jekyll y Liquid."}</p>
          </div>

          <div className="s-card">
            <div className="s-icon">⚛️</div>
            <h4>{esIngles ? "Frontend React" : "Frontend React"}</h4>
            <p>{esIngles ? "Building modern and interactive interfaces." : "Construyendo interfaces modernas e interactivas."}</p>
          </div>

          <div className="s-card">
            <div className="s-icon">🎨</div>
            <h4>{esIngles ? "UI/UX Design" : "Diseño UI/UX"}</h4>
            <p>{esIngles ? "Professional layouts and visual identity." : "Maquetación profesional e identidad visual."}</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-box">
          <h3>{esIngles ? "Ready to start a project?" : "Listo para empezar a trabajar"}</h3>
          <p>{esIngles ? "Contact me through my networks" : "Contáctame a través de mis redes"}</p>
          
          <div className="contact-buttons">
            <a href="https://wa.me/936712554" target="_blank" rel="noreferrer" className="contact-btn whatsapp">WhatsApp</a>
            <a href="mailto:candehcarrion@gmailcom" className="contact-btn email">{esIngles ? "Send Email" : "Enviar Correo"}</a>
          </div>
        </div>

        <footer className="footer">
          <p>© 2024 Cande - Frontend Developer & Mobile Specialist</p>
        </footer>
      </section>
    </div>
  )
}

export default App
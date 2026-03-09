import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import PyME from './components/PyME.jsx'
import Contact from './components/Contact.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Privacy from './components/Privacy.jsx'
import './App.css'

const isPrivacy = window.location.pathname === '/privacidad'

export default function App() {
    if (isPrivacy) {
        return (
            <>
                <Navbar />
                <Privacy />
                <Footer />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <About />
                <PyME />
                <FAQ />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    )
}

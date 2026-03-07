import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import PyME from './components/PyME.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <About />
                <PyME />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

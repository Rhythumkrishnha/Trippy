import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/night.jpg';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

export default function About (){
    return (
        <>
            <Navbar />
            <Hero 
                className = "hero-mid"
                heroImg = { AboutImg }
                title = "About"
                btnClass = "hide"
            />
            <AboutUs />
            <Footer />
        </>
    )
}
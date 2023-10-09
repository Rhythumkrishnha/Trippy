import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactImg from '../assets/2.jpg';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Contact (){
    return (
        <>
            <Navbar />
            <Hero 
                className="hero-mid"
                heroImg={ContactImg}
                title="Contact"
            />
            <ContactForm />
            <Footer />
        </>
    )
}
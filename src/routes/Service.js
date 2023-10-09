import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceImg from '../assets/3.jpg';
import Footer from '../components/Footer';
import Trip from '../components/Trip';

export default function Service (){
    return (
        <>
            <Navbar />
            <Hero 
                className="hero-mid"
                heroImg={ ServiceImg }
                title="Service"
            />
            <Trip />
            <Footer />
        </>
    )
}
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import ContactImg from "../Assets/contact-img.png"
import {ContactUs} from "../components/ContactUs"


function Contact(){
    return(
        <div>
        <Navbar/>
        <Hero
        idName="contact-hero"
        heroImg={ContactImg}
        cName="contact-text"
        title="Contact Us"
        />

    <div id="contact-container">
    <ContactUs/>
    </div>

   </div>

    )
}

export default Contact

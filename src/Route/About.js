import Hero from "../components/Hero"
import AboutImg from "../Assets/about-img.jpg"
import Navbar from "../components/Navbar"
import AboutUs from "../components/AboutUs"


function About(){
    return(
        <div>
        <Navbar/>
        <Hero
        idName="about-hero"
        heroImg={AboutImg}
        cName="about-text"
        title="About Us"
        />
<div id="about-details">
    <AboutUs/>
</div>

   </div>
    )
}

export default About

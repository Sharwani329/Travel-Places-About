import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import HomeImg from "../Assets/home-bg.jpg"

function Home(){
    return(
        <div>
            <Navbar/>
            <Hero
            idName="hero"
            heroImg={HomeImg}
            cName="home-text"
            title="“Travel far enough,You meet yourself”&#127757;"
            />
            {/* <p>you meet yourself</p> */}
       </div>
    )
}

export default Home
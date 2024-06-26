import Hero from "../components/Hero"
import TravelImg from "../Assets/travel-img2.jpeg"
import Navbar from "../components/Navbar"
import TripData from "../components/TripData"
import tourImg01 from "../Images/tour-img01.jpg";
import tourImg02 from "../Images/tour-img02.jpg";
import tourImg03 from "../Images/tour-img03.jpg";
import tourImg04 from "../Images/tour-img04.jpg";
import tourImg05 from "../Images/tour-img05.jpg";
import tourImg06 from "../Images/tour-img06.jpg";
import tourImg07 from "../Images/tour-img07.jpg";



function Places(){
    return(
        <div>
        <Navbar/>
        <Hero
        idName="place-hero"
        heroImg={TravelImg}
        cName="place-text"
        title="“*...Oh the places you’ll go...😉”"
        />

        <div id="Tripcards">
            <TripData
            image={tourImg01}
            placeName="Westminister Bridge"
            city="London"
            price="$99"
            />
            <TripData
            image={tourImg02}
            placeName="Indonesia,Bali"
            city="Bali"
            price="$99"
            />            
            <TripData
            image={tourImg03}
            placeName="Snowy Mountains,Thailand"
            city="Bangkok"
            price="$99"
            />
            <TripData
            image={tourImg04}
            placeName="Beautiful Sunrise,Thailand"
            city="Phuket"
            price="$99"

            />
            <TripData
            image={tourImg05}
            placeName="Nusa Pendia Bali, Indonesia"
            city="Bali"
            price="$99"

            />
            <TripData
            image={tourImg06}
            placeName="Cherry Blossoms Spring"
            city="Tokyo"
            price="$99"

            />
            <TripData
            image={tourImg07}
            placeName="Holmen Lofoten"
            city="Paris"
            price="$99"

            />
        </div>

   </div>

    )
}

export default Places

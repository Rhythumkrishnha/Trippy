import './TripStyles.css';
import TripData from './TripData';
import Img1 from '../assets/5.jpg';
import Img2 from '../assets/img.jpg';
import Img3 from '../assets/3.jpg';

export default function Trip (){
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>
                You can discover unique 
                destination using Google Maps.
            </p>
            <div className="tripcard">
                <TripData 
                    img={Img1}
                    heading="Trip in Indonesia"
                    text="The Republic of Indonesia is located 
                    between the continents of Asia and Australia. 
                    It comprises 16,056 islands, with 34 provinces 
                    spreading over five main islands and four 
                    archipelagos. The five main islands include 
                    Sumatra, Java, Kalimantan, Sulawesi and Papua."
                />
                <TripData 
                    img={Img2}
                    heading="Trip in Malaysia"
                    text="Consisting of two regions separated by 
                    the South China Sea, Malaysia is a multi-ethnic, 
                    multi-religious federation of 13 states and 
                    three federal territories. The majority Muslim 
                    ethnic Malay are dominant politically, and 
                    benefit from positive discrimination in business, 
                    education."
                />
                <TripData 
                    img={Img3}
                    heading="Trip in France"
                    text="France, the largest country in Western Europe, 
                    has long been a gateway between the continent's 
                    northern and southern regions. Its lengthy borders 
                    touch Germany and Belgium in the north; the Atlantic 
                    Ocean in the west; the Pyrenees Mountains and Spain 
                    in the south."
                />
            </div>
        </div>
    )
}
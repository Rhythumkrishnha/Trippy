import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.jpg';
import Img4 from '../assets/4.jpg';
import Img5 from '../assets/5.jpg';
import Img6 from '../assets/6.jpg';
import Img7 from '../assets/8.jpg';
import Img8 from '../assets/9.jpg';
import './DestinationStyles.css';
import DestinationData from './DestinationData';

export default function Destination (){
    return (<>
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to
                see a lot within a time frame.
            </p>
            <DestinationData 
                className="first-des"
                heading="Manali"
                text="With spectacular valleys, 
                breathtaking views, snowcapped mountains, 
                and lush forests of oak, deodar, and pine, 
                Manali is a magical hill station at the 
                northern end of Kullu valley in Himachal 
                Pradesh. Gifted to the world by the mighty 
                Himalayas, it is known to be one of the most 
                popular destinations for Honeymooners. Manali 
                offers magnificent views of the Pir Panjal 
                and the Dhauladhar ranges, covered in a thick 
                blanket of snow for most of the year."
                img1={Img1}
                img2={Img2}
            />
            <DestinationData 
                className="first-des-reverse"
                heading="Leh Ladakh"
                text="Ladakh is a union territory in the 
                Kashmir region of India. Formerly falling 
                in the state of Jammu & Kashmir, Ladakh was
                administered a union territory on 31st October 2019. 
                Extending from the Siachen Glacier to the
                main Great Himalayas, Ladakh is a land like 
                no other. Dominated by dramatic landscapes, 
                Ladakh is known as the world's coldest desert.
                Stunning Gompas (Tibetan Buddhist monasteries),
                fluttering prayer flags, whitewashed stupas, 
                Ladakh is a riot of intricate murals and red-robed
                monks."
                img1={Img3}
                img2={Img4}
            />
            <DestinationData 
                className="first-des"
                heading="Coorg"
                text="Located amidst imposing mountains in
                Karnataka with a perpetually misty landscape, 
                Coorg is a popular coffee producing hill station. 
                It is popular for its beautiful green hills and 
                the streams cutting right through them. It also 
                stands as a popular destination because of its 
                culture and people. The Kodavas, a local clan 
                specializing in martial arts, are especially 
                notable for their keen hospitality. Coorg, 
                officially known as Kodagu, is the most affluent 
                hill station in Karnataka. It is well known for 
                its breathtakingly exotic scenery and lush greenery."
                img1={Img5}
                img2={Img6}
            />
            <DestinationData 
                className="first-des-reverse"
                heading="Andaman"
                text="Replete with turquoise blue water beaches 
                and a bit of history, Andaman & Nicobar Islands 
                is a little slice of paradise tucked around 1,400 km 
                away from the east coast of mainland India. Port Blair, 
                the capital of this union territory, has a major airport 
                and seaport connected with the rest of the country and 
                with various tourist islands via multiple daily ferries. 
                Havelock and Neil Islands are popular among tourists for 
                their white sandy beaches and excellent diving options.
                Andaman & Nicobar Islands comprises 572 islands, only 37 
                of which are inhabited, and a few are open to tourists."
                img1={Img7}
                img2={Img8}
            />
        </div>
    </>);
}
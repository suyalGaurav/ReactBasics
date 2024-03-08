import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

export default function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <img src= {`/images/${props.img}`} alt="mount fuji2" className="card-image"/>
            <div className="card-details">
                <div>
                    <span className="fa-location-and-country">
                        <FontAwesomeIcon icon= {faLocationDot} className="fa-location"/>
                        {props.country}
                    </span>
                    <span>
                        <a href={props.googleMapsLink} className="maps-link">
                            View on Google Maps
                        </a>
                    </span>
                </div>    
                <h1 className="location">{props.location}</h1>   
                <p className="travel-dates">{props.travelStarted} - {props.travelEnded}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    )
}

// **JAPAN**
// View on Google Maps

// **Mount Fuji**
// 12 Jan - 24 Jan, 2023

// Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). It's a popular tourist site for both Japanese and foreign visitors.

// Image: [Image Thumbnail] For mobile view
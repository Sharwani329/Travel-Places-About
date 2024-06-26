import "./TripStyle.css";
import React from 'react'


function TripData(props) {
  return (
    <div id="trip-card">
            <img className="place-img" src={props.image} alt="img"/>

        <div className="Img-details">

        <h4>Name: {props.placeName}</h4>
        <p>City: {props.city}</p>
        <p>Price: {props.price}</p>

        </div>

    </div>
  )
}

export default TripData;

import React from 'react'
import iconLocation from "../../img/icon.png"
export default function Card(props) {
    const {title ,location ,
        googleMapsUrl , startDate ,
        endDate , description ,
        imageUrl} = props;
  return (
    <div className='card'>
        <div className='card__img'>
              <img src={imageUrl} alt="" />
        </div>
        <div className='card__content'>
              <div className='card__content--location'>
                   <img src={iconLocation} alt="" />
                   <p>{location}</p>
                   <a href = {googleMapsUrl}>View on Google Maps</a>
              </div>
              <p>{title}</p>
              <p>{startDate} - {endDate}</p>
              <p>{description}</p>
        </div>
    </div>
  )
}

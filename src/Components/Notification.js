import React from "react";
import ReactStars from "react-rating-stars-component";
const Notification = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return ( 
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={50}
    isHalf={true}
    edit={false}
    value={2.5}
    activeColor="#ffd700"
  />
       );
}
 
export default Notification;

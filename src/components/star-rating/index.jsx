import { useState } from 'react'
import {FaStar} from 'react-icons'
import './styles.css'

export default function StarRating({noOfStars = 5}){
    const [rating, setRating] = useState(0); // rating stores the current selected rating
    const [hover , setHover] = useState(0); // hover stores the star number currently being hovered

    function handleClick(getCurrentIndex){ // handleClick sets the selected rating whn the star is clicked
        setRating(getCurrentIndex); // sets the rating to the clicked star index
    }

    function handleMouseEnter(getCurrentIndex){ // it sets the hover value to the currently hovered star
        setHover(getCurrentIndex); //changes color of the stars upto this index
    }

    function handleMouseLeave(){ //  resets hover to current rating (so highlight goes away)
        setHover(rating); // removes temporary hover when cursor leaves
    }

    return <div className="star-rating">
        {
            // create an array of the given number of the stars (default 5)
            [...Array(noOfStars)].map((_,index) => {
                index += 1 // we r makin the index start from 1 bcause the star should be 1,2,3,4,5 not 0,1,2,3,4,5

                return <FaStar
                key = {index} // each element in the list need a unique key
                className = {index <= (hover || rating) ? 'active' : 'inactive'} // highlight if star is less than or equal to hover or rating
                onClick = {() => handleClick(index) } // set the rating on click
                onMouseMove = {() => handleMouseEnter(index)} // change hover on hover
                onMouseLeave = {() => handleMouseLeave()} // remove hover on leave
                size = {40}
                />
            })
        }
    </div>
}
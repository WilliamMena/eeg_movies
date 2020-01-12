import React, { useState } from 'react';
import MovieForm from './movieForm.js';

const CreateButton = ({postMovie, movie}) => {

    const [showPopup, setPopup] = useState(false);

    function handleOnClick() {
        setPopup(true)
    }

    function handleClose() {
        setPopup(false)
    }

    if (movie && showPopup) {
        return (
            <div>
                Edit
                <button onClick={handleClose}>Close</button>
                <MovieForm postMovie={postMovie} closeForm={handleClose} editMovie={true} movie={movie}/>
            </div>

        )
    } else if (showPopup) {
        return (
            <div>
                <button onClick={handleClose}>Close</button>
                <MovieForm postMovie={postMovie} closeForm={handleClose} />
            </div>
        )
    } else {
        return (
            <div className="form">
                <button onClick={handleOnClick}>Create</button>
            </div>
        )
    }

}

export default CreateButton;
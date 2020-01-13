import React, { useState } from 'react';
import MovieForm from './movieForm.js';
import Button from 'react-bootstrap/Button'

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
                <Button variant="outline-primary" onClick={handleOnClick}>Create new movie</Button>
            </div>
        )
    }

}

export default CreateButton;
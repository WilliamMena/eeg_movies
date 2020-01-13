import React, { useState } from 'react';
import MovieForm from './movieForm.js';
import Button from 'react-bootstrap/Button'

const CreateButton = ({ postMovie, movie }) => {

    const [showPopup, setPopup] = useState(false);

    function handleOnClick() {
        setPopup(true);
    }

    function handleClose() {
        setPopup(false);
    }

    if (movie && showPopup) {
        return (
            <div>
                Edit
                <Button variant="success" onClick={handleClose}>Close</Button>
                <MovieForm postMovie={postMovie} closeForm={handleClose} editMovie={true} movie={movie} />
            </div>

        )
    } else if (showPopup) {
        return (
            <div>
                <Button variant="success" onClick={handleClose}>Close</Button>
                <MovieForm postMovie={postMovie} closeForm={handleClose} />
            </div>
        )
    } else {
        return (
            <div className="form">
                <Button variant="success" onClick={handleOnClick}>Create new movie</Button>
            </div>
        )
    }

}

export default CreateButton;
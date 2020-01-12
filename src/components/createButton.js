import React, { useState } from 'react';
import MovieForm from './movieForm.js';

const CreateButton = () => {

    const [showPopup, setPopup] = useState(false);

    function handleOnClick() {
        setPopup(true)
    }

    function handleClose() {
        setPopup(false)
    }

    if (showPopup) {
        return (
            <div>
                <button onClick={handleClose}>Close</button>
                <MovieForm />
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
import React, { useEffect, useState } from 'react';

function handleOnClick() {
    alert("Hello");
}

const CreateMovie = () => {

    return (
        <button onClick={handleOnClick}>Create</button>
    )
}

export default CreateMovie;
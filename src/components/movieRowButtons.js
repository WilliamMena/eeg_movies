import React from 'react';


const MovieRowButtons = ({details, editMovie, deleteMovie}) => {

    const {movie_id} = details

    function handleEditMovie() {
        editMovie(details)
    }
    
    function handleDelete() {
        deleteMovie(movie_id)
    }

    return (
                <td>
                    <button onClick={handleEditMovie}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </td>
    )
}

export default MovieRowButtons;
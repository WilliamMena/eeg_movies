import React from 'react';
import Button from 'react-bootstrap/Button';


const MovieRowButtons = ({ details, editMovie, deleteMovie }) => {

    const { movie_id } = details;

    function handleEditMovie() {
        editMovie(details);
    }

    function handleDelete() {
        deleteMovie(movie_id);
    }

    return (
        <td className="edit_buttons">
            <Button variant="outline-light" onClick={handleEditMovie}>Edit</Button>
            <Button variant="success" onClick={handleDelete}>Delete</Button>
        </td>
    )
}

export default MovieRowButtons;
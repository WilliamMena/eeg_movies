import React from 'react';


const MovieRow = ({ details, editMovie, deleteMovie }) => {

    const { title, genre, year, run_time, rating, main_actors, movie_id } = details
    let main_actorsHTML = <td></td>
    if (main_actors) {
        main_actorsHTML = <td>{main_actors.join(" - ")}</td>
    }

    function handleEditMovie() {
        editMovie(details)
    }

    function handleDelete() {
        deleteMovie(movie_id)
    }

    return (
        <tbody>
            <tr>
                <td>{title}</td>
                <td>{genre}</td>
                <td>{year}</td>
                <td>{run_time}</td>
                <td>{rating}</td>

                {main_actorsHTML}

                <td>
                    <button onClick={handleEditMovie}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </td>
            </tr>
        </tbody>
    )
}

export default MovieRow;
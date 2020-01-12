import React from 'react';


const MovieRow = ({details, deleteMovie}) => {

    const {title, genre, year, run_time, rating, main_actors, movie_id} = details
    let main_actorsHTML = <td></td>
    if (main_actors) {
        main_actorsHTML = <td>{main_actors.join(" - ")}</td>
    }

    function viewMovie() {
        alert('clicked');
    }
    
    function handleDelete() {
        deleteMovie(movie_id)
    }

    return (
        // <div className="movie" key={props.details.movie_id}>
        //     <h1>Title: {props.details.title}</h1>
        //     <h3>Genre: {props.details.genre}</h3>
        // </div>
            <tbody>
            <tr>
                <td>{title}</td>
                <td>{genre}</td>
                <td>{year}</td>
                <td>{run_time}</td>
                <td>{rating}</td>

                {main_actorsHTML}

                <td>
                    <button onClick={viewMovie}>View</button>
                    <button onClick={handleDelete}>Delete</button>
                </td>
            </tr>
            </tbody>
    )
}

export default MovieRow;
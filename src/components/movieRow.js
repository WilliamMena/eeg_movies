import React from 'react';

function viewMovie() {
    alert('clicked');
}

function deleteMovie() {
    alert('deleted');
}


const MovieRow = ({details}) => {
    const {title, genre, year, run_time, rating, main_actors} = details
    let main_actorsHTML = <td></td>
    if (main_actors) {
        main_actorsHTML = <td>{main_actors.join(" - ")}</td>
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
                    <button onClick={deleteMovie}>Delete</button>
                </td>
            </tr>
            </tbody>
    )
}

export default MovieRow;
import React from 'react';

function viewMovie() {
    alert('clicked');
}


const MovieRow = (props) => {
    return (
        // <div className="movie" key={props.details.movie_id}>
        //     <h1>Title: {props.details.title}</h1>
        //     <h3>Genre: {props.details.genre}</h3>
        // </div>
            <tbody>
            <tr>
                <td>{props.details.title}</td>
                <td>{props.details.genre}</td>
                <td>{props.details.year}</td>
                <td>{props.details.run_time}</td>
                <td>{props.details.rating}</td>

                <td>{props.details.main_actors}</td>

                <td>
                    <button onClick={viewMovie}>View</button>
                    {/* <button onclick={deleteMovie} >Delete</button> */}
                </td>
            </tr>
            </tbody>
    )
}

export default MovieRow;
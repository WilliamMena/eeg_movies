import React from 'react';

const Movie = (props) => {
    return (
        // <div className="movie" key={props.details.movie_id}>
        //     <h1>Title: {props.details.title}</h1>
        //     <h3>Genre: {props.details.genre}</h3>
        // </div>

            <tr>
                <td>{props.details.title}</td>
                <td>{props.details.genre}</td>
                <td>{props.details.year}</td>
                <td>{props.details.run_time}</td>
                <td>{props.details.rating}</td>

                <td>{props.details.main_actors}</td>
            </tr>
    )
}

export default Movie
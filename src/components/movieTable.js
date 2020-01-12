import React from 'react';
import MovieRow from './movieRow.js';

const MovieTable = ({movies, deleteMovie}) => {

    const center = {
        margin: 'auto'
    }

    return (
        <div className="List">
            <h4>Showing {movies.length} results</h4>

            <table style={center}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Year</th>
                        <th>Run Time</th>
                        <th>Rating</th>
                        <th>Main Actors</th>
                    </tr>
                </thead>

                {movies.map((movie, index) => (
                    <MovieRow details={movie} key={index} deleteMovie={deleteMovie} />
                ))}



            </table>

        </div>
    )
}

export default MovieTable;
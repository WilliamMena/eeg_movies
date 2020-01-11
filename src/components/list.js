import React from 'react';
import Movie from '../components/movie.js';

const List = (props) => {

    return (
        <div className="List">
            <h4>Showing {props.movies.length} results</h4>


            <table>
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

                {props.movies.map((movie, index) => (
                    <Movie details={movie} key={index} />
                ))}



            </table>

        </div>
    )
}

export default List;
import React, { useEffect, useState } from 'react';
// import Movie from '../components/movie.js';
import MovieTable from '../components/movieTable.js';
import CreateButton from '../components/createButton.js';

import agent from '../agent.js';

const Movies = () => {
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchAllMovies() {
            setLoading(true);

            try {
                const data = await agent.Movies.all();
                setMovies(data.movies);
            } catch (err) {
                setError(err);
            }

            setLoading(false);
        }

        fetchAllMovies();
    }, []);

    const postMovie = (movie) => {
        console.log(movie)
        const newMovieList = [movie, ...movies]
        setMovies(newMovieList)
        // agent.Movies.create(movie);
    }



    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <CreateButton postMovie={postMovie} />
                <MovieTable movies={movies} />
            </div>
        );
    }


};

export default Movies;
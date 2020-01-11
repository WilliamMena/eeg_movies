import React, { useEffect, useState } from 'react';
// import Movie from '../components/movie.js';
import List from '../components/list.js';

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

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <List movies={movies} />
        );
    }


};

export default Movies;
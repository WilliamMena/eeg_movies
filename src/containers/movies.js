import React, { useEffect, useState } from 'react';
// import Movie from '../components/movie.js';
import MovieTable from '../components/movieTable.js';
import CreateButton from '../components/createButton.js';
import MovieForm from '../components/movieForm.js'

import agent from '../agent.js';

const Movies = () => {
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [movieList, setMovieList] = useState([]);
    const [editMovie, setEditMovie] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fetchAllMovies() {
            setLoading(true);

            try {
                const data = await agent.Movies.all();
                setMovieList(data.movies);
            } catch (err) {
                setError(err);
            }

            setLoading(false);
        }

        fetchAllMovies();
    }, []);

    const postMovie = (movie) => {
        // console.log(movie)
        const newMovieList = [movie, ...movieList]
        setMovieList(newMovieList)
        // agent.Movies.create(movie);
    }

    const updateMovie = (mov) => {
        const indexOfMovie = movieList.indexOf(movieList.find(e => e.movie_id === mov.movie_id))
        const newMovieList = [...movieList]
        newMovieList.splice(indexOfMovie, 1, mov)

        setMovieList(newMovieList)
    }

    const handleDeleteMovie = (movie_id) => {
        // console.log("Reached Movies");
        // console.log(movie_id);
        deleteMovie(movie_id);
    }

    async function deleteMovie(movie_id) {
        try {
            await agent.Movies.del(movie_id);
        } catch (err) {
            alert('delete movie error');
            throw err;
        }
        const newMovieList = movieList.filter((m) => m.movie_id !== movie_id)
        setMovieList(newMovieList);
    }

    const handleEditMovie = (movie) => {
        setEditMovie(true);
        setMovie(movie)
    }
    
    const handleCloseEditMode = () => {
        setEditMovie(false);
    }



    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (isLoading) {
        return <div>Loading...</div> 
    } else if (editMovie) {
        // return <CreateButton movie={movie} />
        // return <MovieForm movie={movie} editForm={true} />
        return (
            <div>
                <button onClick={handleCloseEditMode}>Close Edit Mode</button>
                <br></br>
                <MovieForm movie={movie} editForm={true} updateMovie={updateMovie} close={handleCloseEditMode}/>
            </div>)
    } else {
        return (
            <div>
                <CreateButton postMovie={postMovie} />
                <MovieTable movies={movieList} editMovie={handleEditMovie} deleteMovie={handleDeleteMovie} />
            </div>
        );
    }


};

export default Movies;
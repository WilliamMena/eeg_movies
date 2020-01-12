import React, {useState} from 'react';

import agent from '../agent.js';

const MovieForm = ({movie = {}, postMovie, closeForm, editForm}) => {

    const { movie_id, title, genre, year, run_time, rating, main_actors } = movie;

    const [movieTitle, setMovieTitle] = useState(title || '');
    const [movieGenre, setMovieGenre] = useState(genre || 'action');
    const [movieYear, setMovieYear] = useState(year || 1888);
    const [movieRunTime, setMovieRunTime] = useState(run_time || 0);
    const [movieRating, setMovieRating] = useState(rating || 'G');
    const [movieActors, setMovieActors] = useState(main_actors || []);
    const [editView, setEditView] = useState(editForm || false);

    // For Validations
    // const [hasError, setHasError] = useState(false);

    function handleMovieTitle(e) {
        setMovieTitle(e.target.value);
    }

    function handleMovieGenre(e) {
        setMovieGenre(e.target.value)
    }

    function handleMovieYear(e) {
        setMovieYear(parseInt(e.target.value));
    }

    function handleMovieRunTime(e) {
        setMovieRunTime(parseInt(e.target.value));
    }

    function handleMovieRating(e) {
        setMovieRating(e.target.value);
    }

    function handleMovieActors(e) {
        setMovieActors(e.target.value.split(';').map((word) => word.trim()))
    }

    async function createMovie(movie) {
        let data;
        try {
            data = await agent.Movies.create(movie);
        } catch (err) {
            alert('create movie error')
            throw err;
        }
        postMovie(data)
    }

    function handleSubmit(e) {
        e.preventDefault();
        let payLoad = {
            title: movieTitle,
            genre: movieGenre,
            year: movieYear,
            run_time: movieRunTime,
            rating: movieRating,
            main_actors: movieActors
        }

        createMovie(payLoad)
        // Should RESET FORM
        // THEN close form
        closeForm()

    }

    function handleClose() {
        setEditView(false);
    }

    let closeButton = ""
    if (editView) {
        closeButton = <button onClick={handleClose}>Close</button>
    }


    return (
        <form onSubmit={handleSubmit} >
            {closeButton}
            <label>
                Title:
                <input type="text" name="title" value={movieTitle} onChange={handleMovieTitle} />
            </label>
            <br></br>
            <label>
                Genre:
                {/* <input type="text" name="genre" value={movieGenre} onChange={handleMovieGenre} /> */}
                <select size="7" value={movieGenre} onChange={handleMovieGenre}>>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                    <option value="musical">Musical</option>
                    <option value="romance">Romance</option>
                </select>
            </label>
            <br></br>
            <label>
                Year:
                <input type="number" name="year" value={movieYear} onChange={handleMovieYear} />
            </label>
            <br></br>
            <label>
                Run Time (in seconds):
                <input type="number" name="run_time" value={movieRunTime} onChange={handleMovieRunTime} />
            </label>
            <br></br>
            <label>
                Rating:
                {/* <input type="text" name="rating" value={movieRating} onChange={handleMovieRating} /> */}
                <select value={movieRating} onChange={handleMovieRating}>
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="PG-13">PG-13</option>
                    <option value="R">R</option>
                    <option value="NC-17">NC-17</option>
                </select>
            </label>
            <br></br>
            <label>
                Main Actors (optional, seperated by semicolon `;` ) :
                {/* Have to figure out smart way to use value here. Tried value={movieActors.join('; )} */}
                <input type="text" name="main_actors" onChange={handleMovieActors}/>
            </label>

            <br></br>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default MovieForm;
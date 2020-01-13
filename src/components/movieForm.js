import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap'

import agent from '../agent.js';

const MovieForm = ({ movie = {}, postMovie, closeForm, editForm, updateMovie, close }) => {

    const { movie_id, title, genre, year, run_time, rating, main_actors } = movie;

    const [movieTitle, setMovieTitle] = useState(title || '');
    const [movieGenre, setMovieGenre] = useState(genre || 'action');
    const [movieYear, setMovieYear] = useState(year || 1888);
    const [movieRunTime, setMovieRunTime] = useState(run_time || 1);
    const [movieRating, setMovieRating] = useState(rating || 'G');
    const [movieActors, setMovieActors] = useState(main_actors || []);
    // const [editView, setEditView] = useState(editForm || false);

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
        if (e.target.value > 0) {
            setMovieRunTime(parseInt(e.target.value));
        }
        // setMovieRunTime(parseInt(e.target.value));
    }

    function handleMovieRating(e) {
        setMovieRating(e.target.value);
    }

    function handleMovieActors(e) {
        // setMovieActors(e.target.value.split(';').map((word) => word.trim()))
        // Need to find way to limit to 3 people without messing up the input value
        setMovieActors(e.target.value.split(';'));
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

    async function updateMovieAPI(movie_id, movie) {
        let data;
        try {
            data = await agent.Movies.edit(movie_id, movie);
        } catch (err) {
            alert('update movie error')
            throw err;
        }
        // Need new function for updated movie
        data["movie_id"] = movie_id
        updateMovie(data)


        // movie["movie_id"] = movie_id
        // updateMovie(movie)
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

        if (editForm) {
            // console.log("Update Movie")
            // console.log(movie_id, payLoad);
            updateMovieAPI(movie_id, payLoad)
            close()
        } else {
            // console.log("Create Movie")
            createMovie(payLoad)
            // // Should RESET FORM
            // // THEN close form
            closeForm()
        }



    }

    return (
        // Bootstrap Version
        <Form onSubmit={handleSubmit} >
            <Form.Group controlId="formMovieTitle">
                <Form.Label>
                    Title
                <Form.Control type="text" name="title" value={movieTitle} onChange={handleMovieTitle} />
                </Form.Label>
            </Form.Group>

            <Form.Group controlId="formMovieGenre">
                <Form.Label>
                    Genre
                {/* <input type="text" name="genre" value={movieGenre} onChange={handleMovieGenre} /> */}
                    <Form.Control as="select" size="7" value={movieGenre} onChange={handleMovieGenre}>>
                    <option value="action">Action</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="horror">Horror</option>
                        <option value="musical">Musical</option>
                        <option value="romance">Romance</option>
                    </Form.Control>
                </Form.Label>
            </Form.Group>

            <Form.Group controlId="formMovieYear">
                <Form.Label>
                    Year
                <Form.Control type="number" name="year" value={movieYear} onChange={handleMovieYear} />
                </Form.Label>
            </Form.Group>

            <Form.Group controlId="formMovieRunTime">
                <Form.Label>
                    Run Time (in seconds)
                <Form.Control type="number" name="run_time" value={movieRunTime} onChange={handleMovieRunTime} />
                </Form.Label>
            </Form.Group>

            <Form.Group controlId="formMovieRating">
                <Form.Label>
                    Rating
                {/* <input type="text" name="rating" value={movieRating} onChange={handleMovieRating} /> */}
                    <Form.Control as="select" value={movieRating} onChange={handleMovieRating}>
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG-13">PG-13</option>
                        <option value="R">R</option>
                        <option value="NC-17">NC-17</option>
                    </Form.Control>
                </Form.Label>
            </Form.Group>

            <Form.Group controlId="formMovieMainActors">
            <Form.Label>
                Main Actors
                {/* Have to figure out smart way to use value here. Tried value={movieActors.join('; )} */}
                <Form.Control type="text" name="main_actors" value={movieActors.join(';')} onChange={handleMovieActors} />
                <Form.Text className="text-muted">
                    (optional, up to 3, seperated by semicolon `;` ) 
                </Form.Text>
            </Form.Label>
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>



        // REGULAR VERSION
        // <form onSubmit={handleSubmit} >
        //     <label>
        //         Title:
        //         <input type="text" name="title" value={movieTitle} onChange={handleMovieTitle} />
        //     </label>
        //     <br></br>
        //     <label>
        //         Genre:
        //         {/* <input type="text" name="genre" value={movieGenre} onChange={handleMovieGenre} /> */}
        //         <select size="7" value={movieGenre} onChange={handleMovieGenre}>>
        //             <option value="action">Action</option>
        //             <option value="comedy">Comedy</option>
        //             <option value="drama">Drama</option>
        //             <option value="fantasy">Fantasy</option>
        //             <option value="horror">Horror</option>
        //             <option value="musical">Musical</option>
        //             <option value="romance">Romance</option>
        //         </select>
        //     </label>
        //     <br></br>
        //     <label>
        //         Year:
        //         <input type="number" name="year" value={movieYear} onChange={handleMovieYear} />
        //     </label>
        //     <br></br>
        //     <label>
        //         Run Time (in seconds):
        //         <input type="number" name="run_time" value={movieRunTime} onChange={handleMovieRunTime} />
        //     </label>
        //     <br></br>
        //     <label>
        //         Rating:
        //         {/* <input type="text" name="rating" value={movieRating} onChange={handleMovieRating} /> */}
        //         <select value={movieRating} onChange={handleMovieRating}>
        //             <option value="G">G</option>
        //             <option value="PG">PG</option>
        //             <option value="PG-13">PG-13</option>
        //             <option value="R">R</option>
        //             <option value="NC-17">NC-17</option>
        //         </select>
        //     </label>
        //     <br></br>
        //     <label>
        //         Main Actors (optional, up to 3, seperated by semicolon `;` ) :
        //         {/* Have to figure out smart way to use value here. Tried value={movieActors.join('; )} */}
        //         <input type="text" name="main_actors" value={movieActors.join(';')} onChange={handleMovieActors}/>
        //     </label>

        //     <br></br>
        //     <input type="submit" value="Submit" />
        // </form>
    )
}

export default MovieForm;
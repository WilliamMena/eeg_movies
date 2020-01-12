import React, {useState} from 'react';

const MovieForm = ({movie = {}}) => {

    const { movie_id, title, genre, year, run_time, rating, main_actors } = movie;


    const [movieTitle, setMovieTitle] = useState(title || '');
    const [movieGenre, setMovieGenre] = useState(genre || '');
    const [movieYear, setMovieYear] = useState(year || 1888);
    const [movieRunTime, setMovieRunTime] = useState(run_time || 0);
    const [movieRating, setMovieRating] = useState(rating || '');
    const [movieActors, setMovieActors] = useState(main_actors || []);

    function handleMovieTitle(e) {
        setMovieTitle(e.target.value);
    }

    function handleMovieGenre(e) {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
              value.push(options[i].value);
            }
        }
        setMovieGenre(value)
    }

    function handleMovieYear(e) {
        setMovieYear(e.target.value);
    }

    function handleMovieRunTime(e) {
        setMovieRunTime(e.target.value);
    }

    function handleMovieRating(e) {
        setMovieRating(e.target.value);
    }

    function handleMovieActors(e) {
        setMovieActors(e.target.value.split(';').map((word) => word.trim()))
    }


    return (
        <form>
            <label>
                Title:
                <input type="text" name="title" value={movieTitle} onChange={handleMovieTitle} />
            </label>
            <br></br>
            <label>
                Genre:
                {/* <input type="text" name="genre" value={movieGenre} onChange={handleMovieGenre} /> */}
                {/* <select multiple size="7" value={movieGenre} onChange={handleMovieGenre}> */}
                <select multiple size="7" value={movieGenre} onChange={handleMovieGenre}>>
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
                <input type="text" name="year" value={movieYear} onChange={handleMovieYear} />
            </label>
            <br></br>
            <label>
                Run Time (in minutes):
                <input type="text" name="run_time" value={movieRunTime} onChange={handleMovieRunTime} />
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
                {/* 
                    Need to implement button that will add another input for main actors each time it's pressed. 
                    Limit to 10.
                    Need to look into numbering or how to merge all inputs. What proper structure is.
                */}
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
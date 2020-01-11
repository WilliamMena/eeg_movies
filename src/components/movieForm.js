import React from 'react';

const MovieForm = () => {

    return (
        <form>
            <label>
                Title:
                <input type="text" name="title"/>
            </label>

            <input type="submit" value="Submit" />
        </form>
    )
}

export default MovieForm;
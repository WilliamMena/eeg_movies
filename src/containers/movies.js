import React from 'react';
// import Movie from '../components/movie.js';
import List from '../components/list.js';

import agent from '../agent.js';



class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            "Movies": [
                {
                "movie_id": "335f6fad-e601-4450-9ae3-018e279ec051",
                "title": "My Cousin Vinny",
                "genre": "comedy",
                "year": 1992,
                "run_time": 7200,
                "rating": "R",
                "main_actors": [
                    "Joe Pesci",
                    "Marisa Tomei"
                    ]
                },
                {
                "movie_id": "b535bd23-2c5f-4061-9a28-a27db2a474e3",
                "title": "Goodfellas",
                "genre": "drama",
                "year": 1990,
                "run_time": 8880,
                "rating": "R",
                "main_actors": [
                    "Robert De Niro",
                    "Joe Pesci",
                    "Ray Liotta"
                    ]
                },
                {
                "movie_id": "f4a0e5ea-fb5e-4c4e-8587-2c7dd7cafd54",
                "title": "Toy Story",
                "genre": "fantasy",
                "year": 1995,
                "run_time": 4860,
                "rating": "G"
                }
                ] 
        }
    }

    render () {
        console.log(agent.Movies.all)
        
        return (
        <div className="container">
            <h1>All Movies</h1>
            {/* <ul className="movie-list">
                {this.state.Movies.map((c, i) => (
                    <Movie details={c} key={i} />
                ))}
            </ul> */}

            <List movies={this.state.Movies} />
        </div>
        )
    }
}

export default Movies;
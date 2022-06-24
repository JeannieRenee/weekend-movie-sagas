import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails(){
    const movies = useSelector(store => store.movies);

    return(
        <section className="movies">
        {movies.map(movie => {
            return (
                <div key={movie.id} >
                    <p>{movie.description}</p>
                </div>
            );
        })}
    </section>
    )
};

export default MovieDetails
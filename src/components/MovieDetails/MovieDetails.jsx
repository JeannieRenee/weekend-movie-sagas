import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function MovieDetails(){
    const movies = useSelector(store => store.movies);
    const  {id}  = useParams();

    console.log('movie id is:', id);

    return(
        <>
            <h1>MovieDetails</h1>
            <Link to="/"> HOME </Link>
            <section className="movies">
            {movies.map(movie => {
                if (movie.id === id)
                return (
                    <div key={movie.id}>
                        <p>{movie.description}</p>
                    </div>
                );
                else (
                    console.log('no matches dawg')
                )
            })}
            </section>
        </>
    )
};

export default MovieDetails
import React from 'react';
import { useSelector } from 'react-redux';
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
                return (
                    <div key={movie.id}>
                        <p>{movie.description}</p>
                    </div>
                );
            })}
            </section>
        </>
    )
};

export default MovieDetails
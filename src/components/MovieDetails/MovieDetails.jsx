import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function MovieDetails(){
    const movies = useSelector(store => store.movies);

    let  {id}  = useParams();

    for(let i = 0; i<movies.length; i++){
        if(movies[i].id === Number(id)){
            id = i
            break
        }
    };
    console.log('genres test', movies)

    return(
        <>
            <h1>MovieDetails</h1>
            <Link to="/"> HOME </Link>

            <section className="movies">
                        <div key={movies[id].id}>
                            <h3>{movies[id].title}</h3>
                            <p>{movies[id].description}</p>
                            <h1>Genre</h1>
                            <p>{movies[id].genres}</p>
                        </div>
            </section>
        </>
    )
};

export default MovieDetails
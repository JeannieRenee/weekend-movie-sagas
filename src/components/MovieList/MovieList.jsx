import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useHistory} from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

function MovieList() {
    const history = useHistory()
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="flex-container">
                {movies.map(movie => {
                    return (
                        <MovieCard movie={movie}/>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;

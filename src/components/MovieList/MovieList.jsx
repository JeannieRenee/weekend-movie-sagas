import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
// style sheet
import './MovieList.css'
// component import
import MovieCard from '../MovieCard/MovieCard';

function MovieList() {
    const history = useHistory()
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    
    // page load- do this
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <>
        <main>
            <section className="flex-container">
                {movies.map(movie => {
                    return (
                        <MovieCard movie={movie}/>
                    );
                })}
            </section>
        </main>
        </>
    );
}

export default MovieList;

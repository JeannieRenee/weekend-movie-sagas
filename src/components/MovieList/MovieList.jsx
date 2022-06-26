import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';

function MovieList() {
    const history = useHistory()
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function addMovie() {
        history.push(`/add`);
    }

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

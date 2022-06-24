import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'



function MovieCard({movie}) {
    const history = useHistory()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function handleClick(){
        history.push(`/details/${movie.id}`);
    }
    return (
       <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} onClick={handleClick}/>
        </div>
    );
}

export default MovieCard;

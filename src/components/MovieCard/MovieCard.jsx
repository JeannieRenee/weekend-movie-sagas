import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';



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
        <Card sx={{ 
            maxWidth: 200, 
            minWidth: 200,  
            maxHeight: 300, 
            minHeight: 300 
        }}>
        <CardActionArea>

        <CardMedia
            component="img"
            image= {movie.poster}
            alt= {movie.title}
            onClick={handleClick}
            sx={{ 
                maxWidth: 200, 
                minWidth: 200,  
                maxHeight: 300, 
                minHeight:300 
            }}
        /> 
        </CardActionArea>
    </Card>
    );
}

export default MovieCard;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

// mui imports
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function MovieCard({movie}) {
    const history = useHistory()
    const dispatch = useDispatch();

    // on page load, run this
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // push to details page on click
    function handleClick(){
        history.push(`/details/${movie.id}`);
    }
    return (
        //Each Movie Poster
        <div className='cards'>
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
        </div>
    );
}

export default MovieCard;

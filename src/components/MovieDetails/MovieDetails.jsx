import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

function MovieDetails(){
    const movies = useSelector(store => store.movies);

    let  {id}  = useParams();

    for(let i = 0; i<movies.length; i++){
        if(movies[i].id === Number(id)){
            id = i
            break
        }
    };
    return(
        <>
        <section className="flex-container-2">
            <Card sx={{ 
                maxWidth: 400, 
                minWidth: 400,  
                maxHeight: 600, 
                minHeight: 600  
            }}>
            <CardMedia
                component="img"
                image= {movies[id].poster}
                alt= {movies[id].title}
                sx={{ 
                    maxWidth: 400, 
                    minWidth: 400,  
                    maxHeight: 600, 
                    minHeight: 600 
                }}
            /> 
            </Card>
            <Card sx={{ 
                maxWidth: 400, 
                minWidth: 400,  
                maxHeight: 600, 
                minHeight: 600 
            }}>
                <Typography 
                    variant="h4"
                    align='left'
                    className='titleText'
                >
                {movies[id].title}
                </Typography>

                <Typography 
                    variant="h6"
                    align='left'
                    className='genreText'
                >
                {movies[id].genres}
                </Typography>

                <Typography 
                    variant="body1"
                    align='left'
                    className='descText'
                >
                {movies[id].description}
                </Typography>
            </Card>
            </section>    
                        <Link to="/"> HOME </Link>

        </>    
    )
};

export default MovieDetails


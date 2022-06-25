import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {useHistory} from 'react-router-dom';


import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function MovieDetails(){
    const history = useHistory()
    const movies = useSelector(store => store.movies);

    let  {id}  = useParams();

    for(let i = 0; i<movies.length; i++){
        if(movies[i].id === Number(id)){
            id = i
            break
        }
    };
    function homePage() {
        history.push(`/`);
    }
    function prevPage() {
        let prevId = id--
        history.push(`/details/${prevId}`);
    }
    function nextPage() {
        let nextId = id++
        console.log('nextId', id++)
        if (nextId = id){
            history.push(`/details/${nextId++}`);
        }
    }

    const first=id === 0; 
    const middle=id > 0 && id < movies.length-1;
    const last=id === movies.length-1; 

    return(
        <>
        <h1>MovieDetails</h1>
        <br/>
        {first && 
            <ButtonGroup variant="text">
                <Button onClick={homePage}>Home</Button>
                <Button onClick={nextPage}>Next</Button>
            </ButtonGroup> 
        }
        {middle && 
            <ButtonGroup variant="text">
                <Button onClick={prevPage}>Previous</Button>
                <Button onClick={nextPage}>Next</Button>
            </ButtonGroup> 
        }
        {last && 
            <ButtonGroup variant="text">
                <Button onClick={prevPage}>Previous</Button>
                <Button onClick={homePage}>Home</Button>
            </ButtonGroup>         
        }

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
        </>    
    )
};

export default MovieDetails


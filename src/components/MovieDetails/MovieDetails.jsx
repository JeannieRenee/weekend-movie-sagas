import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ButtonGroup from '@mui/material/ButtonGroup';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';



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
                <div style={{position: 'relative'}} >
                    <CardMedia
                        component="img"
                        image= "images/backcover.png"
                        alt= {movies[id].title}
                        sx={{ 
                            maxWidth: 400, 
                            minWidth: 400,  
                            maxHeight: 600, 
                            minHeight: 600 
                        }}
                    /> 
                        <div className='detailsTitle'
                            style={{
                                position: 'absolute', 
                                color: 'white', 
                                top: 50, 
                                left: '50%', 
                                transform: 'translateX(-50%)'
                            }} 
                        >
                            {movies[id].title}
                        </div>
                        <div className='detailsGenres'
                            style={{
                                position: 'absolute', 
                                color: 'white', 
                                top: 110, 
                                left: '50%', 
                                transform: 'translateX(-50%)',
                            }} 
                        >
                            {movies[id].genres}
                        </div>
                        <div className='detailsDesc'
                            style={{
                                position: 'absolute', 
                                color: 'white', 
                                top:140, 
                                left: '50%', 
                                transform: 'translateX(-50%)'
                            }} 
                        >
                            {movies[id].description}
                        </div>
                </div>
                </Card>
            </section>  
                    {first && 
            <ButtonGroup variant="text">
                <IconButton onClick={homePage}>Home</IconButton>
                <IconButton onClick={nextPage}><ChevronRightIcon/></IconButton>
            </ButtonGroup> 
        }
        {middle && 
            <ButtonGroup variant="text">
                <IconButton onClick={prevPage}><ChevronLeftIcon/></IconButton>
                <IconButton onClick={homePage}>Home</IconButton>
                <IconButton onClick={nextPage}><ChevronRightIcon/></IconButton>
            </ButtonGroup> 
        }
        {last && 
            <ButtonGroup variant="text">
                <IconButton onClick={prevPage}><ChevronLeftIcon/></IconButton>
                <IconButton onClick={homePage}>Home</IconButton>
            </ButtonGroup>         
        }  
        </>    
    )
};

export default MovieDetails


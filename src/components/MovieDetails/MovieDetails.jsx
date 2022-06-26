import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
// mui imports
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// mui icons
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import IconButton from '@mui/material/IconButton';
import EjectIcon from '@mui/icons-material/Eject';

function MovieDetails(){
    const history = useHistory()
    const movies = useSelector(store => store.movies);
    // grab id from params
    let  {id}  = useParams();
    // i think this was a goofy way of mapping thru
    // the movies, but it worked so is it /really/ goofy? 
    for(let i = 0; i<movies.length; i++){
        if(movies[i].id === Number(id)){
            id = i
            break
        }
    };
    // pushes to home
    function homePage() {
        history.push(`/`);
    };
    // pushes to prev page
    function prevPage() {
        let prevId = id--
        history.push(`/details/${prevId}`);
    };
    // pushes to next page
    // also coded not so elegant but it does work. 
    // the issue stems from the [i] vs id. 
    function nextPage() {
        let nextId = id++
        console.log('nextId', id++)
        if (nextId = id){
            history.push(`/details/${nextId++}`);
        }
    };

    // declaring conditions for conditional rendering
    /* i wrote this conditional with the intention 
    of keeping the code scalable as i planned to have 
    POST route for adding movies, so made sure to not
    hard code the id of the first and last*/
    const first=id === 0; 
    const middle=id > 0 && id < movies.length-1;
    const last=id === movies.length-1; 

    return(
        <>
        {/* Conditional Rendering for nav buttons! */}
        {first && 
        <div className='buttons'>
            <IconButton onClick={homePage}><EjectIcon sx={{color: 'red'}} fontSize="large"/></IconButton>
            <IconButton onClick={nextPage}><FastForwardIcon style={{ color: "white" }} fontSize="large"/></IconButton>
        </div>
        }
        {middle && 
        <div className='buttons'>
                        
            <IconButton onClick={prevPage}><FastRewindIcon style={{ color: "white" }} fontSize="large"/></IconButton>
            <IconButton onClick={homePage}><EjectIcon sx={{color: 'red'}} fontSize="large"/></IconButton>
            <IconButton onClick={nextPage}><FastForwardIcon style={{ color: "white" }} fontSize="large"/></IconButton>
        </div>
        }
        {last && 
        <div className='buttons'>
        
            <IconButton onClick={prevPage}><FastRewindIcon style={{ color: "white" }} fontSize="large"/></IconButton>
            <IconButton onClick={homePage}><EjectIcon sx={{color: 'red'}} fontSize="large"/></IconButton>
        </div>
        }  
        {/* Left Card- Cover */}
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
        {/* Right Card- Back Cover */}
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
                            top: 60, 
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
                            top: 100, 
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
        </>    
    )
};

export default MovieDetails


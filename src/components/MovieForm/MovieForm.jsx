import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import * as React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function MovieForm() {




    return(
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
            <TextField 
            label="Title"

            />
            <TextField 
            label="Poster URL"

            />
            <Select
                label="Genre"
            >
                <MenuItem value="Action">Action</MenuItem>
                <MenuItem value="Animated">Animated</MenuItem>
                <MenuItem value="Biographical">Biographical</MenuItem>
                <MenuItem value="Comedy">Comedy</MenuItem>
                <MenuItem value="Cyber-Punk">Cyber-Punk</MenuItem>
                <MenuItem value="Drama">Drama</MenuItem>
                <MenuItem value="Epic">Epic</MenuItem>
                <MenuItem value="Fantasy">Fantasy</MenuItem>
                <MenuItem value="Foreign">Foreign</MenuItem>
                <MenuItem value="Horror">Horror</MenuItem>
                <MenuItem value="Thriller">Thriller</MenuItem>
                <MenuItem value="Romantic">Romantic</MenuItem>
                <MenuItem value="Science-Fiction">Science-Fiction</MenuItem>
            </Select>
            <br/>
            <TextField 
            label="Synopsis"
            
            />
            
            <br/>
            <Button
                id= "submitButton"
                type="submit"
                variant="contained"
                size="medium"
            > 
                Add Movie
            </Button>
        </Box>
    )
}

export default MovieForm;

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import * as React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';

function MovieForm() {
    const [movieGenre, setMovieGenre] = useState([]);

    let genres= [
	'Action',
	'Animated',
	'Biographical',
	'Comedy',
	'Thriller',
	'Drama',
	'Epic',
	'Fantasy',
	'Horror',
	'Romantic',
	'Science Fiction',
	'Cyber-Punk',
	'Foreign',
    ];

    const handleChange = (event) => {
        console.log('in handle change')
        const {
            target: { value },
          } = event;
          setMovieGenre(value)
          console.log("movieGenre", movieGenre)
    };

    const handleSubmit = (event) => {
        console.log('in submit ')
    };

    return(
        <>
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
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={movieGenre}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} />
                    ))}
                    </Box>
                )}
            >
            {genres.map((genre) => (
                <MenuItem
                    key={genre}
                    value={genre}
                    >
                    {genre}
                </MenuItem>
            ))}
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
                onClick={handleSubmit}
            > 
                Add Movie
            </Button>
        </Box>
        </>
    )
}

export default MovieForm;


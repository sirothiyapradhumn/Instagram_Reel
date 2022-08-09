import React from 'react'
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import { LinearProgress } from '@mui/material';

function Upload() {
  return (
    <div className='upload-btn'>
        <Button variant="outlined" color="secondary" component="label"  size='large' startIcon={<MovieIcon />}>
        Upload Video
        <input hidden accept="image/*" multiple type="file" />
        </Button>
        <LinearProgress variant="determinate" value={50} color="secondary" sx={{mt:"0.3rem", mb:"2rem"}}/>
    </div>
    
  )
}

export default Upload
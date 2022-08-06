import React from 'react'
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import logo from '../../assets/Instagram.jpeg';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function index() {
  return (
    <div className='signup-container'>
        <div className='signup-card'>
            <Image src={logo}/>
            <TextField id="outlined-basic" label="Email" size='small' margin='dense' fullWidth variant="outlined" type='email' />
            <TextField id="outlined-basic" label="Password" size='small' margin='dense' fullWidth variant="outlined" type='password' />
            <div style={{color:"blueviolet"}}> Forget Password</div>
            <Button style={{marginTop:"1rem"}} variant="outlined" component="label" fullWidth >Login</Button>
        </div>
        <div className='bottom-card'>Don't have an account ?<span style={{color:"blueviolet"}}> Sign up</span></div>
    </div>
  )
}

export default index
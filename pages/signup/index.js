import React from 'react'
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import logo from '../../assets/Instagram.jpeg';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Link from 'next/link';

function index() {
  return (
    <div className='signup-container'>
        <div className='signup-card'>
            <Image src={logo}/>
            <TextField id="outlined-basic" label="Email" size='small' margin='dense' fullWidth variant="outlined" type='email' />
            <TextField id="outlined-basic" label="Password" size='small' margin='dense' fullWidth variant="outlined" type='password' />
            <TextField id="outlined-basic" label="Full Name" size='small' margin='dense' fullWidth variant="outlined" />
            <Button variant="outlined" color="secondary" component="label" fullWidth size='small'>
              <IconButton color="secondary" >
                <CloudUploadIcon />
              </IconButton>
              Upload Profile Image
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <Button style={{marginTop:"1rem"}} variant="outlined" component="label" fullWidth >Sign Up</Button>
            <div className='tnc'>
              By signing up, you agree to our Terms, Condition and Cookies policy.
            </div>
        </div>
        <Link href='/login'>
          <div className='bottom-card'>Already have an account ? <span style={{color:"blueviolet"}}>Login</span></div>
        </Link>
        
    </div>
  )
}

export default index
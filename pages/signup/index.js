import React from 'react'
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import logo from '../../assets/Instagram.jpeg';

function index() {
  return (
    <div className='signup-container'>
        <div className='signup-card'>
            <Image src={logo}/>
            <TextField id="outlined-basic" label="Email" size='small' margin='dense' fullWidth variant="outlined" type='email' />
            <TextField id="outlined-basic" label="Password" size='small' margin='dense' fullWidth variant="outlined" type='password' />
            <TextField id="outlined-basic" label="Full Name" size='small' margin='dense' fullWidth variant="outlined" />
        </div>
    </div>
  )
}

export default index
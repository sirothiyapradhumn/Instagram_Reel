import React from 'react'
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import logo from '../../assets/Instagram.jpeg';
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';
import bg3 from '../../assets/bg3.jpg';
import bg4 from '../../assets/bg4.jpg';
import bg5 from '../../assets/bg5.jpg';

function index() {
  return (
    <div className='login-container'>
        <div className='insta-mob-bg'>
            <div className='carousel'>
                <Carousel autoPlay interval={2000} infiniteLoop showArrows={false} showThumbs={false} showIndicators={false} showStatus={false} >
                    <Image src={bg1}/>
                    <Image src={bg2}/>
                    <Image src={bg3}/>
                    <Image src={bg4}/>
                    <Image src={bg5}/>
                </Carousel>
            </div>
        </div>
        <div>
            <div className='login-card'>
                <Image src={logo}/>
                <TextField id="outlined-basic" label="Email" size='small' margin='dense' fullWidth variant="outlined" type='email' />
                <TextField id="outlined-basic" label="Password" size='small' margin='dense' fullWidth variant="outlined" type='password' />
                <div style={{color:"blueviolet"}}> Forget Password</div>
                <Button style={{marginTop:"1rem"}} variant="outlined" component="label" fullWidth >Login</Button>
            </div>
            <div className='login-bottom-card'>Don't have an account ?<span style={{color:"blueviolet"}}> Sign up</span></div>
        </div>

    </div>
  )
}

export default index
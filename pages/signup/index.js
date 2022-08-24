import React, { useContext, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import logo from '../../assets/Instagram.jpeg';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/auth';
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL  } from 'firebase/storage';

function index() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [fullname, setFullName] = React.useState('')
  const [file, setFile] = React.useState(null)

  const router = useRouter();

  const {signup, user} = useContext(AuthContext);

  // useEffect(()=>{
  //   if(user){
  //     router.push("/");
  //   }
  // }, [user]);

  let handleClick = async() =>{
    console.log(email);
    console.log(password);
    console.log(fullname);
    console.log(file);
    try{
        setLoading(true);
        setError("");
        const userInfo = await signup(email, password);
        console.log(userInfo.user.uid);
        
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, `${userInfo.user.uid}/Profile`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        

        uploadTask.on('state_changed',
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          }, 
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            console.log(error);
          }, 
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
            });
          }
        );
        console.log("user signed up");
      }
      catch(err){
        console.log("error", err);
        setError(err.code);
        // use settimeout to remove error after 2 sec
        setTimeout(() => {
            setError('');
        }, 2000);
      }
      setLoading(false);

  }

  return (
    <div className='signup-container'>
        <div className='signup-card'>
            <Image src={logo}/>
            <TextField id="outlined-basic" label="Email" size='small' margin='dense' fullWidth variant="outlined" type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <TextField id="outlined-basic" label="Password" size='small' margin='dense' fullWidth variant="outlined" type='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
            <TextField id="outlined-basic" label="Full Name" size='small' margin='dense' fullWidth variant="outlined" value={fullname} onChange={(e)=> setFullName(e.target.value)}/>
            <Button variant="outlined" color="secondary" component="label" fullWidth size='small'>
              {/* <IconButton color="secondary" >
                <CloudUploadIcon />
              </IconButton> */}
              Upload Profile Image
              <input hidden accept="image/*" type="file" onChange={(e)=>setFile(e.target.files[0])}/>
            </Button>
            <Button style={{marginTop:"1rem"}} variant="outlined" component="label" fullWidth onClick={handleClick}>Sign Up</Button>
            {
              error!="" && <div style={{color:"red"}}>{error}</div>
            }
            <div className='tnc'>
              By signing up, you agree to our Terms, Condition and Cookies policy.
            </div>
        </div>
        <Link href='/login'>
          <div className='bottom-card'>Already have an account ? <span style={{color:"blueviolet", cursor: 'pointer'}}>Login</span></div>
        </Link>
        
    </div>
  )
}

export default index
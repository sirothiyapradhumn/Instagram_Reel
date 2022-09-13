import React from 'react'
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import { LinearProgress } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { arrayUnion, doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage, db } from '../firebase';


function Upload({userData}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);
  const fileLimit = 50;

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if(file == null){
      setError('file not selected');
      setTimeout(() => {setError('')}, 2000);
      return;
    }
    if((file.size/(1024*1024)) > fileLimit){
      setError(`file is too large, try uploading a file less than ${fileLimit}MB`);
      setTimeout(() => {setError('')}, 4000);
      return;
    }

    let uid  = uuidv4();
    setLoading(true);
    //userid/post/uid
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, `${userData.uid}/post/${uid}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        

        uploadTask.on('state_changed',
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(prog)
            console.log('Upload is ' + prog + '% done');
          }, 
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            console.log(error);
            setError(error);
            setTimeout(()=> {setError('')}, 2000);
            return;
          }, 
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              console.log('File available at', downloadURL);

              let postObj = {
                likes: [],
                postId: uid,
                postURL: downloadURL,
                profileName: userData.fullname,
                profilePhotoURL: userData.downloadURL,
                userId: userData.uid,
                timestamp: serverTimestamp(),
              }

              console.log(postObj);
              await setDoc(doc(db, "posts", uid), postObj);
              console.log("Posts added to post collection");

              // updatein users, post ka array
              await updateDoc(doc(db, "users", userData.uid), {
                posts: arrayUnion(uid),
              })
              console.log("Posts array added to user doc");
            });
          }
        );
        console.log("user signed up");
  }

  return (
    <div className='upload-btn'>
        {
          error != '' ? <Alert severity="error">T{error}</Alert> 
          :
          <Button variant="outlined" color="secondary" component="label"  size='large' startIcon={<MovieIcon />}>
          Upload Video
          <input hidden accept="video/*" multiple type="file" onChange={handleChange} />
          </Button>

        }
        
        
        {
          loading 
            && 
          <LinearProgress variant="determinate" value={progress} color="secondary" sx={{mt:"0.3rem", mb:"2rem"}}/>
        }
        
    </div>
    
  )
}

export default Upload
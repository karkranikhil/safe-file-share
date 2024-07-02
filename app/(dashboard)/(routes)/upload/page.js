"use client"
import React from 'react'
import UploadForm from './_components/UploadForm'
import { app } from '@/firebaseConfig'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
function Upload() {
  const storage = getStorage(app)
  const uploadFile = (file) =>{
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, `file-upload/${file?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on('state_changed', 
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, 
        (error) => {
            // Handle unsuccessful uploads
            console.error('Upload failed:', error);
        }, 
        () => {
            // Handle successful uploads on complete
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('Download URL is ' + downloadURL);
            });
        }
    );

  }
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] md:text-[36px] text-center m-5'>Start <strong className='text-primary'>Uploading</strong> Files and <strong className='text-primary'>Share</strong> it</h2>
      <UploadForm uploadHandlder={uploadFile}/>
    </div>
  )
}

export default Upload
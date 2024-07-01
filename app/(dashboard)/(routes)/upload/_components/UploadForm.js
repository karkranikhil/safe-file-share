"use client"
import React, { useState } from "react";
import AlertMsg from "./AlertMsg";
import FilePreview from "./FilePreview";

function UploadForm() {
    const [file, setFile] = useState('')
    const [errorMsg, setErrorMessage] = useState('')
    const onFileSelect = (file)=>{
        if(file?.size>2 * 1024 * 1024){
            console.log("Size is Greater than 2MB")
            setErrorMessage('Max File Upload Size is 2MB')
            return
        } else {
            setFile(file)
            setErrorMessage(null)
        }
    }
  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-red-300 border-dashed rounded-lg cursor-pointer bg-red-50 "
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-10 h-10 mb-4 text-red-500 dark:text-red-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-lg md:text-2xl text-gray-400">
              <span className="font-semibold text-primary">
                Click to upload
              </span>{" "}
              or <span className="font-semibold text-primary">drag</span> and{" "}
              <span className="font-semibold text-primary">drop</span>
            </p>
            <p className="text-md text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 2MB)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={(event)=>onFileSelect(event.target.files[0])} />
        </label>
      </div>
      {errorMsg ? <AlertMsg msg={errorMsg}/>:null}
      {file ? <FilePreview file={file} removeFile={()=>setFile(null)}/>:null}
      <button
        disabled={!file}
        className="p-2 bg-primary text-white w-[30%] rounded-full mt-5 disabled:bg-gray-300">
        Upload
      </button>
    </div>
  );
}

export default UploadForm;
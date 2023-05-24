'use client'
import React, { useCallback, useContext, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ChatContext } from "./ChatContext";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const { setMessages } = useContext(ChatContext); 

  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: 'text/csv' 
  });

  const onSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('file', file);
  
    const res = await fetch('https://flask-heroku-xlgpt.herokuapp.com/', {
      method: 'POST',
      body: formData,
    });
    
    const data = await res.json();
  
    console.log(data); 
  
    setResponse(data.response);
    setFile(null);
  
    
    setMessages(prevMessages => [...prevMessages, { text: data.response, isUser: false }]);
  }
  
  return (
    <form onSubmit={onSubmit} className="flex flex-col bg-color4 text-color1 p-6 rounded-lg shadow-lg">
        <div {...getRootProps()} className="dropzone flex items-center justify-center h-32 border-2 border-dashed border-color2 rounded cursor-pointer">
            <input {...getInputProps()} />
            {isDragActive ? <p>Drop the files here...</p> : <p>Drag 'n' drop, or click to select file</p>}
        </div>
        {file && <p className="mt-4 text-color2">Selected file: {file.name}</p>}
        <button 
            type="submit" 
            className="mt-4 bg-color2 text-color4 px-4 py-2 rounded shadow-md hover:bg-color3 active:bg-color3 transition-colors duration-200"
        >
            Upload
        </button>
    </form>
  )
}

export default FileUpload;
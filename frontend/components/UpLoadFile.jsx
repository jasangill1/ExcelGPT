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
  
    const res = await fetch('https://excelsior-7wyb.vercel.app/', {
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
    <form onSubmit={onSubmit} className="flex flex-col bg-black text-green-400 p-6 rounded-lg shadow-lg">
        <div {...getRootProps()} className="dropzone flex items-center justify-center h-32 border-2 border-dashed border-green-400 rounded cursor-pointer">
            <input {...getInputProps()} />
            {isDragActive ? <p>Drop the files here...</p> : <p>Drag 'n' drop, or click to select file</p>}
        </div>
        {file && <p className="mt-4 text-green-400">Selected file: {file.name}</p>}
        <button 
            type="submit" 
            className="mt-4 bg-green-400 text-black px-4 py-2 rounded shadow-md hover:bg-green-500 active:bg-green-600 transition-colors duration-200"
        >
            Upload
        </button>
        
    </form>
  )
}

export default FileUpload;

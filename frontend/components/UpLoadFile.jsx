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
    accept: 'text/csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
});

  const onSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('file', file);
  
    const res = await fetch('http://127.0.0.1:5000/', {
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
    <form onSubmit={onSubmit} className="flex flex-col bg-quinary text-primary p-6 rounded-lg shadow-lg">
        <div {...getRootProps()} className="dropzone flex items-center justify-center h-32 border-2 border-dashed border-secondary rounded cursor-pointer">
            <input {...getInputProps()} />
            {isDragActive ? <p>Drop the files here...</p> : <p className='text-center'>Drag 'n' drop, or click to select file</p>}
        </div>
        {file && <p className="mt-4 text-secondary">Selected file: {file.name}</p>}
        <button 
            type="submit" 
            className="mt-4 bg-secondary text-quinary px-4 py-2 rounded shadow-md hover:bg-tertiary active:bg-tertiary transition-colors duration-200"
        >
            Upload
        </button>
    </form>
  )
}

export default FileUpload;

'use client'

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: 'text/csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    await fetch('http://your-backend-url/api/upload', {
        method: 'POST',
        body: formData,
    });

    setFile(null);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col bg-black text-green-400 p-6 rounded-lg shadow-lg">
        <div {...getRootProps()} className="dropzone flex items-center justify-center h-32 border-2 border-dashed border-green-400 rounded cursor-pointer">
            <input {...getInputProps()} />
            {isDragActive ? <p>Drop the files here...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
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

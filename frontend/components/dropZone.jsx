'use client'

import React from 'react';
import { useDropzone } from 'react-dropzone';

function MyDropzone({ onDrop, accept }) {
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept
  });

  return (
    <div {...getRootProps()} style={{ height: '200px', width: '200px', border: '1px dashed gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default MyDropzone;

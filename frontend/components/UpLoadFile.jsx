'use client'
import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  }

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
    <form onSubmit={onSubmit}>
      <input type="file" onChange={onFileChange} />
      <button type="submit">Upload</button>
    </form>
  )
}

export default FileUpload;

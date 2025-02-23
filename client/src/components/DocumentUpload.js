// client/src/components/DocumentUpload.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const DocumentUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('document', file);

    setUploading(true);
    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('File uploaded successfully!');
    } catch (error) {
      setMessage('Error uploading file.');
    } finally {
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <h2>Upload Document</h2>
      <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', cursor: 'pointer' }}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      {file && <p>Selected file: {file.name}</p>}
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DocumentUpload;

import React, { useState } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) return;

    const blobServiceClient = new BlobServiceClient(process.env.REACT_APP_AZURE_STORAGE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient(process.env.REACT_APP_AZURE_STORAGE_CONTAINER);
    const blockBlobClient = containerClient.getBlockBlobClient(file.name);

    await blockBlobClient.uploadData(file);
    alert('File uploaded successfully!');
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default FileUpload;
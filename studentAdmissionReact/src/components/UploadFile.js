import React, { useState } from 'react';

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [lastname, setLastName] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(event)
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError('Please select a valid PDF file.');
    }
  };

  const handleFileChange1 = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  }

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('last',lastname);
      
      fetch('http://localhost:8080/documents/upload', {
        method: 'POST',
        body: formData,
      })
      .then(response => {
        if (response.ok) {
          console.log('PDF uploaded successfully');
          // Handle success if needed
        } else {
          console.error('Failed to upload PDF');
          // Handle error if needed
        }
      })
      .catch(error => console.error('Error uploading PDF:', error));
    } else {
      setError('Please select a PDF file to upload.');
    }
  };

  return (
    <div>
      <input 
        type="file" 
        accept=".pdf" 
        onChange={handleFileChange} 
      />
<input type="text" 
        onChange={handleFileChange1} 
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleUpload}>Upload PDF</button>
    </div>
  );
};

export default UploadFile;

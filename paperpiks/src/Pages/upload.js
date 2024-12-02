import React, { useState } from 'react';

const UploadPage = () => {
    const [file, setFile] = useState(null);

    const handleFileUpload = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = () => {
        // Here is where we send the file to the backend
    };
    return (
        <div>
            <h2>Upload Your Document</h2>
            <input type="file" onChange={handleFileUpload} />
            <button onClick={handleSubmit}>Upload</button>
        </div>
    );
};

export default UploadPage;
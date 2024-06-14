import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

const BulkUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet);

      // Assuming you have a way to map image URLs to products
      const imageUrls = [
        "https://your-bucket-name.s3.amazonaws.com/Catalogue%20pics/AGC_Page_001.jpeg",
        "https://your-bucket-name.s3.amazonaws.com/Catalogue%20pics/AGC_Page_002.jpeg",
        // Add more URLs as needed
      ];

      // Map image URLs to the products
      for (let i = 0; i < json.length; i++) {
        json[i].images = [imageUrls[i % imageUrls.length]]; // Adjust the logic as necessary
      }

      await axios.post('/products/bulk', json);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default BulkUpload;

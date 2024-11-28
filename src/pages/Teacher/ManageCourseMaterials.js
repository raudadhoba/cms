// src/pages/Teacher/ManageCourseMaterials.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageCourseMaterials = () => {
  const [materials, setMaterials] = useState([]);
  const [materialName, setMaterialName] = useState('');
  const [materialFile, setMaterialFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (materialName && materialFile) {
      const newMaterial = {
        name: materialName,
        file: materialFile.name,
      };
      setMaterials([...materials, newMaterial]);
      setMaterialName('');
      setMaterialFile(null);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Manage Course Materials</h3>
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Upload Material</h5>
          <form onSubmit={handleUpload}>
            <div className="mb-3">
              <label htmlFor="materialName" className="form-label">Material Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="materialName" 
                placeholder="Enter material name" 
                value={materialName}
                onChange={(e) => setMaterialName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="materialFile" className="form-label">Upload File</label>
              <input 
                type="file" 
                className="form-control" 
                id="materialFile" 
                onChange={(e) => setMaterialFile(e.target.files[0])}
              />
            </div>

            <button type="submit" className="btn btn-primary">Upload</button>
          </form>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Uploaded Materials</h5>
          {materials.length === 0 ? (
            <p className="card-text">No materials uploaded yet.</p>
          ) : (
            <ul className="list-group">
              {materials.map((material, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {material.name}
                  <span className="badge bg-primary">{material.file}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageCourseMaterials;

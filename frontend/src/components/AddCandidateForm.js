import React, { useState, useEffect } from 'react';
import './AddCandidateForm.css';

const AddCandidateForm = ({ onAdd, onUpdate, candidateToEdit, setShowAddForm }) => {
  const isEditMode = !!candidateToEdit;

  const [formData, setFormData] = useState({
    name: '',
    stage: 'Applying Period',
    applicationDate: '',
    score: '',
    referred: false,
    assessmentAdded: false
  });

  useEffect(() => {
    if (isEditMode) {
      setFormData(candidateToEdit);
    }
  }, [candidateToEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      onUpdate(formData);
    } else {
      onAdd(formData);
    }
  };

  return (
    <div className="add-form-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>{isEditMode ? 'Edit Candidate' : 'Add New Candidate'}</h3>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="applicationDate"
          value={formData.applicationDate}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="score"
          step="0.1"
          placeholder="Score"
          value={formData.score}
          onChange={handleChange}
          required
        />

        <select name="stage" value={formData.stage} onChange={handleChange}>
          <option>Applying Period</option>
          <option>Screening</option>
          <option>Interview</option>
          <option>Test</option>
        </select>

        <label>
          <input
            type="checkbox"
            name="referred"
            checked={formData.referred}
            onChange={handleChange}
          /> Referred
        </label>

        <label>
          <input
            type="checkbox"
            name="assessmentAdded"
            checked={formData.assessmentAdded}
            onChange={handleChange}
          /> Assessment Added
        </label>

        <div className="form-actions">
          <button type="submit">{isEditMode ? 'Update' : 'Add'}</button>
          <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddCandidateForm;

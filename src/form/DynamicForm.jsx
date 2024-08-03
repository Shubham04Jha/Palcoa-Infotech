/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './DynamicForm.css';

function DynamicForm({ fields, onSubmit }) {
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    fields.forEach(field => {
      if (field.type !== 'file') {
        const savedValue = localStorage.getItem(field.name) || '';
        initialData[field.name] = savedValue;
      }
    });
    return initialData;
  });

  useEffect(() => {
    Object.keys(formData).forEach(key => {
      localStorage.setItem(key, formData[key]);
    });
  }, [formData]);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    if (type === 'file') {
      setFormData(prevData => ({
        ...prevData,
        [name]: files[0] 
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (navigator.onLine) {
      onSubmit(formData);
    } else {
      alert('You are offline. The sign-in process will start when you are back online.');
      window.addEventListener('online', () => {
        onSubmit(formData);
      });
    }
  };

  return (
    <form className="dynamic-form" onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} className="form-group">
          <label className="form-label" htmlFor={field.name}>
            {field.label}
          </label>
          {field.type === 'file' ? (
            <input
              className="form-input"
              id={field.name}
              name={field.name}
              type={field.type}
              onChange={handleChange}
            />
          ) : (
            <input
              className="form-input"
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name] || ''}
              onChange={handleChange}
              required={field.required}
            />
          )}
          {field.helperText && <p className="form-helper">{field.helperText}</p>}
        </div>
      ))}
      <button className="form-submit" type="submit">
        {fields.find(field => field.type === 'submit')?.label || 'Submit'}
      </button>
    </form>
  );
}

export default DynamicForm;

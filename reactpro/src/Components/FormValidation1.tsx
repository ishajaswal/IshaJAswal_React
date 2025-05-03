import React, { useState } from 'react';
import './assets/NewCss/Task.css';

function FormValidation() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const handleChange = ({ target: { name, value } }) => setFormData(prev => ({ ...prev, [name]: value }));

  const validate = () => {
    const newErrors = { name: '', email: '', password: '' };
    let isValid = true;
    if (!formData.name) { newErrors.name = 'Name is required'; isValid = false; }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = 'Invalid email'; isValid = false; }
    if (!formData.password || formData.password.length < 6) { newErrors.password = 'Password must be at least 6 characters'; isValid = false; }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {['name', 'email', 'password'].map(field => (
        <div key={field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
          <input 
            type={field === 'password' ? 'password' : 'text'}
            name={field}
            value={formData[field]}
            onChange={handleChange}
          />
          {errors[field] && <span style={{ color: 'red' }}>{errors[field]}</span>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormValidation;

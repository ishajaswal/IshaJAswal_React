import React, { useState } from 'react';
import "../assets/NewCss/MultiForm.css";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = 'Name is required.';
      if (!formData.email) newErrors.email = 'Email is required.';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email.';
    }
    if (step === 2 && (!formData.password || formData.password.length < 6)) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    alert('Form submitted!');
    console.log(formData);
    setFormData({ name: '', email: '', password: '' });
    setStep(1);
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <div className="form-container">
      <h2>Step {step} of 3</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <label>Name:</label>
            <input name="name" value={formData.name} onChange={handleChange} /><br />
            {errors.name && <span className="error-text">{errors.name}</span>}<br />
            <label>Email:</label>
            <input name="email" type="email" value={formData.email} onChange={handleChange} /><br />
            {errors.email && <span className="error-text">{errors.email}</span>}<br />
          </>
        )}
        {step === 2 && (
          <>
            <label>Password:</label>
            <input name="password" type="password" value={formData.password} onChange={handleChange} /><br />
            {errors.password && <span className="error-text">{errors.password}</span>}<br />
          </>
        )}
        {step === 3 && (
          <>
            <h4>Review</h4>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Password:</strong> {formData.password.replace(/./g, '*')}</p>
          </>
        )}
        <div className="button-group">
          {step > 1 && <button type="button" onClick={handleBack}>Back</button>}
          {step < 3 && <button type="button" onClick={handleNext}>Next</button>}
          {step === 3 && (
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default MultiStepForm;

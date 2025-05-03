import React from 'react';


import './assets/NewCss/Task.css';
import '../assets/NewCss/style.css'; 

const InputField = () => {
  return  <form className='input'>

    
    <input type='input' placeholder='Enter a Task' className="input__box" />
    <button className='input__submit'  type="submit">Go</button>
  </form>
};
export default InputField
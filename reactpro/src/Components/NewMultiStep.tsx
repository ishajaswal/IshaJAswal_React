import { useState } from "react";
function NewMultistep(){
  const [step,setStep]=useState(1);
  const [formData,setformData]=useState({name:'',email:'',password:''});
  const [errors,setErrors]=useState({});
  const [isSubmitting,setSubmitting]=useState(false);


const validateStep=()=>{
  const newErrors={}
  if(step===1){
  if(!formData.name) newErrors.name='Name Is Required';
  if(!formData.email) newErrors.email='Email is Required';
  else if(!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email='Invalid Email';
}
if(step===2 && (!formData.password || formData.password.length<6)){
  formData.password='Email must be of at least 6 characters';
}
setErrors(newErrors);
return Object.keys(newErrors).length==0
};
const handleNext = () => {
  if (validateStep()) setStep(step + 1);
};

const handleBack=()=>{
  setStep(step-1);

  setErrors({});
};
const handleChange = (e) => {
  setformData({ ...formData, [e.target.name]: e.target.value });
  setErrors({ ...errors, [e.target.name]: '' });
};
const handleSubmit =(e)=>{
  e.preventDefault();
  setSubmitting(true);
  console.log(formData);
  setformData({name:'',email:'',password:''});
  setErrors({});
  setStep(1);
};
return(
  <div className="form-container">
  <h2>step {step} of 3</h2>
  <form onSubmit={handleSubmit}>
  <step===1 && ({

  })
  </div>
)

}




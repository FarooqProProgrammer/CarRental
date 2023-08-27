import React from 'react';
import { useStep } from '../context/StepContext';
import { useForm } from '../context/FormProvider';


function Step1() {
  const { nextStep } = useStep();
  const { setName, setEmail } = useForm();

  const handleNext = () => {
    // Add validation logic if needed
    nextStep();
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Step 1: Name & Email</h2>
      <div className="mb-4">
        <label className="block font-medium mb-1">Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter your Name' className="w-full p-2 border rounded outline-none" />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Email</label>
        <input type="email"  onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' className="w-full p-2 border rounded outline-none" />
      </div>
      <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
}

export default Step1;

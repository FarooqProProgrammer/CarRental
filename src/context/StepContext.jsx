import React, { createContext, useContext, useState } from 'react';

const StepContext = createContext();

export function useStep() {
  return useContext(StepContext);
}

export function StepProvider({ children }) {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <StepContext.Provider value={{ step, nextStep, prevStep }}>
      {children}
    </StepContext.Provider>
  );
}

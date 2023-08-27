import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export function useForm() {
  return useContext(FormContext);
}

export function FormProvider({ children }) {
  const [userName, setName] = useState();
  const [Email,setEmail] = useState();

 
  return (
    <FormContext.Provider value={{ userName, setName ,Email, setEmail}}>
      {children}
    </FormContext.Provider>
  );
}

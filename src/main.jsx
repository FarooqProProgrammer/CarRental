import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StepProvider } from './context/StepContext.jsx'
import { AuthProvider } from './context/AuthUser.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { FormProvider } from './context/FormProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <FormProvider>
      <StepProvider>
        <App />
        <ToastContainer position='bottom-right' />
      </StepProvider>
    </FormProvider>
  </AuthProvider>
  ,
)

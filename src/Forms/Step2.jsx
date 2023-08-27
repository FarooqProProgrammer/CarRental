import React, { useEffect, useRef, useState } from 'react';
import { useStep } from '../context/StepContext';
import useGeolocation from '../Hooks/useGeolocation';
import { useAuth } from '../context/AuthUser';
import { useForm } from '../context/FormProvider';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config';
import { toast } from 'react-toastify';


function Step2() {
  const { prevStep } = useStep();
  const {location, loading, error } = useGeolocation();

  const [PhoneNumber,setPhoneNumber] = useState();
  const [userLocation,setuserLocation] = useState();

  const locationRef = useRef();
  

  const {userName,Email} = useForm();

  const handlePrev = () => {
    prevStep();
  };

  const {userAuth} = useAuth();

  useEffect(()=>{
    console.log(locationRef.current.value)
  },[location])



  const HandleSubmit = async () => {

    console.log(userName)
    console.log(Email)
    console.log(userLocation)
    console.log(PhoneNumber)
    
    if(!userName || !Email ||  !PhoneNumber  ) {
      return toast("Please Fill All Fields")
    }
    if(!userAuth) {
      return toast("Please Login First")
    }
    if(location) {
      const docRef = await addDoc(collection(db, "BuyersList"), {
        userID:userAuth.uid,
        userName:userAuth.displayName,
        Name:userName,
        Location:'Karachi',
        phone:PhoneNumber
      });
      toast("Car is delivered in your House")
    }
 
  }


  // useEffect(()=>{
  //   console.log(userAuth)
  // },[])

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Step 2: Location & Phone Number</h2>
      <div className="mb-4">
        <label className="block font-medium mb-1">Location</label>
        <input type="text" ref={locationRef} value={location?location:'....'} placeholder='Enter your Location' className="w-full p-2 border rounded outline-none" />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Phone Number</label>
        <input type="text" onChange={(e)=>setPhoneNumber(e.target.value)} placeholder='Enter your Phone' className="w-full p-2 border rounded outline-none" />
      </div>
      <button onClick={handlePrev} className="mr-2 text-gray-500">
        Previous
      </button>
      <button onClick={HandleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>
  );
}

export default Step2;

import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { db } from '../config';

export default function Contact() {


    const [Name,setName] = useState();
    const [Email,setEmail] = useState();
    const [message,setMessage] = useState();
    

    const HandleSubmit = async () => {
        if(!Name || !Email || !message) {
            return toast("Please fill all Fields")
        }

        const docRef = await addDoc(collection(db, "Contact"), {
            name: Name,
            Email,
            message
          });
          toast("Message Sent Successfully")
    }


  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-gray-900">
      Our Car Rental App

      </h1>
      <p className="leading-relaxed mt-4">
      Welcome to our premier car rental platform, where convenience meets adventure. We're dedicated to providing you with top-notch car rental services that suit your travel needs. Whether you're planning a business trip, a family vacation, or a spontaneous road trip, our app offers a diverse range of vehicles to choose from.
      </p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
        Contact
      </h2>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          onChange={(e)=>setName(e.target.value)}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          type="email"
          id="email"
          name="email"
          onChange={(e)=>setMessage(e.target.value)}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      
      <button onClick={HandleSubmit} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Send
      </button>

    </div>
  </div>
</section>

  )
}

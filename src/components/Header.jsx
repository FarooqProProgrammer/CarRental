import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { FaCarSide } from "react-icons/fa"
import { auth } from '../config';
import { useAuth } from '../context/AuthUser';
import {GoSignOut} from "react-icons/go"
import { toast } from 'react-toastify';

export default function Header() {

    const provider = new GoogleAuthProvider();
    const {userAuth,setUser} = useAuth();
    const [userInfo,setAuthUser] = useState();


    const HandleLogout = () => {
        setAuthUser()
        setUser('')
        toast('Successfully Logout! ')
        console.log(userAuth)
    }

    const HandleGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          setAuthUser(user)
          setUser(user)
          
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      
    }


    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font cursor-pointer font-medium items-center text-gray-900 mb-4 md:mb-0">

                    <FaCarSide className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
                    <span className="ml-3 text-xl">Carsly</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
                    <a  className="mr-5 hover:text-gray-900 cursor-pointer">Cars</a>
                    <a className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
                    <a className="mr-5 hover:text-gray-900 cursor-pointer">Contact</a>
                </nav>
                {
                    userInfo? <div  className='cursor-pointer flex justify-center items-center gap-5'>
                            <div className='w-[40px] h-[40px] border'>
                                <img src={userInfo.photoURL} className='w-full h-full'/>
                            </div>
                            <p>{userInfo.displayName}</p>
                            <GoSignOut onClick={HandleLogout}/>
                    </div>: <button onClick={HandleGoogle} className="inline-flex text-white items-center bg-sky-500 border-0 py-1 px-3 focus:outline-none hover:bg-sky-600 rounded text-base mt-4 md:mt-0">
                    Login
                </button>
                }
               
            </div>
        </header>

    )
}

import React from "react";
import { logo } from "../assets";
import { useState, useEffect } from "react";

import {auth,provider} from "../googlesign/config";
import {signInWithPopup} from "firebase/auth";
import App from "../App";
const Hero = () => {

  const [value,setValue] = useState('')
      const handleClick =()=>{
          signInWithPopup(auth,provider).then((data)=>{
              setValue(data.user.email)
              localStorage.setItem("email",data.user.email)
          })
      }
  
      useEffect(()=>{
          setValue(localStorage.getItem('email'))
      })



      const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }







  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
      
      {/* <button
        type="button"
        onClick={() => window.open("https://github.com/vatsalupadhyay")}
        className="black_btn"
      >
        Google
      </button>

       */}
       <div>
       
        <button onClick={handleClick} className="black_btn">Google Login</button></div>
       
      </nav>

      <h1 className="head_text">
        Summarize Articles with<br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>

      </h1>
      <h2 className="desc"> Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries</h2>
        
    </header>
  );
};

export default Hero;

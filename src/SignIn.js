import React from 'react' 
import './Signin.css'
import { auth, githubProvider, googleProvider } from './base' 

const SignIn = () => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
        }
    

  return (
    <div className="outterDiv">
      <div className="header">
        <h1>Notes to Herd.</h1>
      </div>
      <div className="secondaryheading">
        <div className="theheading">
        <h3> This tiger is literally me! lol. </h3>
        <h4> Write down and enjoy the endless amount of notes! </h4>
        </div>
        <div className="navbar">
          <button className="SignIn" onClick={()=> authenticate(githubProvider)} >
            <i className="fa fa-github" aria-hidden="true"> </i> Sign In With Github
          </button>
          <br />  
          <button className = "SignIn bottom" onClick={()=> authenticate(googleProvider)}>
            <i className="fa fa-google" aria-hidden="true"></i> Sign in with Google
          </button>
          </div>
        </div>
    </div>
    
    )
}

export default SignIn
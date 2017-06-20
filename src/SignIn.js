import React from 'react' 
import './Signin.css'
import { auth, githubProvider } from './base' 

const SignIn = ({ authHandler }) => {
    const authenticate = () => {
        auth.signInWithPopup(githubProvider).then((data) => {
            authHandler(data.user)
        })
    }

  return (
    <button className="SignIn" onClick={authenticate} >
      Sign In
    </button>  
    )
}

export default SignIn
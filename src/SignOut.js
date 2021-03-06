import React from 'react'

import './SignOut.css'

const SignOut = ({ signOut }) => {
    return (
        <div className="SignOut">
            <button className="SignOut" onClick={signOut}>
                <i className="fa fa-sign-out"></i>
            </button>
        </div>
    )
}

export default SignOut
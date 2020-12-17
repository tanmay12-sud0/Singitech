import React, { useState } from 'react'
import {auth} from '../firebase'
import {  toast } from 'react-toastify';

function ForgotPassword() {
   


        const [email, setEmail] = useState("")
        const handleSubmit = async(e) => {
           e.preventDefault()
           const config = {
            url: "http://localhost:3000/login" ,
            handleCodeInApp: true
        }
           await auth.sendPasswordResetEmail(email, config).then(() => {
                setEmail("")
                toast.success("Check your email for password reset link")
           }).catch((error) => {
               toast.error(error.message)
           })
        }


        const ForgotForm = () => <form onSubmit={handleSubmit}>
            <input type="" className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
            placeholder="Enter your email" />
            <br />
            <button
             disabled={!email}
             type="submit" className="btn btn-raised">Submit</button>
        </form>
    
      
    return (
        <div>
            <div className="container  p-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 p-5">
                        <h4>Forgot password</h4>
                        
                        {
                            ForgotForm()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword

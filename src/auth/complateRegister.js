import React, { useEffect, useState } from 'react'
import {auth} from '../firebase'
import { toast } from 'react-toastify';



import { useHistory } from 'react-router-dom';
function RegisterComplate() {
   
       

        const history = useHistory()
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")

        

        useEffect(() => {
           setEmail(window.localStorage.getItem("emailFor Registertion"))
        }, [])

        
        const handleSubmit = async(e) => {
           e.preventDefault();
           
           if( !email || !password  ) {
            return toast.error("Email and Password is required")
               
           }
           if(password.length < 6){
            return toast.error("Password must be at least 6 characters long")
               
           }
           
           try{
                const result = await auth.signInWithEmailLink(email, window.location.href)
                


                if(result.user.emailVerified){
                    // remove from localstroage
                    toast.success("Register successfully")
                    window.localStorage.removeItem("emailFor Registertion")
                }

                let user = auth.currentUser
                
                await user.updatePassword(password)
                const idTokenResult = await user.getIdTokenResult()

                // redux store
                
               


                // Redirect

                history.push("/")



           }catch(error){
                toast.error(error.message)
        }
    }


        const ComplateregisterForm = () => <form onSubmit={handleSubmit}>
            <input type="email" className="form-control" value={email} disabled />
            <br />
            <input type="password" className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoFocus />
            <br />
            <button type="submit" className="btn btn-raised">Submit</button>
        </form>
    
      
    return (
        <div>
            <div className="container  p-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h4>Enter your password</h4>
                        
                        {
                            ComplateregisterForm()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterComplate
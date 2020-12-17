import React, { useState } from 'react'
import {auth, googleAuthProvider} from '../firebase'
import { ToastContainer, toast } from 'react-toastify';
import { Spin, Space } from 'antd';
import {Link, useHistory} from 'react-router-dom'

import { Button } from 'antd';
import { GoogleOutlined, MailOutlined } from '@ant-design/icons'

function Login() {
   
        const history = useHistory();
       
        const [email, setEmail] = useState("")
        const [loading, setloading] = useState(false)
        const [password, setpassword] = useState("")

        

       

        const handleSubmit = async(e) => {
           e.preventDefault()
           setloading(true)
          try{
            const result = await auth.signInWithEmailAndPassword(email, password)
            
            const {user} = result
            const idTokenResult = await user.getIdTokenResult()
           
     
           history.push("/")
          }catch(error){
              
                toast.error(error.message)
                setloading(false)
          }
        }

        const handleGoogle = async() => {
            auth.signInWithPopup(googleAuthProvider).then(async(result) => {
                const {user} = result
                const idTokenResult = await user.getIdTokenResult()
                
                

                
               history.push("/")
            }).catch((error) => {
                toast.error(error.message)
            })
        }


        const login = () => <form onSubmit={handleSubmit}>
            <input type="email" className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
            placeholder="your email" />
            <br />
            <input type="password" className="form-control"
            value={password}
            onChange={e => setpassword(e.target.value)}
            autoFocus
            placeholder="your password" />
            <br />
            <Button type="primary" className="mb-3" block onClick={handleSubmit} shape="round" icon={<MailOutlined />} size= "large"
            disabled={!email || !password}
            >
          Login with Email/Password
        </Button>
            <br />
            <Button type="danger" className="mb-3" block onClick={handleGoogle} shape="round" icon={<GoogleOutlined />} size= "large"
            
            >
          Login with Google
        </Button>
        <Link to="/forget/password" className="float-right text-danger">
            Forgot password
        </Link>
        </form>
    
      
    return (
        <div>
            <div className="container  p-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        {
                            loading ? 
                                <Space size="middle">
                                <Spin size="large" /></Space>
                             : <h4>Login</h4>
                        }
                        <ToastContainer />
                        {
                            login()
                        }
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Login
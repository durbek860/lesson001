import React, { useState, useTransition } from 'react'
import axios from 'axios'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { GradientBackground } from 'gradient-background'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [loading, startLoading] = useTransition()

    const navigate = useNavigate()


    let API = "https://fakestoreapi.com"

    const signIn = () => {
        startLoading(async () => {
            try {

                if (!username || !password) {
                    return toast.warning("login va parolni kiriting")
                }

                let data = {
                    username,
                    password
                }

                let response = await axios.post(API + "/auth/login", data)
                console.log(response);
                if (response?.data?.token) {
                    localStorage.setItem("token", response.data.token)
                    toast.success("loged in successfully!")
                    setTimeout(() => navigate('/'), 1000);
                }

            }
            catch (err) {
                console.log(err);
                toast.error(err?.message || "login or password incorrect!")
            }
        });
    }

    return (
        <div className='all_items'>
            <GradientBackground color='primary' />
            <h1>Log in</h1>
            <div className="login_items">
                <ToastContainer />
                <div className="inputs">
                    <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={() => signIn()} >{loading ? "loading" : "Login"}</button>
            </div>
        </div>
    )
}

export default Login
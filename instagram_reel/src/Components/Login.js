import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../Context/AuthContext.js'
function Login() {
    let navigate = useNavigate();
    const { user } = UserAuth();
    const handleClick = () => {
        if (user) {
            navigate('/home')

        } else {
            navigate('/login')
        }
    }
    return (
        <div className="flex flex-col ">

            <h1 className="text-2xl font-bold gray 600 p-3 l-3">Login</h1>
            <input className=" font-medium border p-3 m-3" type="email" />
            <input className=" font-medium border p-3 m-3" type="password" />
            <button className="text-xl font-bold  border border-blue-600 bg-blue-600 p-2" onClick={ handleClick }> submit</button>
            <span className="font-medium m-3"> Don't have Account? <Link to="/signup" className="underline">Register</Link></span>

        </div>
    )

}

export default Login
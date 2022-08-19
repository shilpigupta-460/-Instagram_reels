import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext.js'
import { useNavigate } from "react-router-dom";


function Singup() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const [loading, setLoading] = useState('');
    const { createUser } = UserAuth();
    let navigate = useNavigate();
    const handleClick = async () => {
        setError('')
        try {
            await createUser(email, password)
            setUserName('')
            setEmail('')
            setPassword('')
            navigate('/home')
        }
        catch (error) {
            setError(error)
            console.log(error)

        }
    }

    return (
        <div className="flex flex-col ">

            <h1 className="text-2xl font-bold gray 600 p-3 l-3">Signup</h1>
            <input className=" font-medium border p-3 m-3" type="text" placeholder=" Enter Name "
                value={ userName } onChange={ (e => setUserName(e.target.value)) } />
            <input className=" font-medium border p-3 m-3" type="email" placeholder=" Enteremail " value={ email } onChange={ (e => setEmail(e.target.value)) } />
            <input className=" font-medium border p-3 m-3" type="password" placeholder=" Enter password " value={ password } onChange={ (e => setPassword(e.target.value)) } />
            <button className="text-xl font-bold  border border-blue-600 bg-blue-600 p-2" onClick={ handleClick }> submit</button>
            <span className="font-medium m-3 p-3">  <Link to="/" className="underline">Sign In</Link></span>

        </div>
    )
}

export default Singup
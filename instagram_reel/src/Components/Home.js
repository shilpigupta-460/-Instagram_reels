import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext.js'
import { useNavigate } from "react-router-dom";

function Home() {
    const { user, signout } = UserAuth();
    let navigate = useNavigate();
    const [logUser, setLogUser] = useState(user)
    const logOut = () => {
        signout();
        setLogUser('');
        navigate('/')
        console.log(` ${logUser} logout`)
    }
    return (
        <div>
            <h1 className="text-2xl font-bold gray 600 p-3 l-3 m-3">Home</h1>
            <p className="text-l p-3 l-3 m-3"> User Email:{ user && user.email }</p><br />
            <Link to='/' className="text-xl font-bold  border border-gray-600 p-2 m-8" onClick={ logOut }> Logout </Link>
        </div>
    )
}

export default Home
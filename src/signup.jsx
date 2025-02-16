import React, { useEffect } from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }

    })



    const collectData = async () => {
        console.log(name, email, password);

        let sendData = await fetch('http://localhost:3000/addEntry', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json',

            },
        })
        sendData = await sendData.json();
        console.log(sendData);
        localStorage.setItem('user', JSON.stringify(sendData));
        navigate('/')


    }



    return (
        <>
        <h1>Signup component</h1>
            <div className="register">
                <input className="inputBox" value={name} type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)} />
                <input className="inputBox" value={email} type="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
                <input className="inputBox" value={password} type="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
                <button type="button" onClick={collectData}> Submit</button>

            </div>
        </>
    )
}

export default Signup
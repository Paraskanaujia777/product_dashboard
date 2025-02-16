import React from "react";
import { useState  } from "react";
import { useNavigate } from "react-router-dom";


const Login = ()=>{

    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const navigate = useNavigate()




    const signin = async ()=>{

        console.log(email , password)
        let sendData = await fetch('http://localhost:3000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',

            },
        })
        sendData = await sendData.json();
        console.log(sendData);
        if(sendData.name){
            localStorage.setItem("user" ,JSON.stringify(sendData));
            navigate('/');
        }
        else{
            alert("enter valid argument")
        }

    }

    return(
        <>
        <div className="register">
        <h1>login component</h1>
        <input className="inputBox" type="text" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} value ={email} />
        <input  className="inputBox" type="text" placeholder="Enter password" onChange={(e)=> setPassword(e.target.value)} value={password} />
        <button type="button" onClick={signin} >submit</button>
        </div>

        
        
        </>
    )
} 

export default Login;
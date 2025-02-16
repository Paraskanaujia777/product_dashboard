import React from "react";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [cost, setCost] = useState("");
    const [company, setCompany] = useState("");

    

    useEffect(()=>{
        addingProduct
        
    },[])

    const addingProduct = async ()=>{
        let products = await fetch('http://localhost:3000/add-product', {
            method: 'post',
            body: JSON.stringify({ name,category,cost,company }),
            headers: {
                'Content-Type': 'application/json',

            },
        })
        products = await products.json();
        console.log(products);
        navigate('/');
    }


    return (
        <>
            <div className="register">
                <h1>Add Products</h1>

                <input className="inputBox" value={name} type="text" placeholder="enter product" onChange={(e) => setName(e.target.value)} />
                <input className="inputBox" value={category} type="text" placeholder="enter category" onChange={(e) => setCategory(e.target.value)} />
                <input className="inputBox" value={cost} type="text" placeholder="enter cost" onChange={(e) => setCost(e.target.value)} />
                <input className="inputBox" value={company} type="text" placeholder="enter company" onChange={(e) => setCompany(e.target.value)} />
                <button type="button" onClick={addingProduct}> Submit</button>

            </div>

        </>
    )
}

export default AddProduct;
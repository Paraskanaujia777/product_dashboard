import React, { useState , useEffect} from "react";

const AllProducts = () => {

    const [product , setProduct] = useState([]);

    useEffect(()=>{
        allProducts()
    },[])



    const allProducts = async () => {

        let allproducts = await fetch('http://localhost:3000/alldata');
        allproducts = await allproducts.json();
        // let result = JSON.parse(data);
        // let final = [result];
        setProduct(allproducts)


    }



    return (
        <>
            <ul className="allProducts">
                <li className="singleProduct">S.No</li>
                <li className="singleProduct">ProductName</li>
                <li className="singleProduct">Category</li>
                <li className="singleProduct">Cost</li>
                <li className="singleProduct">Company</li>
            </ul>
            {
                product.map((item, num) =>
                    <ul className="allProducts">
                        <li className="singleProduct">{num +1}</li>
                        <li className="singleProduct">{item.name}</li>
                        <li className="singleProduct">{item.category}</li>
                        <li className="singleProduct">Rs. { item.cost}</li>
                        <li className="singleProduct">{item.company}</li>
                    </ul>


                )

            }

        </>

    )
}

export default AllProducts;
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params=useParams();
  const navigate=useNavigate();

  useEffect(()=>{
       getProductDetails();
  },[])

const getProductDetails=async()=>{
   // console.log(params);

  let result=await fetch(`http://localhost:5000/product/${params.id}`,{
     headers:{
     authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
  }
  });
  result=await result.json();
  setName(result.name);
  setPrice(result.price);
  setCategory(result.category);
  setCompany(result.company);
}

  const UpdateProduct = async (res) => {
    let result=await fetch(`http://localhost:5000/product/${params.id}`,
    {
        method:"put",
        body:JSON.stringify({name,price,category,company}),
        headers:{
            "Content-Type":"application/json",
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`

        }    
    });
    result=await result.json();
    //console.log(result);
    navigate("/");
  };
  return (
    <div className="product">
      <h2>Update Product</h2>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Product Name"
      />
      <input
        className="inputBox"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Product Price"
      />
      <input
        className="inputBox"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter Product Category"
      />
      <input
        className="inputBox"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Product Company"
      />
      <button className="appbutton" onClick={UpdateProduct} type="button">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;

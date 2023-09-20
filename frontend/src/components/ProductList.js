import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/products',{
        headers:{
          authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/product/${id}`, {
        method: 'DELETE',
          headers:{
          authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      const result = await response.json();
      if (result) {
        getProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchHandle=async(e)=>{
    let key=e.target.value;
    if(key){
    let result=await fetch(`http://localhost:5000/search/${key}`,{
     headers:{
      authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
    })
    result=await result.json();
    if(result){
        setProducts(result)
    }
     }else{
       getProducts();
     }
  }

  return (
    <div className='ProductList'>
                <h2>Product List</h2>
                <input className='search-product-box' type="text" placeholder='Search Product'
                onChange={searchHandle} />
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Company</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {
       products.length>0 ? products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>$ {item.price}</li>
          <li>{item.company}</li>
          <li>{item.category}</li>
          <li>
            <button  onClick={() => deleteProduct(item._id)} >Delete</button>
            <Link to={"/update/"+ item._id} >Update</Link>
          </li>
        </ul>
      ))
       :<h1>No result found</h1>
    }
    </div>
  );
};

export default ProductList;

import { useState } from "react";
import "./ProductForm.css";

const ProductForm = () => {
  // const [ productName,setProductName]=useState("");
  // const [ productPrice,setProductPrice]=useState("");
  // const [ productUrl,setProductUrl]=useState("");

  const [productData,setProductData]=useState({
    productName:"",
    productPrice:"",
    productPrice:"",

  });

  // const productChangeHandler=()=>{
  //   setProductData()
  // }

  const titleChangeHandler = (e) => {
    setProductData({
      ...productData,
      productName:e.target.value
    });
  };
  const priceChangeHandler = (e) => {
    setProductData({
      ...productData,
      productPrice:e.target.value
    })
  };
  const urlChangeHandler = (e) => {
    setProductData({
      ...productData,
      productUrl:e.target.value
    })
  };
  return (
    <form className="product-form">
      <div className="product-form-input">
        <label htmlFor="">{productName}</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Ürün Giriniz"
          onChange={titleChangeHandler}
        />
      </div>
      <div className="product-form-input">
        <label htmlFor="">{productPrice}</label>
        <input type="number" name="" id="" placeholder="Adet giriniz" onChange={priceChangeHandler}/>
      </div>
      <div className="product-form-input">
        <label htmlFor=""></label>
        <input type="text" name="" id="" placeholder="Resim Yükleyin" onChange={urlChangeHandler} />{productUrl}
      </div>
      <button className="product-form-buttons">Ara</button>
    </form>
  );
};

export default ProductForm;

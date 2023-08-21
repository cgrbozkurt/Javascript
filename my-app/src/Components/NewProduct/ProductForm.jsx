import { useState } from "react";
import "./ProductForm.css";

const ProductForm = (props) => {
  const [ productName,setProductName]=useState("");
  const [ productPrices,setProductPrice]=useState("");
  const [ imageUrl,setImageUrl]=useState("");


  
  const titleChangeHandler = (e) => {

    setProductName(e.target.value);
  };

  const priceChangeHandler = (e) => {

    setProductPrice(e.target.value);
  };


  const imageChangeHandler = (e) => {

    setImageUrl(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
const newProductData={
  productName,
  productPrices,
  imageUrl
}    
props.setProducts((prevState)=>[...prevState, newProductData] )
console.log(newProductData);
setProductName("")
setProductPrice("")
setImageUrl("") 
  }

  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="product-form-input">
        <label htmlFor="">{productName}</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Ürün Giriniz"
          onChange={titleChangeHandler}
          value={productName}
        />
      </div>
      <div className="product-form-input">
        <label htmlFor="">{productPrices}</label>
        <input
          type="number"
          name=""
          id=""
          placeholder="Adet giriniz"
          onChange={priceChangeHandler}
          value={productPrices}
        />
      </div>
      <div className="product-form-input">
        <label htmlFor=""></label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Resim Yükleyin"
          onChange={imageChangeHandler}
          value={imageUrl}
        />
        {imageUrl}
      </div>
      <button className="product-form-buttons">Ara</button>
    </form>
  );
};

export default ProductForm;

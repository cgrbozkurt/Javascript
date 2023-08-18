import "./productItems.css";
import Reklam from "./reklam";
import { useState } from "react";

function ProductItem(props) {
  const { product } = props;
const [title,setTitle]=useState(product.fullName);

  const clickHandler = () => {
setTitle("Güncellendi") 
console.log(product.fullName,"Güncellendi"); };


  return (
    <div className="product-item">
      <div className="product-image">
        <img src={product.yurl} alt="" />
      </div>
      <Reklam>
        <h2 className="product-tittle">{title}</h2>
        <span className="product-price">{product.price}</span>
        <br />
      </Reklam>
      
      <button onClick={clickHandler}>Güncelle</button>
      
    </div>
  );
}

export default ProductItem;

import "./productItems.css";
import Reklam from "./reklam";

function ProductItem(props) {
   const {data,fullName,price,yurl,product}=props;
  console.log(product);  
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={product.yurl} alt="" />
      </div>
      <div className="product-info">
        <h2 className="product-tittle">{product.fullName}</h2>
        <span className="product-price">{product.price}</span>
      </div>
      <Reklam>afdfadfasdf</Reklam>
      

    </div>
  );
}

export default ProductItem;

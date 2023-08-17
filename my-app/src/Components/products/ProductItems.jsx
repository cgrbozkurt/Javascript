import "./productItems.css";
import Reklam from "./reklam";

function ProductItem(props) {
   const {product}=props;

  const clickHandler=()=>{
    console.log("Sepete Eklendi");
  }
 
  
   return (
    <div className="product-item">
      <div className="product-image">
        <img src={product.yurl} alt="" />
    
       
      </div>
      <Reklam>
      <h2 className="product-tittle">{product.fullName}</h2>
        <span className="product-price">{product.price}</span>
        <br />
      </Reklam>
      <button onClick={clickHandler}>Güncelle</button>
      

    </div>
  );
}

export default ProductItem;

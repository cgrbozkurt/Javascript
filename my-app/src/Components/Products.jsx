import ProductItem from "./ProductItems";
import "./products.css";
function Product() {
    const date=new Date();

  return (
   <div className="total"> 
    <h1>Products</h1>
     <div className="products">
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
    </div>
    <span>{date.toISOString()}</span>

   </div>
  );
}

export default Product ;
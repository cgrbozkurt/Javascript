import ProductItem from "./ProductItem";
import { productData } from "../../productData";
import "./Products.css";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
  // const [products,setProducts]=useState(productData);
  const [products,setProducts]=useState(productData)
console.log(productData);

  return (
    <div className="product-wrapper">
      <NewProduct setProducts={setProducts} products={products} />
      <h1>Products</h1>
      <div className="products">
  {products.length=== 0 ? <p>ürün bulunamadı</p> : products.map((product)=>(<ProductItem
  product={product} key={product.id}/>))}
        
      </div>
    </div>
  );
};

export default Products;

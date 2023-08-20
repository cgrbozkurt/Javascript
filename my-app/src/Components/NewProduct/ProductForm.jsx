import { useState } from "react";
import "./ProductForm.css";

const ProductForm = () => {
  const [ productName,setProductName]=useState("");
  const [ productPrices,setProductPrice]=useState("");
  const [ productUrl,setProductUrl]=useState("");

  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    productPrices: "",
  });

  // const productChangeHandler=()=>{
  //   setProductData()
  // }

  const titleChangeHandler = (e) => {
    // setProductData({
    //   ...productData,
    //   productName:e.target.value
    // });
    setProductData((prevState) => {
      return { ...prevState, productName: e.target.value };
    });
  };
  const priceChangeHandler = (e) => {
    setProductData({
      ...productData,
      productPrices: e.target.value,
    });
  };
  const urlChangeHandler = (e) => {
    setProductData({
      ...productData,
      productUrl: e.target.value,
    });
  };

  const submitHandler = (e) => {
    
    const newProductData = { productName, productPrices, productUrl };

console.log(newProductData);
e.preventDefault();
  };

  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="product-form-input">
        <label htmlFor="">{productData.productName}</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Ürün Giriniz"
          onChange={titleChangeHandler}
        />
      </div>
      <div className="product-form-input">
        <label htmlFor="">{productData.productPrices}</label>
        <input
          type="number"
          name=""
          id=""
          placeholder="Adet giriniz"
          onChange={priceChangeHandler}
        />
      </div>
      <div className="product-form-input">
        <label htmlFor=""></label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Resim Yükleyin"
          onChange={urlChangeHandler}
        />
        {productData.productUrl}
      </div>
      <button className="product-form-buttons">Ara</button>
    </form>
  );
};

export default ProductForm;

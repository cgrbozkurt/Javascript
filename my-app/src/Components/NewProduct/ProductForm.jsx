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
    // setProductData((prevState) => {
    //   return { ...prevState, productName: e.target.value };
    // });
    setProductName(e.target.value);
  };
  const priceChangeHandler = (e) => {
    // setProductData({
    //   ...productData,
    //   productPrices: e.target.value,
    // });
    setProductPrice(e.target.value);
  };
  const urlChangeHandler = (e) => {
    // setProductData({
    //   ...productData,
    //   productUrl: e.target.value,
    // });
    setProductUrl(e.target.value);
  };

  const submitHandler = (e) => {
    
    const newProductData = { productName, productPrices, productUrl };

console.log(setProductName(""),
setProductPrice(""),
setProductPrice(""));
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
          value={productName}
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
          onChange={urlChangeHandler}
          value={productUrl}
        />
        {productData.productUrl}
      </div>
      <button className="product-form-buttons">Ara</button>
    </form>
  );
};

export default ProductForm;

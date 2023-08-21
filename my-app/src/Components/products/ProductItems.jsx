import Counter from "./Counter";
import "./productItems.css";
import Reklam from "./reklam";
import { useState } from "react";

function ProductItem(props) {
  const { product } = props;
  const [title, setTitle] = useState(product.fullName);
  const [counter, setCounter] = useState(product.price);



  const clickHandler = () => {
    setTitle("Güncellendi");
    console.log(product.fullName, "Güncellendi");
  };

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={product.yurl} alt="" />
      </div>
      <Reklam>
        <h2 className="product-tittle">{title}</h2>
        <Counter
          price={product.price}
          counter={counter}
          setCounter={setCounter}
        >
          <span>{counter}₺</span>
        </Counter>
        <br />
      </Reklam>

      <button onClick={clickHandler}>Güncelle</button>
    </div>
  );
}

export default ProductItem;

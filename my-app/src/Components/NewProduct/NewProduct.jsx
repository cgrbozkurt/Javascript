import { useState } from "react";
import AddProduct from "./AddProduct";
import ProductForm from "./ProductForm";

const NewProduct = (products, setProducts) => {
  const [isOpen, setIsOpen] = useState(false);
  const onSaveProduct = (NewProductData) => {
    setProducts((prevstate) => [...NewProductData,prevstate ]);
  };
  return (
    <div className="new-product-wrapper">
      {isOpen ? (
        <ProductForm onSaveProduct={onSaveProduct} setProducts={setProducts} />
      ) : (
        <AddProduct setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default NewProduct;

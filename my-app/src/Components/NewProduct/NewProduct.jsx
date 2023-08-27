import ProductForm from "./ProductForm";

const NewProduct = (props) => {
  return (
    <div className="new-product-wrapper">
      <ProductForm setProducts={props.setProducts} products={props.products}  />
    </div>
  );
};

export default NewProduct;

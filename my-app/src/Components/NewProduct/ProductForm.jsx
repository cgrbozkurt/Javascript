import "./ProductForm.css";

const ProductForm = () => {
    const titleChangeHandler=(e)=>{
        console.log(e.target.value);
    }
  return (
    <form className="product-form">
      <div className="product-form-input">
        <label htmlFor="">Ürün Adı</label>
        <input type="text" name="" id="" placeholder="Ürün Giriniz" onChange={titleChangeHandler}/>
      </div>
      <div className="product-form-input">
        <label htmlFor="">Ürün Fiyatı</label>
        <input type="number" name="" id="" placeholder="Ürün Giriniz" />
      </div>
      <div className="product-form-input">
        <label htmlFor="">Ürün Görseli</label>
        <input type="text" name="" id="" placeholder="Ürün Giriniz" />
      </div>
      <button className="product-form-buttons">Ürün Ekle</button>
    </form>
  );
};

export default ProductForm;

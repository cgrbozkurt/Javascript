import NewProduct from "../NewProduct/NewProduct";
import ProductItem from "./ProductItems";
import "./products.css";
function Product() {
  const date = new Date();
 
  const product = [
    {
      fullName: "pirzola",
      price: "25",
      yurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFdfgF8rsuaq7UZIWVv1pYtcx5PFzL1Fn-Q&usqp=CAU",
    },
    {
      fullName: "Dana Bonfile",
      price: "39",
      yurl: "https://i.ytimg.com/vi/6aOkU9GLs6k/sddefault.jpg#404_is_fine",
    },
    {fullName:"Cacık",
  price:"10",
yurl:"https://media.istockphoto.com/id/175590628/tr/foto%C4%9Fraf/tzatziki-sauce.webp?b=1&s=170667a&w=0&k=20&c=lDPfFSgMIosB6vYs7bXZzVcDVg5Mh6NxE0jTZWxUUGQ="}
  ];

  return (
    <div className="total">
      <NewProduct/>
      <h1>Products</h1>
      <div className="products">
     {product.map((product)=>(   <ProductItem
     key={product.fullName}
     product={product}
        
        />))}

     
      </div>
      <span>{date.toISOString()}</span>
    </div>
  );
}

export default Product;

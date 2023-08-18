import './App.css';
import Counter from './Components/products/Counter';
import Product from './Components/products/Products';



function App() {
  return (
    <div className="App">
      
    <Product></Product>
    <Counter price={10}/>
    </div>
   
  );
}

export default App;

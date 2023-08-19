import { useState } from 'react';
import './App.css';
import Counter from './Components/products/Counter';
import Product from './Components/products/Products';


function App() {
  const [counter, setCounter] = useState(100);

  return (
    <div className="App">
      
    <Product></Product>
    <Counter counter={counter} setCounter={setCounter} 
     >
{counter}
    </Counter>
    </div>
   
  );
}

export default App;

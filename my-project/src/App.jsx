import { useState } from "react";
import AddWorker from "./Components/Workers/AddWorker";
import WorkerList from "./Components/Workers/WorkerList";


function App() {

const [workers,setWorkers]=useState([])

  return (
    <div className="App">
      <h1 className="text-white text-center">Maaş Otomasyonu</h1>
      <AddWorker setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </div>
  );
}


export default App;
 
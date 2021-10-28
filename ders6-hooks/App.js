import './App.css';
import { useState } from "react"
import ClassComp from './ClassComp';
import FunctionalComp from './FunctionalComp';

function App() {
  const[isVisible, setVisible] = useState(true);
  console.log(isVisible)

  return (
    <div className="App">
      <button onClick={()=>setVisible(!isVisible)}>
        toggle
      </button>
      {isVisible && <ClassComp/>}
      {/* <ClassComp/> */}
      <FunctionalComp/>
    </div>
  );
}

export default App;

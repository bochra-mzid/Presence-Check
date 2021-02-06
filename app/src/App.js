import React,{useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainRouter from "./MainRouter";


function App() {

  useEffect(() => {
      window.history.back();
    }, [])

  return (

    <div>
        <MainRouter/>
    </div>
    
  );
}

export default App

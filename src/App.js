import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import  {Yourneeds} from './components/pages/YourNeeds/Yourneeds'
function App() {
  return (
    <>
     <Header/>
    

     <Routes>
        <Route path="/" element={<Yourneeds />} />
      </Routes>
    </>
  );
}

export default App;

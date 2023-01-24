import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
// import  {Yourneeds} from './components/pages/YourNeeds/Yourneeds'
import  {Spacedetails} from './components/pages/SpaceDetails/Spacedetails'
function App() {
  return (
    <>
     <Header/>
    

     {/* <Routes>
        <Route path="/" element={<Yourneeds />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Spacedetails />} />
      </Routes>

    </>
  );
}

export default App;

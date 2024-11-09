import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from './components/Header'
import Footer from "./components/Footer";
import Sider from "./components/Sider";
import Loader from "./components/Loader";
import { useState } from "react";

function App() {
  const [showloader, setshowloader] = useState(false)

  return (
    <div className="bg-primary h-auto px-10 sm:px-3">
      <BrowserRouter>
      {showloader ?<Loader/>:null}
      
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
      <Sider/>
      </BrowserRouter>
    </div>
  );
}

export default App;

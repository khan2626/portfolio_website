import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'
import Home from "./pages/Home";
import About from "./pages/About";
import Header from './components/Header'
import Footer from "./components/Footer";
import Sider from "./components/Sider";
import Loader from "./components/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading, SetPortfolioData } from "./redux/rootSlice.js";



function App() {
  
  const { loading, portfolioData } = useSelector((state) => state.root)
  const dispatch = useDispatch()
  
  const getPortfolioData = async()=>{
    try{
      dispatch(ShowLoading())
      const response = await axios.get('https://khan-portfolio-website.onrender.com/portfolio_data')
      dispatch(SetPortfolioData(response.data))
      dispatch(HideLoading())
      
    } catch(error){
      console.error(error)
    }
  }


  useEffect(()=>{
    if(!portfolioData){
      getPortfolioData()
    }
  },[portfolioData])

  return (
    <div className="bg-primary h-auto px-10 sm:px-3">
      <BrowserRouter>
      { loading && <Loader/>}
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

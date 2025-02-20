import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Home from "./pages/Home"
import Search from './components/Search';
import ProductListing from './pages/ProductListing';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' exact={true} element={<Home/>}/>
      <Route path='/productListing' exact={true} element={<ProductListing/>}/>
    </Routes>
     <Footer />
    </BrowserRouter>
        
    </>
  )
}

export default App

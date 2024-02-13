import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './components/Home';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import CorporateGifting from './components/CorporateGifting';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import Helps from './components/Pages/Helps';
import { Helmet } from 'react-helmet';
import {BASE_URL} from "./components/Pages/BaseUrl";

function App() {
  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Elevate Your Style with Elmira Bags - Explore Exquisite Handcrafted Bags for Every Occasion</title>
            <meta name="description" content="Welcome to Elmira Bags, your premier destination for finely crafted, artisanal bags that seamlessly blend elegance and functionality. Discover a curated collection of handbags, totes, and accessories meticulously designed to complement your unique style. From timeless classics to trendsetting pieces, each Elmira bag is a testament to quality craftsmanship and sophistication. Shop now and adorn yourself with the perfect accessory that speaks volumes about your individuality. Elevate your fashion journey with Elmira Bags - where every bag tells a story." />
            <link rel="canonical" href={BASE_URL} />
        </Helmet>
       
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/collections/:category" element={<Products />} />
                <Route path="/products/:productname" element={<ProductDetails />} />

                <Route path="/pages/:helps" element={<Helps />} />
                
                <Route path="/gifting" element={<CorporateGifting />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    </>
  );
}

export default App;

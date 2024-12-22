import "./App.css";

//configuração do raact router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Info from "./Pages/Info";
import NotFound from "./Pages/NotFound";
import SearchForm from "./Components/SearchForm";
import Search from "./Pages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="products/:id/info" element={<Info />} />
            <Route path="search" element={<Search />} />
            <Route path="company" element={<Navigate to="/about" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

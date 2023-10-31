import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Service } from "./pages/services/Services";
import { Portfolio } from "./pages/portfolio/Portfolio";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Service} />
        {/* <Route path="/portfolio" Component={Portfolio}/> */}
        <Route path="/contact" Component={Contact} />
      </Routes>
    </>
  );
};

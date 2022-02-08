import React from "react";
import { useTranslation} from "react-i18next";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/appRouter/AppRouter";
import Footer from "./containers/footer/Footer";



function App() {
  const {t, i18n} = useTranslation();

  
  
  return (
    <div className="App">
      <Navbar />
      <AppRouter className="container" />
      <Footer />
    </div>
  );
}

export default App;

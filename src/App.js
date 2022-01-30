import React from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/appRouter/AppRouter";
import Footer from "./containers/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter className="container" />
      <Footer />
    </div>
  );
}

export default App;

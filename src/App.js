import React from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/appRouter/AppRouter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter className="container" />
    </div>
  );
}

export default App;

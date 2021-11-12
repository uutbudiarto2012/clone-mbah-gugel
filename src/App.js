import React, { useState } from "react";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;

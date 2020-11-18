import React, { useEffect, useState } from "react";
import "./App.css";
import FullPageSpinner from "./components/Spinners/FullPageSpinner";
import Quiz from "./containers/Quiz/Quiz";

function App() {
  const [loadApp, setLoadApp] = useState(true);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadApp(false);
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  if (loadApp) return <FullPageSpinner />;
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

export default App;

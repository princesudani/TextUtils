import { useState } from "react";
import Nav from "./Nav";
import Text from "./Text";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Nav title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Text heading="Enter Your Text Below !!!" />
      </div>
    </>
  );
}

export default App;

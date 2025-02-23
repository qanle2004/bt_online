import { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [size, setSize] = useState(10);
  const maxSize = 300;
  const intervalTime = 150;

  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prevSize) => (prevSize >= maxSize ? 10 : prevSize + 5));
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="circle" style={{ width: `${size}px`, height: `${size}px` }} />
    </div>
  );
}

export default App;

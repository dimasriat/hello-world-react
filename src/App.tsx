import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Increment the count every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Reset counter to 0
  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>
        This is a React app with TypeScript, deployed to GitHub Pages using Vite
        and pnpm.
      </p>
      <p>
        Counter: <strong>{count}</strong>
      </p>
      <button onClick={resetCounter}>Reset Counter</button>
    </div>
  );
}

export default App;


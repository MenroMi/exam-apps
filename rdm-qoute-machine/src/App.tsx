import {useEffect, useState} from 'react';
import './App.css';
import RandomQuote from './RandomQuote';

function App() {
  const [color, setColor] = useState<string>('rgb(123, 43, 22, 0.2)');

  const onMakeRandomColor = () => {
    const rndColor = () => Math.floor(Math.random() * 256);
    setColor(`rgb(${rndColor()}, ${rndColor()}, ${rndColor()})`);
  };

  useEffect(() => {
    onMakeRandomColor();
  }, []);

  return (
    <main className="main" style={{backgroundColor: color}}>
      <RandomQuote dynamicColor={color} onMakeRandomColor={onMakeRandomColor} />
    </main>
  );
}

export default App;

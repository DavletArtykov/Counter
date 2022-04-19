
import { useState } from 'react';
import './App.css';
import {Button} from './components/button/Button'
import {Count} from './components/Count/Count'

function App() {

  const [count, setCount]= useState(1)
  



  return (
    <div className="App">
      <Count counter={count} />
      <Button setCount={setCount} title='+'/>
      <Button setCount={setCount} title='-'/>
    </div>
  );
}

export default App;

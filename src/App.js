
import './App.css';
import {Button} from './components/button/Button'
import {Count} from './components/Count/Count'

function App() {

  



  return (
    <div className="App">
      <Count counter='0' />
      <Button title='+'/>
      <Button title='-'/>
    </div>
  );
}

export default App;

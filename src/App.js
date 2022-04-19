
import './App.css';
import {Button} from './components/button/Button'
import {Count} from './components/Count/Count'

function App() {

  



  return (
    <div className="App">
      <h1>Сounter</h1>
       <Count counter ='0' />
      <Button title='+'/>
      <Button title='-'/>
     
    </div>
  );
}

export default App;

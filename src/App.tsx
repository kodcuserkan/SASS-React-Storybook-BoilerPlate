import './App.css';
import Primary from './components/buttons/Primary';
import Secondary from './components/buttons/Secondary';


function App() {
  return (
    <div className="App">
      Hello world
      <Primary name="Send Mail" onClickFunc={() => console.log("Primary test")} />
      <Secondary name="Send Mail" onClickFunc={() => console.log("Secondary test")} />
    </div>
  );
}

export default App;

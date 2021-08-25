import './App.css';
import Primary from './components/buttons/Primary';
import Secondary from './components/buttons/Secondary';


function App() {
  return (
    <div className="App">
      <h1 className="welcome">Welcome</h1>
      <Primary name="Primary Button" onClickFunc={() => console.log("Primary test")} />
      <Secondary name="Secondary Button" onClickFunc={() => console.log("Secondary test")} />
    </div>
  );
}

export default App;

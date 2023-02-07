// import Greet from './components/Greet';
// import Hello from './components/Hello';
import './App.css';
import Messages from './components/Messages';
function App() {
  return (
    <div className="App">
     {/* <Greet name="lina" heroName="kutak"> */}
     {/* <button type="button" >Click Me!</button> */}
     {/* </Greet> */}
     <Messages nCount="4"></Messages>
     {/* <Greet name="kutak"></Greet>
     <Greet name="payang"></Greet>
     <Greet name="budu"></Greet>
     <Hello></Hello> */}
    </div>
  );
}

export default App;

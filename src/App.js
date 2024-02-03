import Child from './components/Child';
import './App.css';
import { createContext } from 'react';
import { GlobalState } from './components/globalstate';

export const myContext = createContext(null)

console.log(myContext)

function App() {

  const cheese = "gouda"

  const payload = {bread: "rye"}

  return (
    <div className="App">
      <GlobalState>
      <myContext.Provider value={payload}>
      <Child cheese={cheese}/>
      </myContext.Provider>
      </GlobalState>
      <ReceivesChildren>
        <h1>Hello World</h1>
      </ReceivesChildren>
    </div>
  );
}

function ReceivesChildren(props){
  return <div>
    {props.children}
  </div>
}


export default App;

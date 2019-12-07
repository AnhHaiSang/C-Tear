import React from 'react';
import './App.css';
import Todos from './components/todos'

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
        <div>
          <Todos/>
        </div>      
      )
  }

}


export default App;

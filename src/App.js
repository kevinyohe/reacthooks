import React, {Component} from 'react';


class App extends Component {

incrementCount = () =>{
  this.setState(prevState => ({
    count: prevState.count +1
  }))
}

toggleLight = () =>{
  this.setState(prevState =>({
    isOn: !prevState.isOn

  }))
}



  state = { 
    count:0,
    isOn: false };
  render(){
  return (
    <>
    <h2>Counter</h2>
    <div>
    <button onClick={this.incrementCount}>Click me</button>
    i was clicked {this.state.count} times.
    </div>
    <h2>Toggle Light</h2>
    <div
    style={{
      height: '50px',
      width: '50px',
      background: this.state.isOn ? "yellow" : "grey"

    }}
    onClick={this.toggleLight}
    >
      </div>
    </>
  );
}
}

export default App;

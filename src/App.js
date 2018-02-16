import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    }
  }

  sum(){
    var data1 = parseInt(document.getElementById("in1").value);
    var data2 = parseInt(document.getElementById("in2").value);
    var total = data1 + data2;
    this.setState({value:total});
  }
  
render() {
    return (
      <div className="init">
      {1}
      <div>
        <label>Number 1:</label>
        <input type="text" name="prec" id="in1" className="in1" />
      </div>
      <div>
        <label>Number 2:</label>
        <input type="text" name="prec" id="in2" className="in2" />
      </div>
        <input className="button" type="submit" onClick={()=>this.sum()} ></input>
      <div id="in3" className="answer">
        {this.state.value}
      </div>
      </div>

    );
  }
}

export default App;

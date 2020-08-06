import * as React from 'react';
import TextInput from './TextInput';

import PageInterface from '../PageInterface';

export interface State {
  inputA : string;
  inputB : string;
  diff : string;
}

let state = {};


class App extends React.Component<PageInterface, State> {

  public constructor(props: any) {
    super(props);
    this.state = {
      inputA : "",
      inputB: "",
      diff : ""
    };
  }


  public enterInputA = (newState) => {
    this.setState({
      inputA : newState
    });
  }

  public enterInputB = (newState) => {
    this.setState({
      inputB : newState
    });
  }

  public makeDiff = (inputA, inputB) => {
    var inputAProcessed = inputA.split('\n');
    var inputBProcessed = inputB.split('\n');
    var dictA = this.arrayToHash(inputAProcessed);
    var dictB = this.arrayToHash(inputBProcessed);
    var diffs = this.compareDicts(dictA, dictB);



    return diffs;
  }

  private compareDicts = (a, b) =>  {
    var diff = {};
    for(var key in a) {
      var exists = b[key];
      if(!exists) {
        diff[key] = 1;
      }
    }
    return diff;
  }

  private arrayToHash = (arr : Array<string>) => {
    var dict = {};
    arr.forEach(f => {
      dict[f] = 1;
    });
    return dict;
  }

  private onClick = (event) => {
    var diff = this.makeDiff(this.state.inputA, this.state.inputB);
    var str = "";
    for(var key in diff){
      str = str + key + "\n";
    }
    this.setState({
      diff :str
    })
  }


  render() {
    return (<div>
      <h1>Welcome to React with Typescript</h1>
      <p>The color of this page is: {this.props.color}</p>
      <TextInput onEnteredText={this.enterInputA}></TextInput>
      <TextInput onEnteredText={this.enterInputB}></TextInput>
      <p>{this.state.inputA}</p>
      <p>{this.state.inputB}</p>
      <p> DIFF : {this.state.diff}</p>
      <button onClick={this.onClick}>GO</button>
    </div>
    );
  }
}

export default App;
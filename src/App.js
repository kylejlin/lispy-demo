import React, { Component } from 'react';
import './App.css';
import { compileStringToString } from 'lispy-compiler'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      src: '',
      output: '',
      error: null
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-header">lispy-compiler demo</h1>
        <p>Lispy source</p>
        <textarea className="App-input" onChange={e => this.setState({ src: e.target.value })}></textarea>
        <div className="App-button" onClick={() => this.compile()}>Compile</div>
        <p>Output (js)</p>
        <div className="App-output">{this.state.output}</div>
        {this.state.error &&
          <div className="App-error">{this.state.error}</div>
        }
      </div>
    );
  }

  compile() {
    const { src } = this.state
    try {
      const js = compileStringToString(src)
      this.setState({
        output: js,
        error: null
      })
    } catch (e) {
      this.setState({
        output: '// Build failed',
        error: e.message
      })
    }
  }
}

export default App;

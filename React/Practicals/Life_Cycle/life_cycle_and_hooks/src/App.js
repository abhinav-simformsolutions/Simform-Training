import React from 'react'

 export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  componentDidMount(){
    this.timerId=setInterval(()=>this.tick(),1000)
  }
  componentWillUnmount(){
      clearInterval(this.timerId)
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


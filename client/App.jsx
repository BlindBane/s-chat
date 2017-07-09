import React, { Component } from 'react';
import MessageBox from './components/MessageBox';
import MessageInput from './components/MessageInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          userId: '1',
          username: 'Bill',
          messageText: 'Hi, I am bill.',
          channel: 'sanFrancisco',
        },
        {
          userId: '2',
          username: 'Chill Bill',
          messageText: 'Hi, I am Chill.',
          channel: 'sanFrancisco',
        },
      ],
    };
    this.handleNewMsg = this.handleNewMsg.bind(this);
  }
  handleNewMsg(newMsg) {
    const newMsgs = [...this.state.messages.slice(0), newMsg];
    this.setState({
      messages: newMsgs,
    });
  }
  render() {
    return (
      <div>
        <MessageBox messages={this.state.messages} />
        <br />
        <MessageInput handleNewMsg={this.handleNewMsg} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Message from './Message';
import MessageInput from './MessageInput';

function MessageBox(props) {
  const messages = props.messages.map(msg => (
    <Message
      key={msg.userId}
      username={msg.username}
      messageText={msg.messageText}
      channel={msg.channel}
    />
  ));
  return (
    <div>
      {messages}
      <MessageInput handleNewMsg={props.handleNewMsg} />
    </div>
  );
}

export default MessageBox;

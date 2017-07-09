import React from 'react';
import Message from './Message';

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
    </div>
  );
}

export default MessageBox;

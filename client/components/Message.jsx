import React from 'react';

function Message(props) {
  return (
    <div>
      <span>[{props.channel}] </span>
      <span>{props.username} says: </span>
      <span>{props.messageText} </span>
    </div>
  );
}

export default Message;

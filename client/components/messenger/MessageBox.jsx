import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'

function MessageBox (props) {
  return (
    <div>
      {props.messages
        .filter(
          (msg) =>
            `${msg.username} ${msg.messageText}`.toUpperCase()
            .indexOf(props.searchTerm.toUpperCase()) >= 0
        )
        .map(msg => (
          <Message
            key={msg.userId}
            username={msg.username}
            messageText={msg.messageText}
            channel={msg.channel}
          />
        ))}
      <MessageInput handleNewMsg={props.handleNewMsg} />
    </div>
  )
}

export default MessageBox

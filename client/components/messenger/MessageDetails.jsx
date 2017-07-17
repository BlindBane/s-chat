import React from 'react'

const MessageDetails = (props) => {
  const { channel, username, messageText, msgId } = props.message
  return (
    <div>
      <p>CHANNEL {channel} </p>
      <p>USER: {username} </p>
      <p>TEXT: {messageText} </p>
      <p>ID: {msgId} </p>
    </div>
  )
}

export default MessageDetails

import React from 'react'
import Header from './../Header'

const MessageDetails = (props) => {
  const { channel, username, messageText, msgId } = props.message
  return (
    <div>
      <Header backToMessenger />
      <p>CHANNEL {channel} </p>
      <p>USER: {username} </p>
      <p>TEXT: {messageText} </p>
      <p>ID: {msgId} </p>
    </div>
  )
}

export default MessageDetails

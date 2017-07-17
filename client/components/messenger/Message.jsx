import React from 'react'
import { Link } from 'react-router-dom'

function Message (props) {
  return (
    <div>
      <Link to={`/message/${props.msgId}`}>
        <span>[{props.channel}] </span>
        <span>{props.username} says: </span>
        <span>{props.messageText} </span>
      </Link>
    </div>
  )
}

export default Message

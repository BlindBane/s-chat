import React from 'react'

const MessageSearchBar = (props) => {
  return (
    <div>
      <input
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
        type='text'
        placeholder='Seach your messages...'
      />
    </div>
  )
}

export default MessageSearchBar

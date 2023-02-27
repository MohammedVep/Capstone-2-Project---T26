import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../../components/registeredUsers/ChatComponents/ChatFeed'
import '../../App.css'

const ChatApp = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={'projectID'}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  )
}

export default ChatApp
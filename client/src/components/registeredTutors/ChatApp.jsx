import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import '../../App.css'
import {ChatFeed} from './ChatComponents/ChatFeed'

const projectID = '634eeb78-d871-4ccf-b14c-1c064503001a';

const ChatApp = () => {
  return (
    <ChatEngine
      height="100vh" 
      
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  )
}

export default ChatApp
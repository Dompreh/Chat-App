import React from "react"
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import './styles/global.css';

function App(){
    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
    <ChatEngine
        height='100vh'
        projectID="ca0a16fc-ba88-4cb8-a059-c6f46b3c9dfe"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
        
      
    )

}

export default App;
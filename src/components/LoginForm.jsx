import React from 'react'
import {useState} from 'react'
import axios from 'axios'

function LoginForm() {

    const[username, setUsername]=useState('')
    const[password, setPassword]=useState('')
    const[error, setError]=useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault();

        const authObject ={'Project-ID':"ca0a16fc-ba88-4cb8-a059-c6f46b3c9dfe", 'User-Name': username,'User-Secret':password}

        try {
                //username / password => chatengine -> give messages
           await axios.get('https://api.chatengine.io/chats', {headers:authObject});
             //if it works out / you're successsfully logged in
             localStorage.setItem('username',username)
             localStorage.setItem('password',password)

             window.location.reload();
        } catch (error) {
           //error ->try with new username... 
            setError('Oops, incorrect credentials.')
        }

    
      
    }

    return (
    <div className='wrapper'>
        <div className='form'>
            <h1 className='title'>Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder='Username' required />
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder='Password' required />
                <div align="center">
                    <button type='submit' className='button'>
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className='error'>{error}</h2>
            </form>
        </div>
    </div>
  )
}

export default LoginForm;
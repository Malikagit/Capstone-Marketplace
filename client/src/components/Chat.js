import React from 'react';
import { io } from 'socket.io-client';

const Chat = () => {
    const [message, setMessage] = React.useState('');
    React.useEffect(() => {
        const socket = io('http://localhost:5000')
        socket.on('connect', () => console.log(socket.id))
        socket.on('connect_error', () => {
            setTimeout(() => socket.connect(), 5000)
        })
        socket.on('chat message', (message) => {
            alert(message)
        });
        // socket.on('disconnect', () => setMessage('server disconnected'))
    }, [])

    const handleChange = (e) => {
        setMessage(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message);
        e.target.reset();
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="message" 
                    name="message" 
                    value={message} 
                    onChange={handleChange}
                />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default Chat;
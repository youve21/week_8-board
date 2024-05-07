import React from 'react'
import Message from './Message'

const Messages = () => {
    const messages = []
    console.log(messages.length)
    { messages.length > 0 ?
        messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
                <Message message={message} />
            </div>
            
        )) : (
        <p className='text-center'>Send a message to start the conversation</p>
        )
    }
}

export default Messages
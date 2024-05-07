import React from 'react'

const MessageInput = () => {

  return (
    <div>
      <input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
					<img src={map} alt="map" />
				</button>

    </div>
  )
}

export default MessageInput
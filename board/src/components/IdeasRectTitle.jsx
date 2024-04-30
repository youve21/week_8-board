import React from 'react'
import { useStorage } from '../../liveblocks.config'
import { Button } from './ui/button'
import plus_combin from '../assets/plus_combin.svg'
import { Rectangle } from './ui/Rectangle'




const IdeasRectTitle = ({camera,id, insertCombin}) => {

    const layer = useStorage((root) => root.layers.get(id))

    const x = layer.x +  camera.x
    const y = layer.y + camera.y


    return (
        (layer.type == 16 || layer.type == 19 || layer.type==21) ? (
          <div
            className="absolute p-3 rounded-xl shadow-sm border flex select-none"
            style={{
              transform: `translate(
                calc(${x + 90}px - 50%),
                calc(${y - 15}px - 50%)
              )`,
              backgroundColor: 'transparent', // Ensuring no background color
              border: 'none', // Remove border if not required
              zIndex: 0 // Setting a negative z-index to send it to the back
            }}
          >
            <Rectangle

            color="rgba(154, 204, 251, 1)"  // Directly specify the RGBA color
            rounded="medium"
            style={{ height: '30px', width: '100px' }}
            >
                Your ideas
            </Rectangle>
            
            
         </div>
        ) : <></>
      )
      
      
}

export default IdeasRectTitle
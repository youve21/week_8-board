import React from 'react'
import { useStorage } from '../../liveblocks.config'
import { Button } from './ui/button'
import plus_combin from '../assets/plus_combin.svg'
import { Rectangle } from './ui/Rectangle'




const MoscowPourrait = ({camera,id}) => {

    const layer = useStorage((root) => root.layers.get(id))

    const x = layer.x +  camera.x
    const y = layer.y + camera.y
    const height = layer.height
    const width = layer.width


    return (
        (layer.type==20) ? (
          <div
            className="absolute p-3 rounded-xl shadow-sm border flex select-none"
            style={{
              transform: `translate(
                calc(${x  +70}px - 50%),
                calc(${y +height/2 +30}px - 50%)
              )`,
              backgroundColor: 'transparent', // Ensuring no background color
              border: 'none', // Remove border if not required
              zIndex: 0 // Setting a negative z-index to send it to the back
            }}
          >
            <Rectangle
                                        color="rgba(255, 215, 100, 1)"  // Directly specify the RGBA color
                                        rounded="medium"
                                        style={{ height: '30px', width: '100px' }}
            >
                Pourrait avoir
            </Rectangle>
            
            
         </div>
        ) : <></>
      )
      
      
}

export default MoscowPourrait
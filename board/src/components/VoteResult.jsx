import React, { useEffect } from 'react'
import { useStorage } from '../../liveblocks.config'


const VoteResult = ({id, camera, triggerVote}) => {

    const layer = useStorage((root) => root.layers.get(id))

    if(!layer) return null

    const x = layer.x + camera.x
    const y = layer.y + camera.y
    // useEffect(() => {
    //     console.log("layer.votable",layer.votable)
    //     console.log("triggerVote",triggerVote)
    // }, [triggerVote, layer.votable])

  return (
    useStorage((root) => root.layers.get(id)).votable && !triggerVote ? (
            <div 
        style={{
            transform: `translate(
              calc(${x + layer.width/2 - 30}px),
              calc(${y + layer.height - 20}px)
            )`,
            width: `60px`
          }}
           //style={{ transform: `translateX(${layer.width}px`}}
           className={`absolute z-10 rounded-xl bg-[#7851d1] shadow-sm border select-none`}
          >
            <h6 className='font-medium text-black text-sm text-center'>{layer.vote}</h6>
          </div>
    ) : (
        <></>
    )
  )
}

export default VoteResult
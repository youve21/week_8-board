import React from 'react'
import { Button } from './ui/button'
import minus from '../assets/minus.svg'
import plus from '../assets/plus.svg'
import { useMutation, useStorage } from '../../liveblocks.config'

const VoteDisplay = ({id, camera, startVote}) => {

  const layer = useStorage((root) => root.layers.get(id))

  if(!layer) return null

  const Down = useMutation(({ storage }) => {
      const liveLayers = storage.get("layers")

      const layer = liveLayers.get(id)

      if (layer) {
        let voters = layer?.get("voters")
        if (voters.includes(id)) {
          voters = voters.filter(oid => oid !== id);
          layer.update({
            vote: layer.get("vote") > 0 ? layer.get("vote") - 1 : 0,
            voters: voters
          })
        } else{
        }
      }
    }, [])
  const Up = useMutation(({ storage }) => {
      const liveLayers = storage.get("layers")

      const layer = liveLayers.get(id)

      if (layer) {
        const voters = layer?.get("voters")
        if (voters.includes(id)) {
          alert("You have already voted!");
          // return; // Prevent further action
        } else{
          // Add the ID to the voters array
          voters.push(id);
          layer.update({
            vote: layer.get("vote") + 1,
            voters: voters
          })
        }
      }
    }, []) 
  
    const x = layer.x + camera.x
    const y = layer.y + camera.y



  

  return (
        layer.votableNow && layer.triggerVote ?(
    <div 
    style={{
        transform: `translate(
          calc(${x + layer.width/2 - 30}px),
          calc(${y + layer.height - 20}px)
        )`,
        width: `60px`
      }}
       //style={{ transform: `translateX(${layer.width}px`}}
       className="absolute z-10 rounded-xl bg-[#F6F6F6] shadow-sm border flex items-center select-none"
      >
        <Button variant="board" className="p-2 rounded-full" onClick={Down} disabled={!startVote}>
          <img src={minus} alt="minus" className='w-[15px] h-[15px]'/>
        </Button>
        <h6 className='font-medium text-black text-sm'>{layer.vote}</h6>
        <Button variant="board" className="p-2 rounded-full" onClick={Up} disabled={!startVote}>
          <img src={plus} alt="plus" className='w-[15px] h-[15px]'/>
        </Button>
      </div>)
      : (
        <></>
      )
  )
}

export default VoteDisplay
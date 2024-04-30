import React,{useState} from 'react'
import { useStorage } from '../../liveblocks.config'
import { Button } from './ui/button'
import plus_combin from '../assets/plus_combin.svg'





const RaffinementTable = ({camera,id, insertCombin}) => {

    const layer = useStorage((root) => root.layers.get(id))

    const x = layer.x +  camera.x
    const y = layer.y + camera.y


    return (
      layer.type == 17 ? (
        <div
          className="absolute p-3 rounded-xl shadow-sm border flex flex-col select-none" 
          style={{
            transform: `translate(
              calc(${x + 735}px - 50%),
              calc(${y - 200}px - 50%)
            )`,
            backgroundColor: 'transparent', 
            border: 'none', 
            zIndex: 0 ,
            width:"1600px",
          }}
      >
        <div>

<div className=" absolute m-20 grid grid-cols-9 grid-rows-3 gap-2">

    <div className='processus  -ml-3 -mr-3 col-start-1 col-end-10 bg-[#7D89F4] text-center rounded-md' style={{ fontSize: '21.39px', fontFamily: 'Product Sans' }}>Processus de Raffinement et Expansion des idées</div>
    <div className='idees -ml-3 row-start-2 row-span-2 bg-[#FEDC77] flex items-center justify-center rounded-md text-center' style={{ fontSize: '17px', fontFamily: 'Product Sans' }}>Idées</div>
    <div className='identification ml-1 col-start-2 col-span-3 bg-[#F96161] flex items-center justify-center rounded-md text-center' style={{ fontSize: '17px', fontFamily: 'Product Sans' }}>Identification</div>
    <div className='devloppement ml-1 col-start-5 col-span-4 bg-[#DC95FF] flex items-center justify-center rounded-md text-center' style={{ fontSize: '17px', fontFamily: 'Product Sans' }}>Devloppement</div>
    <div className='idees row-span-2 -mr-3  bg-[#FEDC77] flex items-center justify-center rounded-md text-center' style={{ fontSize: '17px', fontFamily: 'Product Sans' }}>Idées finalisées</div>

    <div className='smalltitle ml-1 col-start-2 bg-[#6BC8FC] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }}>Points Forts</div>
    <div className='smalltitle -ml-1 bg-[#FFC480] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >lacunes</div>
    <div className='smalltitle -ml-1 bg-[#6BC8FC] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >les aspects à développer</div>

    <div className='smalltitle ml-1 bg-[#FF5EDC] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >Fonctionalitées à ajouter</div>
    <div className='smalltitle -ml-1 bg-[#82EFC8] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >exemples concrets </div>
    <div className='smalltitle -ml-1 bg-[#AEA299] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >Variantes</div>
    <div className='smalltitle -ml-1 bg-[#82EFC8] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >Rodondances a éliminer</div>


</div>



</div >
        </div>
        ) : <></>
)
    
    
      
      
}

export default RaffinementTable
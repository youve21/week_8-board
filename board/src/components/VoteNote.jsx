import { useStorage } from '../../liveblocks.config'
import React from 'react'
import '@fontsource/kalam'
import ContentEditable from "react-contenteditable"

import { cn, colorToCss, getContrastingTextColor } from "../constants/index"

const calculateFontSize = (width, height) => {
    const maxFontSize = 96
    const scaleFactor = 0.12
    const fontSizeBasedOnHeight = height * scaleFactor
    const fontSizeBasedOnWidth = width * scaleFactor
  
    return Math.min(
      fontSizeBasedOnHeight, 
      fontSizeBasedOnWidth, 
      maxFontSize
    )
  }

const VoteNote = ({id}) => {
  const layer = useStorage((root) => root.layers.get(id))
  if(!layer) return null

  const { x, y, width, height, fill, vote, value  } = layer


  return (
    <div className='flex flex-row items-center gap-3'>
        <div
          style={{
            backgroundColor: fill ? colorToCss(fill) : "#000",
          }}
          className="shadow-md drop-shadow-xl h-20 w-20"
        >
          <ContentEditable
            html={value ? value : ""}
            className={cn(
              "h-full w-full flex items-center justify-center text-center outline-none",
            )}
            style={{
              fontSize: calculateFontSize(width, height),
              color: fill ? getContrastingTextColor(fill) : "#000",
              fontFamily: 'Kalam, cursive',
              backgroundColor: fill ? colorToCss(fill) : "#000",
            }}
            
          />
        </div>
        <div>
            <h1 className='font-semibold text-xl'>{vote} votes</h1>
        </div>
    </div>
  )
}

export default VoteNote
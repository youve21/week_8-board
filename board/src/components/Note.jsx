import '@fontsource/kalam'
import ContentEditable from "react-contenteditable"

import { cn, colorToCss, getContrastingTextColor } from "../constants/index"
import { useMutation } from "../../liveblocks.config"


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

function isInArray(array, element) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
          return true; // Element found
      }
  }
  return false; // Element not found
}


export const Note = ({layer, onPointerDown, id, selectionColor, voteIds, setVoteIds}) => {
  const { x, y, width, height, fill, triggerVote, value } = layer

  const updateValue = useMutation(({ storage }, newValue) => {
    const liveLayers = storage.get("layers")

    liveLayers.get(id)?.set("value", newValue)
  }, [])
  
  const handleContentChange = (e) => {
    updateValue(e.target.value)
  }

  const makeVotable = useMutation(({ storage }) => {
    if(!isInArray(voteIds, id)){
      setVoteIds(prevVoteIds => [...prevVoteIds, id]);
    }
    const liveLayers = storage.get("layers")
    liveLayers.get(id)?.set("votable", true)
    liveLayers.get(id)?.set("votableNow", true)
  }, [])
  // useEffect(() => {
  //   setTriggerVote(!triggerVote)
  // } ,[setTriggerVote])


  return (    
    <foreignObject
      x={x}
      y={y}
      id={`${id}`}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
        backgroundColor: fill ? colorToCss(fill) : "#000",
      }}
      className="shadow-lg drop-shadow-2xl"
      onClick={triggerVote ? () => makeVotable() : undefined}
      disabled={!triggerVote}
    >
      <ContentEditable
        html={value ? value : ""}
        onChange={handleContentChange}
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
    </foreignObject>
  )
}
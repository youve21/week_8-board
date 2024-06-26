import React from 'react'
import text from '../assets/text.svg'
import templates from '../assets/templates.svg'
import stickers from '../assets/stickers.svg'
import shapes from '../assets/shapes.svg'
import dots3 from '../assets/dots3.svg'
import cursor from '../assets/cursor.svg'
import expert from '../assets/expert.svg'
import moveTB from '../assets/moveTB.svg'
import rectangle from '../assets/rectangle.svg'
import square from '../assets/square.svg'
import circle from '../assets/circle.svg'
import sharpsquare from '../assets/sharpsquare.svg'
import thinking from '../assets/thinking.svg'
import triangle from '../assets/triangle.svg'
import arrowleft from '../assets/arrowleft.svg'
import arrowdown from '../assets/arrowdown.svg'
import arrowright from '../assets/arrowright.svg'
import prstand from '../assets/prstand.svg'
import trianglesarrow from '../assets/trianglesarrow.svg'
import linedarrow from '../assets/linedarrow.svg'
import dragcr from '../assets/dragcr.svg'
import { Button } from './ui/button'
import { CanvasMode, LayerType } from '../../types/canvas'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from 'framer-motion'


const Toolbar = ({ canvasState, setCanvasState, focus }) => {

  const experts = {
    expert1:{
      Photo: `${expert}`,
      Nom: "Kemer Ayoub"
    },
    expert2:{
      Photo: `${expert}`,
      Nom: "BoudraaMahdi"
    },
    expert3:{
      Photo: `${expert}`,
      Nom: "Soltani Amine"
    },
  }

  const donothing = () => {
    console.log("expert")
  }
  return (
    <motion.div className='fixed top-1/2 z-10 -translate-y-[50%] flex flex-col gap-y-4'>
        <div className='bg-[#F2F2F2] sh2 w-12 rounded-lg p-2 flex gap-y-1 flex-col items-center shadow-md'>
            <div>
              <Button variant="board" className="p-2 hover:bg-tranparent bg-transparent" >
                <img src={moveTB} alt="moveTB" className='w-[14px] h-[14px]'/>
              </Button>
            </div>
            <div className='flex flex-col gap-y-3'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild >
                  <Button 
                    variant={ 
                      canvasState.mode === CanvasMode.None ||
                      canvasState.mode === CanvasMode.Translating ||
                      canvasState.mode === CanvasMode.SelectionNet ||
                      canvasState.mode === CanvasMode.Pressing ||
                      canvasState.mode === CanvasMode.Resizing 
                      ? "boardActive" : "board"
                    } 
                    onClick={() => setCanvasState({ mode: CanvasMode.None })}
                    className="p-2" 
                  >
                    <img src={cursor} alt="cursor" className='w-[20px] h-[20px]'/>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-40 bg-[#EBEDFF] mx-auto" 
                  side="right"
                  //align={align}
                  sideOffset={20}
                   //alignOffset={alignOffset}
                >
                  <DropdownMenuGroup className="flex flex-row items-center">
                    <DropdownMenuItem>
                      <Button variant="board" className="p-2"> 
                        <img src={cursor} alt="cursor" className='w-[20px] h-[20px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <h1 className='font-semibold text-base'>Select</h1>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="bg-[#A4A4A4] w-[95%] mx-auto"/>
                  <DropdownMenuGroup className="flex flex-row items-center">
                    <DropdownMenuItem>
                      <Button variant="board" className="p-2"> 
                        <img src={dragcr} alt="dragcr" className='w-[20px] h-[20px]'/>
                      </Button>
                    </DropdownMenuItem>
                  <h1 className='font-semibold text-base'>Panoramic</h1>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button 
                variant={
                  canvasState.mode === CanvasMode.Inserting  &&
                  canvasState.LayerType === LayerType.Note
                  ? "boardActive" : "board"
                } 
                onClick={() => setCanvasState({ 
                  mode: CanvasMode.Inserting, 
                  LayerType: LayerType.Note,
                })} 
                className="p-2"
              >
                <img src={stickers} alt="stickers" className='w-[20px] h-[20px]'/>
              </Button>
              <Button 
                variant={
                  canvasState.mode === CanvasMode.Inserting  &&
                  canvasState.LayerType === LayerType.Template
                  ? "boardActive" : "board"
                } 
                onClick={() => setCanvasState({ 
                  mode: CanvasMode.Inserting, 
                  LayerType: LayerType.Template,
                })}  
                className="p-2" 
              >
                <img src={templates} alt="templates" className='w-[20px] h-[20px]'/>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant={"board"} 
                    className="p-2" 
                  >
                    <img src={shapes} alt="shapes" className='w-[20px] h-[20px]'/>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-52 bg-[#EBEDFF] mx-auto py-4" 
                  side="right"
                  //align={align}
                  sideOffset={20}
                   //alignOffset={alignOffset}
                >
                  <DropdownMenuGroup className="flex flex-row items-center justify-center">
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Rectangle
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({ 
                          mode: CanvasMode.Inserting, 
                          LayerType: LayerType.Rectangle,
                        })} 
                        className="p-2"
                      > 
                      <img src={rectangle} alt="rectangle" className='w-[30px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Square
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({  
                          mode: CanvasMode.Inserting, 
                          LayerType: LayerType.Square,
                        })} 
                        className="p-2"
                      > 
                      <img src={square} alt="square" className='w-[30px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Circle
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Circle,
                        })} 
                        className="p-2"
                      > 
                      <img src={circle} alt="circle" className='w-[25px]'/>
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup className="flex flex-row items-center justify-center">
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Sharpsquare
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Sharpsquare,
                        })} 
                        className="p-2"
                      > 
                      <img src={sharpsquare} alt="sharpsquare" className='w-[25px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Thinking
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Thinking,
                        })} 
                        className="p-2"
                      > 
                      <img src={thinking} alt="thinking" className='w-[30px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Triangle
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Triangle,
                        })} 
                        className="p-2"
                      > 
                      <img src={triangle} alt="triangle" className='w-[28px]'/>
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="bg-[#A4A4A4] w-[95%] mx-auto my-5"/>
                  <DropdownMenuGroup className="flex flex-row items-center justify-center">
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Arrowleft
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Arrowleft,
                        })} 
                        className="p-2"
                      > 
                      <img src={arrowleft} alt="arrowleft" className='w-[30px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Arrowdown
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType:  LayerType.Arrowdown,
                        })} 
                        className="p-2"
                      > 
                      <img src={arrowdown} alt="arrowdown" className='w-[30px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Arrowright
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Arrowright,
                        })} 
                        className="p-2"
                      > 
                      <img src={arrowright} alt="arrowright" className='w-[30px]'/>
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup className="flex flex-row items-center justify-center">
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Standpr
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Standpr,
                        })} 
                        className="p-2"
                      > 
                      <img src={prstand} alt="prstand" className='w-[30px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Triangledarrow
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Triangledarrow,
                        })} 
                        className="p-2"
                      > 
                      <img src={trianglesarrow} alt="trianglesarrow" className='w-[23px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Linedarrow
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Linedarrow,
                        })} 
                        className="p-2"
                      > 
                      <img src={linedarrow} alt="linedarrow" className='w-[23px]'/>
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
               
              <Button 
                variant={
                  canvasState.mode === CanvasMode.Inserting  &&
                  canvasState.LayerType === LayerType.Text
                  ? "boardActive" : "board"
                } 
                onClick={() => setCanvasState({ 
                  mode: CanvasMode.Inserting, 
                  LayerType: LayerType.Text,
                })} 
                className="p-2" 
              >
                <img src={text} alt="text" className='w-[20px] h-[20px]'/>
              </Button>
            </div>
            <div>
              <Button variant="board" className="p-2" >
                <img src={dots3} alt="dots3" className='w-[20px] h-[20px]'/>
              </Button>    
            </div>
        </div>
        <div className='bg-[#DCE0FF] rounded-md w-12 h-12 p-2 translate-x-2 flex gap-y-1 flex-col items-center shadow-md'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="board" className="p-2 sh2" >
                <img src={expert} alt="expert" className='w-[25px] h-[25px]'/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" side={"right"} sideOffset={12}>
              <DropdownMenuGroup  className="flex flex-col">
              {Object.entries(experts).map(([key, value]) => (
              <DropdownMenuGroup className="flex flex-row gap-x-0 items-center " key={key} onClick={donothing}>
                <DropdownMenuItem className="hover:cursor-pointer">
                  <img src={`${value.Photo}`} alt={`${value.Photo}`} />
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:cursor-pointer">
                  <h3>{value.Nom}</h3>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
    </motion.div>
  )
}

export const ToolbarSkeleton = () => {
  return(
    <div className='fixed top-1/2 -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md'/>
  )
}

export default Toolbar
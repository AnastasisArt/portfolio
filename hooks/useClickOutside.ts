import { useEffect, RefObject } from 'react'

export default function useClickOutside(
  element: RefObject<HTMLElement | null>,
  callback: ()=> void
){
  useEffect(()=>{
    function onPointerDown(event: PointerEvent){
      if (!element.current) return
      if (event.target instanceof Node && !element.current.contains(event.target)) callback()
    }

    document.addEventListener('pointerdown', onPointerDown)
    return ()=> document.removeEventListener('pointerdown', onPointerDown)
  }, [element, callback])
}
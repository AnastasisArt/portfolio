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

    function onScroll() {
      callback()
    }

    document.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('scroll', onScroll, true)
    return ()=> {
      document.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('scroll', onScroll, true)
    }
  }, [element, callback])
}
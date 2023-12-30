'use client'

import { useRef, useEffect } from "react"
import gsap from 'gsap'

const GsapMagnetic = ({ children }) => {
  const ref = useRef(null)

  useEffect(()=>{
    const xTo = gsap.quickTo(ref.current, 'x', {
			duration: 1,
			ease: 'elastic.out(1, 0.3)',
		});
    const yTo = gsap.quickTo(ref.current, 'y', {
			duration: 1,
			ease: 'elastic.out(1, 0.3)',
		});
    const mouseMove = (e) => {
      const {clientX, clientY} = e
      const {width, height, left, top} = ref.current.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)

      xTo(x)
      yTo(y)
    }

    const mouseLeave = (e) => {
      xTo(0);
			yTo(0);
    }

    ref.current.addEventListener('mousemove', mouseMove)
    ref.current.addEventListener('mouseleave', mouseLeave)
  },[])
	return (
    <div ref={ref}>
      {
        children
      }
    </div>
  )
};
export default GsapMagnetic
import React from 'react'

export default function BedDoubleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.2228 18.4256' className={className}>
      <path
        d='M0 17.6811C0 18.188 0.226466 18.4242 0.724319 18.4242L1.21856 18.4242C1.69756 18.4242 1.94219 18.188 1.94219 17.6811L1.94219 15.5393C2.0335 15.5511 2.10284 15.5434 2.19396 15.5434L27.6675 15.5434C27.7586 15.5434 27.8279 15.5511 27.9192 15.5393L27.9192 17.6811C27.9192 18.188 28.1646 18.4242 28.6436 18.4242L29.1378 18.4242C29.635 18.4242 29.8614 18.188 29.8614 17.6811L29.8614 9.26897C29.8614 7.91632 28.9845 7.0212 27.7045 7.0212L2.15694 7.0212C0.876956 7.0212 0 7.91632 0 9.26897Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.04551 6.08966L5.51182 6.08966L5.51182 4.76143C5.51182 3.78301 6.14795 3.11963 7.09073 3.11963L12.3684 3.11963C13.3202 3.11963 13.9564 3.78301 13.9564 4.76143L13.9564 6.08966L16.6424 6.08966L16.6424 4.76143C16.6424 3.78301 17.3058 3.11963 18.5935 3.11963L22.4174 3.11963C23.7051 3.11963 24.3691 3.78301 24.3691 4.76143L24.3691 6.08966L26.8264 6.08966L26.8264 2.81719C26.8264 0.860354 25.8341 0 24.3416 0L5.5296 0C4.03779 0 3.04551 0.860354 3.04551 2.81719Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
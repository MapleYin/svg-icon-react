import React from 'react'

export function Poweron({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 0.861534 22.2844' className={className}>
      <path
        d='M0.245904 22.2844C0.389754 22.2844 0.500206 22.1662 0.500206 22.0308L0.500206 0.272466C0.500206 0.128615 0.389754 0.0195312 0.245904 0.0195312C0.110452 0.0195312 0 0.128615 0 0.272466L0 22.0308C0 22.1662 0.110452 22.2844 0.245904 22.2844Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

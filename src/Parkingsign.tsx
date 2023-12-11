import React from 'react'

export default function Parkingsign({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14.7623 23.8447' className={className}>
      <path
        d='M0.199227 23.8447C0.326576 23.8447 0.407537 23.7617 0.407537 23.6058L0.407537 13.6504L6.9627 13.6504C11.5323 13.6504 14.401 11.1058 14.401 7.02002C14.401 2.94268 11.533 0.34492 6.96339 0.34492L0.199227 0.34492C0.0816441 0.34492 0 0.427248 0 0.58321L0 23.6058C0 23.7624 0.0816441 23.8447 0.199227 23.8447ZM0.407537 13.2475L0.407537 0.747182L7.02207 0.747182C11.2686 0.747182 13.9991 3.17413 13.9991 7.02002C13.9991 10.8652 11.2588 13.2475 7.02207 13.2475Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
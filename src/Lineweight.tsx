import React from 'react'

export function Lineweight({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.0362 20.2289' className={className}>
      <path
        d='M0.203128 1.26456L20.4718 1.26456C20.6145 1.26456 20.6749 1.20411 20.6749 1.09844L20.6749 0.907815C20.6749 0.802149 20.6145 0.741698 20.4718 0.741698L0.203128 0.741698C0.0604504 0.741698 0 0.802149 0 0.907815L0 1.09844C0 1.20411 0.0604504 1.26456 0.203128 1.26456ZM0.737697 9.48331L19.9379 9.48331C20.3778 9.48331 20.6749 9.22325 20.6749 8.73721L20.6749 7.28086C20.6749 6.79482 20.3778 6.52568 19.9379 6.52568L0.737697 6.52568C0.297071 6.52568 0 6.79482 0 7.28086L0 8.73721C0 9.22325 0.297071 9.48331 0.737697 9.48331ZM0.737697 20.2289L19.9379 20.2289C20.3778 20.2289 20.6749 19.9598 20.6749 19.4737L20.6749 15.1268C20.6749 14.6407 20.3778 14.3716 19.9379 14.3716L0.737697 14.3716C0.297071 14.3716 0 14.6407 0 15.1268L0 19.4737C0 19.9598 0.297071 20.2289 0.737697 20.2289Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

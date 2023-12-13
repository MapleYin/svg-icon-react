import React from 'react'

export function Bolt({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.8224 26.0205' className={className}>
      <path
        d='M4.11671 25.6152L15.2855 11.432C15.4081 11.2969 15.461 11.1994 15.461 11.0636C15.461 11.0083 15.4489 10.9047 15.2533 10.9047L7.93097 10.9047L11.8751 0.474214C12.0505 0.00370133 11.6401-0.16515 11.3534 0.191105L0.175587 14.3834C0.0620121 14.5095 0 14.6153 0 14.7421C0 14.8071 0.0211936 14.9107 0.217485 14.9107L7.53008 14.9107L3.59502 25.3412C3.41055 25.811 3.82091 25.9708 4.11671 25.6152ZM4.48107 24.5194L8.23888 14.3802L0.842593 14.3802L11.0731 1.34395L10.9793 1.296L7.22148 11.4262L14.6269 11.4262L4.3963 24.4624Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

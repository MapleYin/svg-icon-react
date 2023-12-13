import React from 'react'

export function OvalPortraitFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.1892 27.5149' className={className}>
      <path
        d='M10.4143 0C4.26768 0 0 5.65987 0 13.7525C0 21.8355 4.26768 27.496 10.4143 27.496C16.5797 27.496 20.8278 21.8732 20.8278 13.7525C20.8278 5.62286 16.5797 0 10.4143 0Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

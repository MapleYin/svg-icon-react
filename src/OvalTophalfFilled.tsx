import React from 'react'

export function OvalTophalfFilled({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.289 22.0701' className={className}>
      <path
        d='M0 11.0302C0 17.3217 6.01963 22.0701 14.4642 22.0701C22.908 22.0701 28.9277 17.3217 28.9277 11.0302C28.9277 4.72959 22.908 0 14.4642 0C6.01963 0 0 4.72959 0 11.0302ZM0.511533 11.0302L28.4161 11.0302C28.4161 16.9963 22.6008 21.5398 14.4642 21.5398C6.32687 21.5398 0.511533 16.9963 0.511533 11.0302Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

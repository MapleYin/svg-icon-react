import React from 'react'

export default function DropFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.3123 24.0789' className={className}>
      <path
        d='M7.97549 24.0789C12.7594 24.0789 15.951 20.9745 15.951 16.3183C15.951 14.4434 15.1854 12.0251 13.9277 9.3418C12.6171 6.55332 10.8642 3.5543 9.03956 0.758106C8.76065 0.319531 8.47422 0.0908196 7.97549 0.0908196C7.47676 0.0908196 7.19102 0.319531 6.91143 0.758106C5.08682 3.5543 3.33389 6.55332 2.02324 9.3418C0.765626 12.0251 0 14.4434 0 16.3183C0 20.9745 3.19229 24.0789 7.97549 24.0789Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

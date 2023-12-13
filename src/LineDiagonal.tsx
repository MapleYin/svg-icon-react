import React from 'react'

export function LineDiagonal({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.5827 17.2544' className={className}>
      <path
        d='M0.0723538 16.8177C-0.0333121 16.9227-0.0144645 17.07 0.0723538 17.1756C0.177336 17.2806 0.343452 17.2806 0.448435 17.1756L17.149 0.465951C17.2547 0.360285 17.2358 0.213016 17.149 0.108034C17.0531 0.0114496 16.8779 0.0114496 16.782 0.108034Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

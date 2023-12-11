import React from 'react'

export default function ConeFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.3315 26.2455' className={className}>
      <path
        d='M0 21.7507C0 24.2138 5.09248 26.2455 11.9851 26.2455C18.8776 26.2455 23.9701 24.2138 23.9701 21.7507C23.9701 21.4418 23.904 21.159 23.7584 20.8796L12.8636 1.37119C12.6782 1.06816 12.3491 0.849019 11.9851 0.849019C11.621 0.849019 11.2926 1.06816 11.1163 1.37119L0.220802 20.8796C0.0479501 21.159 0 21.4418 0 21.7507Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

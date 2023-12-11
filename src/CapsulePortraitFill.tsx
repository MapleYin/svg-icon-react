import React from 'react'

export default function CapsulePortraitFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.898 28.4416' className={className}>
      <path
        d='M10.2687 0C3.78125 0 0 3.67881 0 9.93302L0 18.4891C0 24.7433 3.78125 28.4312 10.2687 28.4312C16.7463 28.4312 20.5366 24.7433 20.5366 18.4891L20.5366 9.93302C20.5366 3.67881 16.7463 0 10.2687 0Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

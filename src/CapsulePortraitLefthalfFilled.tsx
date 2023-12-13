import React from 'react'

export function CapsulePortraitLefthalfFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.898 28.4416' className={className}>
      <path
        d='M10.2687 0C3.78125 0 0 3.67881 0 9.93302L0 18.4891C0 24.7433 3.78125 28.4312 10.2687 28.4312C16.7463 28.4312 20.5366 24.7433 20.5366 18.4891L20.5366 9.93302C20.5366 3.67881 16.7463 0 10.2687 0ZM10.2687 0.540146C16.4272 0.540146 20.0237 4.03438 20.0237 9.967L20.0237 18.4558C20.0237 24.3968 16.4272 27.8826 10.2687 27.8826Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

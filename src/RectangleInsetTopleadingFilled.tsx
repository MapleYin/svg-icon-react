import React from 'react'

export default function RectangleInsetTopleadingFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 22.2348' className={className}>
      <path
        d='M3.18125 22.2348L25.8721 22.2348C27.9473 22.2348 29.054 21.0917 29.054 19.0472L29.054 3.46241C29.054 1.41787 27.9473 0.274805 25.8721 0.274805L3.18125 0.274805C1.10674 0.274805 0 1.38086 0 3.46241L0 19.0472C0 21.1196 1.10674 22.2348 3.18125 22.2348ZM3.21124 21.7232C1.42628 21.7232 0.511533 20.8008 0.511533 19.0222L0.511533 3.48741C0.511533 1.7088 1.42628 0.786338 3.21124 0.786338L25.8428 0.786338C27.553 0.786338 28.5418 1.7088 28.5418 3.48741L28.5418 19.0222C28.5418 20.8008 27.553 21.7232 25.8428 21.7232Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.13126 11.1125L12.8016 11.1125C13.9243 11.1125 14.5315 10.5046 14.5315 9.38116L14.5315 3.25255C14.5315 2.1382 13.9243 1.53029 12.8016 1.53029L3.13126 1.53029C2.00919 1.53029 1.40197 2.1382 1.40197 3.25255L1.40197 9.38116C1.40197 10.5046 2.00919 11.1125 3.13126 11.1125Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export default function SwitchProgrammable({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.4249 26.4617' className={className}>
      <path
        d='M3.1876 26.4617L12.8851 26.4617C14.9575 26.4617 16.0636 25.3557 16.0636 23.2805L16.0636 3.23643C16.0636 1.16192 14.9575 0.0551754 12.8851 0.0551754L3.1876 0.0551754C1.10537 0.0551754 0 1.16192 0 3.23643L0 23.2805C0 25.3557 1.10537 26.4617 3.1876 26.4617ZM3.2126 25.9502C1.43399 25.9502 0.511533 25.0354 0.511533 23.2512L0.511533 3.26573C0.511533 1.48145 1.43399 0.566708 3.2126 0.566708L12.8601 0.566708C14.6296 0.566708 15.5521 1.48145 15.5521 3.26573L15.5521 23.2512C15.5521 25.0354 14.6296 25.9502 12.8601 25.9502Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.13126 9.98536L12.938 9.98536C14.0614 9.98536 14.6693 9.37814 14.6693 8.25539L14.6693 3.18644C14.6693 2.06368 14.0614 1.45646 12.938 1.45646L3.13126 1.45646C2.00851 1.45646 1.40968 2.06368 1.40968 3.18644L1.40968 8.25539C1.40968 9.37814 2.00851 9.98536 3.13126 9.98536ZM3.13126 25.0604L12.938 25.0604C14.0614 25.0604 14.6693 24.4532 14.6693 23.3305L14.6693 18.2615C14.6693 17.1388 14.0614 16.5315 12.938 16.5315L3.13126 16.5315C2.00851 16.5315 1.40968 17.1388 1.40968 18.2615L1.40968 23.3305C1.40968 24.4532 2.00851 25.0604 3.13126 25.0604Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
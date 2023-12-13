import React from 'react'

export function SquareSplit_1x2Fill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 21.9977' className={className}>
      <path
        d='M21.96 10.7619L21.96 11.2734L0 11.2734L0 10.7619ZM0 3.21963L0 18.8164C0 20.8909 1.14307 21.9977 3.1876 21.9977L18.7717 21.9977C20.8169 21.9977 21.96 20.8909 21.96 18.8164L21.96 3.21963C21.96 1.14512 20.8448 0.0376952 18.7717 0.0376952L3.1876 0.0376952C1.10537 0.0376952 0 1.14512 0 3.21963Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

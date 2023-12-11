import React from 'react'

export default function SquareBottomhalfFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 23.5254' className={className}>
      <path
        d='M0 20.3441C0 22.4187 1.10537 23.5254 3.1876 23.5254L18.7717 23.5254C20.8448 23.5254 21.96 22.4187 21.96 20.3441L21.96 4.74736C21.96 2.68124 20.8169 1.56611 18.7717 1.56611L3.1876 1.56611C1.14307 1.56611 0 2.68124 0 4.74736ZM0.511533 12.5503L0.511533 4.78574C0.511533 3.06641 1.43399 2.07764 3.2126 2.07764L18.7474 2.07764C20.526 2.07764 21.4484 3.06641 21.4484 4.78574L21.4484 12.5503Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

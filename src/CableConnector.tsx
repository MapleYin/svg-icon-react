import React from 'react'

export default function CableConnector({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8.03155 26.5863' className={className}>
      <path
        d='M3.40722 26.5863L4.26368 26.5863L4.26368 15.2871L3.40722 15.2871ZM1.1749 17.0817L6.49531 17.0817C7.25801 17.0817 7.67022 16.6793 7.67022 15.9257L7.67022 5.81427C7.67022 5.06065 7.25801 4.65753 6.49531 4.65753L1.1749 4.65753C0.412207 4.65753 0 5.06065 0 5.81427L0 15.9257C0 16.6793 0.412207 17.0817 1.1749 17.0817Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.81592 3.74512L5.8543 3.74512L5.8543 1.17422C5.8543 0.411524 5.44141 0.0181639 4.6878 0.0181639L2.99151 0.0181639C2.22881 0.0181639 1.81592 0.411524 1.81592 1.17422Z'
        fill={color}
        fillOpacity='0.425'
      />
    </svg>
  )
}
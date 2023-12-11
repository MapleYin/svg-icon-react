import React from 'react'

export default function ArrowUturnLeftSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.2574' className={className}>
      <path
        d='M21.96 3.18829L21.96 18.7724C21.96 20.8169 20.8532 21.96 18.778 21.96L3.18125 21.96C1.10674 21.96 0 20.8546 0 18.7724L0 3.18829C0 1.11514 1.10674 0 3.18125 0L18.778 0C20.8532 0 21.96 1.14307 21.96 3.18829ZM8.72344 5.10332L5.54277 8.35098C5.46553 8.42891 5.4042 8.56475 5.4042 8.67266C5.4042 8.8085 5.46484 8.90733 5.54277 9.00411L8.71504 12.244C8.78955 12.2913 8.85772 12.3429 8.93838 12.3429C9.11583 12.3429 9.21241 12.1988 9.21241 12.0577C9.21241 11.968 9.16925 11.8998 9.10381 11.8064L6.60402 9.34639L6.08165 8.90831L7.27921 8.93897L12.2871 8.93897C14.5329 8.93897 16.0141 10.312 16.0141 12.3625C16.0141 14.3842 14.5315 15.7529 12.2864 15.7529L10.2639 15.7529C10.1284 15.7529 10.0046 15.8579 10.0046 16.0095C10.0046 16.1883 10.1291 16.2744 10.2652 16.2744L12.2864 16.2744C14.8354 16.2744 16.5544 14.7166 16.5544 12.3625C16.5544 9.97119 14.827 8.4084 12.2871 8.4084L7.27921 8.4084L6.08097 8.43906L6.58136 8.03203L9.10381 5.54024C9.16925 5.46573 9.21241 5.38711 9.21241 5.30782C9.21241 5.14785 9.13467 5.03174 8.9377 5.03174C8.85703 5.03174 8.78955 5.05605 8.72344 5.10332Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
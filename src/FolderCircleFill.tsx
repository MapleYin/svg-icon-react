import React from 'react'

export default function FolderCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM4.80372 10.3831L4.80372 16.2095C4.80372 17.3051 5.39444 17.8581 6.46417 17.8581L17.8433 17.8581C18.93 17.8581 19.52 17.2862 19.52 16.2095L19.52 10.3831ZM6.20958 6.14112C5.25411 6.14112 4.80372 6.59151 4.80372 7.50977L4.80372 9.77959L19.52 9.77959L19.52 8.99727C19.52 7.94707 18.9293 7.33887 17.8596 7.33887L11.0145 7.33887C10.3906 7.33887 10.1472 7.27618 9.78858 6.93077L9.45245 6.60918C9.02276 6.20313 8.82061 6.14112 8.1418 6.14112Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

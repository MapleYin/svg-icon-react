import React from 'react'

export function HexagonFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.527 25.9918' className={className}>
      <path
        d='M1.06075 20.1349L10.7887 25.7684C11.3155 26.0753 11.8676 26.0571 12.3777 25.7684L22.1049 20.1349C22.9269 19.6454 23.1656 19.1832 23.1656 18.3697L23.1656 7.13751C23.1656 6.63194 22.8989 6.30938 22.5245 6.09922L12.6849 0.307232C12.0066-0.103025 11.1661-0.101658 10.4808 0.307232L0.641804 6.09922C0.276467 6.30938 0 6.63194 0 7.13751L0 18.3697C0 19.1832 0.238772 19.6454 1.06075 20.1349Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

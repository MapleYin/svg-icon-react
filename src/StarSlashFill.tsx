import React from 'react'

export function StarSlashFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.6512 26.6481' className={className}>
      <path
        d='M7.67195 9.15498L20.7703 22.2567L21.3852 24.1373C21.5322 24.5943 21.4339 24.8156 21.2389 24.9576C21.0426 25.0905 20.8032 25.1103 20.4361 24.8477L13.1495 19.513L5.8531 24.8477C5.48669 25.1103 5.24655 25.0905 5.05094 24.9576C4.85602 24.8156 4.75768 24.5943 4.90397 24.1373L7.70621 15.5678L0.379165 10.2645C0.0127559 10.0025-0.0427146 9.75743 0.0247668 9.5375C0.0915645 9.30918 0.281508 9.14473 0.760125 9.14541ZM13.7358 0.567486L16.5033 9.15791L25.5291 9.14541C26.0077 9.14473 26.1983 9.30918 26.2651 9.5375C26.3319 9.75743 26.2771 10.0025 25.91 10.2645L18.583 15.5678L19.1566 17.322L10.0796 8.24655L12.5541 0.567486C12.7088 0.128615 12.9093 0 13.1495 0C13.3799 0 13.5895 0.128615 13.7358 0.567486Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M24.3274 24.5349C24.4317 24.6399 24.5965 24.6399 24.7001 24.5349C24.8316 24.4117 24.8051 24.2574 24.7001 24.1531L5.34938 4.79677C5.26393 4.71064 5.09918 4.67363 4.97603 4.79677C4.86265 4.90039 4.86265 5.06582 4.97603 5.17852Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

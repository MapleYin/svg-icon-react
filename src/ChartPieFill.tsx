import React from 'react'

export default function ChartPieFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.7019 24.3859' className={className}>
      <path
        d='M12.1608 24.3859C15.4005 24.3859 18.3477 23.0987 20.5161 21.043L12.1521 12.7548C11.9638 12.5574 11.9143 12.4075 11.9143 12.0657L11.9143 0.0488281C5.33496 0.191311 0 5.61104 0 12.216C0 18.9155 5.4711 24.3859 12.1608 24.3859ZM24.3405 12.1881C24.3405 10.3026 23.8264 8.37608 23.0347 6.80176L12.7417 12.6185L20.8358 20.7246C23.0158 18.5246 24.3405 15.401 24.3405 12.1881ZM12.4611 12.1343L22.7843 6.29375C20.5416 2.2207 16.1158 0.0375009 12.4611 0.0558591Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

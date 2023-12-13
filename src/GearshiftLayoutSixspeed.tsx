import React from 'react'

export function GearshiftLayoutSixspeed({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.7173 20.9174' className={className}>
      <path
        d='M24.1164 0C23.9796 0 23.8762 0.113186 23.8762 0.249322L23.8762 10.2045L16.3975 10.2045L16.3975 0.249322C16.3975 0.113186 16.2941 0 16.1572 0C16.0211 0 15.9177 0.113186 15.9177 0.249322L15.9177 10.2045L8.44806 10.2045L8.44806 0.249322C8.44806 0.113186 8.33556 0 8.19874 0C8.06261 0 7.9585 0.113186 7.9585 0.249322L7.9585 10.2045L0.488878 10.2045L0.488878 0.249322C0.488878 0.113186 0.376376 0 0.24024 0C0.112503 0 0 0.113186 0 0.249322L0 10.4538C0 10.5809 0.112503 10.6934 0.24024 10.6934L7.9585 10.6934L7.9585 20.6576C7.9585 20.7854 8.06261 20.8979 8.19874 20.8979C8.33556 20.8979 8.44806 20.7854 8.44806 20.6576L8.44806 10.6934L15.9177 10.6934L15.9177 20.6576C15.9177 20.7854 16.0211 20.8979 16.1572 20.8979C16.2941 20.8979 16.3975 20.7854 16.3975 20.6576L16.3975 10.6934L23.8762 10.6934L23.8762 20.6576C23.8762 20.7854 23.9796 20.8979 24.1164 20.8979C24.2526 20.8979 24.356 20.7854 24.356 20.6576L24.356 0.249322C24.356 0.113186 24.2526 0 24.1164 0Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export function BellSlashCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM5.16758 5.17735C5.03516 5.31046 5.05333 5.48878 5.16758 5.61143L18.7123 19.1743C18.835 19.297 19.0321 19.3067 19.1464 19.1743C19.2704 19.0405 19.2704 18.8636 19.1464 18.7402L5.60235 5.17735C5.47833 5.05401 5.29161 5.05401 5.16758 5.17735ZM10.3051 17.5377C10.4761 18.6196 11.1343 19.2317 12.1615 19.2317C13.1888 19.2317 13.8477 18.6196 14.0089 17.5377ZM7.92881 9.92238C7.67676 11.7184 7.77188 13.5909 6.95323 14.5311C6.41133 15.1581 5.79834 15.7279 5.79834 16.4506C5.79834 16.6364 5.89493 16.7575 6.04356 16.7575L15.4438 16.7575L8.05032 9.34917C8.00277 9.53527 7.96266 9.72683 7.92881 9.92238ZM10.5326 6.59483C9.81805 6.75901 9.28149 7.11208 8.88144 7.59443L18.0323 16.7575L18.2795 16.7575C18.4197 16.7575 18.5247 16.6364 18.5247 16.4506C18.5247 15.7279 17.9222 15.1574 17.3705 14.5311C16.5323 13.6091 16.6463 11.7184 16.3858 9.92238C16.1338 8.30899 15.4098 6.9669 13.7911 6.59483C13.6825 5.61192 13.0137 4.98008 12.1615 4.98008C11.3094 4.98008 10.6412 5.61192 10.5326 6.59483Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

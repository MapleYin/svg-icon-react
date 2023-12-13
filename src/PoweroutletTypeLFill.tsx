import React from 'react'

export function PoweroutletTypeLFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11.9243 25.483' className={className}>
      <path
        d='M11.563 2.89854L11.563 22.6397C11.563 24.3211 10.4004 25.483 8.72599 25.483L2.83702 25.483C1.1626 25.483 0 24.3211 0 22.6397L0 2.89854C0 1.21641 1.1626 0.0551754 2.83702 0.0551754L8.72599 0.0551754C10.4004 0.0551754 11.563 1.21641 11.563 2.89854ZM4.20167 19.997C4.20167 20.8589 4.91436 21.5723 5.77764 21.5723C6.64933 21.5723 7.35294 20.8589 7.35294 19.997C7.35294 19.1253 6.64933 18.4217 5.77764 18.4217C4.91436 18.4217 4.20167 19.1253 4.20167 19.997ZM4.20167 12.7366C4.20167 13.5992 4.91436 14.3126 5.77764 14.3126C6.64933 14.3126 7.35294 13.5992 7.35294 12.7366C7.35294 11.8649 6.64933 11.1613 5.77764 11.1613C4.91436 11.1613 4.20167 11.8649 4.20167 12.7366ZM4.20167 5.47628C4.20167 6.33956 4.91436 7.05226 5.77764 7.05226C6.64933 7.05226 7.35294 6.33956 7.35294 5.47628C7.35294 4.60528 6.64933 3.90167 5.77764 3.90167C4.91436 3.90167 4.20167 4.60528 4.20167 5.47628Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

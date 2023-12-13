import React from 'react'

export function BatteryblockSlashFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.414 27.2939' className={className}>
      <path
        d='M23.8444 24.6172L3.18125 24.6172C1.10674 24.6172 0 23.5118 0 21.4296L0 9.05837C0 6.98522 1.10674 5.87984 3.18125 5.87984L5.10606 5.87984ZM12.2396 3.78532L12.2396 5.87984L16.8138 5.87984L16.8138 3.78532C16.8138 3.07692 17.2042 2.65719 17.9964 2.65719L22.398 2.65719C23.1812 2.65719 23.5716 3.07692 23.5716 3.78532L23.5716 5.87984L25.8721 5.87984C27.9473 5.87984 29.0533 7.02223 29.0533 9.05837L29.0533 21.4296C29.0533 23.0549 28.3543 24.1105 27.0227 24.4725L5.65487 3.10524C5.83918 2.8166 6.17266 2.65719 6.65528 2.65719L11.0569 2.65719C11.8491 2.65719 12.2396 3.07692 12.2396 3.78532Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M26.7905 26.2835C26.8948 26.3884 27.0498 26.4066 27.1723 26.2835C27.2947 26.1603 27.2773 26.006 27.1723 25.9017L2.2628 0.99293C2.17735 0.906796 2.02168 0.869784 1.88037 0.99293C1.77607 1.09655 1.77607 1.27106 1.88037 1.37536Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

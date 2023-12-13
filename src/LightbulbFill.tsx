import React from 'react'

export function LightbulbFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.1217 29.1311' className={className}>
      <path
        d='M4.25899 24.5592L11.5014 24.5592C11.7642 24.5592 11.9572 24.3564 11.9572 24.0936C11.9572 23.8398 11.7642 23.637 11.5014 23.637L4.25899 23.637C4.00527 23.637 3.80312 23.8398 3.80312 24.0936C3.80312 24.3564 4.00527 24.5592 4.25899 24.5592ZM7.88438 27.8337C9.79141 27.8337 11.1185 26.9779 11.1896 25.6709L4.5708 25.6709C4.64961 26.9779 5.96758 27.8337 7.88438 27.8337Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0 7.25733C0 11.3915 2.9168 12.9147 3.47139 22.0129C3.48184 22.3615 3.67217 22.5253 4.11436 22.5253L11.646 22.5253C12.0882 22.5253 12.2785 22.3615 12.289 22.0129C12.8436 12.9147 15.7604 11.3915 15.7604 7.25733C15.7604 3.43613 12.2792 0 7.88438 0C3.48115 0 0 3.43613 0 7.25733Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

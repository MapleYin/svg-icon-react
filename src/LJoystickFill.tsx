import React from 'react'

export function LJoystickFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.8549 22.0797' className={className}>
      <path
        d='M13.2468 18.601C14.9423 18.601 16.5048 18.4375 17.9075 18.1265L17.9075 18.9402C17.9075 20.9116 16.1742 22.0797 13.2468 22.0797C10.3096 22.0797 8.58536 20.9116 8.58536 18.9402L8.58536 18.1264C9.98823 18.4375 11.551 18.601 13.2468 18.601Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.6031 9.92637C25.6031 14.2349 20.9717 17.7106 13.2468 17.7106C5.52188 17.7106 0.890435 14.2349 0.890435 9.92637C0.890435 5.60948 5.52188 2.13379 13.2273 2.13379C20.9717 2.13379 25.6031 5.60948 25.6031 9.92637ZM10.9202 6.10059L10.9202 13.423C10.9202 13.5606 11.0245 13.6585 11.1593 13.6585L15.3385 13.6585C15.4873 13.6585 15.5805 13.5647 15.5805 13.4074C15.5805 13.2411 15.4873 13.1486 15.3385 13.1486L11.4172 13.1486L11.4172 6.10059C11.4172 5.96241 11.3031 5.86582 11.1593 5.86582C11.0252 5.86582 10.9202 5.96309 10.9202 6.10059Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export function ChairFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.7108 23.8113' className={className}>
      <path
        d='M3.37305 12.22L3.87325 12.22L3.87325 7.58643L3.37305 7.58643ZM11.4762 12.22L11.9764 12.22L11.9764 7.58643L11.4762 7.58643ZM1.67325 23.8113L1.74258 23.8113C1.97022 23.8113 2.11495 23.6394 2.11495 23.402L2.11495 15.2938L1.30088 15.2938L1.30088 23.402C1.30088 23.6394 1.45469 23.8113 1.67325 23.8113ZM1.88389 17.6346L13.4655 17.6346L13.4655 17.1117L1.88389 17.1117ZM13.6068 23.8113L13.6762 23.8113C13.8947 23.8113 14.0486 23.6394 14.0486 23.402L14.0486 15.2938L13.2345 15.2938L13.2345 23.402C13.2345 23.6394 13.3883 23.8113 13.6068 23.8113ZM3.05576 7.7422L12.2937 7.7422C13.6949 7.7422 14.3897 7.08585 14.3897 5.70548L14.3897 2.03535C14.3897 0.644531 13.6949 0.00771463 12.2937 0.00771463L3.05576 0.00771463C1.65449 0.00771463 0.959766 0.644531 0.959766 2.03535L0.959766 5.70548C0.959766 7.08585 1.65449 7.7422 3.05576 7.7422ZM1.54649 15.4606L13.8036 15.4606C14.8034 15.4606 15.3494 14.9439 15.3494 14.0195L15.3494 13.4044C15.3494 12.4982 14.8034 11.9731 13.8036 11.9731L1.54649 11.9731C0.555079 11.9731 0 12.4982 0 13.4044L0 14.0195C0 14.9439 0.555079 15.4606 1.54649 15.4606Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export function ButtonHorizontalTopPressFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.5934 29.3198' className={className}>
      <path
        d='M27.3487 18.6132C27.3487 21.7563 25.278 23.9799 22.4171 23.9799L5.81496 23.9799C2.93595 23.9799 0.884088 21.7374 0.884088 18.6132C0.884088 18.6027 0.884111 18.5922 0.885365 18.5822C1.87814 20.1797 3.64732 21.1785 5.81496 21.1785L22.4171 21.1785C24.5852 21.1785 26.3547 20.1793 27.3473 18.5811Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M27.3416 15.3711C27.3416 18.2369 25.3211 20.2789 22.4171 20.2789L5.81496 20.2789C2.91095 20.2789 0.890435 18.2369 0.890435 15.3711C0.890435 12.4878 2.91095 10.4451 5.81496 10.4451L11.7721 10.4451L12.9571 11.9295C13.5382 12.6745 14.6653 12.7395 15.2742 11.9477L16.4716 10.4451L22.4171 10.4451C25.3211 10.4451 27.3416 12.4878 27.3416 15.3711Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.5746 11.3855L17.2628 8.00012C17.5127 7.68254 17.3623 7.22433 16.9691 7.22433L14.3801 7.22433L14.3801 1.16358C14.3801 0.990437 14.2703 0.890435 14.1167 0.890435C13.9436 0.890435 13.8527 0.990437 13.8527 1.16358L13.8527 7.22433L11.2714 7.22433C10.8718 7.22433 10.718 7.68957 10.9776 8.00012L13.6658 11.3855C13.8853 11.6733 14.3175 11.7103 14.5746 11.3855Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

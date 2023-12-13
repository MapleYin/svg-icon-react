import React from 'react'

export function SpeakerWave_2CircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM11.5255 6.66055L8.34356 9.76865C8.2584 9.83496 8.18096 9.87266 8.05743 9.87266L5.81231 9.87266C5.30147 9.87266 4.83067 10.3337 4.83067 10.8396L4.83067 13.5226C4.83067 14.055 5.30147 14.5167 5.81231 14.5167L8.05743 14.5167C8.18096 14.5167 8.2584 14.5453 8.34356 14.6214L11.5255 17.6387C11.6438 17.7284 11.7783 17.8463 11.9532 17.8463C12.2167 17.8463 12.3267 17.6435 12.3267 17.4079L12.3267 6.89063C12.3267 6.64532 12.2167 6.4502 11.9609 6.4502C11.7776 6.4502 11.6368 6.55967 11.5255 6.66055ZM17.5654 7.5585C17.4555 7.67276 17.443 7.80704 17.5111 7.9547C18.4175 9.30909 18.836 10.6645 18.836 12.1524C18.836 13.8325 18.3986 15.3101 17.4741 16.3586C17.3962 16.4518 17.4269 16.6237 17.5654 16.7275C17.6949 16.8125 17.8181 16.8175 17.9589 16.6719C18.856 15.6803 19.4099 14.2086 19.4099 12.1524C19.4099 10.5774 18.9041 9.10508 17.9868 7.64278C17.8914 7.47696 17.7124 7.47217 17.5654 7.5585ZM14.9667 9.34287C14.8561 9.43965 14.8331 9.58233 14.9117 9.72227C15.41 10.2818 15.6891 11.1603 15.6891 12.1524C15.6891 13.0874 15.3918 13.9477 14.8747 14.6112C14.8331 14.7142 14.8463 14.8373 14.9667 14.9529C15.0837 15.0581 15.2731 15.0436 15.3881 14.898C15.9706 14.1683 16.2643 13.1429 16.2643 12.1524C16.2643 11.118 15.979 10.1296 15.3881 9.39786C15.2738 9.25225 15.0837 9.24678 14.9667 9.34287Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

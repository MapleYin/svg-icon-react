import React from 'react'

export default function PersonalhotspotCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.50967 10.6518C3.50967 12.6026 4.90118 14.013 6.85206 14.013L8.27627 14.013C8.2624 13.8004 8.26943 13.6084 8.28193 13.4378L6.93087 13.4378C5.26329 13.4378 4.07989 12.2726 4.07989 10.6518C4.07989 9.04913 5.28145 7.86436 6.93087 7.86436L12.2842 7.86436C13.9336 7.86436 15.1352 9.04913 15.1352 10.6518C15.1352 12.2726 13.9518 13.4378 12.2842 13.4378L9.58927 13.4378C9.58106 13.5239 9.56495 13.6419 9.57843 14.013L12.3623 14.013C14.3132 14.013 15.7047 12.6026 15.7047 10.6518C15.7047 8.70088 14.2943 7.28985 12.3623 7.28985L6.85206 7.28985C4.92003 7.28985 3.50967 8.70088 3.50967 10.6518ZM8.63447 13.7047C8.63447 15.6556 10.0448 17.0666 11.9769 17.0666L17.4871 17.0666C19.4282 17.0666 20.8386 15.6556 20.8386 13.7047C20.8386 11.7538 19.4471 10.3525 17.4871 10.3525L16.072 10.3525C16.0852 10.5938 16.0886 10.6638 16.0663 10.9187L17.4083 10.9187C19.085 10.9187 20.2684 12.0923 20.2684 13.7047C20.2684 15.3073 19.0661 16.4921 17.4083 16.4921L12.0641 16.4921C10.4056 16.4921 9.20401 15.3073 9.20401 13.7047C9.20401 12.0923 10.3874 10.9187 12.0641 10.9187L14.7583 10.9187C14.7581 10.8514 14.7833 10.6112 14.7796 10.3525L11.9769 10.3525C10.026 10.3525 8.63447 11.7538 8.63447 13.7047Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

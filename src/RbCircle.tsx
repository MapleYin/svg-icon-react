import React from 'react'

export default function RbCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.5628 17.3058C6.76114 17.3058 6.88223 17.1645 6.88223 16.9745L6.88223 12.7739L8.9208 12.7739L10.8007 17.1063C10.8759 17.2621 10.9649 17.3058 11.1138 17.3058C11.3214 17.3058 11.4389 17.1531 11.4389 16.9968C11.4389 16.9425 11.425 16.882 11.4 16.8377L9.54512 12.5956C10.5705 12.2799 11.341 11.3796 11.341 9.8501C11.341 8.15899 10.3871 7.0003 8.59951 7.0003L6.54395 7.0003C6.34424 7.0003 6.23291 7.12208 6.23291 7.33087L6.23291 16.9745C6.23291 17.1638 6.37217 17.3058 6.5628 17.3058ZM6.88223 12.1624L6.88223 7.59913L8.525 7.59913C9.82354 7.59913 10.6917 8.35812 10.6917 9.86192C10.6917 11.1988 10.0113 12.1624 8.54385 12.1624ZM13.6712 17.278L16.0523 17.278C17.7563 17.278 18.7265 16.1795 18.7265 14.5452C18.7265 13.2687 18.0946 12.1449 16.8565 11.9816L16.8565 11.9321C17.7499 11.7382 18.34 10.6556 18.34 9.57637C18.34 8.17598 17.4864 7.08272 16.0111 7.08272L13.6712 7.08272C13.4806 7.08272 13.3706 7.22608 13.3706 7.41397L13.3706 16.9293C13.3706 17.1276 13.4813 17.278 13.6712 17.278ZM13.9893 11.7315L13.9893 7.6879L15.8798 7.6879C17.0484 7.6879 17.6772 8.4589 17.6772 9.63819C17.6772 10.8886 16.9928 11.7315 15.7424 11.7315ZM13.9893 16.6742L13.9893 12.3362L15.8707 12.3362C17.2587 12.3362 18.0778 13.129 18.0778 14.5091C18.0778 15.8558 17.3123 16.6742 15.9649 16.6742Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

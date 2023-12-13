import React from 'react'

export function MappinSlashCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM0.500206 12.1706C0.500206 18.5963 5.73516 23.8319 12.1608 23.8319C18.5872 23.8319 23.8312 18.5963 23.8312 12.1706C23.8312 5.73516 18.5956 0.500206 12.1602 0.500206C5.73448 0.500206 0.500206 5.73516 0.500206 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.4119 13.7155L12.4119 18.358C12.4119 19.5053 12.2663 19.9286 12.1602 19.9286C12.0631 19.9286 11.9077 19.4851 11.9077 18.358L11.9077 13.2102ZM14.3775 6.80011C14.3775 7.93272 13.5195 8.8505 12.4119 8.99044L12.4119 11.1113L11.9077 10.6068L11.9077 8.99044C10.8105 8.84982 9.95186 7.93204 9.95186 6.80011C9.95186 5.57706 10.9371 4.5918 12.1602 4.5918C13.3832 4.5918 14.3775 5.57706 14.3775 6.80011ZM10.8227 6.22413C10.8415 6.6293 11.1881 6.97589 11.6023 6.97589C12.0089 6.97589 12.3269 6.6293 12.3359 6.22413C12.3548 5.79034 12.0089 5.44376 11.6023 5.44376C11.1881 5.44376 10.8038 5.79034 10.8227 6.22413Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M18.7377 19.1802C18.852 19.2944 19.0478 19.3126 19.1704 19.1802C19.2854 19.038 19.2854 18.8624 19.1704 18.7384L5.58331 5.14151C5.46905 5.01817 5.27325 5.01817 5.14991 5.14151C5.01749 5.27393 5.02725 5.45157 5.14991 5.57423Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

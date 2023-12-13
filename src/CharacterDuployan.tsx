import React from 'react'

export function CharacterDuployan({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1602 10.6452C15.1059 10.6452 17.4838 8.25958 17.4838 5.32364C17.4838 2.38702 15.1059 0.000683665 12.1602 0.000683665C9.22285 0.000683665 6.84629 2.38702 6.84629 5.32364C6.84629 8.25958 9.22422 10.6452 12.1602 10.6452ZM12.1602 10.1464C9.42403 10.1464 7.34581 8.06817 7.34581 5.32364C7.34581 2.57843 9.42403 0.500206 12.1602 0.500206C14.9054 0.500206 16.985 2.57843 16.985 5.32364C16.985 8.06817 14.9054 10.1464 12.1602 10.1464ZM12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

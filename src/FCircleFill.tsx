import React from 'react'

export default function FCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM9.33584 6.69697C9.18721 6.69697 9.09336 6.81651 9.09336 6.99512L9.09336 17.5452C9.09336 17.6868 9.21514 17.7973 9.36377 17.7973C9.53194 17.7973 9.63624 17.6882 9.63624 17.5452L9.63624 12.4637L14.9125 12.4637C15.1165 12.4637 15.1831 12.3097 15.1831 12.1874C15.1831 12.047 15.1165 11.9104 14.9125 11.9104L9.63624 11.9104L9.63624 7.23682L15.3645 7.23682C15.5594 7.23682 15.626 7.09825 15.626 6.96758C15.626 6.82578 15.5594 6.69697 15.3645 6.69697Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
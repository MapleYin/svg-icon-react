import React from 'react'

export function ChevronLeftToLine({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11.6527 19.0311' className={className}>
      <path
        d='M11.2816 18.7895C11.2816 18.7347 11.2663 18.6735 11.2261 18.6235L0.73928 9.22667L0.73928 9.78488L11.2261 0.425693C11.2845 0.357528 11.2913 0.295711 11.2913 0.240924C11.2913 0.110452 11.1704 0 11.0693 0C10.9579 0 10.9338 0.0438482 10.8656 0.0931656L0.654016 9.2044C0.54884 9.30049 0.458214 9.39932 0.458214 9.52882C0.458214 9.64855 0.529992 9.72921 0.635852 9.83507L10.8468 18.9281C10.915 18.9775 10.9579 19.0304 11.0316 19.0304C11.1704 19.0304 11.2816 18.9193 11.2816 18.7895ZM0.487511 18.7838L0.487511 0.247955C0.487511 0.109084 0.377743 0 0.248638 0C0.109768 0 0 0.109084 0 0.247955L0 18.7838C0 18.922 0.109768 19.0304 0.248638 19.0304C0.377743 19.0304 0.487511 18.922 0.487511 18.7838Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

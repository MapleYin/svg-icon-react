import React from 'react'

export default function CylinderFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9598 24.086' className={className}>
      <path
        d='M0 19.7401C0 21.8904 4.08936 24.0664 9.79923 24.0664C15.5091 24.0664 19.5985 21.8904 19.5985 19.7401L19.5985 3.97989C19.5985 1.80059 15.6858 0 9.79923 0C3.92178 0 0 1.80059 0 3.97989ZM0.511533 3.97989C0.511533 2.11915 4.23038 0.534188 9.79923 0.534188C15.3772 0.534188 19.0953 2.11915 19.0953 3.97989C19.0953 5.84562 15.1998 7.43692 9.79923 7.43692C4.39796 7.43692 0.511533 5.84562 0.511533 3.97989Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
import React from 'react'

export function CarWindowRight({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.4505 21.3092' className={className}>
      <path
        d='M3.2001 21.3092L19.8891 21.3092C22.1325 21.3092 23.0892 20.3805 23.0892 18.1768L23.0892 2.71417C23.0892 1.05088 22.0858 0.0474608 20.4204 0.0474608L13.8839 0.0474608C12.4596 0.0474608 11.3912 0.441504 10.0998 1.41494L1.18838 8.19288C0.396778 8.79913 0 9.37062 0 10.6786L0 18.1768C0 20.3805 0.948928 21.3092 3.2001 21.3092ZM1.77736 10.3048C0.873063 10.3048 0.607829 9.29718 1.28117 8.78712L10.3719 1.821C11.6766 0.832431 12.5582 0.558994 13.8839 0.558994L20.3911 0.558994C21.7565 0.558994 22.5776 1.3795 22.5776 2.73848L22.5776 8.1169C22.5776 9.41026 21.6915 10.3048 20.3911 10.3048Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

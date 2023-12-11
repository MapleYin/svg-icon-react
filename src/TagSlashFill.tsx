import React from 'react'

export default function TagSlashFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.3989 28.8229' className={className}>
      <path
        d='M18.9697 22.4461L13.7203 27.7191C12.2727 29.1857 10.6847 29.1961 9.20706 27.7185L1.09934 19.6121C-0.359447 18.154-0.376243 16.5828 1.10774 15.0988L6.39277 9.86468ZM22.979 2.84688L26.0177 5.87647C26.9838 6.84189 27.0386 7.10469 27.0386 8.06543L27.0386 12.8604C27.0386 14.2157 26.9339 14.449 26.2541 15.1288L20.6263 20.7821L8.05883 8.21466L13.7267 2.60137C14.4065 1.92158 14.6398 1.81689 15.9951 1.81689L20.7901 1.81689C21.7508 1.81689 22.0136 1.88076 22.979 2.84688ZM17.7162 9.39268C17.7162 10.0187 18.1916 10.4947 18.8183 10.4947C19.4456 10.4947 19.9301 10.0187 19.9301 9.39268C19.9301 8.75762 19.4456 8.29063 18.8183 8.29063C18.1916 8.29063 17.7162 8.75762 17.7162 9.39268Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M24.1778 26.3774C24.2821 26.4817 24.4377 26.4817 24.5602 26.3774C24.6638 26.2913 24.6645 26.0993 24.5602 25.995L2.84095 4.28555C2.7555 4.19941 2.60891 4.14355 2.4676 4.28555C2.36331 4.38916 2.36331 4.55459 2.4676 4.65821Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

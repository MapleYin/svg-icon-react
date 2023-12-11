import React from 'react'

export default function TagFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.3989 28.8229' className={className}>
      <path
        d='M13.7203 27.7191L26.2541 15.1288C26.9339 14.449 27.0386 14.2157 27.0386 12.8604L27.0386 8.06543C27.0386 7.10469 26.9838 6.84189 26.0177 5.87647L22.979 2.84688C22.0136 1.88076 21.7508 1.81689 20.7901 1.81689L15.9951 1.81689C14.6398 1.81689 14.4065 1.92158 13.7267 2.60137L1.10774 15.0988C-0.376243 16.5828-0.359447 18.154 1.09934 19.6121L9.20706 27.7185C10.6847 29.1961 12.2727 29.1857 13.7203 27.7191ZM18.8183 10.4947C18.1916 10.4947 17.7162 10.0187 17.7162 9.39268C17.7162 8.75762 18.1916 8.29063 18.8183 8.29063C19.4456 8.29063 19.9301 8.75762 19.9301 9.39268C19.9301 10.0187 19.4456 10.4947 18.8183 10.4947Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

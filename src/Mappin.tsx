import React from 'react'

export function Mappin({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6.64719 23.6594' className={className}>
      <path
        d='M6.28586 3.25821C6.28586 4.94073 5.02082 6.3087 3.36535 6.42052L3.36535 22.3095C3.36535 23.268 3.25509 23.6594 3.14259 23.6594C3.03077 23.6594 2.91914 23.2575 2.91914 22.3095L2.91914 6.42052C1.26436 6.30802 0 4.94073 0 3.25821C0 1.52519 1.38165 0.105169 3.14259 0.105169C4.89513 0.105169 6.28586 1.52519 6.28586 3.25821ZM1.021 2.19483C1.021 2.77901 1.52501 3.27325 2.09874 3.27325C2.6836 3.27325 3.17648 2.77901 3.17648 2.19483C3.17648 1.61064 2.6836 1.11709 2.09874 1.11709C1.52501 1.11709 1.021 1.61064 1.021 2.19483Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

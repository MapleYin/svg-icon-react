import React from 'react'

export function DecreaseQuotelevel({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10.909 22.8383' className={className}>
      <path
        d='M0.257231 22.8383C0.425593 22.8383 0.52286 22.7397 0.52286 22.5804L0.52286 0.271293C0.52286 0.112013 0.425593 0.00497997 0.257231 0.00497997C0.0972676 0.00497997 0 0.112013 0 0.271293L0 22.5804C0 22.7397 0.0972676 22.8383 0.257231 22.8383Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.02619 14.4134C9.73322 14.8819 10.5477 14.6128 10.5477 13.7482L10.5477 9.1251C10.5477 8.21162 9.7632 7.95156 9.02619 8.44941L5.79561 10.6466C5.23009 11.0427 5.21895 11.8501 5.79561 12.2469Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

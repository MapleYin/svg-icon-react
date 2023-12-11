import React from 'react'

export default function Divide({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9462 15.7135' className={className}>
      <path
        d='M9.79209 2.06818C10.33 2.06818 10.8102 1.59708 10.8102 1.07872C10.8102 0.540823 10.33 0.0424808 9.79209 0.0424808C9.25557 0.0424808 8.78379 0.540823 8.78379 1.07872C8.78379 1.59708 9.25557 2.06818 9.79209 2.06818ZM9.79209 15.7135C10.33 15.7135 10.8102 15.2515 10.8102 14.6961C10.8102 14.1952 10.33 13.6878 9.79209 13.6878C9.25557 13.6878 8.78379 14.1952 8.78379 14.6961C8.78379 15.2515 9.25557 15.7135 9.79209 15.7135ZM0.248638 8.12912L19.3362 8.12912C19.4724 8.12912 19.5849 8.01661 19.5849 7.88048C19.5849 7.74366 19.4724 7.64092 19.3362 7.64092L0.248638 7.64092C0.112503 7.64092 0 7.74366 0 7.88048C0 8.01661 0.112503 8.12912 0.248638 8.12912Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

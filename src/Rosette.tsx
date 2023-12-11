import React from 'react'

export default function Rosette({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.9917 28.3496' className={className}>
      <path
        d='M0 9.32178C0 11.7926 0.967776 14.0367 2.53174 15.7071L2.53243 26.5542C2.53243 26.8368 2.70167 27.0662 2.97061 27.0662C3.28087 27.0662 3.46554 26.8675 3.64181 26.6828L8.24063 22.1035C8.74112 21.5946 9.0629 21.4243 9.3295 21.4243C9.5961 21.4243 9.89971 21.5946 10.4093 22.1035L14.9893 26.6828C15.2032 26.8961 15.3795 27.0662 15.6604 27.0662C15.958 27.0662 16.1182 26.8368 16.1182 26.5542L16.1182 15.6953C17.6808 14.0256 18.6297 11.7737 18.6304 9.32178C18.6311 4.19883 14.449 0 9.31973 0C4.18067 0 0 4.19883 0 9.32178ZM0.503818 9.32178C0.503818 4.45313 4.46016 0.510166 9.31133 0.510166C14.1709 0.510166 18.1175 4.45313 18.1182 9.32178C18.1188 14.1995 14.1709 18.1613 9.31133 18.1606C4.46016 18.16 0.503818 14.1995 0.503818 9.32178Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

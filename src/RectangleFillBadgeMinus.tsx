import React from 'react'

export default function RectangleFillBadgeMinus({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 43.1504 28.8738' className={className}>
      <path
        d='M35.917 6.63614L35.917 22.2202C35.917 24.2648 34.8103 25.4078 32.7351 25.4078L12.7961 25.4078C13.377 24.4095 13.7078 23.2514 13.7078 22.0199C13.7078 18.2599 10.622 15.171 6.863 15.1665L6.863 6.63614C6.863 4.55391 7.96974 3.44786 10.0443 3.44786L32.7351 3.44786C34.8103 3.44786 35.917 4.59092 35.917 6.63614Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.809 22.0199C12.809 25.2953 10.1182 27.9841 6.85391 27.9841C3.59669 27.9841 0.889751 25.2967 0.889751 22.0199C0.889751 18.7627 3.59669 16.0558 6.85391 16.0558C10.13 16.0558 12.809 18.7439 12.809 22.0199ZM3.39103 21.5613C3.14571 21.5613 2.93243 21.776 2.93243 22.0199C2.93243 22.2646 3.14571 22.4785 3.39103 22.4785L10.2986 22.4785C10.5342 22.4785 10.7475 22.2646 10.7475 22.0199C10.7475 21.776 10.5342 21.5613 10.2986 21.5613Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

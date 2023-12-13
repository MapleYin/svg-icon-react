import React from 'react'

export function RoadLaneArrowtriangle_2Inward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36.6686 17.5668' className={className}>
      <path
        d='M4.23722 17.5591L5.39943 17.5591C5.64503 17.5591 5.78566 17.4736 5.88107 17.2124L12.7972 0.136625C12.8347 0.0568378 12.7686 0 12.679 0L12.3371 0C12.2392 0 12.1767 0.0116223 12.1476 0.106839L4.00225 17.1201C3.89092 17.3505 3.97862 17.5591 4.23722 17.5591ZM30.9085 17.5591L32.0798 17.5591C32.3377 17.5591 32.4163 17.3505 32.305 17.1201L24.1604 0.106839C24.1306 0.0116223 24.0688 0 23.9701 0L23.6282 0C23.5478 0 23.4726 0.0568378 23.5101 0.136625L30.4262 17.2124C30.5307 17.4736 30.672 17.5591 30.9085 17.5591Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.627152 9.70108L5.17315 6.94854C5.49161 6.75411 5.47207 6.34707 5.17315 6.16172L0.617386 3.38057C0.353419 3.22178 0 3.31358 0 3.71084L0 9.37217C0 9.77012 0.372267 9.85987 0.627152 9.70108ZM35.6808 9.70108C35.9364 9.85919 36.3073 9.77012 36.3073 9.37217L36.3073 3.71084C36.3073 3.31358 35.9545 3.22246 35.699 3.38057L31.1341 6.16172C30.8352 6.33868 30.8163 6.75342 31.1341 6.94854Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

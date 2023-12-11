import React from 'react'

export default function BackpackCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM10.4266 4.72364C7.79288 5.08204 6.98506 6.51056 6.81973 10.1647C6.76114 11.7015 6.74161 13.7552 6.71231 16.586C6.69278 18.8648 7.74317 19.9711 10.0095 19.9711L14.3108 19.9711C16.5772 19.9711 17.6366 18.8648 17.6178 16.586C17.5878 13.7552 17.5689 11.7015 17.5097 10.1647C17.345 6.51056 16.5184 5.08204 13.8658 4.72364C13.7382 3.84561 13.0366 3.26963 12.1602 3.26963C11.2558 3.26963 10.5542 3.84561 10.4266 4.72364ZM15.2307 16.2781C15.2307 16.8536 14.8603 17.2436 14.2841 17.2436L10.046 17.2436C9.46914 17.2436 9.09942 16.8536 9.09942 16.2781L9.09942 14.6781L15.2307 14.6781ZM15.2307 13.1102L15.2307 14.0422L9.09942 14.0422L9.09942 13.1102C9.09942 12.5354 9.46914 12.1454 10.046 12.1454L14.2841 12.1454C14.8603 12.1454 15.2307 12.5354 15.2307 13.1102ZM13.2623 4.66866C12.9212 4.63096 12.5508 4.63028 12.1602 4.63028C11.7605 4.63028 11.4089 4.63096 11.0671 4.66866C11.1877 4.16905 11.579 3.87813 12.1602 3.87813C12.7134 3.87813 13.1138 4.16905 13.2623 4.66866Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

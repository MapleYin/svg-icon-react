import React from 'react'

export default function RJoystickTiltLeftFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.1974 25.1278' className={className}>
      <path
        d='M28.9673 12.559C28.9673 19.4885 23.3482 25.1075 16.418 25.1075C10.606 25.1075 5.72647 21.1658 4.30844 15.8081C4.47591 15.7587 4.6316 15.6776 4.76495 15.5681C6.08634 20.7615 10.7896 24.596 16.418 24.596C23.0828 24.596 28.4557 19.2049 28.4557 12.559C28.4557 5.88448 23.0737 0.511533 16.418 0.511533C10.8034 0.511533 6.08865 4.33517 4.76505 9.54391C4.63164 9.43483 4.47588 9.3542 4.30828 9.3051C5.72821 3.93178 10.6198 0 16.418 0C23.3385 0 28.9673 5.60088 28.9673 12.559Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.57312 10.246L1.11638 12.1059C0.812473 12.338 0.832005 12.7709 1.11638 13.003L3.57381 14.8636C3.89705 15.0948 4.34364 14.9499 4.34364 14.5578L4.34364 10.5511C4.34364 10.1604 3.89773 10.0134 3.57312 10.246Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M16.418 22.0463C21.6611 22.0463 25.906 17.8021 25.906 12.559C25.906 7.30548 21.6611 3.071 16.418 3.071C11.1652 3.071 6.93074 7.30548 6.93074 12.559C6.93074 17.8021 11.1652 22.0463 16.418 22.0463ZM14.0091 17.3278C13.8813 17.3278 13.7323 17.211 13.7323 17.0819L13.7323 8.00968C13.7323 7.86241 13.8443 7.74356 13.9811 7.74356L16.9093 7.74356C18.6022 7.74356 19.7626 8.88595 19.7626 10.4919C19.7626 11.9206 18.9066 12.9431 17.5218 13.1911L19.6703 16.8423C19.7434 16.9656 19.7664 17.0338 19.7664 17.1124C19.7664 17.2424 19.688 17.3278 19.5462 17.3278C19.4112 17.3278 19.3487 17.2806 19.2687 17.1449L17.0227 13.2368L14.262 13.2368L14.262 17.0819C14.262 17.2117 14.1661 17.3278 14.0091 17.3278ZM14.262 12.7156L16.9871 12.7156C18.3286 12.7156 19.272 11.8091 19.272 10.494C19.272 9.15089 18.3356 8.25842 16.9801 8.25842L14.262 8.25842Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

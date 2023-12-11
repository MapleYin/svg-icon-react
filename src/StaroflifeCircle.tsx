import React from 'react'

export default function StaroflifeCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.79873 9.09893C6.49961 9.6958 6.56094 9.92022 7.12647 10.2271L10.5028 12.0659L7.10762 14.0408C6.54141 14.3504 6.48076 14.5832 6.8085 15.1787L6.84756 15.2275C7.15713 15.8607 7.36338 15.9221 7.96661 15.5378L11.2712 13.6599L11.2712 17.4437C11.2712 18.1096 11.4356 18.2727 12.1036 18.2727L12.209 18.2727C12.8756 18.2727 13.0491 18.1096 13.0491 17.4437L13.0491 13.6599L16.3446 15.5378C16.9408 15.9144 17.1555 15.8524 17.4728 15.2275L17.5027 15.1787C17.8193 14.5825 17.7587 14.3763 17.2036 14.0408L13.8084 12.0659L17.1939 10.2271C17.7594 9.91045 17.8116 9.67696 17.5216 9.09893L17.4728 9.0208C17.175 8.40508 16.9597 8.35215 16.3523 8.71055L13.0491 10.5885L13.0491 6.79561C13.0491 6.1583 12.8756 5.98613 12.209 5.98613L12.1036 5.98613C11.4356 5.98613 11.2712 6.1583 11.2712 6.79561L11.2712 10.5885L7.96797 8.71055C7.37041 8.32559 7.16416 8.37715 6.84756 9.0208Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
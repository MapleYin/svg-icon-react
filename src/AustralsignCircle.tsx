import React from 'react'

export default function AustralsignCircle({
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
        d='M8.0459 14.2801C8.0459 14.4382 8.16084 14.5733 8.35732 14.5733L9.20644 14.5733L8.21338 17.3032C8.20088 17.3603 8.18135 17.395 8.18135 17.4375C8.18135 17.6458 8.31084 17.7194 8.45831 17.7194C8.58213 17.7194 8.66212 17.6533 8.71505 17.5372L9.78965 14.5733L14.5565 14.5733L15.6312 17.5288C15.6932 17.654 15.7718 17.7194 15.8879 17.7194C16.0354 17.7194 16.1649 17.6458 16.1649 17.4375C16.1649 17.395 16.1726 17.3603 16.1419 17.3032L15.1391 14.5733L15.9525 14.5733C16.149 14.5733 16.264 14.4382 16.264 14.2801C16.264 14.122 16.149 13.9868 15.9525 13.9868L14.9321 13.9868L14.4702 12.7191L15.9525 12.7191C16.149 12.7191 16.264 12.584 16.264 12.4259C16.264 12.2587 16.149 12.1326 15.9525 12.1326L14.2438 12.1326L12.4726 7.25908C12.4085 7.08643 12.2992 7.00576 12.1776 7.00576C12.0463 7.00576 11.937 7.08574 11.882 7.25908L10.1018 12.1326L8.35732 12.1326C8.16084 12.1326 8.0459 12.2587 8.0459 12.4259C8.0459 12.584 8.16084 12.7191 8.35732 12.7191L9.87529 12.7191L9.41338 13.9868L8.35732 13.9868C8.16084 13.9868 8.0459 14.122 8.0459 14.2801ZM10.0043 13.9868L10.4655 12.7191L13.8897 12.7191L14.351 13.9868ZM10.6899 12.1326L12.1776 8.02667L13.6563 12.1326Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export function InfoBubbleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 25.6125' className={className}>
      <path
        d='M26.4199 5.89513L26.4199 17.0912C26.4199 19.7322 24.6743 21.5078 22.002 21.5078L11.1655 21.5078L6.57775 25.3921C6.44298 25.4969 6.28419 25.6125 6.09972 25.6125C5.87432 25.6125 5.68555 25.4358 5.68555 25.1427L5.68555 21.5078L4.41798 21.5078C1.74492 21.5078 0 19.7699 0 17.0912L0 5.89513C0 3.21641 1.74492 1.47715 4.41798 1.47715L22.002 1.47715C24.6743 1.47715 26.4199 3.24434 26.4199 5.89513ZM11.0898 9.07657C10.9235 9.07657 10.8283 9.19972 10.8283 9.33741C10.8283 9.4674 10.9235 9.59826 11.0898 9.59826L13.2163 9.59826L13.2163 17.1859L11.0412 17.1859C10.8749 17.1859 10.779 17.3091 10.779 17.4461C10.779 17.5761 10.8749 17.7069 11.0412 17.7069L15.8605 17.7069C16.0268 17.7069 16.1136 17.5761 16.1136 17.4461C16.1136 17.3091 16.0268 17.1859 15.8605 17.1859L13.6854 17.1859L13.6854 9.31407C13.6854 9.19405 13.5838 9.07657 13.4288 9.07657ZM12.4836 5.80684C12.4836 6.21573 12.8271 6.52286 13.2275 6.52286C13.6364 6.52286 13.9799 6.21573 13.9799 5.80684C13.9799 5.40635 13.6364 5.06221 13.2275 5.06221C12.8271 5.06221 12.4836 5.40635 12.4836 5.80684Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

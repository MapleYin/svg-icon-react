import React from 'react'

export default function MessageCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM4.99219 11.9008C4.99219 13.932 6.20723 15.819 8.19395 16.7934C8.31456 16.8352 8.35088 16.9453 8.27344 17.073C8.01182 17.4936 7.67774 18.0134 7.40498 18.3259C7.13516 18.6166 7.21465 18.9464 7.6337 18.9464C8.29141 18.9464 9.62725 18.4826 10.8423 17.8026C10.9602 17.742 11.0201 17.7218 11.1114 17.7225C11.4568 17.7231 11.8036 17.7602 12.1608 17.7602C16.185 17.7602 19.3302 15.115 19.3302 11.9008C19.3302 8.68584 16.185 6.04981 12.1608 6.04981C8.14581 6.04981 4.99219 8.68584 4.99219 11.9008Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
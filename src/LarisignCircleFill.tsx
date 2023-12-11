import React from 'react'

export default function LarisignCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM12.9464 5.9877L12.9464 7.52099C12.6973 7.47353 12.4475 7.45468 12.1886 7.45468C11.9737 7.45468 11.7673 7.46513 11.5608 7.50283L11.5608 5.9877C11.5608 5.79189 11.4264 5.6749 11.2669 5.6749C11.1081 5.6749 10.9729 5.79189 10.9729 5.9877L10.9729 7.61914C9.3084 8.13086 8.1415 9.72295 8.1415 12.1907C8.1415 14.4452 9.41621 16.2022 11.0632 16.9887L8.4584 16.9887C8.26826 16.9887 8.15761 17.1168 8.15761 17.2692C8.15761 17.4237 8.27597 17.5512 8.45771 17.5512L15.7035 17.5512C15.895 17.5512 16.0043 17.4231 16.0043 17.2692C16.0043 17.1168 15.8943 16.9887 15.7035 16.9887L13.4536 16.9887C10.8312 16.9887 8.68838 14.9513 8.68838 12.1374C8.68838 10.0926 9.59629 8.6959 10.9729 8.17012L10.9729 11.8208C10.9729 12.0166 11.1081 12.1329 11.2669 12.1329C11.4445 12.1329 11.5608 12.0166 11.5608 11.8208L11.5608 8.02539C11.7673 7.98701 11.9737 7.97657 12.1879 7.97657C12.4481 7.97657 12.698 8.00518 12.9464 8.06172L12.9464 11.8208C12.9464 12.0166 13.0809 12.1329 13.2403 12.1329C13.4082 12.1329 13.5252 12.0166 13.5252 11.8208L13.5252 8.22735C14.7756 8.76085 15.6563 10.0487 15.6576 11.8342C15.6492 12.0109 15.778 12.1146 15.9255 12.1146C16.0807 12.1146 16.2011 11.9928 16.2011 11.8258C16.1543 9.65098 15.088 8.19717 13.5252 7.66728L13.5252 5.9877C13.5252 5.79189 13.3991 5.6749 13.2403 5.6749C13.0809 5.6749 12.9464 5.79189 12.9464 5.9877Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
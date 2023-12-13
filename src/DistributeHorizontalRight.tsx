import React from 'react'

export function DistributeHorizontalRight({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.6405 26.3358' className={className}>
      <path
        d='M1.52462 23.8448L7.02402 23.8448C7.92969 23.8448 8.55772 23.2161 8.55772 22.3266L8.55772 4.02735C8.55772 3.1378 7.92969 2.50908 7.02402 2.50908L1.52462 2.50908C0.62803 2.50908 0 3.1378 0 4.02735L0 22.3266C0 23.2161 0.62803 23.8448 1.52462 23.8448ZM1.54893 23.322C0.949129 23.322 0.52286 22.8957 0.52286 22.2875L0.52286 4.06573C0.52286 3.45821 0.949129 3.03194 1.54893 3.03194L6.99902 3.03194C7.60859 3.03194 8.03486 3.45821 8.03486 4.06573L8.03486 22.2875C8.03486 22.8957 7.60859 23.322 6.99902 23.322ZM18.1031 19.8611L23.6026 19.8611C24.4991 19.8611 25.1272 19.2414 25.1272 18.3421L25.1272 8.01114C25.1272 7.11251 24.4991 6.49287 23.6026 6.49287L18.1031 6.49287C17.2066 6.49287 16.5785 7.11251 16.5785 8.01114L16.5785 18.3421C16.5785 19.2414 17.2066 19.8611 18.1031 19.8611ZM18.1281 19.3466C17.5186 19.3466 17.1014 18.921 17.1014 18.3128L17.1014 8.04112C17.1014 7.43292 17.5186 7.01573 18.1281 7.01573L23.5782 7.01573C24.1871 7.01573 24.6043 7.43292 24.6043 8.04112L24.6043 18.3128C24.6043 18.921 24.1871 19.3466 23.5782 19.3466Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.4357 26.3358C11.5838 26.3358 11.7006 26.2126 11.7006 26.0652L11.7006 0.288773C11.7006 0.14131 11.5838 0.0181639 11.4357 0.0181639C11.2882 0.0181639 11.1714 0.14131 11.1714 0.288773L11.1714 26.0652C11.1714 26.2126 11.2882 26.3358 11.4357 26.3358ZM28.0149 26.3358C28.1623 26.3358 28.2791 26.2126 28.2791 26.0652L28.2791 0.288773C28.2791 0.14131 28.1623 0.0181639 28.0149 0.0181639C27.8667 0.0181639 27.7499 0.14131 27.7499 0.288773L27.7499 26.0652C27.7499 26.2126 27.8667 26.3358 28.0149 26.3358Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

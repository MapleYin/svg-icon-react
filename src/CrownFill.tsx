import React from 'react'

export default function CrownFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.0944 21.7467' className={className}>
      <path
        d='M5.28027 17.7712L5.61504 19.1194C6.04746 20.8888 6.88076 21.5727 8.546 21.5727L20.2234 21.5727C21.8893 21.5727 22.7226 20.8902 23.155 19.1194L23.4898 17.7712ZM5.05381 16.8626L23.7078 16.8626L25.7212 8.74932L24.8153 8.04326L21.0496 10.2827C20.3161 10.7328 19.6914 10.6345 19.1714 9.96095L15.0289 4.84833L13.7418 4.85605L9.41221 10.1565C8.9669 10.7092 8.40919 10.7335 7.85099 10.3847L3.90644 8.03897L3.05517 8.76562ZM2.5294 8.92921C3.92208 8.92921 5.06719 7.79318 5.06719 6.39982C5.06719 5.00782 3.92208 3.86202 2.5294 3.86202C1.13604 3.86202 0 5.00714 0 6.39982C0 7.79318 1.13672 8.92921 2.5294 8.92921ZM14.3847 5.05743C15.778 5.05743 16.9134 3.92208 16.9134 2.52871C16.9134 1.13604 15.778 0 14.3847 0C12.9913 0 11.8553 1.13535 11.8553 2.52871C11.8553 3.92208 12.992 5.05743 14.3847 5.05743ZM26.2036 8.92921C27.5963 8.92921 28.733 7.79318 28.733 6.39982C28.733 5.00714 27.597 3.86202 26.2036 3.86202C24.8103 3.86202 23.6658 5.00782 23.6658 6.39982C23.6658 7.79318 24.8103 8.92921 26.2036 8.92921Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
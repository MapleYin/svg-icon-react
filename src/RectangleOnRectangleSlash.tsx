import React from 'react'

export default function RectangleOnRectangleSlash({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.2451 28.9974' className={className}>
      <path
        d='M2.29588 3.47241C1.11478 3.75243 0.512217 4.63201 0.512217 6.07556L0.512217 18.233C0.512217 20.0116 1.42696 20.9341 3.21124 20.9341L5.39239 20.9341L5.39239 21.4365L3.18194 21.4365C1.10674 21.4365 0 20.3311 0 18.258L0 6.05056C0 4.46903 0.644505 3.445 1.87401 3.05069ZM24.4914 6.05056L24.4914 7.59725L23.9799 7.59725L23.9799 6.07556C23.9799 4.29695 22.9911 3.3745 21.2718 3.3745L5.52127 3.3745L5.00957 2.86296L21.3102 2.86296C23.3847 2.86296 24.4914 4.00603 24.4914 6.05056Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.19331 8.36803C6.3405 8.75998 5.90392 9.57807 5.90392 10.8008L5.90392 22.9589C5.90392 24.7368 6.82775 25.6593 8.61271 25.6593L24.4909 25.6593L25.0026 26.1708L8.57364 26.1708C6.50821 26.1708 5.39239 25.0563 5.39239 22.9832L5.39239 10.7758C5.39239 9.40863 5.87795 8.46204 6.80427 7.97914ZM29.8838 10.7758L29.8838 22.9832C29.8838 24.504 29.2711 25.526 28.1026 25.9487L27.6804 25.5266C28.7661 25.2179 29.3723 24.3504 29.3723 22.9589L29.3723 10.8008C29.3723 9.02216 28.3828 8.0997 26.6726 8.0997L10.248 8.0997L9.74535 7.59725L26.7025 7.59725C28.7764 7.59725 29.8838 8.74031 29.8838 10.7758Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M28.1094 27.9983C28.2137 28.1026 28.3784 28.1026 28.4918 27.9983C28.6324 27.8654 28.5961 27.73 28.4918 27.625L1.93223 1.0654C1.8461 0.979269 1.69112 0.942257 1.54912 1.0654C1.44551 1.16902 1.44551 1.33445 1.54912 1.44715Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export default function CameraFilters({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.4891 22.9756' className={className}>
      <path
        d='M4.74113 9.09982C2.25302 10.1632 0.510849 12.6363 0.510849 15.4983C0.510849 19.3523 3.62335 22.455 7.46827 22.455C9.04872 22.455 10.5031 21.9297 11.6639 21.0391C11.7873 21.1623 11.9206 21.2748 12.0619 21.3774C10.7967 22.3799 9.19921 22.9756 7.46827 22.9756C3.35791 22.9756 0 19.6177 0 15.4983C0 12.3821 1.93056 9.69822 4.65767 8.58634C4.6733 8.76147 4.70335 8.93206 4.74113 9.09982ZM14.9352 15.4983C14.9352 17.696 13.9796 19.677 12.4583 21.0407C12.3167 20.9432 12.1839 20.8346 12.0603 20.716C13.513 19.4452 14.4243 17.5765 14.4243 15.4983C14.4243 15.2098 14.4068 14.9255 14.3709 14.6469L14.8613 14.4668C14.9109 14.8035 14.9352 15.1482 14.9352 15.4983ZM14.7733 13.957C14.6158 14.025 14.4549 14.0867 14.2884 14.1365C13.9878 12.6135 13.1871 11.2716 12.0637 10.2876C12.1869 10.1692 12.3191 10.0607 12.4602 9.96331C13.6151 10.9978 14.4429 12.3876 14.7733 13.957ZM12.0637 9.62685C11.9229 9.72888 11.7901 9.84076 11.6671 9.96327C10.5033 9.06912 9.04614 8.5422 7.46827 8.5422C6.68173 8.5422 5.92585 8.67321 5.22387 8.92044L5.1456 8.40702C5.87586 8.16134 6.65743 8.03067 7.46827 8.03067C9.20196 8.03067 10.7993 8.62581 12.0637 9.62685Z'
        fill={color}
        fillOpacity='0.2125'
      />
      <path
        d='M24.1278 15.4983C24.1278 19.6177 20.7698 22.9756 16.6602 22.9756C12.5407 22.9756 9.1919 19.6177 9.1919 15.4983C9.1919 15.1522 9.21565 14.8114 9.26989 14.4802L9.75902 14.6599C9.72055 14.9338 9.70343 15.2141 9.70343 15.4983C9.70343 19.3523 12.8062 22.455 16.6602 22.455C20.5051 22.455 23.6162 19.3334 23.6162 15.4983C23.6162 12.6108 21.8551 10.1366 19.3534 9.08433C19.3898 8.91713 19.4193 8.74739 19.4346 8.5732C22.1806 9.67514 24.1278 12.3687 24.1278 15.4983ZM18.9464 8.39373L18.8682 8.90677C18.1759 8.66844 17.4325 8.5422 16.6602 8.5422C13.2712 8.5422 10.4631 10.9629 9.83699 14.1488L9.35067 13.971C10.0571 10.588 13.0652 8.03067 16.6602 8.03067C17.4573 8.03067 18.2262 8.15701 18.9464 8.39373Z'
        fill={color}
        fillOpacity='0.425'
      />
      <path
        d='M12.0457 15.0231C16.1645 15.0231 19.5126 11.6652 19.5126 7.55479C19.5126 3.43604 16.1645 0.0878906 12.0457 0.0878906C7.93536 0.0878906 4.57744 3.43604 4.57744 7.55479C4.57744 11.6652 7.93536 15.0231 12.0457 15.0231ZM12.0457 14.5122C8.20079 14.5122 5.08829 11.3997 5.08829 7.55479C5.08829 3.72032 8.20079 0.59874 12.0457 0.59874C15.8802 0.59874 19.0018 3.70216 19.0018 7.55479C19.0018 11.3899 15.8984 14.5122 12.0457 14.5122Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

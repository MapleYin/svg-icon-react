import React from 'react'

export default function Paintbrush({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.0567 28.1285' className={className}>
      <path
        d='M1.296 26.8327C3.0548 28.5363 5.07365 28.574 6.77589 26.8634C8.7505 24.8979 10.2683 20.6595 11.7446 19.087L15.1307 22.4738C15.6742 23.0089 16.4054 22.9907 16.9483 22.4479L18.2935 21.1111C18.8357 20.5675 18.8357 19.8482 18.2914 19.313L8.82482 9.83731C8.26173 9.28331 7.56964 9.30079 7.02608 9.84434L5.68086 11.1805C5.13799 11.7234 5.10098 12.4622 5.64522 12.9981L9.04941 16.3925C7.47832 17.8507 3.23995 19.3873 1.26534 21.334C-0.436225 23.0635-0.417377 25.0823 1.296 26.8327ZM5.9923 11.5758L7.4046 10.1655C7.7087 9.86144 8.11544 9.86984 8.41954 10.1649L17.9632 19.7176C18.2673 20.0217 18.2484 20.4103 17.9534 20.7241L16.562 22.126C16.2391 22.4496 15.8582 22.4315 15.5541 22.1267L12.2243 18.8228C11.9581 18.5475 11.6383 18.495 11.3589 18.7912C9.95841 20.1638 8.03712 24.8659 6.39415 26.4998C4.94366 27.988 3.18409 27.9594 1.66662 26.4524C0.17775 24.9537 0.140739 23.1746 1.62824 21.7157C3.27121 20.0728 7.96495 18.1606 9.33683 16.7782C9.62394 16.4716 9.58126 16.179 9.31505 15.9044L5.9923 12.583C5.6882 12.2782 5.6882 11.8708 5.9923 11.5758ZM3.77482 25.6776C4.51476 25.6776 5.10685 25.0945 5.10685 24.3267C5.10685 23.5783 4.51476 22.9765 3.77482 22.9765C3.00763 22.9765 2.40577 23.5783 2.40577 24.3267C2.40577 25.0945 3.00763 25.6776 3.77482 25.6776ZM18.3286 19.4763L23.8729 13.932C24.9662 12.8303 24.9739 11.372 23.8785 10.2766L14.3177 0.715046C13.2843-0.318355 11.8093 0.0246152 11.4697 1.60606C10.5744 5.66242 9.98155 7.57598 8.50889 9.61691L8.89611 9.98527C10.4299 7.638 10.9277 6.32394 11.9361 1.78498C12.2215 0.505585 13.3013 0.403143 13.8602 0.961345L23.5242 10.6338C24.386 11.4963 24.386 12.6778 23.5074 13.5565L17.963 19.1197ZM17.1382 12.3356C17.8023 12.9989 21.4839 10.9579 22.7534 9.35705L19.9709 6.59338C19.7456 8.8297 18.5744 10.4403 17.1766 11.8564C17.0112 12.0133 17.0308 12.2275 17.1382 12.3356Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

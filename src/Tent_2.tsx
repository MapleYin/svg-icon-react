import React from 'react'

export function Tent_2({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.6391 24.251' className={className}>
      <path
        d='M9.56429 2.85254L14.874 13.5586L14.5816 14.1481L9.0638 3.01612C9.00726 2.93097 8.94027 2.88282 8.87396 2.88282C8.80697 2.88282 8.74066 2.93097 8.6932 3.01612L0.571327 19.3834C0.486171 19.5726 0.523866 19.7065 0.779334 19.7065L4.99226 19.7065L8.57435 11.4234C8.63636 11.3071 8.74085 11.2444 8.87396 11.2444C9.01615 11.2444 9.11087 11.3071 9.17357 11.4234L12.322 18.7037L11.569 20.2217L0.727375 20.2217C0.116531 20.2217-0.202122 19.763 0.140164 19.0875L8.18362 2.85254C8.32923 2.55225 8.59954 2.40117 8.87396 2.40117C9.14769 2.40117 9.418 2.55225 9.56429 2.85254ZM7.55505 19.7065L10.1922 19.7065L8.87396 13.1488Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.0157 24.247L33.3642 24.247C34.1445 24.247 34.5288 23.6963 34.0888 22.8178L23.0494 0.543363C22.8738 0.171291 22.5421 0 22.1896 0C21.828 0 21.5061 0.171291 21.3298 0.543363L10.2813 22.8178C9.8511 23.6963 10.2354 24.247 11.0157 24.247ZM11.1089 23.7221C10.6979 23.7221 10.5932 23.3892 10.7286 23.1178L21.821 0.736632C21.9823 0.40509 22.3885 0.40509 22.5581 0.736632L33.6513 23.1178C33.8146 23.4632 33.7378 23.7221 33.4385 23.7221ZM16.691 23.9877L20.3102 23.9877L22.1896 14.6028L24.0697 23.9877L27.6881 23.9877L22.5853 12.2372C22.5199 12.0777 22.3736 11.9941 22.1896 11.9941C22.0056 11.9941 21.86 12.0777 21.7939 12.2372Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

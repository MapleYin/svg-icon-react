import React from 'react'

export function Eyes({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.1263 21.7256' className={className}>
      <path
        d='M6.13956 21.7256C9.57237 21.7256 12.2798 17.1226 12.2798 10.8579C12.2798 4.5835 9.57237 0 6.13956 0C2.69766 0 0 4.5835 0 10.8579C0 17.1226 2.69766 21.7256 6.13956 21.7256ZM6.13956 21.1914C2.98057 21.2012 0.563484 16.7397 0.563484 10.8579C0.563484 5.02422 2.96241 0.553719 6.13956 0.534188C9.32852 0.524422 11.7456 4.97608 11.7456 10.8579C11.7456 16.7195 9.32852 21.1719 6.13956 21.1914ZM3.13907 14.9423C5.01798 14.9423 6.27686 13.6157 6.27686 11.6294C6.27686 9.65352 5.01798 8.32627 3.13907 8.32627C1.25948 8.32627 0.00127375 9.65352 0.00127375 11.6294C0.00127375 13.6157 1.25948 14.9423 3.13907 14.9423ZM2.16114 11.3834C1.74053 11.3248 1.46641 10.8429 1.58223 10.3323C1.69942 9.82246 2.07393 9.45908 2.47569 9.53721C2.88858 9.61602 3.13409 10.0973 3.03575 10.5883C2.93809 11.0988 2.55518 11.4524 2.16114 11.3834ZM20.6247 21.7256C24.0666 21.7256 26.765 17.1226 26.765 10.8579C26.765 4.5835 24.0666 0 20.6247 0C17.1828 0 14.4852 4.5835 14.4852 10.8579C14.4852 17.1226 17.1828 21.7256 20.6247 21.7256ZM20.6247 21.1907C17.4735 21.2089 15.0473 16.7391 15.0473 10.8579C15.0473 5.02422 17.4546 0.553719 20.6247 0.534871C23.8123 0.516707 26.2294 4.96836 26.2294 10.8579C26.2294 16.7202 23.8123 21.1719 20.6247 21.1907ZM17.6235 14.9423C19.5018 14.9423 20.762 13.6157 20.762 11.6294C20.762 9.65352 19.5018 8.32627 17.6235 8.32627C15.744 8.32627 14.4942 9.65352 14.4942 11.6294C14.4942 13.6157 15.744 14.9423 17.6235 14.9423ZM16.6456 11.3834C16.2334 11.3241 15.9593 10.8429 16.0674 10.3323C16.1839 9.82246 16.5668 9.45908 16.9602 9.53721C17.3821 9.61533 17.6186 10.0973 17.5202 10.5883C17.431 11.0988 17.039 11.4524 16.6456 11.3834Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

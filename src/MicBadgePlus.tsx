import React from 'react'

export default function MicBadgePlus({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.7846 28.208' className={className}>
      <path
        d='M6.32571 10.9L6.32571 13.1779C6.32571 17.2813 9.21155 20.253 13.7116 20.253C14.4863 20.253 15.213 20.1653 15.8814 19.9934C16.0178 20.154 16.167 20.3029 16.3279 20.439C15.6059 20.6509 14.8192 20.7718 13.978 20.7942L13.978 25.3358L19.3464 25.3358C19.4868 25.3358 19.603 25.461 19.603 25.6015C19.603 25.7419 19.4868 25.8587 19.3464 25.8587L8.08664 25.8587C7.94553 25.8587 7.82941 25.7419 7.82941 25.6015C7.82941 25.461 7.94553 25.3358 8.08664 25.3358L13.4551 25.3358L13.4551 20.7942C8.788 20.6697 5.80285 17.5158 5.80285 13.173L5.80285 10.9C5.80285 10.7596 5.91896 10.6344 6.06008 10.6344C6.20959 10.6344 6.32571 10.7596 6.32571 10.9ZM17.4725 4.10333L17.4725 9.50007C17.2888 9.60047 17.1144 9.71497 16.9496 9.84221L16.9496 4.10333C16.9496 2.09981 15.728 0.484481 13.7116 0.484481C11.7043 0.484481 10.4834 2.09981 10.4834 4.10333L10.4834 12.5855C10.4834 14.589 11.7043 16.2043 13.7116 16.2043C13.8541 16.2043 13.9926 16.1962 14.1259 16.1785L14.2015 16.6671C14.044 16.6883 13.8801 16.6979 13.7116 16.6979C11.4019 16.6979 9.95988 14.8964 9.95988 12.5855L9.95988 4.10333C9.95988 1.79238 11.4019 0 13.7116 0C16.0305 0 17.4725 1.79238 17.4725 4.10333Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M26.8858 15.3948C26.8858 18.6702 24.195 21.3499 20.9307 21.3499C17.6644 21.3499 14.9665 18.6625 14.9665 15.3948C14.9665 12.1285 17.6644 9.43066 20.9307 9.43066C24.2068 9.43066 26.8858 12.1097 26.8858 15.3948ZM20.4721 11.9599L20.4721 14.9362L17.486 14.9362C17.2484 14.9362 17.0281 15.1014 17.0281 15.3948C17.0281 15.6792 17.2484 15.8443 17.486 15.8443L20.4721 15.8443L20.4721 18.8305C20.4721 19.0869 20.6366 19.2884 20.9307 19.2884C21.2151 19.2884 21.3802 19.0869 21.3802 18.8305L21.3802 15.8443L24.3566 15.8443C24.613 15.8443 24.8061 15.6792 24.8061 15.3948C24.8061 15.1014 24.613 14.9362 24.3566 14.9362L21.3802 14.9362L21.3802 11.9599C21.3802 11.7216 21.2151 11.5104 20.9307 11.5104C20.6366 11.5104 20.4721 11.7216 20.4721 11.9599Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

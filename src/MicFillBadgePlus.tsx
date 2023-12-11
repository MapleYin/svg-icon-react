import React from 'react'

export default function MicFillBadgePlus({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.7846 28.2307' className={className}>
      <path
        d='M6.32571 10.9113L6.32571 13.1893C6.32571 17.2927 9.21155 20.2644 13.7116 20.2644C14.4863 20.2644 15.213 20.1767 15.8814 20.0047C16.0178 20.1654 16.167 20.3142 16.3279 20.4504C15.6058 20.6622 14.8192 20.7831 13.978 20.8056L13.978 25.3472L19.3464 25.3472C19.4868 25.3472 19.603 25.4724 19.603 25.6128C19.603 25.7532 19.4868 25.87 19.3464 25.87L8.08664 25.87C7.94553 25.87 7.82941 25.7532 7.82941 25.6128C7.82941 25.4724 7.94553 25.3472 8.08664 25.3472L13.4551 25.3472L13.4551 20.8056C8.788 20.6811 5.80285 17.5272 5.80285 13.1843L5.80285 10.9113C5.80285 10.7709 5.91896 10.6457 6.06008 10.6457C6.20959 10.6457 6.32571 10.7709 6.32571 10.9113ZM17.5058 4.14639L17.5058 9.49106C15.4623 10.6799 14.0768 12.8972 14.0768 15.4062C14.0768 15.845 14.1189 16.2746 14.2032 16.6898C14.0451 16.711 13.8806 16.7205 13.7116 16.7205C11.3863 16.7205 9.92658 14.9014 9.92658 12.5741L9.92658 4.14639C9.92658 1.81074 11.3863 0 13.7116 0C16.0468 0 17.5058 1.81074 17.5058 4.14639Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M26.8858 15.4062C26.8858 18.6815 24.195 21.3612 20.9307 21.3612C17.6644 21.3612 14.9665 18.6738 14.9665 15.4062C14.9665 12.1398 17.6644 9.44199 20.9307 9.44199C24.2068 9.44199 26.8858 12.121 26.8858 15.4062ZM20.4721 11.9712L20.4721 14.9476L17.486 14.9476C17.2484 14.9476 17.0281 15.1127 17.0281 15.4062C17.0281 15.6905 17.2484 15.8557 17.486 15.8557L20.4721 15.8557L20.4721 18.8418C20.4721 19.0982 20.6366 19.2997 20.9307 19.2997C21.2151 19.2997 21.3802 19.0982 21.3802 18.8418L21.3802 15.8557L24.3566 15.8557C24.613 15.8557 24.8061 15.6905 24.8061 15.4062C24.8061 15.1127 24.613 14.9476 24.3566 14.9476L21.3802 14.9476L21.3802 11.9712C21.3802 11.7329 21.2151 11.5217 20.9307 11.5217C20.6366 11.5217 20.4721 11.7329 20.4721 11.9712Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

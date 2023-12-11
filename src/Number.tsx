import React from 'react'

export default function Number({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.6084 25.1891' className={className}>
      <path
        d='M4.33418 25.1891C4.48848 25.1891 4.56895 25.1154 4.6128 24.9416L9.55616 0.809086C9.56592 0.749125 9.58614 0.657816 9.58614 0.602151C9.58614 0.438086 9.50498 0.326073 9.33252 0.326073C9.19091 0.326073 9.09843 0.412207 9.07343 0.566507L4.11191 24.7067C4.09238 24.7967 4.08193 24.8698 4.08193 24.9137C4.08193 25.0966 4.16172 25.1891 4.33418 25.1891ZM12.3062 25.1891C12.4605 25.1891 12.5409 25.1154 12.5848 24.9416L17.5281 0.809086C17.5477 0.749125 17.5588 0.657816 17.5588 0.602151C17.5588 0.438086 17.4776 0.326073 17.3052 0.326073C17.1636 0.326073 17.0718 0.412207 17.0468 0.566507L12.0846 24.7067C12.0734 24.7967 12.0546 24.8698 12.0546 24.9137C12.0546 25.0966 12.1344 25.1891 12.3062 25.1891ZM1.92852 8.24092L21.9873 8.24092C22.1555 8.24092 22.2471 8.16611 22.2471 8.00703C22.2471 7.84638 22.1428 7.74775 21.9633 7.74775L1.91358 7.74775C1.74541 7.74775 1.65381 7.8414 1.65381 7.98301C1.65381 8.15342 1.75811 8.24092 1.92852 8.24092ZM0.283793 17.0886L20.3523 17.0886C20.5205 17.0886 20.6121 17.0138 20.6121 16.8456C20.6121 16.694 20.5078 16.5954 20.3283 16.5954L0.259771 16.5954C0.0922877 16.5954 0 16.68 0 16.8307C0 17.0011 0.104299 17.0886 0.283793 17.0886Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
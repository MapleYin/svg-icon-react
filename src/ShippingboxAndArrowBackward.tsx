import React from 'react'

export function ShippingboxAndArrowBackward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36.8643 26.2966' className={className}>
      <path
        d='M23.7826 0.28572L34.3008 6.07273C34.6745 6.27312 34.9596 6.5864 34.9596 7.01082L34.9596 18.3546C34.9596 19.1667 34.7222 19.6652 33.9009 20.117L23.4643 25.7601C22.9169 26.0593 22.4281 26.0404 21.8996 25.7601L11.4623 20.117C10.641 19.6652 10.4036 19.1667 10.4036 18.3546L10.4036 15.0909L10.9921 15.0909L10.9921 18.2862C10.9921 19.0166 11.0889 19.345 12.005 19.8376L22.4087 25.4011L22.4087 13.34L10.9921 7.20028L10.9921 12.8511L10.4036 12.8511L10.4036 7.01082C10.4036 6.5864 10.6894 6.27312 11.0631 6.07273L21.5813 0.28572C22.2575-0.09524 23.1064-0.09524 23.7826 0.28572ZM22.9545 13.34L22.9545 25.4011L33.3582 19.8376C34.2743 19.345 34.3711 19.0166 34.3711 18.2862L34.3711 7.20028ZM11.0627 6.63523L22.6862 12.8889L28.388 9.8075L16.6996 3.53358ZM22.0433 0.600573L17.2552 3.23885L28.9359 9.53025L34.3005 6.63523L23.3199 0.600573C22.9238 0.374985 22.4402 0.375669 22.0433 0.600573Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.4052 13.9714C14.4052 13.8416 14.287 13.7416 14.1761 13.7416L4.27268 13.7416L1.63049 13.7673L1.63049 13.7888L4.31233 11.1058L6.43752 8.96502C6.46301 8.9325 6.48596 8.85887 6.48596 8.7866C6.48596 8.66794 6.39435 8.54978 6.23869 8.54978C6.16642 8.54978 6.12413 8.57478 6.07276 8.62478L0.967488 13.8034C0.916119 13.8541 0.899517 13.8984 0.899517 13.9714C0.899517 14.0443 0.916119 14.0887 0.967488 14.1387L5.91427 19.1776C6.10529 19.368 6.16642 19.3923 6.23869 19.3923C6.39435 19.3923 6.48596 19.2741 6.48596 19.1645C6.48596 19.0832 6.48117 19.0284 6.43752 18.9777L4.31233 16.8362L1.63049 14.154L1.63049 14.1748L4.27268 14.2012L14.1761 14.2012C14.287 14.2012 14.4052 14.1005 14.4052 13.9714Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

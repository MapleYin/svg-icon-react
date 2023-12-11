import React from 'react'

export default function WindshieldFrontAndWiperExclamationmark({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 39.7193 22.9119' className={className}>
      <path
        d='M38.3956 17.9483C38.3956 18.3746 38.0215 18.7662 37.5833 18.7662C37.136 18.7662 36.771 18.3746 36.771 17.9483C36.771 17.4835 37.1263 17.1296 37.5833 17.1296C38.0222 17.1296 38.3956 17.4835 38.3956 17.9483ZM37.8624 4.39552L37.8292 13.6894C37.8369 13.8269 37.7194 13.9443 37.5833 13.9443C37.4465 13.9443 37.3297 13.8269 37.3374 13.6894L37.3042 4.39552C37.3119 4.22051 37.416 4.11641 37.5833 4.11641C37.7506 4.11641 37.8547 4.22051 37.8624 4.39552Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M34.4599 6.29062C34.9907 6.66953 35.1184 7.25967 34.7108 7.81007L26.9468 17.8997C26.5938 18.351 26.0415 18.4228 25.5296 18.1843C23.1786 17.1164 20.4249 16.4469 17.4744 16.4469C16.7113 16.4469 15.9613 16.4917 15.2287 16.5784L14.9526 16.1202C15.7935 15.9973 16.6369 15.9354 17.4744 15.9354C20.2854 15.9354 23.1721 16.633 25.7964 17.7338C26.0809 17.8419 26.2826 17.9048 26.5547 17.565L34.2363 7.59376C34.4895 7.25264 34.4232 6.87725 34.0905 6.6338C29.976 3.87149 23.4527 2.06104 17.4744 2.06104C14.118 2.06104 10.5925 2.63182 7.43065 3.63694L7.1498 3.17085C10.3681 2.16225 14.0232 1.54951 17.4744 1.54951C23.745 1.54951 30.6767 3.56601 34.4599 6.29062ZM6.91846 3.7969C4.6279 4.53685 2.54797 5.50598 0.868059 6.6338C0.526262 6.87725 0.459953 7.25264 0.722258 7.59376L8.39482 17.565C8.66689 17.9048 8.86855 17.8419 9.15312 17.7338C10.8282 17.0336 12.6021 16.4965 14.3949 16.2006L14.6696 16.6564C12.7767 16.9243 11.0066 17.4636 9.41991 18.1843C8.91708 18.4228 8.35565 18.351 8.00272 17.8997L0.247736 7.81007C-0.168868 7.25967-0.0412312 6.66953 0.489632 6.29062C2.0801 5.14791 4.22281 4.12975 6.64046 3.33567Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.4744 22.9119C18.6311 22.9119 19.5794 21.9553 19.5794 20.7986C19.5794 19.6495 18.6318 18.6929 17.4744 18.6929C16.3177 18.6929 15.3694 19.6495 15.3694 20.7986C15.3694 21.9735 16.3079 22.9119 17.4744 22.9119ZM17.4744 22.4021C16.6085 22.4021 15.8793 21.6729 15.8793 20.7986C15.8793 19.9319 16.6085 19.2014 17.4744 19.2014C18.3306 19.2014 19.0709 19.9417 19.0709 20.7986C19.0709 21.6729 18.3494 22.4021 17.4744 22.4021ZM16.3648 19.4689L16.8264 19.2298L5.3662 0.210842C5.30506 0.110157 5.16121 0.00703096 4.9908 0.106544C4.84197 0.185842 4.83513 0.351958 4.89763 0.444246Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
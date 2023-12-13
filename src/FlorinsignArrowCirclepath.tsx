import React from 'react'

export function FlorinsignArrowCirclepath({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.0472 24.351' className={className}>
      <path
        d='M14.527 24.3315C21.2174 24.3315 26.6878 18.8604 26.6878 12.1706C26.6878 5.4711 21.2174 0 14.527 0C7.82747 0 2.36614 5.47041 2.36614 12.1699L2.86566 12.1699C2.86566 5.74356 8.10062 0.500889 14.527 0.500889C20.9527 0.500889 26.1883 5.73516 26.1883 12.1706C26.1883 18.5963 20.9527 23.8333 14.527 23.8319C10.1601 23.8312 6.43451 21.3932 4.34515 17.8598C4.2681 17.7291 4.1138 17.6923 3.99222 17.7478C3.8804 17.8109 3.8261 17.9519 3.90589 18.0944C6.17903 21.7214 9.98421 24.3315 14.527 24.3315ZM0.381081 10.107C0.0253157 10.107-0.126638 10.3633 0.123461 10.7256L2.70618 14.4257C2.9138 14.7267 3.16936 14.726 3.38538 14.4257L5.9681 10.7249C6.21683 10.3633 6.06556 10.107 5.71048 10.107Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.7594 17.4892C13.1853 17.4892 13.9641 16.7047 14.2968 14.9277L14.855 11.9704L17.8696 11.9704C18.0408 11.9704 18.1481 11.8541 18.1481 11.6842C18.1481 11.5129 18.0408 11.3966 17.8696 11.3966L14.9588 11.3966L15.3167 9.48252C15.5679 8.03067 16.1686 7.37549 17.2993 7.37549C17.6341 7.37549 17.9007 7.46065 18.0688 7.52696C18.2223 7.57442 18.3018 7.59395 18.3931 7.59395C18.5392 7.59395 18.6367 7.49444 18.6367 7.34405C18.6367 7.20342 18.5335 7.08711 18.3797 7.01396C18.0958 6.87861 17.6759 6.82978 17.3043 6.82978C15.8784 6.82978 15.0996 7.61426 14.7676 9.39121L14.3895 11.3966L11.4824 11.3966C11.3111 11.3966 11.1948 11.5129 11.1948 11.6842C11.1948 11.8541 11.2929 11.9704 11.4824 11.9704L14.2857 11.9704L13.7477 14.8428C13.4965 16.296 12.8958 16.9435 11.7644 16.9435C11.4394 16.9435 11.1721 16.8583 10.9949 16.7913C10.8414 16.7439 10.771 16.725 10.6706 16.725C10.5252 16.725 10.4271 16.8238 10.4271 16.984C10.4271 17.1239 10.5309 17.2409 10.684 17.3141C10.9686 17.4403 11.3885 17.4892 11.7594 17.4892Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

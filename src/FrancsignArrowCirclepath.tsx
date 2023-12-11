import React from 'react'

export default function FrancsignArrowCirclepath({
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
        d='M12.3018 17.7801C12.4674 17.7801 12.5781 17.696 12.5781 17.4934L12.5781 15.5758L15.7652 15.5758C15.9428 15.5758 16.0577 15.4595 16.0577 15.2825C16.0577 15.1056 15.9428 14.9893 15.7652 14.9893L12.5781 14.9893L12.5781 12.4503L17.22 12.4503C17.3836 12.4503 17.4943 12.341 17.4943 12.1768C17.4943 12.0034 17.3836 11.8948 17.22 11.8948L12.5781 11.8948L12.5781 7.68643L17.6609 7.68643C17.8335 7.68643 17.9442 7.57647 17.9442 7.40313C17.9442 7.23887 17.8335 7.12959 17.6609 7.12959L12.3011 7.12959C12.1439 7.12959 12.0332 7.24024 12.0332 7.417L12.0332 14.9893L11.1014 14.9893C10.9328 14.9893 10.8088 15.1056 10.8088 15.2825C10.8088 15.4595 10.9328 15.5758 11.1014 15.5758L12.0332 15.5758L12.0332 17.457C12.0332 17.6604 12.1543 17.7801 12.3018 17.7801Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export default function CheckmarkCircleBadgeXmarkFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.0686 26.6051' className={className}>
      <path
        d='M29.5104 13.0249C29.0911 12.94 28.6575 12.8973 28.2147 12.8973C24.4613 12.8973 21.3601 15.9979 21.3601 19.7512C21.3601 21.3926 21.95 22.9061 22.9273 24.0906C21.259 24.9671 19.3615 25.4585 17.3536 25.4585C10.6639 25.4585 5.19278 19.9874 5.19278 13.2977C5.19278 6.59815 10.6632 1.12706 17.3529 1.12706C23.9604 1.12706 29.3736 6.44884 29.5104 13.0249ZM22.7251 8.18731L16.018 18.5515L12.1701 14.164C12.1153 14.0946 12.0347 14.0508 11.9227 14.0508C11.8067 14.0508 11.6711 14.1515 11.6711 14.3037C11.6711 14.3844 11.7143 14.465 11.7622 14.5437L15.7825 19.1393C15.8568 19.2281 15.913 19.2572 16.0298 19.2572C16.1284 19.2572 16.195 19.2086 16.2743 19.1393L23.1875 8.47707C23.2055 8.42638 23.2234 8.35411 23.2234 8.31046C23.2234 8.18477 23.0935 8.04346 22.9698 8.04346C22.8857 8.04346 22.7933 8.11934 22.7251 8.18731Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M34.1781 19.7512C34.1781 23.0266 31.4789 25.7063 28.2147 25.7063C24.9567 25.7063 22.2505 23.0279 22.2505 19.7512C22.2505 16.4849 24.9567 13.787 28.2147 13.787C31.4901 13.787 34.1781 16.4751 34.1781 19.7512ZM30.4452 16.883L28.2405 19.0975L26.1167 16.9841C25.9523 16.8196 25.6951 16.7833 25.4748 16.9841C25.2552 17.1933 25.311 17.442 25.4748 17.6253L27.5889 19.7491L25.3653 21.9727C25.1898 22.1476 25.1471 22.4242 25.3485 22.6173C25.5507 22.8188 25.8364 22.7761 25.9932 22.6193L28.2356 20.377L30.3308 22.491C30.505 22.673 30.781 22.71 30.9818 22.491C31.1832 22.2714 31.1644 22.0227 30.9818 21.8394L28.8684 19.7442L31.0919 17.5206C31.2675 17.345 31.2913 17.0593 31.0899 16.876C30.8968 16.6927 30.6208 16.6983 30.4452 16.883Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
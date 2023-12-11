import React from 'react'

export default function CircleBadgePlusFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.0686 26.6051' className={className}>
      <path
        d='M29.5104 13.0249C29.0911 12.94 28.6575 12.8973 28.2147 12.8973C24.4613 12.8973 21.3601 15.9979 21.3601 19.7512C21.3601 21.3926 21.95 22.9061 22.9273 24.0906C21.259 24.9671 19.3615 25.4585 17.3536 25.4585C10.6639 25.4585 5.19278 19.9874 5.19278 13.2977C5.19278 6.59815 10.6632 1.12706 17.3529 1.12706C23.9604 1.12706 29.3736 6.44884 29.5104 13.0249Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M34.1781 19.7512C34.1781 23.0266 31.4789 25.7063 28.2147 25.7063C24.9567 25.7063 22.2505 23.0279 22.2505 19.7512C22.2505 16.4849 24.9567 13.787 28.2147 13.787C31.4901 13.787 34.1781 16.4751 34.1781 19.7512ZM27.7561 16.3253L27.7561 19.2926L24.7699 19.2926C24.5317 19.2926 24.3113 19.457 24.3113 19.7512C24.3113 20.0356 24.5317 20.2007 24.7699 20.2007L27.7561 20.2007L27.7561 23.1959C27.7561 23.4433 27.9205 23.6447 28.2147 23.6447C28.499 23.6447 28.6726 23.4433 28.6726 23.1959L28.6726 20.2007L31.6405 20.2007C31.897 20.2007 32.0985 20.0356 32.0985 19.7512C32.0985 19.457 31.897 19.2926 31.6405 19.2926L28.6726 19.2926L28.6726 16.3253C28.6726 16.087 28.499 15.8667 28.2147 15.8667C27.9205 15.8667 27.7561 16.087 27.7561 16.3253Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
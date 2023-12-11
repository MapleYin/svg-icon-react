import React from 'react'

export default function ArrowDownLeftArrowUpRightCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM13.7347 10.3903C13.6227 10.4933 13.6227 10.64 13.734 10.7521C13.7903 10.807 13.8753 10.8488 13.9805 10.8488L16.6781 10.8377L18.5706 10.8363L17.6786 11.6795L10.3862 18.9712C10.284 19.0832 10.284 19.2404 10.3688 19.3524C10.4801 19.4456 10.6562 19.4735 10.7675 19.3524L18.078 12.0614L18.9128 11.1694L18.9017 13.0606L18.8905 15.7764C18.9003 15.8641 18.9316 15.9672 19.0055 16.0235C19.0986 16.1167 19.2559 16.1167 19.3497 16.0235C19.4222 15.9511 19.4542 15.8815 19.4458 15.7848L19.4485 10.5796C19.4485 10.4126 19.3247 10.309 19.1779 10.309L13.9539 10.274C13.8501 10.274 13.8085 10.299 13.7347 10.3903ZM13.6101 5.03555L6.31768 12.3454L5.47521 13.2367L5.48634 11.3456L5.48771 8.63956C5.48839 8.51622 5.44591 8.4208 5.39024 8.38399C5.29708 8.29014 5.1126 8.29014 5.02852 8.38399C4.95537 8.45645 4.92266 8.51758 4.92266 8.62208L4.94649 13.8266C4.94649 13.974 5.0626 14.072 5.21846 14.0895L10.4334 14.1147C10.5386 14.114 10.5704 14.0897 10.661 14.0165C10.7458 13.924 10.7458 13.7396 10.6617 13.6464C10.6242 13.5991 10.5211 13.5489 10.3978 13.5489L7.69102 13.551L5.80763 13.5614L6.69054 12.7183L14.0004 5.42657C14.0936 5.32364 14.1124 5.15665 14.0004 5.0544C13.9163 4.94307 13.7312 4.92422 13.6101 5.03555Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
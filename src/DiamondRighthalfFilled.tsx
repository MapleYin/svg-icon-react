import React from 'react'

export default function DiamondRighthalfFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2625 26.8998' className={className}>
      <path
        d='M25.7881 15.6946C27.2664 14.2163 27.2678 12.6653 25.7811 11.1877L15.6898 1.12429C14.2115-0.354028 12.6612-0.389672 11.164 1.1075L1.0761 11.1863C-0.402228 12.6646-0.328888 14.2526 1.12082 15.6932L11.1751 25.7936C12.6248 27.2343 14.2128 27.279 15.6911 25.8007ZM13.4331 0.535241L13.4331 26.3457C12.8073 26.3457 12.1639 26.0477 11.5387 25.4309L1.46468 15.3667C0.214288 14.1351 0.27083 12.7451 1.48216 11.5331L11.5394 1.47655C12.1639 0.851354 12.8073 0.534558 13.4331 0.535241Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
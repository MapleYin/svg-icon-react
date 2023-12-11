import React from 'react'

export default function ArrowshapeLeftArrowshapeRightFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44.7247 17.7194' className={className}>
      <path
        d='M0 8.8548C0 9.21319 0.158985 9.48712 0.632715 9.92316L8.66954 17.3607C8.90557 17.5674 9.10753 17.6907 9.35333 17.6907C9.73292 17.6907 9.97033 17.415 9.97033 16.9627L9.97033 12.5394L18.894 12.5394C20.0028 12.5394 20.7474 11.8396 20.7474 10.7802L20.7474 7.03136C20.7474 5.97061 20.0035 5.26377 18.894 5.26377L9.97033 5.26377L9.97033 0.712603C9.97033 0.268069 9.73156 0 9.35265 0C9.1089 0 8.89356 0.121289 8.66954 0.323734L0.632715 7.77599C0.0563484 8.30557 0 8.59835 0 8.8548ZM44.3634 8.8548C44.3634 8.59903 44.3078 8.30557 43.7307 7.77599L35.6932 0.323734C35.4608 0.121973 35.2468 0.000683665 35.0024 0.000683665C34.6319 0.000683665 34.3931 0.268069 34.3931 0.712603L34.3931 5.26377L25.4695 5.26377C24.3599 5.26377 23.616 5.97061 23.616 7.03136L23.616 10.7802C23.616 11.8396 24.3515 12.5394 25.4695 12.5394L34.3931 12.5394L34.3931 16.9627C34.3931 17.415 34.6305 17.6901 35.0101 17.6901C35.2475 17.6901 35.4572 17.5667 35.6932 17.3607L43.7307 9.92316C44.2051 9.48712 44.3634 9.21251 44.3634 8.8548Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
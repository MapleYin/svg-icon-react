import React from 'react'

export function ArrowDownBackwardAndArrowUpForward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.6661 23.3139' className={className}>
      <path
        d='M23.0632 9.39288C23.2307 9.39288 23.3048 9.26221 23.3048 9.11426L23.3048 0.464756C23.3048 0.198148 23.115 0.00839829 22.8477 0.00839829L14.1982 0.00839829C14.0308 0.00839829 13.928 0.100002 13.928 0.267486C13.928 0.425888 14.0678 0.52589 14.1982 0.52589L18.6046 0.52589L22.5765 0.410264L17.7081 5.24961L13.0943 9.87314C13.0443 9.92314 13.0193 9.97724 13.0193 10.0327C13.0193 10.1932 13.1137 10.2939 13.2741 10.2939C13.3282 10.2939 13.3907 10.2689 13.44 10.2195L17.9882 5.64073L22.8841 0.754803L22.8048 4.70725L22.8048 9.11426C22.8048 9.28174 22.9055 9.39288 23.0632 9.39288ZM9.10654 23.3139C9.27403 23.3139 9.38585 23.2132 9.38585 23.0548C9.36768 22.8873 9.23701 22.7873 9.10654 22.7873L4.69953 22.7873L0.737323 22.912L5.59669 18.0636L10.2105 13.4491C10.2605 13.3991 10.2855 13.3359 10.2855 13.2805C10.2855 13.12 10.2002 13.0284 10.0397 13.0284C9.97588 13.0284 9.91406 13.0534 9.86474 13.0937L5.31592 17.6815L0.420713 22.5584L0.500011 18.6059L0.500011 14.1989C0.500011 14.0314 0.408407 13.9203 0.241607 13.9203C0.0741237 13.9203 0 14.051 0 14.1989L0 22.8575C0 23.115 0.18975 23.3139 0.456358 23.3139Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

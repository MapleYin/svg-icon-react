import React from 'react'

export default function BubbleMiddleBottomFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 25.618' className={className}>
      <path
        d='M13.2128 25.618C13.4202 25.618 13.5613 25.494 13.7095 25.2974L16.2181 21.5112L22.002 21.5112C24.6743 21.5112 26.4199 19.735 26.4199 17.0939L26.4199 5.89786C26.4199 3.24707 24.6743 1.47988 22.002 1.47988L4.41798 1.47988C1.74492 1.47988 0 3.21914 0 5.89786L0 17.0939C0 19.7727 1.74492 21.5112 4.41798 21.5112L10.2075 21.5112L12.7161 25.2974C12.8559 25.494 13.0054 25.618 13.2128 25.618Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

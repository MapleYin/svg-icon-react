import React from 'react'

export function RectangleTophalfFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M0 18.7724C0 20.8546 1.10674 21.96 3.18125 21.96L25.8721 21.96C27.9473 21.96 29.054 20.8169 29.054 18.7724L29.054 3.18829C29.054 1.14307 27.9473 0 25.8721 0L3.18125 0C1.10674 0 0 1.10606 0 3.18829ZM0.511533 18.7474L0.511533 10.9842L28.5418 10.9842L28.5418 18.7474C28.5418 20.526 27.553 21.4484 25.8428 21.4484L3.21124 21.4484C1.42628 21.4484 0.511533 20.526 0.511533 18.7474Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

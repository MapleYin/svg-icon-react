import React from 'react'

export function RectangleTophalfInsetFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M3.18125 21.96L25.8721 21.96C27.9473 21.96 29.054 20.8169 29.054 18.7724L29.054 3.18829C29.054 1.14307 27.9473 0 25.8721 0L3.18125 0C1.10674 0 0 1.10606 0 3.18829L0 18.7724C0 20.8546 1.10674 21.96 3.18125 21.96ZM3.21124 21.4484C1.42628 21.4484 0.511533 20.526 0.511533 18.7474L0.511533 3.2126C0.511533 1.43468 1.42628 0.511533 3.21124 0.511533L25.8428 0.511533C27.553 0.511533 28.5418 1.43468 28.5418 3.2126L28.5418 18.7474C28.5418 20.526 27.553 21.4484 25.8428 21.4484Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.13126 10.9465L25.9221 10.9465C27.0582 10.9465 27.652 10.352 27.652 9.22491L27.652 3.12423C27.652 1.9965 27.0582 1.40197 25.9221 1.40197L3.13126 1.40197C1.99581 1.40197 1.40197 1.9965 1.40197 3.12423L1.40197 9.22491C1.40197 10.352 1.99581 10.9465 3.13126 10.9465Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

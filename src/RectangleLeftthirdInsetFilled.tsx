import React from 'react'

export default function RectangleLeftthirdInsetFilled({
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
        d='M3.13126 20.558L4.85403 20.558C5.97609 20.558 6.57424 19.9501 6.57424 18.8273L6.57424 3.12423C6.57424 2.00988 5.97609 1.40197 4.85403 1.40197L3.13126 1.40197C2.00919 1.40197 1.40197 2.00988 1.40197 3.12423L1.40197 18.8273C1.40197 19.9501 2.00919 20.558 3.13126 20.558Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

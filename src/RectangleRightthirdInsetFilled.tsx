import React from 'react'

export function RectangleRightthirdInsetFilled({
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
        d='M24.2 20.558L25.9221 20.558C27.0448 20.558 27.652 19.9501 27.652 18.8273L27.652 3.12423C27.652 2.00988 27.0448 1.40197 25.9221 1.40197L24.2 1.40197C23.0772 1.40197 22.4791 2.00988 22.4791 3.12423L22.4791 18.8273C22.4791 19.9501 23.0772 20.558 24.2 20.558Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

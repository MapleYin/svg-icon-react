import React from 'react'

export default function RectangleSplit_3x1Fill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M9.34736 21.96L9.34736 0L9.85889 0L9.85889 21.96ZM19.1951 21.96L19.1951 0L19.7066 0L19.7066 21.96ZM3.18125 21.96L25.8721 21.96C27.9473 21.96 29.054 20.8169 29.054 18.7724L29.054 3.18829C29.054 1.14307 27.9473 0 25.8721 0L3.18125 0C1.10674 0 0 1.10606 0 3.18829L0 18.7724C0 20.8546 1.10674 21.96 3.18125 21.96Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

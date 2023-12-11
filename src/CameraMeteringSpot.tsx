import React from 'react'

export default function CameraMeteringSpot({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M3.18125 21.96L14.0968 21.96L14.0968 21.4484L3.21124 21.4484C1.42628 21.4484 0.511533 20.526 0.511533 18.7474L0.511533 11.4294L0 11.4294L0 18.7724C0 20.8546 1.10674 21.96 3.18125 21.96ZM14.9865 21.96L25.8721 21.96C27.9473 21.96 29.054 20.8169 29.054 18.7724L29.054 11.4294L28.5418 11.4294L28.5418 18.7474C28.5418 20.526 27.553 21.4484 25.8428 21.4484L14.9865 21.4484ZM28.5418 10.5306L29.054 10.5306L29.054 3.18829C29.054 1.14307 27.9473 0 25.8721 0L14.9865 0L14.9865 0.511533L25.8428 0.511533C27.553 0.511533 28.5418 1.43468 28.5418 3.2126ZM0 10.5306L0.511533 10.5306L0.511533 3.2126C0.511533 1.43468 1.42628 0.511533 3.21124 0.511533L14.0968 0.511533L14.0968 0L3.18125 0C1.10674 0 0 1.10606 0 3.18829Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.5706 15.1443C16.8362 15.1443 18.7119 13.2693 18.7119 10.9647C18.7119 8.69903 16.8362 6.81426 14.5706 6.81426C12.2659 6.81426 10.3818 8.69903 10.3818 10.9647C10.3818 13.2693 12.2659 15.1443 14.5706 15.1443Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

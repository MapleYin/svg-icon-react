import React from 'react'

export default function PlayRectangleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M29.054 3.18829L29.054 18.7724C29.054 20.8169 27.9473 21.96 25.8721 21.96L3.18125 21.96C1.10674 21.96 0 20.8546 0 18.7724L0 3.18829C0 1.10606 1.10674 0 3.18125 0L25.8721 0C27.9473 0 29.054 1.14307 29.054 3.18829ZM11.2089 6.44522L11.2089 15.5524C11.2089 15.947 11.6718 16.1484 12.0565 15.9247L19.2836 11.5315C19.6831 11.2742 19.6915 10.7709 19.2836 10.5129L12.0565 6.07364C11.6745 5.84287 11.2089 6.0416 11.2089 6.44522Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

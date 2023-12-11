import React from 'react'

export default function PlusRectangleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M29.054 3.18829L29.054 18.7724C29.054 20.8169 27.9473 21.96 25.8721 21.96L3.18125 21.96C1.10674 21.96 0 20.8546 0 18.7724L0 3.18829C0 1.10606 1.10674 0 3.18125 0L25.8721 0C27.9473 0 29.054 1.14307 29.054 3.18829ZM14.2668 5.78868L14.2668 10.7013L9.35489 10.7013C9.20693 10.7013 9.09785 10.8278 9.09785 10.9765C9.09785 11.0958 9.2251 11.2308 9.35489 11.2308L14.2668 11.2308L14.2668 16.135C14.2668 16.2725 14.4024 16.4004 14.5218 16.4004C14.6697 16.4004 14.797 16.2822 14.797 16.135L14.797 11.2308L19.7096 11.2308C19.8387 11.2308 19.975 11.0958 19.975 10.9765C19.975 10.8278 19.8568 10.7013 19.7096 10.7013L14.797 10.7013L14.797 5.78868C14.797 5.64072 14.6697 5.52256 14.5218 5.52256C14.4024 5.52256 14.2668 5.65957 14.2668 5.78868Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

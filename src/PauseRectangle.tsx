import React from 'react'

export default function PauseRectangle({
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
        d='M11.1703 15.6567L12.4657 15.6567C12.9524 15.6567 13.1714 15.389 13.1714 14.9922L13.1714 6.94688C13.1714 6.55987 12.9524 6.29209 12.4657 6.29209L11.1703 6.29209C10.7024 6.29209 10.4646 6.55987 10.4646 6.94688L10.4646 14.9922C10.4646 15.389 10.7024 15.6567 11.1703 15.6567ZM16.5806 15.6567L17.876 15.6567C18.3432 15.6567 18.581 15.389 18.581 14.9922L18.581 6.94688C18.581 6.55987 18.3432 6.29209 17.876 6.29209L16.5806 6.29209C16.1127 6.29209 15.8931 6.55987 15.8931 6.94688L15.8931 14.9922C15.8931 15.389 16.1127 15.6567 16.5806 15.6567Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export function HeartRectangle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M3.18125 21.96L25.8721 21.96C27.9473 21.96 29.054 20.8169 29.054 18.7724L29.054 3.18829C29.054 1.14307 27.9473 0 25.8721 0L3.18125 0C1.10674 0 0 1.10606 0 3.18829L0 18.7724C0 20.8546 1.10674 21.96 3.18125 21.96ZM3.21124 21.4484C1.42628 21.4484 0.511533 20.526 0.511533 18.7474L0.511533 3.2126C0.511533 1.43468 1.42628 0.511533 3.21124 0.511533L25.8428 0.511533C27.553 0.511533 28.5418 1.43468 28.5418 3.2126L28.5418 18.7474C28.5418 20.526 27.553 21.4484 25.8428 21.4484Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.5056 5.28926C9.44024 5.28926 7.91611 6.86426 7.91611 8.94346C7.91611 12.6779 12.112 15.854 14.1656 17.144C14.2883 17.2256 14.4423 17.2903 14.5343 17.2903C14.6165 17.2903 14.7691 17.2347 14.8995 17.144C16.8323 15.6676 21.149 12.6779 21.149 8.94346C21.149 6.86426 19.6249 5.28926 17.5596 5.28926C16.2405 5.28926 15.093 6.1711 14.5329 7.14883C13.9722 6.1711 12.8441 5.28926 11.5056 5.28926Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

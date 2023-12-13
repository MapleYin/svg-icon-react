import React from 'react'

export function FilemenuAndSelection({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M29.054 3.18829L29.054 18.7724C29.054 20.8169 27.9473 21.96 25.8721 21.96L3.18125 21.96C1.10674 21.96 0 20.8546 0 18.7724L0 3.18829C0 1.10606 1.10674 0 3.18125 0L25.8721 0C27.9473 0 29.054 1.14307 29.054 3.18829ZM3.21124 0.511533C1.42628 0.511533 0.511533 1.43468 0.511533 3.2126L0.511533 18.7474C0.511533 20.526 1.42628 21.4484 3.21124 21.4484L25.8428 21.4484C27.553 21.4484 28.5418 20.526 28.5418 18.7474L28.5418 3.2126C28.5418 1.43468 27.553 0.511533 25.8428 0.511533ZM17.1804 16.909C17.1804 17.081 17.0697 17.1825 16.8873 17.1825L5.41309 17.1825C5.22999 17.1825 5.11934 17.081 5.11934 16.909C5.11934 16.7363 5.22999 16.6334 5.41309 16.6334L16.8873 16.6334C17.0697 16.6334 17.1804 16.7363 17.1804 16.909ZM17.1804 5.05098C17.1804 5.22364 17.0697 5.33497 16.8873 5.33497L5.41309 5.33497C5.22999 5.33497 5.11934 5.22364 5.11934 5.05098C5.11934 4.88809 5.22999 4.77676 5.41309 4.77676L16.8873 4.77676C17.0697 4.77676 17.1804 4.88809 17.1804 5.05098Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M26.9402 9.53868L26.9402 12.3738C26.9402 13.1422 26.436 13.6589 25.6942 13.6589L3.37863 13.6589C2.62774 13.6589 2.12354 13.1422 2.12354 12.3738L2.12354 9.53868C2.12354 8.77032 2.62774 8.2543 3.37863 8.2543L25.6942 8.2543C26.436 8.2543 26.9402 8.77032 26.9402 9.53868ZM5.41378 10.7009C5.23067 10.7009 5.12002 10.8122 5.12002 10.9842C5.12002 11.1478 5.23067 11.2591 5.41378 11.2591L13.4385 11.2591C13.6293 11.2591 13.7406 11.1478 13.7406 10.9842C13.7406 10.8122 13.6293 10.7009 13.4385 10.7009Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export function Photo({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M28.8601 19.2768L20.8174 11.9878C20.1686 11.3962 19.5604 11.0871 18.7294 11.0871C17.9439 11.0871 17.374 11.3864 16.7245 11.9683L10.902 17.1574L8.44854 14.8364C7.92051 14.3397 7.40928 14.0586 6.73047 14.0586C6.0628 14.0586 5.59903 14.3202 5.08213 14.826L0.43389 19.2541C0.796974 21.0238 1.27354 21.6049 2.90967 21.6049L26.2613 21.6049C28.2147 21.6049 28.8412 20.4736 28.8601 19.2768ZM3.18125 21.96L25.8721 21.96C27.9473 21.96 29.054 20.8169 29.054 18.7724L29.054 3.18829C29.054 1.14307 27.9473 0 25.8721 0L3.18125 0C1.10674 0 0 1.10606 0 3.18829L0 18.7724C0 20.8546 1.10674 21.96 3.18125 21.96ZM3.21124 21.4484C1.42628 21.4484 0.511533 20.526 0.511533 18.7474L0.511533 3.2126C0.511533 1.43468 1.42628 0.511533 3.21124 0.511533L25.8428 0.511533C27.553 0.511533 28.5418 1.43468 28.5418 3.2126L28.5418 18.7474C28.5418 20.526 27.553 21.4484 25.8428 21.4484Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.98877 11.3228C10.6105 11.3228 11.9478 9.98555 11.9478 8.34492C11.9478 6.72315 10.6105 5.36641 8.98877 5.36641C7.34815 5.36641 6.01094 6.72315 6.01094 8.34492C6.01094 9.98555 7.34815 11.3228 8.98877 11.3228Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export default function BlindsHorizontalClosed({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.7869 25.2547' className={className}>
      <path
        d='M2.44112 2.84981L2.44112 6.72725C2.44112 7.08907 2.6837 7.31211 3.07344 7.31211L23.5072 7.31211C23.899 7.31211 24.1486 7.08838 24.1486 6.73565L24.1486 2.84913C24.1486 2.51456 23.8983 2.28311 23.5072 2.28311L3.07344 2.28311C2.6921 2.28311 2.44112 2.51524 2.44112 2.84981ZM2.44112 8.82999L2.44112 12.7081C2.44112 13.0602 2.6921 13.2916 3.07344 13.2916L23.5079 13.2916C23.8983 13.2916 24.1486 13.0595 24.1486 12.7081L24.1486 8.82931C24.1486 8.48634 23.8983 8.25489 23.5079 8.25489L3.07413 8.25489C2.6837 8.25489 2.44112 8.48634 2.44112 8.82999ZM2.44112 14.8011L2.44112 18.6792C2.44112 19.0319 2.6921 19.2634 3.07344 19.2634L23.5072 19.2634C23.899 19.2634 24.1486 19.0319 24.1486 18.6792L24.1486 14.8004C24.1486 14.4672 23.899 14.2357 23.5072 14.2357L3.07344 14.2357C2.6837 14.2357 2.44112 14.4672 2.44112 14.8011ZM2.44112 20.7729L2.44112 24.6594C2.44112 25.0121 2.69141 25.2436 3.07276 25.2436L23.5156 25.2436C23.8977 25.2436 24.1486 25.0121 24.1486 24.6594L24.1486 20.7729C24.1486 20.4376 23.8983 20.2062 23.5072 20.2062L3.07344 20.2062C2.69141 20.2062 2.44112 20.4383 2.44112 20.7729Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.19365 0.251567C0.19365 0.393367 0.311816 0.511533 0.444534 0.511533L24.1486 0.511533C24.2911 0.511533 24.4002 0.393367 24.4002 0.251567C24.4002 0.109084 24.2911 0 24.1486 0L0.444534 0C0.311816 0 0.19365 0.109084 0.19365 0.251567ZM0.444534 3.5795C0.702348 3.5795 0.898833 3.39073 0.898833 3.13428C0.898833 2.87715 0.702348 2.68907 0.444534 2.68907C0.196486 2.68907 0 2.87715 0 3.13428C0 3.39073 0.196486 3.5795 0.444534 3.5795ZM0.444534 6.57276C0.702348 6.57276 0.898833 6.38467 0.898833 6.12754C0.898833 5.8795 0.702348 5.68301 0.444534 5.68301C0.196486 5.68301 0 5.8795 0 6.12754C0 6.38467 0.196486 6.57276 0.444534 6.57276ZM0.444534 9.59395C0.702348 9.59395 0.898833 9.40587 0.898833 9.14874C0.898833 8.89161 0.702348 8.7042 0.444534 8.7042C0.196486 8.7042 0 8.89161 0 9.14874C0 9.40587 0.196486 9.59395 0.444534 9.59395ZM0.444534 12.5872C0.702348 12.5872 0.898833 12.3991 0.898833 12.1427C0.898833 11.8939 0.702348 11.6975 0.444534 11.6975C0.196486 11.6975 0 11.8939 0 12.1427C0 12.3991 0.196486 12.5872 0.444534 12.5872ZM0.444534 15.6084C0.702348 15.6084 0.898833 15.4203 0.898833 15.1639C0.898833 14.9061 0.702348 14.7187 0.444534 14.7187C0.196486 14.7187 0 14.9061 0 15.1639C0 15.4203 0.196486 15.6084 0.444534 15.6084ZM0.444534 18.6023C0.702348 18.6023 0.898833 18.4136 0.898833 18.1571C0.898833 17.9091 0.702348 17.7119 0.444534 17.7119C0.196486 17.7119 0 17.9091 0 18.1571C0 18.4136 0.196486 18.6023 0.444534 18.6023ZM0.444534 25.2352C0.568169 25.2352 0.705183 25.1261 0.705183 24.9843L0.705183 20.9847C0.705183 20.8422 0.587017 20.7331 0.444534 20.7331C0.311816 20.7331 0.211814 20.8422 0.211814 20.9847L0.211814 24.9843C0.211814 25.1261 0.321582 25.2352 0.444534 25.2352Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
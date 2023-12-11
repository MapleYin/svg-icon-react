import React from 'react'

export default function ArrowUpBackwardBottomtrailingRectangle({
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
        d='M18.5005 17.8603C18.652 17.8603 18.7557 17.756 18.7557 17.5835L18.7557 14.3747L18.7817 12.0438L19.8704 13.1763L26.1192 19.4251C26.1756 19.4717 26.2347 19.5148 26.353 19.5148C26.5046 19.5148 26.618 19.4112 26.618 19.259C26.618 19.1524 26.5741 19.0927 26.5178 19.0363L20.2599 12.7784L19.126 11.6611L20.8439 11.6448L24.6846 11.6448C24.8479 11.6448 24.9536 11.5412 24.9536 11.3806C24.9536 11.2381 24.8486 11.1526 24.6768 11.1526L18.4801 11.1526C18.351 11.1526 18.2544 11.2619 18.2544 11.4056L18.2544 17.5821C18.2544 17.763 18.358 17.8603 18.5005 17.8603Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

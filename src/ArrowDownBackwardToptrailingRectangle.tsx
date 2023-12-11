import React from 'react'

export default function ArrowDownBackwardToptrailingRectangle({
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
        d='M18.5005 4.09971C18.358 4.09971 18.2544 4.19766 18.2544 4.37853L18.2544 10.5544C18.2544 10.6987 18.351 10.8073 18.4801 10.8073L24.6768 10.8073C24.8486 10.8073 24.9536 10.7219 24.9536 10.5801C24.9536 10.4194 24.8479 10.3151 24.6846 10.3151L20.8439 10.3151L19.126 10.2988L20.2599 9.18223L26.5178 2.92365C26.5741 2.86798 26.618 2.79845 26.618 2.70167C26.618 2.54943 26.5046 2.44513 26.353 2.44513C26.2347 2.44513 26.1756 2.47921 26.1192 2.53556L19.8704 8.78369L18.7817 9.9169L18.7557 7.58526L18.7557 4.37716C18.7557 4.2047 18.652 4.09971 18.5005 4.09971Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
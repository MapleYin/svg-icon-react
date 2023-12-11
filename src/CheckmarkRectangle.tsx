import React from 'react'

export default function CheckmarkRectangle({
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
        d='M13.2014 16.9607C13.3077 16.9607 13.3736 16.9128 13.4613 16.8441L20.3747 6.15157C20.4011 6.10157 20.4197 6.02091 20.4197 5.97725C20.4197 5.86202 20.2897 5.72139 20.1675 5.72139C20.075 5.72139 19.9832 5.78819 19.915 5.85547L13.1889 16.2423L9.33605 11.8505C9.28263 11.7818 9.20196 11.7387 9.08995 11.7387C8.96631 11.7387 8.83203 11.838 8.83203 11.9986C8.83203 12.0695 8.8752 12.1495 8.93086 12.2365L12.9555 16.8441C13.0291 16.9323 13.0853 16.9607 13.2014 16.9607Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
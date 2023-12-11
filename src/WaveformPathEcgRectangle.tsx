import React from 'react'

export default function WaveformPathEcgRectangle({
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
        d='M0.521299 11.545L3.07931 11.545C3.31124 11.545 3.41642 11.4943 3.55587 11.1652L6.0961 5.10646L10.1404 17.1249C10.2449 17.4314 10.6766 17.4118 10.7817 17.1319L12.6278 11.545L16.4347 11.545C16.6666 11.545 16.7627 11.4943 16.9022 11.1652L19.4458 5.10646L23.481 17.1249C23.5855 17.4314 24.0263 17.4118 24.1224 17.1319L25.9685 11.545L28.5516 11.545L28.5516 10.9918L25.9606 10.9918C25.7294 10.9918 25.5579 11.1158 25.4841 11.3527L23.7637 16.5491L19.7382 4.49581C19.6519 4.24522 19.225 4.15235 19.0976 4.48878L16.4087 10.9918L12.62 10.9918C12.3888 10.9918 12.2173 11.1158 12.1435 11.3527L10.414 16.5491L6.39757 4.49581C6.31124 4.24522 5.88438 4.15235 5.74786 4.48878L3.05899 10.9918L0.521299 10.9918Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
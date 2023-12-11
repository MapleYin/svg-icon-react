import React from 'react'

export default function RectangleCheckered({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M6.09874 5.72901L11.7432 5.72901L11.7432 0.511533L6.09874 0.511533ZM17.292 5.72901L22.9364 5.72901L22.9364 0.511533L17.292 0.511533ZM0.511533 10.9939L6.09874 10.9939L6.09874 5.72901L0.511533 5.72901ZM11.7432 10.9939L17.292 10.9939L17.292 5.72901L11.7432 5.72901ZM22.9364 10.9939L28.5425 10.9939L28.5425 5.72901L22.9364 5.72901ZM6.09874 16.1933L11.7432 16.1933L11.7432 10.9939L6.09874 10.9939ZM17.292 16.1933L22.9364 16.1933L22.9364 10.9939L17.292 10.9939ZM0.511533 20.5698L1.53116 21.4484L6.09874 21.4484L6.09874 16.1933L0.511533 16.1933ZM11.7432 21.4484L17.292 21.4484L17.292 16.1933L11.7432 16.1933ZM22.9364 21.4484L27.4091 21.4484L28.5425 20.3743L28.5425 16.1933L22.9364 16.1933ZM3.18125 21.96L25.8721 21.96C27.9473 21.96 29.054 20.8169 29.054 18.7724L29.054 3.18829C29.054 1.14307 27.9473 0 25.8721 0L3.18125 0C1.10674 0 0 1.10606 0 3.18829L0 18.7724C0 20.8546 1.10674 21.96 3.18125 21.96ZM3.21124 21.4484C1.42628 21.4484 0.511533 20.526 0.511533 18.7474L0.511533 3.2126C0.511533 1.43468 1.42628 0.511533 3.21124 0.511533L25.8428 0.511533C27.553 0.511533 28.5418 1.43468 28.5418 3.2126L28.5418 18.7474C28.5418 20.526 27.553 21.4484 25.8428 21.4484Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

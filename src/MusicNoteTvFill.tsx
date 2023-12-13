import React from 'react'

export function MusicNoteTvFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.2406 22.2033' className={className}>
      <path
        d='M20.6101 21.9322C20.6101 22.0929 20.4919 22.1929 20.3403 22.1929L8.54874 22.1929C8.38741 22.1929 8.26924 22.0929 8.26924 21.9322C8.26924 21.78 8.38741 21.68 8.54874 21.68L20.3403 21.68C20.4919 21.68 20.6101 21.78 20.6101 21.9322ZM28.8793 2.29307L28.8793 17.0039C28.8793 18.4644 28.053 19.3061 26.5862 19.3061L2.30284 19.3061C0.826955 19.3061 0 18.4644 0 17.0039L0 2.29307C0 0.832618 0.826955 0 2.30284 0L26.5862 0C28.053 0 28.8793 0.832618 28.8793 2.29307ZM17.4589 3.93711L14.4759 4.63643C13.9417 4.76543 13.8504 4.87422 13.8504 5.51719L13.8504 11.1697C13.8504 11.6453 13.8016 11.7171 13.2479 11.8831L12.1654 12.1865C11.1856 12.4536 10.3816 13.0191 10.3816 14.0414C10.3816 14.9717 11.065 15.616 12.1361 15.616C13.6619 15.616 14.5634 14.5352 14.5634 12.9899L14.5634 8.34757C14.5634 7.95147 14.6436 7.86153 14.873 7.81133L17.4986 7.19766C18.0237 7.06934 18.1632 6.95987 18.1632 6.32666L18.1632 4.37363C18.1632 3.96709 18.0426 3.79766 17.4589 3.93711Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

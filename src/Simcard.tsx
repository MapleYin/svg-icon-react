import React from 'react'

export function Simcard({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 26.5438' className={className}>
      <path
        d='M0 23.3625C0 25.437 1.10537 26.5438 3.1876 26.5438L16.8528 26.5438C18.926 26.5438 20.0314 25.4363 20.0314 23.3625L20.0314 8.83565C20.0314 8.15693 19.8067 7.56894 19.4067 7.16054L12.9224 0.73135C12.5685 0.339746 11.8549 0.0474608 11.2466 0.0474608L3.1876 0.0474608C1.14307 0.0474608 0 1.1542 0 3.22872ZM0.511533 23.3325L0.511533 3.26778C0.511533 1.54845 1.43399 0.558994 3.2126 0.558994L11.2704 0.558994C11.7256 0.558994 12.2132 0.735459 12.4508 0.992589L19.0358 7.55244C19.3461 7.8627 19.5289 8.31963 19.5289 8.79912L19.5289 23.3325C19.5289 25.1175 18.6064 26.0322 16.8278 26.0322L3.21192 26.0322C1.43399 26.0322 0.511533 25.1175 0.511533 23.3325Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.02764 20.7452C4.02764 22.1791 4.75664 22.9081 6.18984 22.9081L8.00986 22.9081L8.00986 16.1706C8.00986 16.0618 7.9499 15.9935 7.8418 15.9935L4.02764 15.9935ZM4.02764 15.426L7.93575 15.426C8.36817 15.426 8.58711 15.6449 8.58711 16.0948L8.58711 22.9081L11.266 22.9081L11.266 11.8368L6.18984 11.8368C4.75664 11.8368 4.02764 12.5665 4.02764 13.992ZM11.8342 22.9081L13.861 22.9081C15.2942 22.9081 16.0232 22.1791 16.0232 20.7452L16.0232 13.992C16.0232 12.5665 15.2942 11.8368 13.861 11.8368L11.8342 11.8368Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

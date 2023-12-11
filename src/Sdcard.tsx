import React from 'react'

export default function Sdcard({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 26.5438' className={className}>
      <path
        d='M3.1876 26.5438L16.8528 26.5438C18.926 26.5438 20.0314 25.437 20.0314 23.3625L20.0314 3.22872C20.0314 1.1542 18.8883 0.0474608 16.8528 0.0474608L8.79385 0.0474608C8.17646 0.0474608 7.47265 0.339746 7.11806 0.73135L0.633693 7.16054C0.224609 7.56894 0 8.15693 0 8.83565L0 23.3625C0 25.4363 1.10537 26.5438 3.1876 26.5438ZM3.2126 26.0322C1.43399 26.0322 0.511533 25.1175 0.511533 23.3325L0.511533 8.79912C0.511533 8.31963 0.694345 7.8627 1.0046 7.55244L7.58056 0.992589C7.81816 0.735459 8.30576 0.558994 8.77002 0.558994L16.8278 0.558994C18.6064 0.558994 19.5289 1.54845 19.5289 3.26778L19.5289 23.3325C19.5289 25.1175 18.6064 26.0322 16.8194 26.0322ZM9.13534 3.46398L9.13534 8.6084C9.13534 8.77198 9.23827 8.88399 9.41093 8.88399C9.58359 8.88399 9.68652 8.77198 9.68652 8.6084L9.68652 3.46398C9.68652 3.29972 9.58359 3.18839 9.41093 3.18839C9.23827 3.18839 9.13534 3.3004 9.13534 3.46398ZM11.3545 3.46398L11.3545 8.6084C11.3545 8.77198 11.4581 8.88399 11.6308 8.88399C11.8027 8.88399 11.9063 8.77198 11.9063 8.6084L11.9063 3.46398C11.9063 3.3004 11.7943 3.18839 11.6308 3.18839C11.4574 3.18839 11.3545 3.3004 11.3545 3.46398ZM13.575 3.46398L13.575 8.6084C13.575 8.77198 13.6779 8.88399 13.8499 8.88399C14.0219 8.88399 14.1248 8.77129 14.1248 8.6084L14.1248 3.46398C14.1248 3.29972 14.0226 3.18839 13.8499 3.18839C13.6772 3.18839 13.575 3.3004 13.575 3.46398ZM15.7948 3.46398L15.7948 8.60772C15.7948 8.77198 15.8978 8.88399 16.0697 8.88399C16.2424 8.88399 16.3446 8.77198 16.3446 8.60772L16.3446 3.46398C16.3446 3.29972 16.2424 3.18839 16.0697 3.18839C15.8971 3.18839 15.7948 3.3004 15.7948 3.46398Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
import React from 'react'

export default function DocPlaintext({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 26.5424' className={className}>
      <path
        d='M4.69727 5.53634L15.3438 5.53634C15.5074 5.53634 15.6369 5.41524 15.6369 5.26075C15.6369 5.10762 15.5074 4.97813 15.3438 4.97813L4.69727 4.97813C4.52393 4.97813 4.40352 5.10762 4.40352 5.26075C4.40352 5.41524 4.52393 5.53634 4.69727 5.53634ZM4.69727 10.0133L15.3438 10.0133C15.5074 10.0133 15.6369 9.8922 15.6369 9.73839C15.6369 9.58526 15.5074 9.46485 15.3438 9.46485L4.69727 9.46485C4.52393 9.46485 4.40352 9.58526 4.40352 9.73839C4.40352 9.8922 4.52393 10.0133 4.69727 10.0133ZM4.69727 14.5L10.0017 14.5C10.1743 14.5 10.3038 14.3705 10.3038 14.2174C10.3038 14.0629 10.1743 13.9418 10.0017 13.9418L4.69727 13.9418C4.52393 13.9418 4.40352 14.0629 4.40352 14.2174C4.40352 14.3705 4.52393 14.5 4.69727 14.5ZM0 23.3611C0 25.4356 1.10537 26.5424 3.1876 26.5424L16.8528 26.5424C18.926 26.5424 20.0314 25.4356 20.0314 23.3611L20.0314 3.23643C20.0314 1.16192 18.926 0.0551754 16.8528 0.0551754L3.1876 0.0551754C1.10537 0.0551754 0 1.16192 0 3.23643ZM0.511533 23.3312L0.511533 3.26641C0.511533 1.48145 1.43399 0.557626 3.2126 0.557626L16.8278 0.557626C18.6064 0.557626 19.5289 1.48145 19.5289 3.26641L19.5289 23.3312C19.5289 25.1161 18.6064 26.0309 16.8278 26.0309L3.2126 26.0309C1.43399 26.0309 0.511533 25.1161 0.511533 23.3312Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export function BrainFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.9912 23.9949' className={className}>
      <path
        d='M5.56671 16.7574C8.74415 16.7574 10.3056 14.6424 10.3056 12.3277C10.3056 11.3132 9.917 10.3108 9.15284 9.56545C9.10186 9.50744 9.1086 9.43362 9.1086 9.37014C9.1086 9.23039 9.2045 9.09953 9.3672 9.09953C9.44699 9.09953 9.5088 9.12521 9.57179 9.17502C10.0916 9.65441 10.5242 10.4256 10.723 11.2917C12.6747 10.8062 13.6104 9.55958 13.6104 7.4339C13.6104 7.2921 13.7195 7.18302 13.8613 7.18302C14.0037 7.18302 14.1219 7.2921 14.1219 7.4339C14.1498 9.81271 13.0088 11.249 10.7942 11.7782C10.8046 11.9679 10.8241 12.1303 10.8241 12.3206C10.8241 14.2139 9.90002 15.704 8.34474 16.5546C9.55842 17.852 11.3444 18.466 13.2804 18.466C13.6578 18.466 14.1749 18.4186 14.9682 18.3439C14.8126 17.9668 14.7443 17.5276 14.7443 17.0715C14.7443 10.8258 23.0199 12.6497 23.0199 5.99083C23.0199 3.62969 21.0511 1.88477 18.4795 1.88477C17.9951 1.86592 17.3768 1.96992 16.8129 2.16748C16.166 0.724707 14.7572 0 13.2254 0C10.6418 0 8.75412 1.83955 8.65647 4.41719C8.6551 4.54629 8.53898 4.66807 8.39719 4.66807C8.26242 4.66807 8.14493 4.55127 8.1463 4.38447C8.21329 3.34775 8.50919 2.42549 8.98858 1.66514C8.28253 1.37969 7.54855 1.2457 6.79708 1.2457C4.02609 1.2457 2.42325 3.14297 2.42325 5.02715C2.42325 6.62666 3.53018 8.17412 5.88311 8.17412C6.00674 8.17412 6.14376 8.30206 6.14376 8.42569C6.14376 8.54933 6.00674 8.68566 5.88311 8.68566C3.76895 8.68566 2.53408 7.54991 2.0957 6.16974C0.812792 7.36232 0 9.21573 0 10.9713C0 14.3763 2.30479 16.7574 5.56671 16.7574ZM22.5827 23.9754C24.7146 23.9754 25.8888 21.1237 25.8888 16.648C25.8888 16.09 25.8511 15.5165 25.8225 14.9458C24.9767 15.4284 23.9419 15.7012 22.7482 15.7048C22.6148 15.7118 22.4973 15.5964 22.4973 15.4539C22.4973 15.3114 22.6148 15.2003 22.7482 15.194C25.679 15.1706 27.6299 13.4044 27.6299 10.784C27.6299 8.22746 26.0323 6.36037 23.5682 5.87696C23.6428 12.8878 15.2438 11.6188 15.2741 17.125C15.2784 18.7988 16.5121 20.0995 18.6649 20.0995C19.2045 20.0995 19.4185 20.08 19.7589 20.0612C19.8682 22.4666 20.9945 23.9754 22.5827 23.9754Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

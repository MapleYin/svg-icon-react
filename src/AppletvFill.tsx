import React from 'react'

export default function AppletvFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.8973 23.5961' className={className}>
      <path
        d='M22.282 1.32022C23.1842 2.20352 23.5359 3.40186 23.5359 6.00215L23.5359 17.6505C23.5359 20.2417 23.1842 21.4303 22.282 22.3233C21.3806 23.2255 20.1627 23.5961 17.5813 23.5961L5.94561 23.5961C3.37325 23.5961 2.16514 23.2255 1.25322 22.3233C0.351073 21.4491 0 20.2417 0 17.6505L0 5.82481C0 3.43956 0.369921 2.23213 1.27207 1.33906C2.16514 0.436913 3.40118 0.0474608 5.77735 0.0474608L17.5813 0.0474608C20.1627 0.0474608 21.3617 0.418065 22.282 1.32022ZM6.0503 9.76143C5.72803 9.76143 5.37442 9.37989 4.73057 9.37989C4.0379 9.37989 3.49034 9.65332 3.11924 10.1137C2.68887 10.6319 2.51309 11.3051 2.51309 11.9803C2.51309 13.104 3.04747 14.3672 3.75332 15.2245C4.09786 15.6549 4.42784 15.8697 4.79825 15.8697C5.30743 15.8697 5.59971 15.498 6.22608 15.498C6.48135 15.498 6.74297 15.6061 6.86358 15.6549C7.13633 15.77 7.31211 15.8502 7.62393 15.8502C7.9462 15.8502 8.18194 15.7232 8.33887 15.5579C8.92344 15.0467 9.3545 14.2473 9.54981 13.5825C9.05108 13.3768 8.74766 13.0182 8.55235 12.5683C8.33887 12.0779 8.44219 11.5604 8.55235 11.1118C8.63252 10.837 8.86416 10.4841 9.34336 10.1918C8.97227 9.61631 8.39541 9.34219 7.70137 9.34219C6.91875 9.34219 6.45137 9.76143 6.0503 9.76143ZM11.738 7.83623L11.738 9.34219L10.8193 9.34219L10.8193 10.3683L11.738 10.3683L11.738 14.0819C11.738 15.3814 12.2458 15.8502 13.5648 15.8502C13.8578 15.8502 14.1801 15.8202 14.2603 15.8014L14.2603 14.7076C14.2107 14.7558 13.9848 14.7558 13.8578 14.7558C13.3305 14.7558 13.0486 14.5312 13.0486 13.9536L13.0486 10.3683L14.2889 10.3683L14.2889 9.34219L13.0486 9.34219L13.0486 7.83623ZM14.9041 9.34219L17.2785 15.8014L18.6757 15.8014L21.011 9.34219L19.565 9.34219L17.9544 14.5312L16.3201 9.34219ZM6.01124 9.13643C7.03868 9.24453 7.85899 8.09219 7.78018 7.1917C6.75411 7.24121 6.00079 8.16895 6.01124 9.13643Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
import React from 'react'

export default function Radio({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 33.0702' className={className}>
      <path
        d='M23.7801 12.9607C24.6978 12.9419 25.4392 12.2292 25.4392 11.3302C25.4392 10.4125 24.6978 9.68092 23.7801 9.67047C22.8616 9.65094 22.1203 10.4125 22.1203 11.3302C22.1203 12.2292 22.8616 12.9712 23.7801 12.9607ZM23.7801 17.7817C24.6978 17.7817 25.4392 17.0404 25.4392 16.1219C25.4392 15.2035 24.6978 14.4726 23.7801 14.4726C22.8616 14.4726 22.1203 15.2035 22.1203 16.1219C22.1203 17.0404 22.8616 17.7817 23.7801 17.7817ZM11.59 11.0438C12.0706 11.0438 12.4528 10.6421 12.4528 10.1426C12.4528 9.68092 12.0706 9.27985 11.59 9.27985C11.1199 9.27985 10.737 9.68092 10.737 10.1426C10.737 10.6421 11.1199 11.0438 11.59 11.0438ZM14.7793 11.8585C15.2703 11.8585 15.6421 11.4567 15.6421 10.995C15.6421 10.4956 15.2703 10.1127 14.7793 10.1127C14.3183 10.1127 13.9458 10.4956 13.9458 10.995C13.9458 11.4567 14.3183 11.8585 14.7793 11.8585ZM17.2522 13.9663C17.7328 13.9663 18.1255 13.584 18.1255 13.1035C18.1255 12.6229 17.7328 12.2212 17.2522 12.2212C16.7821 12.2212 16.4188 12.6229 16.4188 13.1035C16.4188 13.584 16.7821 13.9663 17.2522 13.9663ZM17.9979 17.067C18.4596 17.067 18.8509 16.675 18.8509 16.1951C18.8509 15.7145 18.4596 15.3323 17.9979 15.3323C17.5173 15.3323 17.1351 15.7145 17.1351 16.1951C17.1351 16.675 17.5173 17.067 17.9979 17.067ZM17.2522 20.1683C17.7328 20.1683 18.1255 19.7756 18.1255 19.2951C18.1255 18.8145 17.7328 18.4323 17.2522 18.4323C16.7821 18.4323 16.4188 18.8145 16.4188 19.2951C16.4188 19.7756 16.7821 20.1683 17.2522 20.1683ZM14.7793 22.6308C15.2703 22.6308 15.6421 22.2479 15.6421 21.7485C15.6421 21.2868 15.2703 20.885 14.7793 20.885C14.3183 20.885 13.9458 21.2868 13.9458 21.7485C13.9458 22.2479 14.3183 22.6308 14.7793 22.6308ZM11.59 23.8086C12.0706 23.8086 12.4528 23.4075 12.4528 22.9458C12.4528 22.4464 12.0706 22.0446 11.59 22.0446C11.1199 22.0446 10.737 22.4464 10.737 22.9458C10.737 23.4075 11.1199 23.8086 11.59 23.8086ZM8.3917 22.6308C8.8625 22.6308 9.22588 22.2479 9.22588 21.7485C9.22588 21.2868 8.8625 20.885 8.3917 20.885C7.90137 20.885 7.52891 21.2868 7.52891 21.7485C7.52891 22.2479 7.90137 22.6308 8.3917 22.6308ZM5.92784 20.1683C6.38955 20.1683 6.75293 19.7756 6.75293 19.2951C6.75293 18.8145 6.38955 18.4323 5.92784 18.4323C5.44795 18.4323 5.04619 18.8145 5.04619 19.2951C5.04619 19.7756 5.44795 20.1683 5.92784 20.1683ZM5.17383 17.067C5.65371 17.067 6.03662 16.675 6.03662 16.1951C6.03662 15.7145 5.65371 15.3323 5.17383 15.3323C4.71211 15.3323 4.3208 15.7145 4.3208 16.1951C4.3208 16.675 4.71211 17.067 5.17383 17.067ZM5.92784 13.9663C6.38955 13.9663 6.75293 13.584 6.75293 13.1035C6.75293 12.6229 6.38955 12.2212 5.92784 12.2212C5.44795 12.2212 5.04619 12.6229 5.04619 13.1035C5.04619 13.584 5.44795 13.9663 5.92784 13.9663ZM8.3917 11.8585C8.8625 11.8585 9.22588 11.4567 9.22588 10.995C9.22588 10.4956 8.8625 10.1127 8.3917 10.1127C7.90137 10.1127 7.52891 10.4956 7.52891 10.995C7.52891 11.4567 7.90137 11.8585 8.3917 11.8585ZM11.59 14.3112C12.0706 14.3112 12.4528 13.929 12.4528 13.4484C12.4528 12.9678 12.0706 12.5752 11.59 12.5752C11.1199 12.5752 10.737 12.9678 10.737 13.4484C10.737 13.929 11.1199 14.3112 11.59 14.3112ZM14.6028 15.6177C15.0834 15.6177 15.4468 15.2153 15.4468 14.7549C15.4468 14.2932 15.0834 13.8915 14.6028 13.8915C14.1418 13.8915 13.7394 14.2932 13.7394 14.7549C13.7394 15.2153 14.1418 15.6177 14.6028 15.6177ZM14.6028 19.1781C15.0834 19.1781 15.4468 18.777 15.4468 18.3153C15.4468 17.8159 15.0834 17.4337 14.6028 17.4337C14.1418 17.4337 13.7394 17.8159 13.7394 18.3153C13.7394 18.777 14.1418 19.1781 14.6028 19.1781ZM11.59 20.5223C12.0706 20.5223 12.4528 20.1199 12.4528 19.6393C12.4528 19.1594 12.0706 18.7765 11.59 18.7765C11.1199 18.7765 10.737 19.1594 10.737 19.6393C10.737 20.1199 11.1199 20.5223 11.59 20.5223ZM8.56817 19.1781C9.02989 19.1781 9.43164 18.777 9.43164 18.3153C9.43164 17.8159 9.02989 17.4337 8.56817 17.4337C8.08828 17.4337 7.7249 17.8159 7.7249 18.3153C7.7249 18.777 8.08828 19.1781 8.56817 19.1781ZM8.56817 15.6177C9.02989 15.6177 9.43164 15.2153 9.43164 14.7549C9.43164 14.2932 9.02989 13.8915 8.56817 13.8915C8.08828 13.8915 7.7249 14.2932 7.7249 14.7549C7.7249 15.2153 8.08828 15.6177 8.56817 15.6177ZM11.59 17.4112C12.0706 17.4112 12.4528 17.029 12.4528 16.5484C12.4528 16.0685 12.0706 15.6765 11.59 15.6765C11.1199 15.6765 10.737 16.0685 10.737 16.5484C10.737 17.029 11.1199 17.4112 11.59 17.4112ZM24.1456 6.09528L24.3006 5.60738L7.09238 0.0180275C6.95195-0.038321 6.8081 0.043028 6.75312 0.184144C6.71494 0.305728 6.79697 0.449579 6.91855 0.496845ZM3.18125 27.506L25.8721 27.506C27.9473 27.506 29.054 26.363 29.054 24.3184L29.054 8.73434C29.054 6.68912 27.9473 5.54605 25.8721 5.54605L3.18125 5.54605C1.10674 5.54605 0 6.65211 0 8.73434L0 24.3184C0 26.4007 1.10674 27.506 3.18125 27.506ZM3.21124 26.9945C1.42628 26.9945 0.511533 26.072 0.511533 24.2934L0.511533 8.75866C0.511533 6.98073 1.42628 6.05759 3.21124 6.05759L25.8428 6.05759C27.553 6.05759 28.5418 6.98073 28.5418 8.75866L28.5418 24.2934C28.5418 26.072 27.553 26.9945 25.8428 26.9945Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
import React from 'react'

export function Appletv({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.8973 23.5961' className={className}>
      <path
        d='M5.94561 23.5961L17.5813 23.5961C20.1627 23.5961 21.3806 23.2255 22.282 22.3233C23.1842 21.4303 23.5359 20.2417 23.5359 17.6505L23.5359 6.00215C23.5359 3.40186 23.1842 2.20352 22.282 1.32022C21.3617 0.418065 20.1627 0.0474608 17.5813 0.0474608L5.77735 0.0474608C3.40118 0.0474608 2.16514 0.436913 1.27207 1.33906C0.369921 2.23213 0 3.43956 0 5.82481L0 17.6505C0 20.2417 0.351073 21.4491 1.25322 22.3233C2.16514 23.2255 3.37325 23.5961 5.94561 23.5961ZM5.63106 23.0846C3.72462 23.0846 2.44962 22.7153 1.65089 21.9257C0.861923 21.136 0.511533 19.8903 0.511533 17.965L0.511533 5.85518C0.511533 3.79093 0.861923 2.49776 1.64181 1.70811C2.43077 0.900301 3.76163 0.558994 5.79864 0.558994L17.9049 0.558994C19.8113 0.558994 21.0863 0.937313 21.8753 1.72696C22.6649 2.51661 23.0244 3.76231 23.0244 5.67852L23.0244 17.965C23.0244 19.8903 22.6468 21.136 21.8753 21.9257C21.0863 22.7335 19.8113 23.0846 17.9049 23.0846Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.00264 9.13145C7.02803 9.23956 7.85606 8.0795 7.76954 7.18106C6.74415 7.22989 5.98311 8.16534 6.00264 9.13145ZM9.54415 13.5882C9.04678 13.3831 8.73428 13.0245 8.54034 12.5753C8.33526 12.0772 8.43858 11.5604 8.54034 11.1125C8.61915 10.8384 8.85079 10.4868 9.33838 10.1939C8.95889 9.61065 8.38272 9.33653 7.69004 9.33653C6.9004 9.33653 6.43301 9.75508 6.03331 9.75508C5.71104 9.75508 5.35811 9.37422 4.70655 9.37422C4.01456 9.37422 3.46768 9.64766 3.09727 10.1157C2.6585 10.6242 2.48272 11.3064 2.48272 11.9796C2.48272 13.1104 3.0171 14.3806 3.72999 15.2365C4.08292 15.6753 4.40381 15.8804 4.77354 15.8804C5.29112 15.8804 5.5834 15.5093 6.20772 15.5093C6.46299 15.5093 6.72393 15.6265 6.85362 15.6753C7.12569 15.7814 7.30147 15.8615 7.6126 15.8615C7.93419 15.8615 8.16993 15.7346 8.33526 15.5692C8.91006 15.0594 9.34952 14.2516 9.54415 13.5882ZM13.0557 7.82422L11.738 7.82422L11.738 9.33653L10.8207 9.33653L10.8207 10.3703L11.738 10.3703L11.738 14.0869C11.738 15.3935 12.2542 15.8615 13.5712 15.8615C13.8635 15.8615 14.1851 15.8315 14.2652 15.8127L14.2652 14.7203C14.2157 14.7685 13.9904 14.7685 13.8635 14.7685C13.3277 14.7685 13.0557 14.5439 13.0557 13.9677L13.0557 10.3703L14.2939 10.3703L14.2939 9.33653L13.0557 9.33653ZM18.7004 15.8127L21.0323 9.33653L19.5884 9.33653L17.9714 14.5439L16.3308 9.33653L14.9077 9.33653L17.2969 15.8127Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

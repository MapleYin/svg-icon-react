import React from 'react'

export default function L1ButtonRoundedbottomHorizontal({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2232 20.2154' className={className}>
      <path
        d='M8.92726 20.205L17.9346 20.205C24.42 20.205 26.8618 17.1033 26.8618 11.241L26.8618 3.02706C26.8618 1.10537 25.7837 0 23.8327 0L3.02979 0C1.06904 0 0 1.06836 0 3.02706L0 11.241C0 17.1033 2.4334 20.205 8.92726 20.205ZM8.96495 19.6935C2.76837 19.6935 0.511533 16.7654 0.511533 11.1934L0.511533 3.05137C0.511533 1.37745 1.35997 0.503135 3.05977 0.503135L23.8021 0.503135C25.4278 0.503135 26.3503 1.37745 26.3503 3.05137L26.3503 11.1934C26.3503 16.7654 24.0935 19.6935 17.8976 19.6935Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.78418 15.2103L13.6838 15.2103C13.8362 15.2103 13.9762 15.071 13.9762 14.8997C13.9762 14.7466 13.8362 14.6073 13.6838 14.6073L10.1134 14.6073L10.1134 5.20538C10.1134 5.04815 9.96094 4.88663 9.79463 4.88663C9.61856 4.88663 9.45703 5.04815 9.45703 5.20538L9.45703 14.8615C9.45703 15.0703 9.60469 15.2103 9.78418 15.2103ZM16.7189 15.3281C16.8852 15.3281 17.0383 15.1757 17.0383 14.9898L17.0383 5.26671C17.0383 5.08243 16.8859 4.93135 16.7016 4.93135C16.5053 4.93135 16.3522 5.02178 16.2247 5.14512L14.3777 6.68028C14.2914 6.75411 14.263 6.81456 14.263 6.9252C14.263 7.07628 14.3611 7.21144 14.5304 7.21144C14.6153 7.21144 14.6592 7.18077 14.7212 7.13829L16.3897 5.78663L16.3897 14.9898C16.3897 15.1757 16.5421 15.3281 16.7189 15.3281Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

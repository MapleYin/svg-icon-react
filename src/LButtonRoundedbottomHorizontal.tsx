import React from 'react'

export default function LButtonRoundedbottomHorizontal({
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
        d='M11.203 14.8749L16.3658 14.8749C16.5133 14.8749 16.6378 14.7454 16.6378 14.5966C16.6378 14.4659 16.4944 14.3169 16.3658 14.3169L11.4832 14.3169L11.4832 5.59639C11.4832 5.44707 11.3405 5.32891 11.203 5.32891C11.0467 5.32891 10.9249 5.43868 10.9249 5.59639L10.9249 14.5997C10.9249 14.7386 11.0655 14.8749 11.203 14.8749Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
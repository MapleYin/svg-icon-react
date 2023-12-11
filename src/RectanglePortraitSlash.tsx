import React from 'react'

export default function RectanglePortraitSlash({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7726 26.5424' className={className}>
      <path
        d='M3.69762 5.42561L3.69762 23.3312C3.69762 25.1161 4.62008 26.0309 6.39869 26.0309L20.0139 26.0309C21.4233 26.0309 22.2951 25.4564 22.594 24.3275L23.015 24.7487C22.6035 25.9254 21.5931 26.5424 20.0389 26.5424L6.37369 26.5424C4.30054 26.5424 3.18608 25.4356 3.18608 23.3611L3.18608 4.91392ZM23.2265 3.23643L23.2265 21.6391L22.715 21.1275L22.715 3.26641C22.715 1.48145 21.7925 0.557626 20.0139 0.557626L6.39869 0.557626C5.0017 0.557626 4.13289 1.12754 3.82698 2.23951L3.40961 1.82215C3.82829 0.662501 4.83794 0.0551754 6.37369 0.0551754L20.0389 0.0551754C22.1205 0.0551754 23.2265 1.16192 23.2265 3.23643Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.0061 25.4625C25.1118 25.5668 25.2842 25.5668 25.3885 25.4625C25.5292 25.3394 25.4928 25.1837 25.3885 25.0794L1.36881 1.07012C1.28336 0.9749 1.13677 0.946971 0.995461 1.07012C0.891163 1.17373 0.891163 1.33916 0.995461 1.44278Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
import React from 'react'

export default function SpeakerBadgeExclamationmark({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.1445 20.7627' className={className}>
      <path
        d='M28.7832 10.3765C28.7832 13.6519 26.0833 16.3309 22.8281 16.3309C19.5618 16.3309 16.8647 13.6532 16.8647 10.3765C16.8647 7.10948 19.5618 4.41231 22.8281 4.41231C26.1042 4.41231 28.7832 7.10039 28.7832 10.3765ZM21.9942 13.2558C21.9942 13.7132 22.3532 14.0904 22.81 14.0904C23.2395 14.0904 23.6251 13.7132 23.6349 13.2558C23.6537 12.8367 23.2583 12.4399 22.81 12.4399C22.3714 12.4399 21.9942 12.8179 21.9942 13.2558ZM22.2907 7.00508L22.3521 11.0318C22.3527 11.3232 22.5451 11.5429 22.8281 11.5429C23.1021 11.5429 23.2951 11.3232 23.2958 11.0318L23.3565 7.00508C23.3571 6.68096 23.1439 6.44883 22.8281 6.44883C22.5033 6.44883 22.29 6.68096 22.2907 7.00508Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.44464 14.6744L5.45391 14.6744C5.68985 14.6744 5.83428 14.7414 5.98643 14.8747L12.1771 20.3677C12.3677 20.5549 12.6339 20.7264 12.9537 20.7264C13.4234 20.7264 13.6427 20.3786 13.6427 19.9452L13.6427 0.785258C13.6427 0.36094 13.4234 0 12.9523 0C12.6416 0 12.3802 0.200782 12.1771 0.371878L5.98643 6.03809C5.83428 6.17139 5.68985 6.20976 5.45391 6.20976L1.44464 6.20976C0.444534 6.20976 0 6.70176 0 7.67169L0 13.2411C0 14.2299 0.462698 14.6744 1.44464 14.6744ZM1.44034 14.1647C0.741122 14.1647 0.517197 13.922 0.517197 13.2228L0.517197 7.68936C0.517197 6.98106 0.741122 6.73829 1.44034 6.73829L5.39044 6.73829C5.79581 6.73829 6.0588 6.68878 6.36085 6.39786L12.5421 0.732141C12.6656 0.627454 12.7431 0.532532 12.8952 0.532532C13.0292 0.532532 13.1255 0.610657 13.1255 0.773255L13.1255 19.9343C13.1255 20.1157 13.0292 20.2022 12.9134 20.2022C12.8178 20.2022 12.7306 20.1639 12.5609 20.0124L6.36085 14.5059C6.06788 14.2422 5.79581 14.1647 5.39044 14.1647Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
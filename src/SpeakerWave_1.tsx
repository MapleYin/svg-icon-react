import React from 'react'

export default function SpeakerWave_1({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.3822 20.7627' className={className}>
      <path
        d='M18.9858 15.4996C19.1208 15.59 19.2563 15.5657 19.3487 15.4553C20.3155 14.2221 21.0209 12.4944 21.0209 10.3681C21.0209 8.2501 20.3155 6.52315 19.3487 5.28926C19.2563 5.17881 19.1208 5.15518 18.9858 5.24561C18.874 5.33946 18.8511 5.48536 18.9561 5.63487C20.0111 7.08282 20.4953 8.47022 20.4953 10.3681C20.4953 12.2743 20.0104 13.661 18.9561 15.1104C18.8518 15.2599 18.874 15.4051 18.9858 15.4996Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.44464 14.6744L5.45391 14.6744C5.68985 14.6744 5.83428 14.7414 5.98643 14.8747L12.1771 20.3677C12.367 20.5549 12.6339 20.7264 12.953 20.7264C13.4234 20.7264 13.642 20.3786 13.642 19.9452L13.642 0.785258C13.642 0.36094 13.4234 0 12.9517 0C12.6416 0 12.3802 0.200782 12.1771 0.371878L5.98643 6.03809C5.83428 6.17139 5.68985 6.20976 5.45391 6.20976L1.44464 6.20976C0.444534 6.20976 0 6.70176 0 7.67169L0 13.2411C0 14.2299 0.462698 14.6744 1.44464 14.6744ZM1.44034 14.1647C0.741122 14.1647 0.517197 13.922 0.517197 13.2228L0.517197 7.68936C0.517197 6.98106 0.741122 6.73829 1.44034 6.73829L5.39044 6.73829C5.79581 6.73829 6.0588 6.68878 6.36085 6.39786L12.5421 0.732141C12.6656 0.627454 12.7431 0.532532 12.8952 0.532532C13.0292 0.532532 13.1255 0.610657 13.1255 0.773255L13.1255 19.9343C13.1255 20.1157 13.0292 20.2022 12.9134 20.2022C12.8178 20.2022 12.7306 20.1639 12.5609 20.0124L6.36085 14.5059C6.06788 14.2422 5.79581 14.1647 5.39044 14.1647Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
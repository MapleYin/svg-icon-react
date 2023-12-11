import React from 'react'

export default function LightBeaconMax({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.8394 24.5164' className={className}>
      <path
        d='M3.19229 13.0034C3.30889 13.0034 3.46749 12.8741 3.46749 12.7575C3.46749 12.6221 3.30889 12.4746 3.19229 12.4746L0.245904 12.4746C0.129299 12.4746 0 12.6137 0 12.7575C0 12.8735 0.129299 13.0034 0.245904 13.0034ZM5.79766 6.20851C5.88584 6.29669 6.04493 6.29737 6.16104 6.20851C6.27784 6.10987 6.27716 5.94307 6.16104 5.82695L4.10284 3.7583C4.00626 3.63311 3.83741 3.63311 3.73877 3.7583C3.64151 3.85626 3.64151 4.00489 3.73877 4.12101ZM12.4746 3.2209C12.4746 3.3375 12.5851 3.4668 12.7198 3.4668C12.856 3.4668 13.0034 3.3375 13.0034 3.2209L13.0034 0.283599C13.0034 0.139065 12.8644 0 12.7198 0C12.5851 0 12.4746 0.139065 12.4746 0.283599ZM19.2695 5.82695C19.1534 5.94307 19.1528 6.10987 19.2695 6.20851C19.3675 6.30646 19.5538 6.31485 19.6329 6.20851L21.7107 4.12101C21.8268 4.00489 21.8268 3.85626 21.7107 3.7583C21.612 3.63311 21.4634 3.63311 21.3382 3.7583ZM25.2035 13.0034C25.3201 13.0034 25.4781 12.8735 25.4781 12.7575C25.4781 12.6137 25.3201 12.4746 25.2035 12.4746L22.2572 12.4746C22.1406 12.4746 22.0106 12.6221 22.0106 12.7575C22.0106 12.8741 22.1406 13.0034 22.2572 13.0034Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M19.4323 22.0597L19.9439 22.0597L19.9439 12.9333C19.9439 8.66544 16.9877 5.70929 12.7198 5.70929C8.48966 5.70929 5.53419 8.66544 5.53419 12.9333L5.53419 22.0597L6.04572 22.0597L6.04572 12.9333C6.04572 8.98674 8.79279 6.22082 12.7198 6.22082C16.6755 6.22082 19.4323 8.98674 19.4323 12.9333ZM21.7718 22.3385C21.9324 22.3385 22.0422 22.2392 22.0422 22.0967C22.0422 21.936 21.9324 21.8263 21.7718 21.8263L3.67765 21.8263C3.53516 21.8263 3.41768 21.936 3.41768 22.0967C3.41768 22.2392 3.53516 22.3385 3.67765 22.3385ZM12.9812 12.6082C12.9812 12.4664 12.8623 12.356 12.7198 12.356C12.5871 12.356 12.4878 12.4664 12.4878 12.6082L12.4878 22.0597L12.9812 22.0597Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
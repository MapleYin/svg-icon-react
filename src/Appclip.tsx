import React from 'react'

export default function Appclip({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.1007 21.7582' className={className}>
      <path
        d='M1.56778 1.59502C0.354398 2.82656 0.0381845 4.4458 0.0172859 5.95918C0.0256842 6.13115 0.12383 6.25859 0.313284 6.25859C0.482524 6.25859 0.606548 6.11777 0.592486 5.94853C0.631354 4.65361 0.8628 3.10215 1.97305 1.99053C3.07061 0.885944 4.63613 0.632038 5.93447 0.618365C6.09258 0.622661 6.2334 0.488871 6.2334 0.332132C6.2334 0.171291 6.10664 0.0452155 5.93535 0.0452155C4.43652 0.0542974 2.79502 0.38594 1.56778 1.59502ZM14.2729 0L7.45743 0C7.30635 0 7.17754 0.12881 7.17754 0.288284C7.17754 0.447758 7.30635 0.576568 7.45743 0.576568L14.2729 0.576568C14.433 0.576568 14.5618 0.447758 14.5618 0.288284C14.5618 0.12881 14.433 0 14.2729 0ZM20.1625 1.59502C18.9443 0.38594 17.3028 0.0542974 15.804 0.0452155C15.6327 0.0452155 15.506 0.171291 15.506 0.332132C15.506 0.488871 15.6377 0.622661 15.8049 0.618365C17.1103 0.631354 18.6681 0.885261 19.7663 1.99053C20.8766 3.10215 21.108 4.65361 21.1378 5.94853C21.1328 6.11777 21.2478 6.25859 21.4261 6.25859C21.6155 6.25859 21.7137 6.13115 21.713 5.95918C21.7012 4.4458 21.385 2.82656 20.1625 1.59502ZM21.7394 14.2931L21.7394 7.44834C21.7394 7.28819 21.6106 7.15938 21.4511 7.15938C21.2909 7.15938 21.1621 7.28819 21.1621 7.44834L21.1621 14.2931C21.1621 14.4525 21.2909 14.5814 21.4511 14.5814C21.6106 14.5814 21.7394 14.4525 21.7394 14.2931ZM20.1625 20.1534C21.385 18.9219 21.7012 17.2929 21.713 15.7802C21.7137 15.6173 21.6155 15.4808 21.4261 15.4808C21.2478 15.4808 21.1328 15.6216 21.1378 15.7999C21.108 17.0857 20.8766 18.6456 19.7663 19.7481C18.6688 20.8527 17.1039 21.1073 15.8049 21.1203C15.6377 21.116 15.506 21.2498 15.506 21.4156C15.506 21.5681 15.6327 21.7032 15.804 21.7032C17.3028 21.6844 18.9443 21.3625 20.1625 20.1534ZM7.45743 21.7394L14.2729 21.7394C14.433 21.7394 14.5618 21.6106 14.5618 21.4504C14.5618 21.3 14.433 21.1712 14.2729 21.1712L7.45743 21.1712C7.30635 21.1712 7.17754 21.3 7.17754 21.4504C7.17754 21.6106 7.30635 21.7394 7.45743 21.7394ZM1.56778 20.1534C2.79502 21.3625 4.43652 21.6844 5.93535 21.7032C6.10664 21.7032 6.2334 21.5681 6.2334 21.4156C6.2334 21.2498 6.09258 21.116 5.93447 21.1203C4.6291 21.108 3.07129 20.8534 1.97305 19.7481C0.8628 18.6456 0.631354 17.0857 0.592486 15.7999C0.606548 15.6216 0.482524 15.4808 0.313284 15.4808C0.12383 15.4808 0.0256842 15.6173 0.0172859 15.7802C0.0381845 17.2929 0.354398 18.9219 1.56778 20.1534ZM0 7.44834L0 14.2931C0 14.4525 0.12881 14.5814 0.288284 14.5814C0.43936 14.5814 0.568169 14.4525 0.568169 14.2931L0.568169 7.44834C0.568169 7.28819 0.43936 7.15938 0.288284 7.15938C0.12881 7.15938 0 7.28819 0 7.44834Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.34815 18.7209L14.3912 18.7209C16.2666 18.7209 17.1429 18.455 17.7947 17.8031C18.4654 17.1324 18.7118 16.2848 18.7118 14.3905L18.7118 7.34815C18.7118 5.45391 18.4654 4.59717 17.7947 3.94531C17.1429 3.29346 16.2666 3.02754 14.3912 3.02754L7.2085 3.02754C5.49161 3.02754 4.58809 3.31162 3.94531 3.95508C3.29346 4.60625 3.01846 5.49092 3.01846 7.2085L3.01846 14.3905C3.01846 16.2848 3.27461 17.1513 3.94531 17.8031C4.58809 18.455 5.47276 18.7209 7.34815 18.7209Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
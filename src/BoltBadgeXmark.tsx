import React from 'react'

export default function BoltBadgeXmark({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7667 28.8299' className={className}>
      <path
        d='M17.3424 1.87891L13.3983 12.3094L20.7206 12.3094C20.9162 12.3094 20.9283 12.413 20.9283 12.4683C20.9283 12.6041 20.8754 12.7016 20.7528 12.8367L18.885 15.2086C18.6139 15.2416 18.3504 15.2989 18.0953 15.3779L20.0942 12.8309L12.6888 12.8309L16.3287 3.01842L6.30989 15.7849L13.7062 15.7849L10.0643 25.6114L13.0681 21.7838C13.0591 21.8463 13.0582 21.9107 13.0582 21.9753C13.0582 22.1757 13.067 22.3742 13.0888 22.5693L9.58401 27.0199C9.2882 27.3755 8.87785 27.2157 9.06232 26.7459L12.9974 16.3154L5.68478 16.3154C5.48849 16.3154 5.4673 16.2118 5.4673 16.1468C5.4673 16.02 5.52931 15.9142 5.64288 15.7881L16.8207 1.59581C17.1074 1.23955 17.5178 1.4084 17.3424 1.87891Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.8763 21.9753C25.8763 25.2507 23.1771 27.9395 19.9128 27.9395C16.6556 27.9395 13.9487 25.2521 13.9487 21.9753C13.9487 18.7181 16.6556 16.0118 19.9128 16.0118C23.1889 16.0118 25.8763 18.6992 25.8763 21.9753ZM22.1434 19.1071L19.9387 21.3216L17.8149 19.2173C17.6504 19.0444 17.3933 19.0074 17.1827 19.2173C16.9631 19.4174 17.0092 19.6668 17.1827 19.8501L19.287 21.9823L17.0726 24.1968C16.8879 24.3815 16.8452 24.649 17.0467 24.8505C17.2489 25.0436 17.5346 25.0093 17.7011 24.8435L19.9337 22.6109L22.0296 24.7151C22.2122 24.8978 22.4791 24.9341 22.6806 24.7151C22.8814 24.4962 22.8632 24.2475 22.6806 24.0642L20.5672 21.9683L22.7901 19.7545C22.9657 19.5698 22.9902 19.2834 22.7971 19.1001C22.5956 18.9175 22.3281 18.9225 22.1434 19.1071Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

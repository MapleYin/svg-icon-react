import React from 'react'

export default function GymBag({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.228 20.0272' className={className}>
      <path
        d='M7.4631 5.78645L7.97531 5.78645L7.97531 3.72716C7.97531 1.73292 9.30735 0.668661 11.1691 0.668661L17.6976 0.668661C19.56 0.668661 20.892 1.73292 20.892 3.72716L20.892 5.78645L21.4042 5.78645L21.4042 3.72716C21.4042 1.4418 19.8609 0.157128 17.6976 0.157128L11.1691 0.157128C8.99738 0.157128 7.4631 1.4418 7.4631 3.72716ZM3.15928 20.0272L25.7074 20.0272C27.6415 20.0272 28.8666 18.8216 28.8666 16.9174L28.8666 10.9381C28.8666 7.77687 26.8752 5.82384 23.6945 5.82384L5.16309 5.82384C1.99141 5.82384 0 7.77687 0 10.9381L0 16.9174C0 18.8216 1.21602 20.0272 3.15928 20.0272ZM3.15157 19.5156C1.51759 19.5156 0.511533 18.518 0.511533 16.9301L0.511533 10.9345C0.511533 8.09592 2.29864 6.32697 5.16446 6.32697L23.7022 6.32697C26.568 6.32697 28.3551 8.09592 28.3551 10.9345L28.3551 16.9301C28.3551 18.518 27.34 19.5156 25.706 19.5156ZM6.57335 19.7579L7.11886 19.7579L7.11886 6.2132L6.57335 6.2132ZM8.31955 19.7579L8.86506 19.7579L8.86506 6.2132L8.31955 6.2132ZM20.0023 19.7579L20.5478 19.7579L20.5478 6.2132L20.0023 6.2132ZM21.7485 19.7579L22.294 19.7579L22.294 6.2132L21.7485 6.2132ZM8.651 12.4901L20.2234 12.4901L20.2234 11.9445L8.651 11.9445Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
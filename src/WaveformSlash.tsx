import React from 'react'

export default function WaveformSlash({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.1221 25.4429' className={className}>
      <path
        d='M23.6916 8.30986L23.6916 17.1331C23.6916 17.2846 23.5923 17.3846 23.44 17.3846C23.2871 17.3846 23.1801 17.2846 23.1801 17.1331L23.1801 8.30986C23.1801 8.15829 23.2871 8.05761 23.44 8.05761C23.5923 8.05761 23.6916 8.15829 23.6916 8.30986Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M19.8675 4.07068L19.8675 15.5139L19.3559 15.0023L19.3559 4.07068C19.3559 3.91912 19.463 3.81843 19.6166 3.81843C19.7688 3.81843 19.8675 3.91912 19.8675 4.07068Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M16.0433 15.0126L16.0433 18.8048C16.0433 18.9654 15.9447 19.0647 15.7925 19.0647C15.6395 19.0647 15.5318 18.9654 15.5318 18.8048L15.5318 14.5011ZM16.0433 6.52577L16.0433 11.6897L15.5318 11.1782L15.5318 6.52577C15.5318 6.3742 15.6395 6.2742 15.7925 6.2742C15.9447 6.2742 16.0433 6.3742 16.0433 6.52577Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.2199 11.1892L12.2199 24.9761C12.2199 25.1367 12.1206 25.236 11.9677 25.236C11.8154 25.236 11.7084 25.1367 11.7084 24.9761L11.7084 10.6776ZM12.2199 0.46688L12.2199 7.86629L11.7084 7.35475L11.7084 0.46688C11.7084 0.306233 11.8154 0.206914 11.9677 0.206914C12.1206 0.206914 12.2199 0.306233 12.2199 0.46688Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.39578 7.36504L8.39578 19.9161C8.39578 20.0677 8.29714 20.167 8.14421 20.167C7.99128 20.167 7.88425 20.0677 7.88425 19.9161L7.88425 6.8535Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.57234 9.70741L4.57234 15.7355C4.57234 15.8969 4.47302 15.9962 4.32009 15.9962C4.16784 15.9962 4.06012 15.8969 4.06012 15.7355L4.06012 9.70741C4.06012 9.54608 4.16784 9.45516 4.32009 9.45516C4.47302 9.45516 4.57234 9.54608 4.57234 9.70741Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M26.742 24.4315C26.8463 24.5365 27.011 24.5365 27.1244 24.4315C27.2469 24.3084 27.2287 24.1541 27.1244 24.0498L4.0658 1.00028C3.97967 0.905059 3.80584 0.87713 3.68269 1.00028C3.57907 1.10457 3.57907 1.26932 3.68269 1.37362Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

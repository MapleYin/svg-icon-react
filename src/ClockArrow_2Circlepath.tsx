import React from 'react'

export default function ClockArrow_2Circlepath({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 24.351' className={className}>
      <path
        d='M14.527 0C8.52835 0 3.51331 4.38389 2.53625 10.107L0.381081 10.107C0.0253157 10.107-0.126638 10.3633 0.123461 10.7256L2.70618 14.4257C2.9138 14.7267 3.16936 14.726 3.38538 14.4257L5.9681 10.7249C6.21683 10.3633 6.06556 10.107 5.71048 10.107L3.04759 10.107C4.02054 4.66046 8.7931 0.500889 14.527 0.500889C18.8848 0.501573 22.6195 2.94805 24.7088 6.47168C24.7768 6.60235 24.9304 6.63916 25.0617 6.58438C25.1736 6.52051 25.2279 6.37959 25.1481 6.2371C22.8749 2.61982 19.0691 0 14.527 0ZM14.527 24.3315C20.5256 24.3315 25.5407 19.9566 26.5177 14.2244L28.6729 14.2244C29.0286 14.2244 29.1799 13.9682 28.9305 13.6149L26.3478 9.90576C26.1402 9.61455 25.8755 9.60615 25.6686 9.90576L23.0859 13.6065C22.8364 13.9682 22.9884 14.2244 23.3435 14.2244L26.0071 14.2244C25.0327 19.671 20.2609 23.8319 14.527 23.8319C10.1601 23.8312 6.43451 21.3932 4.34515 17.8598C4.2681 17.7291 4.1138 17.6923 3.99222 17.7478C3.8804 17.8109 3.8261 17.9519 3.90589 18.0944C6.17903 21.7214 9.98421 24.3315 14.527 24.3315Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.0115 5.33047C13.8508 5.33047 13.7333 5.42979 13.7333 5.57159L13.7333 12.2075C13.7333 12.4265 13.794 12.533 13.8796 12.6409L17.2156 17.0463C17.294 17.1511 17.4748 17.1468 17.5594 17.0529C17.6783 16.9423 17.6901 16.8439 17.6039 16.732L14.0954 12.1826L14.2435 12.6043L14.2435 5.57159C14.2435 5.42979 14.1351 5.33047 14.0115 5.33047Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

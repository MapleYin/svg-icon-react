import React from 'react'

export default function SunglassesFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.7525 11.3119' className={className}>
      <path
        d='M17.6959 3.21524C18.4483 3.21524 18.9395 3.59835 19.2549 4.29688L20.5669 7.17618C21.9053 10.1075 24.2171 11.2742 26.9783 11.2742C30.9698 11.2742 33.7359 9.00079 34.219 4.62842L34.4443 2.65108C34.5599 1.57764 35.3911 0.856842 35.3911 0.363286C35.3911 0.160841 35.2632 0 34.8906 0C31.1109 0 27.8754 0.195312 25.8652 0.499414C21.695 1.12647 19.9554 2.2418 17.6959 2.2418C15.4358 2.2418 13.7052 1.12647 9.53497 0.499414C7.51642 0.195312 4.28096 0 0.509576 0C0.128615 0 0 0.160841 0 0.363286C0 0.856842 0.840333 1.57764 0.956643 2.65108L1.18194 4.62842C1.65528 9.00079 4.42129 11.2742 8.42257 11.2742C11.1831 11.2742 13.4865 10.1075 14.8242 7.17618L16.1362 4.29688C16.4524 3.59835 16.9436 3.21524 17.6959 3.21524Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

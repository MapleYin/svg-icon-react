import React from 'react'

export default function Sunglasses({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.7525 11.3119' className={className}>
      <path
        d='M35.3911 0.363286C35.3911 0.856842 34.5599 1.57764 34.4443 2.65108L34.219 4.62842C33.7359 9.00079 30.9698 11.2742 26.9783 11.2742C24.2171 11.2742 21.9053 10.1075 20.5669 7.17618L19.2549 4.29688C18.9395 3.59835 18.4483 3.21524 17.6959 3.21524C16.9436 3.21524 16.4524 3.59835 16.1362 4.29688L14.8242 7.17618C13.4865 10.1075 11.1831 11.2742 8.42257 11.2742C4.42129 11.2742 1.65528 9.00079 1.18194 4.62842L0.956643 2.65108C0.840333 1.57764 0 0.856842 0 0.363286C0 0.160841 0.128615 0 0.509576 0C4.28096 0 7.51642 0.195312 9.53497 0.499414C13.7052 1.12647 15.4358 2.2418 17.6959 2.2418C19.9554 2.2418 21.695 1.12647 25.8652 0.499414C27.8754 0.195312 31.1109 0 34.8906 0C35.2632 0 35.3911 0.160841 35.3911 0.363286ZM1.67413 3.49717C1.67413 7.71612 4.0794 10.7514 8.43233 10.7514C12.334 10.7514 14.6668 7.97071 14.6668 4.57344C14.6668 2.29717 11.5344 1.00997 5.97364 1.00997C3.12325 1.00997 1.67413 1.69425 1.67413 3.49717ZM20.7243 4.57344C20.7243 7.97071 23.0571 10.7514 26.9588 10.7514C31.3215 10.7514 33.7268 7.71612 33.7268 3.49717C33.7268 1.69425 32.2679 1.00997 29.4273 1.00997C23.8665 1.00997 20.7243 2.29717 20.7243 4.57344Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

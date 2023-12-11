import React from 'react'

export default function AntFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.0316 32.4017' className={className}>
      <path
        d='M9.33511 31.0104C12.66 31.0104 15.8668 27.2829 15.8668 23.1891C15.8668 21.7805 15.4919 20.7279 14.7155 19.9386C15.4079 20.1096 16.0737 20.2715 16.7661 20.4425C17.8098 20.6957 18.2111 21.3692 18.0115 22.5542L16.9182 29.3352C16.8932 29.5145 17.0477 29.6495 17.2377 29.6495C17.4387 29.6495 17.5005 29.5445 17.543 29.3253L18.6243 22.4778C18.8496 21.0032 18.2539 20.1745 16.6607 19.7936L12.119 18.7058L12.1183 18.569C12.9599 18.1769 13.4037 17.1893 13.4042 16.2178L16.0282 15.8644C17.6745 15.6397 18.3133 15.0192 18.3133 13.5587L18.3133 9.48818C18.3133 9.25986 18.2097 9.15693 18.0003 9.15693C17.8096 9.15693 17.6878 9.29687 17.6878 9.48818L17.6878 13.4991C17.6878 14.5722 17.2743 15.0586 16.1222 15.2212L13.3329 15.6397C13.2052 15.1115 12.9429 14.6587 12.4992 14.3601L12.4992 14.2331C14.6574 13.8425 15.721 12.5436 15.721 10.6296C15.721 8.55801 14.7377 6.6958 13.2541 5.48057L13.5368 5.24531C14.6562 4.30147 14.5952 3.38955 13.7211 2.28711L12.0675 0.164749C11.9707 0.0479501 11.8718 0 11.7669 0C11.6173 0 11.5033 0.0861347 11.5033 0.252445C11.5033 0.329692 11.5333 0.410552 11.6421 0.544342L13.374 2.7375C13.9769 3.48467 14.0418 4.16074 13.1925 4.83203C13.0599 4.93671 12.9273 5.0498 12.794 5.15449C11.7854 4.47861 10.5997 4.07685 9.33511 4.07685C8.08941 4.07685 6.88619 4.47861 5.86919 5.1538C5.73658 5.0498 5.60328 4.93603 5.47066 4.84043C4.62203 4.16074 4.69468 3.48467 5.2899 2.7375L7.02182 0.544342C7.13061 0.410552 7.16059 0.329692 7.16059 0.252445C7.16059 0.0861347 7.03676 0 6.89702 0C6.79203 0 6.6932 0.0479501 6.59643 0.164749L4.94282 2.28711C4.0687 3.38955 4.00766 4.30147 5.1271 5.24531L5.41753 5.4792C3.92417 6.69443 2.94019 8.5664 2.94019 10.6296C2.94019 12.5436 4.01285 13.8425 6.16128 14.2331L6.16128 14.3601C5.7273 14.6587 5.465 15.1115 5.33736 15.6397L2.548 15.2212C1.39595 15.0586 0.982379 14.5722 0.982379 13.4991L0.982379 9.48818C0.982379 9.29687 0.851518 9.15693 0.669973 9.15693C0.460497 9.15693 0.347801 9.25986 0.347801 9.48818L0.347801 13.5587C0.347801 15.0192 0.986668 15.6397 2.63296 15.8644L5.26607 16.2178C5.26656 17.1893 5.70123 18.1769 6.55191 18.569L6.55191 18.7058L2.00044 19.7936C0.416354 20.1745-0.179349 21.0032 0.0459442 22.4778L1.12651 29.3253C1.16899 29.5445 1.23149 29.6495 1.43257 29.6495C1.62251 29.6495 1.77701 29.5145 1.75201 29.3352L0.658746 22.5542C0.458454 21.3692 0.860406 20.6957 1.90415 20.4425C2.58745 20.2715 3.26235 20.1096 3.94565 19.9386C3.17769 20.7279 2.80279 21.7805 2.80279 23.1891C2.80279 27.2829 6.01021 31.0104 9.33511 31.0104Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
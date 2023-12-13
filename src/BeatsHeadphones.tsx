import React from 'react'

export function BeatsHeadphones({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.0775 25.2957' className={className}>
      <path
        d='M0 11.8638C0 13.8948 0.583887 15.8937 1.22305 17.2578C0.835159 17.5821 0.803811 18.2573 1.01709 18.6937L4.07588 24.9166C4.19854 25.1808 4.4668 25.2957 4.72461 25.2957C5.00332 25.2957 5.27159 25.1319 5.40489 24.8366L2.31925 18.5942C1.77208 17.4713 0.52286 15.2085 0.52286 11.8645C0.52286 5.05997 5.22481 0.535361 11.8581 0.535361C18.4914 0.535361 23.1934 5.05997 23.1934 11.8645C23.1934 15.2085 21.9441 17.4713 21.3879 18.5942L18.3113 24.8366C18.4446 25.1319 18.7129 25.2957 18.9916 25.2957C19.2494 25.2957 19.5177 25.1808 19.6403 24.9166L22.6991 18.6937C22.9124 18.2573 22.8811 17.5821 22.4932 17.2578C23.1323 15.8937 23.7162 13.8948 23.7162 11.8638C23.7162 4.71104 18.7887 0.0358385 11.8581 0.0358385C4.92754 0.0358385 0 4.71104 0 11.8638Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.53713 16.7113C3.42804 16.4827 3.22306 16.3796 3.00108 16.3576C2.52638 16.3279 2.03604 16.7934 2.35313 17.4191L5.88868 24.5886C6.02706 24.8751 6.24386 24.9976 6.46701 25.0456C6.95148 25.081 7.43722 24.591 7.14513 23.9964ZM20.1791 16.7113L16.5711 23.9964C16.279 24.591 16.7557 25.081 17.2492 25.0456C17.4724 24.9976 17.6892 24.8751 17.8275 24.5886L21.3631 17.4191C21.6802 16.7934 21.1898 16.3279 20.7151 16.3576C20.4932 16.3796 20.2882 16.4827 20.1791 16.7113Z'
        fill={color}
        fillOpacity='0.425'
      />
    </svg>
  )
}

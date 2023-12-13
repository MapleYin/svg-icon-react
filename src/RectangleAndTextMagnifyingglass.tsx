import React from 'react'

export function RectangleAndTextMagnifyingglass({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.4592 25.028' className={className}>
      <path
        d='M3.0296 16.0753L3.0296 20.2723C3.0296 22.0509 3.95343 22.9733 5.7377 22.9733L20.5108 22.9733L21.0217 23.4849L5.69933 23.4849C3.62481 23.4849 2.51739 22.3795 2.51739 20.2973L2.51739 15.5753C2.67495 15.755 2.84562 15.9224 3.0296 16.0753ZM31.5714 4.7132L31.5714 20.2973C31.5714 22.3418 30.4653 23.4849 28.3901 23.4849L24.7001 23.4849C24.6996 23.3055 24.6649 23.1342 24.5989 22.9733L28.3602 22.9733C30.0795 22.9733 31.0689 22.0509 31.0689 20.2723L31.0689 4.73752C31.0689 2.95959 30.0795 2.03645 28.3602 2.03645L14.7289 2.03645C14.4979 1.84646 14.2517 1.67544 13.9918 1.52491L28.3901 1.52491C30.4653 1.52491 31.5714 2.66798 31.5714 4.7132Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.17442 18.4698C14.2059 18.4698 18.3398 14.336 18.3398 9.29543C18.3398 4.26466 14.2059 0.130774 9.17442 0.130774C4.13389 0.130774 0 4.26466 0 9.29543C0 14.336 4.13389 18.4698 9.17442 18.4698ZM9.17442 17.9696C4.40411 17.9696 0.500889 14.0657 0.500889 9.29543C0.500889 4.53488 4.40411 0.621898 9.17442 0.621898C13.9356 0.621898 17.8486 4.53488 17.8486 9.29543C17.8486 14.0657 13.9356 17.9696 9.17442 17.9696ZM15.8647 15.2973L14.9775 16.1705L22.7271 23.9481C22.8183 24.0483 22.9771 24.1382 23.1561 24.1382C23.5824 24.1382 23.8101 23.8156 23.8101 23.4919C23.8101 23.3311 23.746 23.1898 23.6213 23.0553Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.55948 8.14475L13.7894 8.14475C13.9375 8.14475 14.0607 8.02092 14.0607 7.87345C14.0607 7.72599 13.9375 7.60216 13.7894 7.60216L4.55948 7.60216C4.41065 7.60216 4.28819 7.72599 4.28819 7.87345C4.28819 8.02092 4.41065 8.14475 4.55948 8.14475ZM4.55948 10.9887L11.3539 10.9887C11.5014 10.9887 11.6252 10.8655 11.6252 10.7181C11.6252 10.579 11.5014 10.4552 11.3539 10.4552L4.55948 10.4552C4.41065 10.4552 4.28819 10.579 4.28819 10.7181C4.28819 10.8655 4.41065 10.9887 4.55948 10.9887Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

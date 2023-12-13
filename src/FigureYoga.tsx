import React from 'react'

export function FigureYoga({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.1036 25.4377' className={className}>
      <path
        d='M16.1393 5.04688C17.5251 5.04688 18.6627 3.92676 18.6627 2.54092C18.6627 1.15576 17.5251 0.0272459 16.1393 0.0272459C14.7534 0.0272459 13.6424 1.15576 13.6424 2.54092C13.6424 3.92676 14.7534 5.04688 16.1393 5.04688ZM8.32911 25.4377C8.95889 25.4377 9.5085 24.9076 9.5085 24.2395L9.5085 13.4358C12.1407 13.0229 14.4005 11.2841 15.5004 8.92598C15.5987 8.68956 15.8735 8.55352 16.3353 8.72022L22.1409 10.6836C22.9556 10.9493 23.5066 10.5071 23.683 9.94776C23.8602 9.36817 23.653 8.67071 22.9068 8.41544L5.49043 2.60977C4.67578 2.33496 4.11573 2.78623 3.93926 3.34629C3.76211 3.9168 3.96856 4.6045 4.72461 4.85977L10.992 6.96124C11.2766 7.05958 11.4237 7.39434 11.2277 7.69844C10.57 8.74952 9.58731 9.3877 8.32911 9.3877L2.37764 9.3877L2.37764 3.40625C2.37764 2.70811 1.89639 2.22754 1.1794 2.22754C0.462403 2.22754 0 2.70811 0 3.40625L0 10.4688C0 11.2541 0.383594 11.6182 0.991797 11.7165L6.24786 12.5904L7.13155 17.7963L7.13155 24.2395C7.13155 24.9076 7.65254 25.4377 8.32911 25.4377Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

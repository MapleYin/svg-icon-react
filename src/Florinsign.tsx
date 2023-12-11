import React from 'react'

export default function Florinsign({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.2001 22.0984' className={className}>
      <path
        d='M2.48428 22.0607C5.32872 22.0607 6.89425 20.4812 7.53741 16.8892L9.72325 5.27559C10.3359 1.94386 11.7256 0.498838 14.2732 0.498838C14.9957 0.498838 15.828 0.647374 16.2464 0.87081C16.3773 0.935751 16.467 0.986141 16.5408 1.00176C16.7055 1.01309 16.8388 0.909966 16.8388 0.757329C16.8388 0.597365 16.6605 0.529395 16.5509 0.461913C16.0319 0.219824 15.0629 0 14.2644 0C11.4192 0 9.90205 1.60049 9.22324 5.21084L7.0374 16.8189C6.46035 20.1058 5.06846 21.5612 2.48174 21.5612C1.68262 21.5612 1.01339 21.3916 0.686141 21.2408C0.454695 21.1634 0.343366 21.0762 0.222954 21.0762C0.085451 21.0762 0 21.1818 0 21.3041C0 21.5199 0.194435 21.6061 0.368266 21.6742C1.08409 21.9533 1.72705 22.0607 2.48428 22.0607ZM1.86593 10.2897L15.4836 10.2897C15.6547 10.2897 15.7681 10.1958 15.7681 10.0358C15.7681 9.88291 15.6547 9.7793 15.4836 9.7793L1.86593 9.7793C1.68506 9.7793 1.59961 9.90176 1.59961 10.0358C1.59961 10.1776 1.68506 10.2897 1.86593 10.2897Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

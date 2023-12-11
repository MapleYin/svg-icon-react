import React from 'react'

export default function Rublesign({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.3848 22.0504' className={className}>
      <path
        d='M0 12.6131C0 12.7403 0.122463 12.8719 0.258793 12.8719L3.1791 12.8719L3.1791 21.8158C3.1791 21.9463 3.28321 22.0504 3.41368 22.0504C3.54347 22.0504 3.65665 21.9463 3.65665 21.8158L3.65665 12.8719L9.13341 12.8719C13.4896 12.8719 16.0234 10.4324 16.0234 6.51798C16.0234 2.60421 13.4909 0.152932 9.12569 0.152932L3.41368 0.152932C3.27911 0.152932 3.1791 0.282232 3.1791 0.417489L3.1791 12.355L0.258793 12.355C0.122463 12.355 0 12.4774 0 12.6131ZM3.65665 12.4023L3.65665 0.616127L9.18438 0.616127C13.1757 0.616127 15.56 2.84034 15.56 6.51798C15.56 10.1774 13.1562 12.4023 9.18438 12.4023ZM0 16.9714C0 17.1077 0.122463 17.2302 0.258793 17.2302L10.3419 17.2302C10.4782 17.2302 10.6007 17.1077 10.6007 16.9714C10.6007 16.8351 10.4782 16.7126 10.3419 16.7126L0.258793 16.7126C0.122463 16.7126 0 16.8351 0 16.9714Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
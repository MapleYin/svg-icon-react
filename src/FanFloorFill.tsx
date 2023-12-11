import React from 'react'

export default function FanFloorFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.632 25.6246' className={className}>
      <path
        d='M19.2707 9.65283C19.2707 14.8768 15.1117 19.1359 9.896 19.2848L9.896 24.777L13.9048 24.777C14.3691 24.777 14.5603 25.0723 14.5603 25.3477C14.5603 25.4951 14.451 25.6065 14.286 25.6065L4.97422 25.6065C4.80927 25.6065 4.69091 25.4951 4.69091 25.3477C4.69091 25.0723 4.88203 24.777 5.35547 24.777L9.39355 24.777L9.39355 19.2855C4.18623 19.1555 0 14.8956 0 9.65283C0 4.30918 4.30918 0 9.62559 0C14.9511 0 19.2707 4.32734 19.2707 9.65283ZM2.91963 6.21358C2.91963 7.87325 4.21573 8.8668 7.04219 9.35674C7.01426 9.53321 7.04287 9.94287 7.07217 10.1271L3.86925 10.1271C2.66173 10.1271 2.06397 10.7039 2.06397 11.8451C2.06397 14.155 4.02139 16.335 6.21153 16.335C7.87188 16.335 8.90244 15.0661 9.36582 12.2278C9.7001 12.2467 9.89336 12.2655 10.1243 12.1804L10.1243 15.4153C10.1243 16.6312 10.7019 17.2011 11.8515 17.2011C14.1522 17.2011 16.3518 15.2527 16.3518 13.0354C16.3518 11.3841 15.0745 10.4003 12.2397 9.90127C12.2578 9.76113 12.2397 9.29903 12.1922 9.13028L15.421 9.13028C16.6278 9.13028 17.2074 8.55342 17.2074 7.40313C17.2074 5.10303 15.2688 2.92237 13.0599 2.92237C11.4016 2.92237 10.3982 4.19825 9.8999 7.03106C9.79746 7.01221 9.3878 7.01221 9.14707 7.06104L9.14707 3.8336C9.14707 2.62745 8.58838 2.04718 7.43809 2.04718C5.13799 2.04718 2.91963 4.00528 2.91963 6.21358ZM11.4669 9.64785C11.4669 10.6232 10.6303 11.4605 9.62627 11.4605C8.63204 11.4605 7.8045 10.6232 7.8045 9.64785C7.8045 8.62569 8.63204 7.78838 9.62627 7.78838C10.6303 7.78838 11.4669 8.62569 11.4669 9.64785Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export default function FanBadgeAutomaticFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.5888 28.9856' className={className}>
      <path
        d='M15.7641 4.70225L15.7641 10.3583C16.0293 10.3102 16.3141 10.2809 16.6177 10.2802C16.7524 10.2795 16.887 10.2788 17.0126 10.2977C17.7841 5.35147 19.503 3.15361 22.3431 3.15361C26.0767 3.15361 29.3616 6.86895 29.3616 10.7464C29.3616 12.688 28.3805 13.6476 26.3433 13.6476L20.6872 13.6476C20.7542 13.9323 20.7919 14.2353 20.7926 14.557C20.7933 14.6917 20.7849 14.8173 20.766 14.952C22.1005 15.1605 23.2341 15.4382 24.1714 15.7906C21.6722 16.8157 19.8901 19.2861 19.8901 22.1316C19.8901 24.0603 20.704 25.8121 22.0063 27.0582C21.4526 27.201 20.8821 27.2731 20.3082 27.2731C18.3666 27.2731 17.4071 26.3017 17.4071 24.2645L17.4071 18.6454C17.1139 18.6936 16.811 18.7313 16.508 18.7229C16.3824 18.7235 16.2653 18.7242 16.1397 18.7061C15.3682 23.6152 13.6499 25.8131 10.828 25.8131C7.08537 25.8131 3.80949 22.0978 3.80949 18.2196C3.80949 16.2878 4.78996 15.3185 6.81808 15.3185L12.428 15.3185C12.3715 15.0344 12.3415 14.7503 12.3408 14.4481C12.3402 14.2945 12.3402 14.1683 12.3674 14.0232C7.46798 13.2517 5.27853 11.5334 5.27853 8.71153C5.27853 4.96885 8.98546 1.69297 12.8629 1.69297C14.8038 1.69297 15.7641 2.67344 15.7641 4.70225ZM12.9197 14.4879C12.9197 16.4952 14.5692 18.1349 16.5667 18.1349C18.565 18.1349 20.2514 16.4952 20.2514 14.4879C20.2514 12.4708 18.565 10.8032 16.5667 10.8032C14.5503 10.8032 12.9197 12.4897 12.9197 14.4879ZM18.3777 14.4879C18.3777 15.4819 17.588 16.2618 16.5667 16.2618C15.5629 16.2618 14.7921 15.4819 14.7921 14.4879C14.7921 13.4659 15.5629 12.6763 16.5667 12.6763C17.5692 12.6763 18.3777 13.4848 18.3777 14.4879Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M32.6991 22.1316C32.6991 25.407 29.9992 28.0867 26.744 28.0867C23.4777 28.0867 20.7798 25.3993 20.7798 22.1316C20.7798 18.8653 23.4777 16.1675 26.744 16.1675C30.02 16.1675 32.6991 18.8556 32.6991 22.1316ZM26.2835 18.2198L23.6791 25.0806C23.6673 25.1174 23.6562 25.1801 23.6562 25.2532C23.6562 25.4602 23.8199 25.6135 24.0646 25.6135C24.2415 25.6135 24.3746 25.539 24.4464 25.332L25.2231 23.1962L28.2676 23.1962L29.0443 25.332C29.116 25.539 29.2582 25.6135 29.4533 25.6135C29.6707 25.6135 29.8436 25.4413 29.8436 25.2532C29.8436 25.1801 29.8234 25.1174 29.8109 25.0806L27.2072 18.2198C27.1145 17.9822 26.9368 17.8952 26.7544 17.8952C26.5343 17.8952 26.3762 17.9822 26.2835 18.2198ZM27.9503 22.4106L25.5404 22.4106L26.7544 19.2341Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

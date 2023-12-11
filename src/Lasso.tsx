import React from 'react'

export default function Lasso({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.5046 27.3215' className={className}>
      <path
        d='M0 13.6559C0 19.0411 4.45528 21.5472 10.0202 21.5472C10.6152 21.5472 11.1739 21.5179 11.7138 21.4691L11.6047 20.9587C11.0395 21.0062 10.4638 21.0438 9.86153 21.0438C4.69757 21.0438 0.52286 18.7078 0.52286 13.6656C0.52286 7.90147 7.02491 3.86876 13.3359 3.86876C18.923 3.86876 23.6393 7.30645 23.6393 12.6459C23.6393 17.3915 18.4401 21.5575 13.5417 21.5575C12.4498 21.5575 11.5099 21.1319 11.5099 20.2045C11.5099 18.8272 13.7667 17.8845 15.28 17.8845C17.7148 17.8845 19.5677 19.697 19.5677 22.1324C19.5677 24.0421 18.3409 25.8945 16.3816 26.8481C16.2961 26.8995 16.235 26.9606 16.235 27.0879C16.235 27.1879 16.3023 27.3215 16.4929 27.3215C16.5359 27.3215 16.6285 27.2992 16.6701 27.2806C18.705 26.2513 20.0717 24.1607 20.0717 22.0473C20.0717 19.4413 18.0467 17.37 15.2809 17.37C13.4029 17.37 10.9863 18.5429 10.9863 20.1988C10.9863 21.428 12.0699 22.0797 13.5417 22.0797C18.728 22.0797 24.1433 17.7582 24.1433 12.5907C24.1433 7.10098 19.1877 3.32705 13.3353 3.32705C6.79424 3.32705 0 7.59424 0 13.6559Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
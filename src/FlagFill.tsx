import React from 'react'

export default function FlagFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.5234 22.6746' className={className}>
      <path
        d='M1.73672 22.6746C1.87784 22.6746 1.99395 22.5578 1.99395 22.3985L1.99395 14.3106C2.50967 14.3212 3.67247 13.7149 5.88692 13.7149C10.2699 13.7149 12.849 15.926 17.2358 15.926C18.8586 15.926 19.7572 15.7021 20.5117 15.3555C21.1134 15.0752 21.5234 14.7338 21.5234 14.2442L21.5234 2.28028C21.5234 1.8544 21.3152 1.68447 20.9788 1.68447C20.4369 1.68447 19.2839 2.28584 17.0887 2.28584C12.683 2.28584 10.113 0.0656247 5.74883 0.0656247C4.11699 0.0656247 3.21904 0.298632 2.46455 0.645215C1.8622 0.925489 1.46132 1.2669 1.46132 1.75645L1.46132 22.3985C1.46132 22.539 1.59697 22.6746 1.73672 22.6746Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

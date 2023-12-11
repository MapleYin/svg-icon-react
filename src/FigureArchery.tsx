import React from 'react'

export default function FigureArchery({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3206 27.2462' className={className}>
      <path
        d='M9.62398 6.03276C10.991 6.03276 12.0929 4.93149 12.0929 3.56586C12.0929 2.18978 10.991 1.08851 9.62398 1.08851C8.25836 1.08851 7.15709 2.18978 7.15709 3.56586C7.15709 4.93149 8.25836 6.03276 9.62398 6.03276ZM18.5431 7.49008L5.47964 7.49008L5.84302 7.76488C6.40308 7.5682 6.62837 7.02768 6.48189 6.54643C6.33472 6.02543 5.84302 5.59301 4.98794 5.78061L1.59898 6.56596C-0.581298 7.0765-0.531786 9.88588 1.74683 9.88588L5.44966 9.88588C5.78374 9.88588 6.04878 10.1516 6.04878 10.4759L6.04878 15.3373L2.4938 18.8643C2.00279 19.3456 1.67915 19.8366 1.49155 20.5835L0.154542 25.6416C-0.0714346 26.5057 0.420265 27.0274 1.02915 27.1257C1.59898 27.2332 2.23716 26.9674 2.43384 26.2504L3.71089 21.5154C3.83785 21.0641 3.91734 20.8772 4.26187 20.5835L7.06011 18.2059C7.60132 17.7442 8.55474 17.8237 8.9565 18.51L10.6458 21.4477L13.3275 26.5057C13.7293 27.2527 14.5557 27.312 15.0956 26.987C15.558 26.6822 15.7449 26.0447 15.4108 25.4058L12.7186 20.269L11.2058 16.7908C10.9499 16.2014 10.8034 15.5444 10.8034 14.8951L10.8034 10.4759C10.8034 10.1516 11.0775 9.88588 11.4123 9.88588L18.5431 9.88588C19.1918 9.88588 19.7225 9.33696 19.7225 8.70717C19.7225 8.03061 19.1918 7.49008 18.5431 7.49008ZM21.2162 8.70717C21.2162 11.1489 20.6693 14.1146 19.4592 16.8634C19.3679 17.0704 19.4411 17.2961 19.618 17.3686C19.8236 17.4424 20.0571 17.3693 20.1414 17.1735C21.3757 14.5703 21.961 11.5405 21.961 8.70717C21.961 6.26625 21.3757 3.20922 20.1232 0.231773C20.0389 0.0352878 19.8145-0.0560212 19.5999 0.0359714C19.4229 0.109116 19.3679 0.334215 19.4592 0.541834C20.6693 3.27319 21.2162 6.23822 21.2162 8.70717Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

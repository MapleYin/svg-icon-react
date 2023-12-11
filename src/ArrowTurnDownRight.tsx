import React from 'react'

export default function ArrowTurnDownRight({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.7378 18.8172' className={className}>
      <path
        d='M0.270221 0.0700146C0.112503 0.0700146 0.0493175 0.186813 0.0243169 0.344726C0.00136733 0.523047 0 1.20322 0 1.92656C0 7.192 2.47842 9.321 7.6169 9.321L19.6207 9.321L22.5223 9.32052L19.9601 11.9264L14.1836 17.7154C14.135 17.7731 14.1106 17.8266 14.1106 17.9079C14.1106 18.0363 14.2211 18.1545 14.3761 18.1545C14.4483 18.1545 14.5283 18.1113 14.7193 17.9301L23.2708 9.2962C23.3592 9.21758 23.3765 9.15508 23.3765 9.08213C23.3765 9.0001 23.3592 8.946 23.2708 8.8583L14.5608 0.0756854C14.5095 0.0250006 14.4483 0 14.3761 0C14.2211 0 14.1106 0.11885 14.1106 0.246587C14.1106 0.327936 14.1538 0.400203 14.1836 0.439072L19.9601 6.22812L22.5139 8.83535L19.6207 8.83349L7.60489 8.83349C2.80069 8.83349 0.488878 6.82793 0.488878 1.8834C0.488878 1.01113 0.518859 0.444534 0.518859 0.336133C0.518859 0.188181 0.418173 0.0700146 0.270221 0.0700146Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
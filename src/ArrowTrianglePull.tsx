import React from 'react'

export default function ArrowTrianglePull({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12.8554 24.8893' className={className}>
      <path
        d='M3.04124 23.342C3.19193 23.342 3.26966 23.2454 3.26966 23.0843L3.26966 11.801L3.0138 11.801C3.94837 15.8501 8.0883 18.8565 12.2123 19.7432C12.3909 19.7764 12.4978 19.6546 12.4912 19.5435C12.4945 19.4142 12.4304 19.2955 12.2602 19.2771C8.19075 18.5419 3.26966 14.4494 3.26966 10.3114L3.26966 3.49591L2.81282 3.49591L2.81282 23.0843C2.81282 23.2454 2.89963 23.342 3.04124 23.342ZM0.381081 4.53732L5.71048 4.53732C6.06556 4.53732 6.21683 4.28107 5.9681 3.92853L3.38538 0.218666C3.16936-0.0725467 2.9138-0.0732304 2.70618 0.218666L0.123461 3.92785C-0.126638 4.28107 0.0253157 4.53732 0.381081 4.53732Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

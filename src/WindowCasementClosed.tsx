import React from 'react'

export default function WindowCasementClosed({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.932 25.1654' className={className}>
      <path
        d='M0 24.7177C0 24.9621 0.183791 25.1459 0.428227 25.1459L21.1424 25.1459C21.3868 25.1459 21.5706 24.9621 21.5706 24.7177C21.5706 24.4732 21.3868 24.2895 21.1424 24.2895L20.3303 24.2895L20.3303 0.770124C20.3303 0.319632 20.0009 0 19.4918 0L1.91056 0C1.40216 0 1.07276 0.319632 1.07276 0.770124L1.07276 24.2895L0.428227 24.2895C0.183791 24.2895 0 24.4732 0 24.7177ZM1.60314 24.2895L1.60314 16.7075L10.4284 16.7075L10.4284 24.2895ZM1.60314 16.196L1.60314 8.60567L10.4284 8.60567L10.4284 16.196ZM1.60314 8.09414L1.60314 0.854014C1.60314 0.639853 1.73009 0.512217 1.90656 0.512217L10.4284 0.512217L10.4284 8.09414ZM10.9739 24.2895L10.9739 16.7075L19.7999 16.7075L19.7999 24.2895ZM10.9739 16.196L10.9739 8.60567L19.7999 8.60567L19.7999 16.196ZM10.9739 8.09414L10.9739 0.512217L19.4965 0.512217C19.673 0.512217 19.7999 0.639853 19.7999 0.854014L19.7999 8.09414Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

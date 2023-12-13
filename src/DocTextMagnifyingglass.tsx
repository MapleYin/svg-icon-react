import React from 'react'

export function DocTextMagnifyingglass({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.8355 29.9223' className={className}>
      <path
        d='M21.7569 4.43946L21.7569 20.2688C21.6062 20.0341 21.4358 19.8133 21.2454 19.6108L21.2454 4.46876C21.2454 2.68448 20.3293 1.76974 18.545 1.76974L4.92911 1.76974C3.15118 1.76974 2.22872 2.7585 2.22872 4.46876L2.22872 24.5342C2.22872 26.2535 3.15118 27.2423 4.92911 27.2423L13.6204 27.2423C13.8235 27.4331 14.045 27.6038 14.2805 27.7545L4.90479 27.7545C2.85957 27.7545 1.7165 26.6471 1.7165 24.5726L1.7165 4.43946C1.7165 2.36494 2.85957 1.2582 4.90479 1.2582L18.5693 1.2582C20.6516 1.2582 21.7569 2.36426 21.7569 4.43946Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.3541 10.9982C17.3541 11.1429 17.2337 11.2731 17.061 11.2731L6.41378 11.2731C6.24952 11.2731 6.12002 11.1429 6.12002 10.9982C6.12002 10.8443 6.24952 10.7148 6.41378 10.7148L17.061 10.7148C17.2337 10.7148 17.3541 10.8443 17.3541 10.9982Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.3541 6.51143C17.3541 6.66524 17.2337 6.79542 17.061 6.79542L6.41378 6.79542C6.24952 6.79542 6.12002 6.66524 6.12002 6.51143C6.12002 6.36739 6.24952 6.2379 6.41378 6.2379L17.061 6.2379C17.2337 6.2379 17.3541 6.36739 17.3541 6.51143Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.2445 27.7545C19.7249 27.7545 21.7569 25.7218 21.7569 23.2323C21.7569 20.7506 19.7249 18.7004 17.2445 18.7004C14.7551 18.7004 12.7119 20.7519 12.7119 23.2323C12.7119 25.7218 14.7551 27.7545 17.2445 27.7545ZM17.2445 27.2189C15.0507 27.2189 13.2384 25.4255 13.2384 23.2323C13.2384 21.0398 15.0507 19.2366 17.2445 19.2366C19.4363 19.2366 21.2207 21.0398 21.2207 23.2323C21.2207 25.4255 19.437 27.2189 17.2445 27.2189ZM23.4729 29.9223C23.6998 29.9223 23.8355 29.7762 23.8355 29.5926C23.8355 29.4386 23.7812 29.3768 23.6767 29.2723L20.4369 26.0137L19.9214 26.5189L23.1443 29.7517C23.2536 29.8693 23.3343 29.9223 23.4729 29.9223Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

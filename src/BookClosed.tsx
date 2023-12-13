import React from 'react'

export function BookClosed({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 26.5424' className={className}>
      <path
        d='M3.01094 26.5424L19.7986 26.5424C19.9593 26.5424 20.0314 26.4612 20.0314 26.2908C20.0314 26.211 19.9954 26.1242 19.9268 26.0608C17.9669 24.7724 17.4875 22.5463 19.1883 20.5689C19.7038 19.9619 20.0314 19.1616 20.0314 18.0953L20.0314 3.22803C20.0314 1.15352 18.926 0.0467771 16.8528 0.0467771L3.1876 0.0467771C1.10537 0.0467771 0 1.16192 0 3.22803L0 23.7138C0 25.4733 1.12422 26.5424 3.01094 26.5424ZM0.511533 21.9552L0.511533 3.26709C0.511533 1.48214 1.43399 0.55831 3.21192 0.55831L16.8278 0.55831C18.6064 0.55831 19.5289 1.48214 19.5289 3.26709L19.5289 18.0887C19.5289 19.9239 18.5761 20.8761 16.7401 20.8761L2.99532 20.8761C1.76993 20.8761 1.05909 21.2453 0.511533 21.9552ZM3.03526 26.0309C1.45284 26.0309 0.511533 25.1629 0.511533 23.6761C0.511533 22.2304 1.44151 21.3876 3.02325 21.3876L16.8741 21.3876C17.427 21.3876 17.8864 21.322 18.3088 21.1823C17.2067 22.9791 17.6075 24.8722 19.1753 26.0309ZM2.13419 21.122L2.6797 21.122L2.6797 0.253719L2.13419 0.253719Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

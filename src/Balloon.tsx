import React from 'react'

export default function Balloon({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14.2549 30.0979' className={className}>
      <path
        d='M6.93702 16.7281C10.8718 16.7281 13.8936 12.6289 13.8936 7.163C13.8936 2.96729 11.1348 0 6.93702 0C2.74903 0 0 2.96729 0 7.163C0 12.6289 3.01133 16.7281 6.93702 16.7281ZM6.93702 16.2241C3.2461 16.2241 0.504013 12.0304 0.504013 7.163C0.504013 3.47569 3.16456 0.52286 6.93702 0.52286C10.6997 0.52286 13.3896 3.47569 13.3896 7.163C13.3896 12.0304 10.6273 16.2241 6.93702 16.2241ZM5.90694 16.5497L5.5501 17.8578C5.48604 18.08 5.62256 18.2211 5.80684 18.2211L8.11397 18.2211C8.29826 18.2211 8.42501 18.08 8.37072 17.8578L8.00411 16.5497ZM6.37569 30.0415C6.52384 30.0415 6.63927 29.9261 6.63927 29.7786C6.63927 26.8033 9.20421 25.9835 9.20421 23.4664C9.20421 21.0933 7.15948 19.9842 7.16085 17.4751L6.62598 17.4751C6.6253 20.4419 8.67003 20.9329 8.67003 23.4664C8.67003 26.0397 6.1044 26.3976 6.1044 29.7786C6.1044 29.9261 6.22823 30.0415 6.37569 30.0415Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
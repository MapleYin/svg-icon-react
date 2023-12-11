import React from 'react'

export default function Ipodtouch({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13.8276 24.2785' className={className}>
      <path
        d='M0.511533 20.9028L0.511533 3.37501L12.954 3.37501L12.954 20.9028ZM6.75196 23.2946C6.27569 23.2946 5.88868 22.8979 5.88868 22.4307C5.88868 21.9544 6.27569 21.5772 6.75196 21.5772C7.21915 21.5772 7.59708 21.9544 7.59708 22.4307C7.59708 22.8979 7.21915 23.2946 6.75196 23.2946ZM6.75196 2.28233C6.41583 2.28233 6.14805 2.01455 6.14805 1.67774C6.14805 1.36885 6.41583 1.10176 6.75196 1.10176C7.06085 1.10176 7.32862 1.36885 7.32862 1.67774C7.32862 2.01455 7.06085 2.28233 6.75196 2.28233Z'
        fill={color}
        fillOpacity='0.2125'
      />
      <path
        d='M0 21.3186C0 23.3003 0.962112 24.2778 2.93047 24.2778L10.5351 24.2778C12.5034 24.2778 13.4662 23.3003 13.4662 21.3186L13.4662 2.95928C13.4662 0.977541 12.5034 0 10.5351 0L2.93047 0C0.962112 0 0 0.977541 0 2.95928ZM0.511533 20.9028L0.511533 3.37501L12.954 3.37501L12.954 20.9028ZM6.75196 23.2946C6.27569 23.2946 5.88868 22.8979 5.88868 22.4307C5.88868 21.9544 6.27569 21.5772 6.75196 21.5772C7.21915 21.5772 7.59708 21.9544 7.59708 22.4307C7.59708 22.8979 7.21915 23.2946 6.75196 23.2946ZM6.75196 2.28233C6.41583 2.28233 6.14805 2.01455 6.14805 1.67774C6.14805 1.36885 6.41583 1.10176 6.75196 1.10176C7.06085 1.10176 7.32862 1.36885 7.32862 1.67774C7.32862 2.01455 7.06085 2.28233 6.75196 2.28233Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
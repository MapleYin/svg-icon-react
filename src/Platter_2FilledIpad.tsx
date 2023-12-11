import React from 'react'

export default function Platter_2FilledIpad({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.7035 26.4178' className={className}>
      <path
        d='M3.22861 26.4178L16.1136 26.4178C18.2488 26.4178 19.3422 25.3097 19.3422 23.1792L19.3422 3.29307C19.3422 1.1626 18.2488 0.0544918 16.1136 0.0544918L3.22861 0.0544918C1.10244 0.0544918 0 1.1626 0 3.29307L0 23.1792C0 25.3097 1.10244 26.4178 3.22861 26.4178ZM3.23389 25.9056C1.43194 25.9056 0.511533 24.9774 0.511533 23.1692L0.511533 3.30313C0.511533 1.49415 1.43194 0.566025 3.23389 0.566025L16.1076 0.566025C17.9096 0.566025 18.83 1.49415 18.83 3.30313L18.83 23.1692C18.83 24.9774 17.9096 25.9056 16.1076 25.9056Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.24767 10.4681L15.0945 10.4681C15.8235 10.4681 16.2546 10.0377 16.2546 9.30733L16.2546 6.47169C16.2546 5.74132 15.8235 5.31095 15.0945 5.31095L4.24767 5.31095C3.51866 5.31095 3.08829 5.74132 3.08829 6.47169L3.08829 9.30733C3.08829 10.0377 3.51866 10.4681 4.24767 10.4681ZM4.24767 20.9567L15.0945 20.9567C15.8235 20.9567 16.2546 20.5166 16.2546 19.7953L16.2546 16.9506C16.2546 16.2293 15.8235 15.7898 15.0945 15.7898L4.24767 15.7898C3.51866 15.7898 3.08829 16.2293 3.08829 16.9506L3.08829 19.7953C3.08829 20.5166 3.51866 20.9567 4.24767 20.9567Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
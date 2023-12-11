import React from 'react'

export default function SignpostAndArrowtriangleUp({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.0897 24.1949' className={className}>
      <path
        d='M9.10841 3.64502L9.61994 3.64502L9.61994 0.251567C9.61994 0.118166 9.50177 0 9.35929 0C9.21749 0 9.10841 0.118166 9.10841 0.251567ZM0 11.1537C0 12.318 0.717482 13.0348 1.91104 13.0348L16.8173 13.0348C18.0018 13.0348 18.7283 12.318 18.7283 11.1537L18.7283 5.31348C18.7283 4.14922 18.0018 3.44218 16.8173 3.44218L1.91104 3.44218C0.717482 3.44218 0 4.14922 0 5.31348ZM1.90469 3.95372L16.8139 3.95372C17.6934 3.95372 18.2232 4.46534 18.2232 5.30782L18.2232 11.1594C18.2232 12.0019 17.6934 12.5135 16.8139 12.5135L1.90469 12.5135C1.02589 12.5135 0.505186 12.0019 0.505186 11.1594L0.505186 5.30782C0.505186 4.46534 1.02589 3.95372 1.90469 3.95372ZM9.10841 12.7361L9.10841 23.8305L9.61994 23.8305L9.61994 12.7361ZM4.79825 23.9245C4.79825 24.0663 4.92618 24.1754 5.04981 24.1754L13.652 24.1754C13.8126 24.1754 13.9119 24.0663 13.9119 23.9245C13.9119 23.782 13.8126 23.6639 13.652 23.6639L5.04981 23.6639C4.92618 23.6639 4.79825 23.782 4.79825 23.9245Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.40167 10.4526L12.3183 10.4526C12.7097 10.4526 12.8993 10.1684 12.6136 9.75089L9.73273 5.64932C9.4881 5.3211 9.21368 5.3211 8.9879 5.64932L6.12589 9.75928C5.83878 10.16 6.01729 10.4526 6.40167 10.4526Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

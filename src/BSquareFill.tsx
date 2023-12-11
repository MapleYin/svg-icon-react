import React from 'react'

export default function BSquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM7.59444 5.42676C7.4333 5.42676 7.35283 5.54356 7.35283 5.72354L7.35283 16.3331C7.35283 16.5131 7.4333 16.6299 7.59444 16.6299L11.3004 16.6299C13.6542 16.6299 15.0796 15.4875 15.0796 13.5659C15.0796 12.0579 14.1164 10.9816 12.6274 10.7759L12.6274 10.7348C13.6679 10.4956 14.4219 9.43389 14.4219 8.18184C14.4219 6.58818 13.0778 5.42676 11.2284 5.42676ZM14.4815 13.6079C14.4815 15.228 13.3108 16.0724 11.0325 16.0724L7.90138 16.0724L7.90138 11.1562L11.6219 11.1562C13.3883 11.1562 14.4815 12.0904 14.4815 13.6079ZM13.8384 8.29248C13.8384 9.59151 12.6425 10.5859 11.0788 10.5859L7.90138 10.5859L7.90138 5.98428L11.1493 5.98428C12.8728 5.98428 13.8384 6.82227 13.8384 8.29248Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
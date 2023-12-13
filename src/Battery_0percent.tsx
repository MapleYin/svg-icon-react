import React from 'react'

export function Battery_0percent({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.0651 14.8494' className={className}>
      <path
        d='M5.94561 14.8494L24.9674 14.8494C27.5488 14.8494 28.7667 14.4788 29.6689 13.5767C30.5612 12.6843 30.9221 11.495 30.9221 8.89542L30.9221 6.0001C30.9221 3.40958 30.5612 2.20215 29.6689 1.31817C28.7479 0.42578 27.5488 0.0544918 24.9674 0.0544918L5.77735 0.0544918C3.40118 0.0544918 2.16514 0.443944 1.27207 1.33701C0.369921 2.23916 0 3.43751 0 5.83252L0 8.89542C0 11.495 0.351073 12.7025 1.25322 13.5767C2.16514 14.4788 3.37325 14.8494 5.94561 14.8494ZM5.63106 14.3379C3.72462 14.3379 2.44962 13.9687 1.65089 13.179C0.861923 12.381 0.511533 11.1346 0.511533 9.21905L0.511533 5.85381C0.511533 3.79796 0.861923 2.49571 1.64181 1.70675C2.43077 0.89825 3.76163 0.566708 5.79864 0.566708L25.291 0.566708C27.1884 0.566708 28.4725 0.935946 29.2621 1.72491C30.0511 2.51456 30.4106 3.76095 30.4106 5.68555L30.4106 9.21905C30.4106 11.1346 30.0329 12.381 29.2621 13.179C28.4725 13.9875 27.1884 14.3379 25.291 14.3379ZM31.8118 10.1012C32.6152 10.0517 33.7037 9.01192 33.7037 7.44776C33.7037 5.89268 32.6152 4.85293 31.8118 4.80342Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

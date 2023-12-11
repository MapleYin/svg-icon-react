import React from 'react'

export default function KipsignSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM8.35976 6.12627L8.35976 10.9087L7.49267 10.9087C7.29824 10.9087 7.18125 11.0438 7.18125 11.1942C7.18125 11.3621 7.29824 11.4896 7.49267 11.4896L8.35976 11.4896L8.35976 16.2482C8.35976 16.4263 8.50879 16.5278 8.63877 16.5278C8.77715 16.5278 8.90733 16.4263 8.90733 16.2482L8.90733 11.4896L9.60567 11.4896L14.1073 16.4676C14.1482 16.5119 14.2346 16.5278 14.3041 16.5278C14.4307 16.5278 14.5615 16.4256 14.5615 16.2718C14.5615 16.1973 14.5483 16.1116 14.457 16.0273L10.3352 11.4896L14.5235 11.4896C14.7193 11.4896 14.835 11.3621 14.835 11.1942C14.835 11.0438 14.7193 10.9087 14.5235 10.9087L10.3526 10.9087L14.4934 6.32754C14.5658 6.26211 14.5797 6.17647 14.5797 6.1208C14.5797 5.96699 14.4684 5.85566 14.3223 5.85566C14.1982 5.85566 14.1392 5.91699 14.0703 5.99834L9.64063 10.9087L8.90733 10.9087L8.90733 6.12627C8.90733 5.94814 8.77784 5.83818 8.63877 5.83818C8.47109 5.83818 8.35976 5.94814 8.35976 6.12627Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

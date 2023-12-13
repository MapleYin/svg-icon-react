import React from 'react'

export function StarLeadinghalfFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.6512 26.6481' className={className}>
      <path
        d='M5.05094 24.9576C5.24655 25.0905 5.48669 25.1103 5.8531 24.8477L13.1495 19.513L20.4361 24.8477C20.8032 25.1103 21.0426 25.0905 21.2389 24.9576C21.4339 24.8156 21.5322 24.5943 21.3852 24.1373L18.583 15.5678L25.91 10.2645C26.2771 10.0025 26.3319 9.75743 26.2651 9.5375C26.1983 9.30918 26.0077 9.14473 25.5291 9.14541L16.5033 9.15791L13.7358 0.567486C13.5895 0.128615 13.3799 0 13.1495 0C12.9093 0 12.7088 0.128615 12.5541 0.567486L9.7859 9.15791L0.760125 9.14541C0.281508 9.14473 0.0915645 9.30918 0.0247668 9.5375C-0.0427146 9.75743 0.0127559 10.0025 0.379165 10.2645L7.70621 15.5678L4.90397 24.1373C4.75768 24.5943 4.85602 24.8156 5.05094 24.9576ZM13.1495 19.0394L13.1495 0.515836C13.1976 0.515836 13.2262 0.581461 13.2639 0.70568L16.013 9.25352C16.1049 9.52179 16.2805 9.66261 16.5495 9.66192L25.5669 9.64532C25.6814 9.64532 25.7477 9.64532 25.7666 9.69347C25.7861 9.74161 25.7295 9.78907 25.6339 9.85538L18.3517 15.1216C18.1141 15.286 18.0353 15.5293 18.128 15.7787L20.9136 24.3211C20.9513 24.4446 20.989 24.4914 20.9325 24.5207C20.885 24.5598 20.8369 24.5214 20.7322 24.4551L13.4895 19.1536C13.3857 19.0805 13.2631 19.0387 13.1495 19.0394Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

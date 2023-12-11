import React from 'react'

export default function QuoteOpening({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.8853 16.2555' className={className}>
      <path
        d='M11.585 10.661C11.585 7.60547 9.28819 5.06865 6.17793 5.06865C4.51758 5.06865 2.76983 5.75586 1.44835 7.49765L1.1254 7.49765C1.51632 4.99541 3.80714 1.67764 7.99766 0.894343C8.18643 0.867975 8.40537 0.843658 8.53438 0.843852C8.79463 0.816801 9.0501 0.694827 9.0501 0.429788C9.0501 0.14131 8.82432 0.000683665 8.50518 0.000683665C8.06846 0.000683665 7.60928 0.0969726 7.20068 0.208496C5.34297 0.682716 3.70645 1.6418 2.50528 2.9665C0.934571 4.61465 0 6.83965 0 9.39307C0 13.7516 2.7585 16.2555 5.98848 16.2555C9.19756 16.2555 11.585 13.8115 11.585 10.661ZM25.5239 10.661C25.5239 7.60547 23.2272 5.06865 20.0987 5.06865C18.4572 5.06865 16.69 5.75586 15.3789 7.49765L15.0644 7.49765C15.428 4.99541 17.7189 1.67764 21.9178 0.894343C22.1066 0.867975 22.3262 0.843658 22.4552 0.843852C22.7343 0.816801 22.9702 0.694827 22.9702 0.429788C22.9702 0.14131 22.7549 0.000683665 22.4448 0.000683665C21.9886 0.000683665 21.5399 0.0969726 21.1208 0.208496C19.2547 0.682716 17.6454 1.6418 16.4254 2.9665C14.8554 4.61465 13.9397 6.83965 13.9397 9.39307C13.9397 13.7516 16.6793 16.2555 19.9191 16.2555C23.1191 16.2555 25.5239 13.8115 25.5239 10.661Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

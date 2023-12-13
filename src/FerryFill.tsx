import React from 'react'

export function FerryFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.6025 28.267' className={className}>
      <path
        d='M12.6157 28.1821C15.5839 28.1821 16.0847 25.6236 18.6021 25.6236C21.1773 25.6236 21.5275 28.1821 24.9106 28.1821L24.9692 28.1821C25.1174 28.1821 25.2412 28.0674 25.2412 27.9199C25.2412 27.7718 25.1174 27.648 24.9692 27.648L24.9106 27.648C23.3416 27.648 22.4325 26.9621 21.4846 26.3071C20.6643 25.7114 19.8051 25.09 18.6021 25.09C17.3684 25.09 16.4994 25.7414 15.6791 26.3567C14.81 27.0109 13.9602 27.648 12.6157 27.648C11.2804 27.648 10.4313 27.0109 9.56212 26.3567C8.7418 25.7414 7.87217 25.09 6.63916 25.09C5.42637 25.09 4.57627 25.7114 3.75596 26.3071C2.80869 26.9621 1.89053 27.648 0.33057 27.648L0.271293 27.648C0.12383 27.648 0 27.7718 0 27.9199C0 28.0674 0.12383 28.1821 0.271293 28.1821L0.33057 28.1821C3.713 28.1821 4.06387 25.6236 6.63916 25.6236C9.15654 25.6236 9.65733 28.1821 12.6157 28.1821ZM12.6157 26.7356C13.6528 26.7356 14.2678 26.2748 15.1222 25.6171C15.9425 25.0116 17.0645 24.177 18.6021 24.177C19.4778 24.177 20.2212 24.4434 20.817 24.7666L24.2264 17.9755C25.1162 16.2025 24.63 15.1663 23.0783 14.4627L14.8848 10.6686C14.1912 10.3602 13.5042 10.061 12.6157 10.061C11.7279 10.061 11.05 10.3602 10.3564 10.6686L2.15381 14.4627C0.610542 15.1663 0.124996 16.2025 1.00507 17.9755L4.41445 24.7666C5.02002 24.4434 5.7543 24.177 6.63916 24.177C8.17608 24.177 9.28966 25.0116 10.11 25.6171C10.9734 26.2748 11.5793 26.7356 12.6157 26.7356ZM12.6157 9.16221C13.7304 9.16221 14.6102 9.54531 15.2568 9.85195L21.6559 12.815L20.5258 5.05449C20.313 3.54902 19.4257 2.79385 17.967 2.79385L7.30283 2.79385C5.84414 2.79385 4.95889 3.54902 4.74404 5.03184L3.63213 12.8053L9.98438 9.85195C10.6311 9.54531 11.5108 9.16221 12.6157 9.16221ZM7.3168 8.00801C7.09717 8.00801 6.95703 7.84902 6.95703 7.63847L6.95703 5.34111C6.95703 5.12148 7.09717 4.9709 7.3168 4.9709L11.4535 4.9709C11.6688 4.9709 11.8026 5.12148 11.8026 5.34111L11.8026 7.63847C11.8026 7.84902 11.6688 8.00801 11.4535 8.00801ZM13.8263 8.00801C13.6157 8.00801 13.4756 7.84902 13.4756 7.63847L13.4756 5.34111C13.4756 5.12148 13.6157 4.9709 13.8263 4.9709L17.9637 4.9709C18.1783 4.9709 18.3121 5.12148 18.3121 5.34111L18.3121 7.63847C18.3121 7.84902 18.1783 8.00801 17.9637 8.00801ZM7.92471 3.06367L17.3535 3.06367L17.3535 1.55645C17.3535 0.584376 16.788 0 15.8062 0L9.46299 0C8.49024 0 7.92471 0.584376 7.92471 1.55645Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

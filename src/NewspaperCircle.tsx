import React from 'react'

export function NewspaperCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.71299 11.7146L5.71299 17.569C5.71299 18.0832 6.14561 18.328 6.55576 18.328C6.94776 18.3099 7.35313 18.0734 7.35313 17.569L7.35313 10.9323L6.53565 10.9323C6.02461 10.9323 5.71299 11.2328 5.71299 11.7146ZM7.24561 18.6942L17.0641 18.6942C18.0738 18.6942 18.6157 18.1537 18.6157 17.1439L18.6157 7.26221C18.6157 6.25245 18.0738 5.71192 17.0641 5.71192L9.47745 5.71192C8.45723 5.71192 7.91602 6.25245 7.91602 7.26221L7.91602 17.7585C7.91602 18.2731 7.71368 18.5779 7.24561 18.6942ZM10.2548 9.06407C10.0847 9.06407 9.9459 8.92598 9.9459 8.77403C9.9459 8.5962 10.0658 8.47627 10.2548 8.47627L16.2686 8.47627C16.4568 8.47627 16.5858 8.5962 16.5858 8.77403C16.5858 8.92598 16.4471 9.06407 16.2686 9.06407ZM10.2548 11.3753C10.0847 11.3753 9.9459 11.2274 9.9459 11.0769C9.9459 10.8886 10.0658 10.7596 10.2548 10.7596L16.2686 10.7596C16.4568 10.7596 16.5858 10.8886 16.5858 11.0769C16.5858 11.2274 16.4471 11.3753 16.2686 11.3753ZM14.1662 13.8262C13.9779 13.8262 13.8489 13.6881 13.8489 13.5096C13.8489 13.359 13.9779 13.2195 14.1662 13.2195L16.2686 13.2195C16.4471 13.2195 16.567 13.359 16.567 13.5096C16.567 13.6881 16.4471 13.8262 16.2686 13.8262ZM14.1662 15.9355C13.9779 15.9355 13.8489 15.8254 13.8489 15.6371C13.8489 15.4858 13.9779 15.338 14.1662 15.338L16.2686 15.338C16.4471 15.338 16.567 15.4858 16.567 15.6371C16.567 15.8254 16.4568 15.9355 16.2686 15.9355ZM10.5464 15.9355C10.1628 15.9355 9.90821 15.6816 9.90821 15.2974L9.90821 13.8584C9.90821 13.4741 10.1628 13.2195 10.5464 13.2195L12.1879 13.2195C12.5813 13.2195 12.8358 13.4741 12.8358 13.8584L12.8358 15.2974C12.8358 15.6816 12.5813 15.9355 12.1879 15.9355Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

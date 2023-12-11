import React from 'react'

export default function AppGiftFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.9637 21.6121' className={className}>
      <path
        d='M0 10.4832L7.408 10.4832C5.33095 9.78575 3.44951 8.16788 3.44951 6.32198C3.44951 4.64405 4.44365 3.67715 5.92676 3.67715C7.79991 3.67715 9.74658 5.40371 10.5612 7.69443L10.5612 0L11.0879 0L11.0879 7.69443C11.9025 5.40371 13.8583 3.67715 15.7224 3.67715C17.2146 3.67715 18.1996 4.64405 18.1996 6.32198C18.1996 8.16788 16.3182 9.78575 14.2502 10.4832L21.6024 10.4832L21.6024 11.0108L11.411 11.0108C12.9934 14.1509 16.3544 16.7753 17.9528 17.0907C18.3151 17.1584 18.4013 17.2752 18.4013 17.4518C18.4013 17.6326 18.2643 17.8394 18.0271 17.778C16.3891 17.365 13.1512 15.4669 11.1206 11.6074L11.0879 11.6074L11.0879 21.6024L10.5612 21.6024L10.5612 11.6074L10.5376 11.6074C8.50704 15.4669 5.26007 17.365 3.63116 17.778C3.38486 17.8394 3.25693 17.6326 3.25693 17.4518C3.25693 17.2752 3.34307 17.15 3.69629 17.0907C5.30381 16.7739 8.66484 14.1509 10.2472 11.0108L0 11.0108ZM10.0822 10.5365L10.4274 10.5365L10.4274 10.2199C10.4274 7.08165 8.14649 4.24815 5.92315 4.24815C4.81807 4.24815 3.99122 5.08477 3.99122 6.37628C3.99122 8.47149 6.98389 10.5365 10.0822 10.5365ZM11.576 10.5365C14.6743 10.5365 17.6579 8.47149 17.6579 6.37628C17.6579 5.08477 16.8401 4.24815 15.7351 4.24815C13.5117 4.24815 11.2308 7.08165 11.2308 10.2199L11.2308 10.5365ZM20.3491 1.26367C19.4372 0.361522 18.2382 0 15.6567 0L5.77735 0C3.40118 0 2.16514 0.379686 1.27207 1.28184C0.369921 2.18399 0 3.38233 0 5.76827L0 15.6477C0 18.248 0.351073 19.4463 1.25322 20.3296C2.16514 21.2317 3.37325 21.6024 5.94561 21.6024L15.6567 21.6024C18.2382 21.6024 19.4561 21.2317 20.3491 20.3296C21.2513 19.4365 21.6024 18.248 21.6024 15.6477L21.6024 5.94493C21.6024 3.34532 21.2513 2.14698 20.3491 1.26367Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

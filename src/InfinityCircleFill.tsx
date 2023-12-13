import React from 'react'

export function InfinityCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM13.7835 10.3327L12.1804 11.8123L10.5584 10.3327C9.44512 9.32275 8.54756 8.68506 7.34366 8.66621C5.3791 8.66621 3.97236 10.1329 3.97236 12.1706C3.97236 14.2083 5.3791 15.6373 7.34366 15.6373C8.54688 15.6373 9.45352 15.0087 10.5584 14.0085L12.1804 12.5191L13.7835 14.0085C15.0287 15.1672 15.8795 15.6373 16.9982 15.6373C18.9635 15.6373 20.3975 14.2083 20.3975 12.1706C20.3975 10.1329 18.9635 8.66621 16.9982 8.66621C15.897 8.66621 15.0462 9.14609 13.7835 10.3327ZM10.1715 10.6938L11.7921 12.1706L10.1715 13.6286C9.10957 14.5677 8.36309 15.0855 7.34366 15.0855C5.69083 15.0855 4.52491 13.8687 4.52491 12.1706C4.52491 10.4628 5.69083 9.21807 7.34366 9.21807C8.26045 9.23692 8.98809 9.62413 10.1715 10.6938ZM19.8449 12.1706C19.8449 13.8505 18.6608 15.0855 16.9982 15.0855C15.9788 15.0855 15.2323 14.5677 14.1711 13.6286L12.5407 12.1706L14.1711 10.6938C15.3538 9.62413 16.0815 9.23692 16.9982 9.21807C18.6511 9.21807 19.8449 10.4628 19.8449 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

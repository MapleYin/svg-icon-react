import React from 'react'

export default function MphCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.49112 16.3553C4.66241 16.3553 4.78575 16.239 4.78575 16.0677L4.78575 8.96593L4.81573 8.96593L6.43399 15.8451C6.49463 16.0995 6.6375 16.264 6.87305 16.264C7.12881 16.264 7.25215 16.0995 7.3128 15.8263L8.93945 8.96593L8.98828 8.96593L8.98828 16.0677C8.98828 16.2383 9.10322 16.3553 9.25498 16.3553C9.42627 16.3553 9.54962 16.239 9.54962 16.0677L9.54962 8.47638C9.54962 8.20899 9.32383 7.97618 9.04805 7.97618C8.82109 7.97618 8.62734 8.10997 8.55557 8.42911L6.92891 15.445L6.85489 15.445L5.19893 8.42911C5.12647 8.13516 5.01446 7.97618 4.69805 7.97618C4.36162 7.97618 4.20557 8.271 4.20557 8.47638L4.20557 16.0677C4.20557 16.2201 4.33867 16.3553 4.49112 16.3553ZM11.5358 16.3267C11.7071 16.3267 11.8164 16.1838 11.8164 16.0259L11.8164 13.058L12.9887 13.058C14.2782 13.058 14.975 11.8982 14.975 10.5666C14.975 9.22325 14.2894 8.07452 12.9935 8.07452L11.517 8.07452C11.3464 8.07452 11.2371 8.22647 11.2371 8.38507L11.2371 16.0259C11.2371 16.1858 11.3589 16.3267 11.5358 16.3267ZM11.8164 12.5224L11.8164 8.61085L12.871 8.61085C13.9295 8.61085 14.4146 9.51651 14.4146 10.5666C14.4146 11.6167 13.9295 12.5224 12.8794 12.5224ZM16.6522 16.3553C16.8359 16.3553 16.9516 16.2265 16.9516 16.0252L16.9516 12.3299L19.8343 12.3299L19.8343 16.0252C19.8343 16.2328 19.9569 16.3553 20.1155 16.3553C20.2986 16.3553 20.4136 16.2278 20.4136 16.0252L20.4136 8.31466C20.4136 8.11133 20.298 7.97618 20.1155 7.97618C19.9485 7.97618 19.8343 8.10499 19.8343 8.31466L19.8343 11.7908L16.9516 11.7908L16.9516 8.31466C16.9516 8.1127 16.8359 7.97618 16.6522 7.97618C16.469 7.97618 16.3534 8.1127 16.3534 8.31466L16.3534 16.0252C16.3534 16.2265 16.469 16.3553 16.6522 16.3553Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

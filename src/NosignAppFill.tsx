import React from 'react'

export function NosignAppFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.9637 21.6121' className={className}>
      <path
        d='M20.3491 1.26367C21.2513 2.14698 21.6024 3.34532 21.6024 5.94493L21.6024 15.6477C21.6024 18.248 21.2513 19.4365 20.3491 20.3296C19.4561 21.2317 18.2382 21.6024 15.6567 21.6024L5.94561 21.6024C3.37325 21.6024 2.16514 21.2317 1.25322 20.3296C0.351073 19.4463 0 18.248 0 15.6477L0 5.76827C0 3.38233 0.369921 2.18399 1.27207 1.28184C2.16514 0.379686 3.40118 0 5.77735 0L15.6567 0C18.2382 0 19.4372 0.361522 20.3491 1.26367ZM4.17842 10.8109C4.17842 14.3968 7.22373 17.4421 10.8096 17.4421C14.4143 17.4421 17.4407 14.3975 17.4407 10.8109C17.4407 7.20694 14.3954 4.17071 10.8096 4.17071C7.2042 4.17071 4.17842 7.21534 4.17842 10.8109ZM14.9372 15.2763C13.8417 16.2834 12.3874 16.9011 10.8096 16.9011C7.47599 16.9011 4.72013 14.1445 4.72013 10.8109C4.72013 9.22403 5.3378 7.77882 6.32608 6.67423ZM16.8983 10.8109C16.8983 12.3888 16.2807 13.834 15.2931 14.9386L6.67218 6.33653C7.75861 5.3294 9.2129 4.70265 10.8096 4.70265C14.1425 4.70265 16.8983 7.45919 16.8983 10.8109Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

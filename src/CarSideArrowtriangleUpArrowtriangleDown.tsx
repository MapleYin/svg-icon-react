import React from 'react'

export function CarSideArrowtriangleUpArrowtriangleDown({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.6881 27.3044' className={className}>
      <path
        d='M2.71973 19.97L5.53653 19.97L5.53653 19.4585L2.70772 19.4585C1.11925 19.4585 0.511533 18.846 0.511533 17.1941L0.511533 14.948C0.511533 12.7965 1.87735 11.4368 4.32647 11.1529L10.3428 10.4289L15.4435 7.24207C18.2176 5.51287 19.9804 5.09363 24.7026 5.09363L27.5234 5.09363C30.9511 5.09363 33.7979 6.50056 36.1625 9.70984L39.1102 10.4464C40.2353 10.7121 40.8243 11.4606 40.8243 12.6942L40.8243 17.7164C40.8243 18.8648 40.2452 19.4585 39.1406 19.4585L36.6233 19.4585L36.6233 19.97L39.1067 19.97C40.5362 19.97 41.3268 19.1494 41.3268 17.6711L41.3268 12.6942C41.3268 11.1299 40.5871 10.2154 39.2107 9.87897L36.5676 9.23532C35.1568 7.46657 32.5902 4.5821 27.5234 4.5821L24.7026 4.5821C19.8111 4.5821 18.0356 5.00612 15.1703 6.79304L10.1753 9.93054L4.26602 10.6511C1.52627 10.9796 0 12.5394 0 14.948L0 17.1721C0 19.2277 0.731155 19.97 2.71973 19.97ZM12.199 19.97L29.9299 19.97L29.9299 19.4585L12.199 19.4585ZM8.87764 22.7119C10.9308 22.7119 12.5494 21.0939 12.5494 19.0317C12.5494 16.9779 10.9308 15.3599 8.87764 15.3599C6.81543 15.3599 5.19678 16.9779 5.19678 19.0317C5.19678 21.0939 6.81543 22.7119 8.87764 22.7119ZM8.87764 22.2004C7.092 22.2004 5.709 20.8174 5.709 19.0317C5.709 17.2545 7.092 15.8715 8.87764 15.8715C10.6542 15.8715 12.0372 17.2545 12.0372 19.0317C12.0372 20.8174 10.6542 22.2004 8.87764 22.2004ZM33.222 22.7119C35.2849 22.7119 36.9029 21.0939 36.9029 19.0317C36.9029 16.9779 35.2849 15.3599 33.222 15.3599C31.1689 15.3599 29.5509 16.9779 29.5509 19.0317C29.5509 21.0939 31.1689 22.7119 33.222 22.7119ZM33.222 22.2004C31.4454 22.2004 30.0624 20.8174 30.0624 19.0317C30.0624 17.2545 31.4454 15.8715 33.222 15.8715C35.0083 15.8715 36.3913 17.2545 36.3913 19.0317C36.3913 20.8174 35.0083 22.2004 33.222 22.2004Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M18.0668 21.9029C17.6779 21.9029 17.5791 22.2752 17.7379 22.5301L20.4904 27.0761C20.6849 27.3854 21.101 27.3757 21.2773 27.0761L24.0675 22.5112C24.2263 22.2563 24.1254 21.9029 23.7372 21.9029Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M18.0668 17.534L23.7372 17.534C24.1254 17.534 24.2263 17.1805 24.0675 16.9166L21.2773 12.3608C21.101 12.0619 20.6849 12.0424 20.4904 12.3608L17.7379 16.8977C17.5791 17.1617 17.6779 17.534 18.0668 17.534Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

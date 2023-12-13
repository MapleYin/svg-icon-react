import React from 'react'

export function Fireplace({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.0996 20.791' className={className}>
      <path
        d='M1.01524 4.29513L23.7133 4.29513C24.3667 4.29513 24.7383 3.92355 24.7383 3.26105L24.7383 1.04248C24.7383 0.371583 24.3667 0 23.7133 0L1.01524 0C0.371583 0 0 0.371583 0 1.04248L0 3.26105C0 3.92355 0.371583 4.29513 1.01524 4.29513ZM0.916904 3.79268C0.694345 3.79268 0.511533 3.60987 0.511533 3.35938L0.511533 0.936435C0.511533 0.694345 0.694345 0.511533 0.916904 0.511533L23.8123 0.511533C24.044 0.511533 24.2268 0.694345 24.2268 0.936435L24.2268 3.35938C24.2268 3.60987 24.044 3.79268 23.8123 3.79268ZM2.3668 20.5193L2.87833 20.5193L2.87833 4.02472L2.3668 4.02472ZM21.86 20.5193L22.3715 20.5193L22.3715 4.02472L21.86 4.02472ZM5.82716 20.5193L6.37833 20.5193L6.37833 8.44621C6.37833 7.74201 6.76007 7.34143 7.42726 7.34143L17.302 7.34143C17.9776 7.34143 18.3509 7.74201 18.3509 8.44621L18.3509 20.5193L18.9112 20.5193L18.9112 8.53058C18.9112 7.40958 18.3009 6.79093 17.2267 6.79093L7.51163 6.79093C6.42765 6.79093 5.82716 7.40958 5.82716 8.53058ZM0.465238 20.7792L24.2912 20.7792C24.4337 20.7792 24.5428 20.6611 24.5428 20.5193C24.5428 20.3768 24.4337 20.2677 24.2912 20.2677L0.465238 20.2677C0.323439 20.2677 0.205272 20.3768 0.205272 20.5193C0.205272 20.6611 0.323439 20.7792 0.465238 20.7792ZM12.3484 19.0523C14.5796 19.0523 16.0806 17.5213 16.0806 15.17C16.0806 11.278 12.7766 9.61379 10.2891 9.61379C9.98605 9.61379 9.86974 9.83752 10.0265 10.0283C10.8701 11.0366 11.2124 12.1049 10.9526 13.0533C10.6974 12.5169 10.0708 12.1842 9.78009 12.1842C9.70558 12.1842 9.66241 12.2085 9.66241 12.283C9.66241 12.41 9.71827 12.6904 9.71827 12.9026C9.71827 14.1659 8.92794 14.615 8.92794 16.1459C8.92794 17.9217 10.2538 19.0523 12.3484 19.0523ZM12.4293 17.7632C11.6621 17.7632 11.1775 17.3099 11.1775 16.639C11.1775 15.9388 11.6621 15.6919 11.7598 15.1988C11.9487 15.3272 12.1602 15.5804 12.2592 15.8007C12.5131 15.3737 12.5688 14.7481 12.4404 14.1841C13.3949 14.6608 13.8395 15.5074 13.8395 16.2742C13.8395 17.0721 13.3764 17.7632 12.4293 17.7632Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

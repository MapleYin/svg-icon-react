import React from 'react'

export default function PopcornFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.1518 31.435' className={className}>
      <path
        d='M7.09132 12.3724L8.6336 29.3793L5.92804 29.3793C4.63751 29.3793 3.96114 28.7862 3.74855 27.671L0.955189 12.9194C0.505286 10.5624 2.24855 9.12805 3.99952 9.12805C5.43937 9.12805 6.88898 10.125 7.09132 12.3724ZM13.8164 12.3883L12.9013 22.4196C12.8651 22.5335 12.8363 22.6507 12.8136 22.7701C11.3855 23.2832 10.328 24.6157 10.328 26.1345C10.328 27.5421 11.1221 28.6958 12.2791 29.2407L12.2664 29.3793L9.17912 29.3793L7.62912 12.3883C7.46105 10.4076 9.05178 8.99377 10.7228 8.99377C12.3938 8.99377 13.9845 10.4076 13.8164 12.3883ZM20.4904 12.9194L19.0048 20.7646C18.3456 20.1926 17.4724 19.8525 16.4867 19.8525C15.296 19.8525 14.2344 20.3779 13.5528 21.2093L14.3542 12.3724C14.5566 10.125 16.0062 9.12805 17.446 9.12805C19.197 9.12805 20.9403 10.5624 20.4904 12.9194ZM11.5729 2.92735C12.1919 2.75772 12.8605 2.75909 13.3943 2.97618C13.8434 2.42862 14.5422 2.05254 15.3282 2.05254C16.5481 2.05254 17.5889 2.9462 17.7663 4.11172C19.4736 4.10538 20.8973 5.50938 20.8973 7.20802C20.8973 8.06534 20.5694 8.75235 20.1481 9.23976C19.3891 8.60958 18.4116 8.25714 17.4167 8.25714C16.171 8.25714 14.9253 8.82081 14.1574 10.0606C13.4154 8.84484 12.0925 8.10401 10.7228 8.10401C9.36213 8.10401 8.03009 8.84484 7.2881 10.0606C6.52023 8.82081 5.27521 8.25714 4.03019 8.25714C3.1254 8.25714 2.21085 8.55509 1.49659 9.09376C1.22609 8.6629 1.088 8.12101 1.088 7.49327C1.088 5.99268 2.3299 4.58594 3.82072 4.58028C3.82072 3.05812 5.08175 2.19737 6.2881 2.52481C6.54904 1.56866 7.62033 0.879986 8.87384 0.879986C10.1195 0.879986 11.1915 1.70665 11.5729 2.92735Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M16.4867 30.5355C17.662 30.5355 18.7299 29.6857 18.908 28.6121C20.404 28.5721 21.262 27.5017 21.262 26.1903C21.262 24.9964 20.4656 24.0734 19.3864 23.9389C19.5311 22.1529 18.2559 20.7429 16.4867 20.7429C14.8768 20.7429 13.6198 21.9574 13.6436 23.4829C12.3124 23.6733 11.2178 24.8288 11.2178 26.1345C11.2178 27.716 12.5234 28.8332 14.122 28.6778C14.1228 29.7038 15.1816 30.5355 16.4867 30.5355Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
import React from 'react'

export default function N22Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.55196 16.1007L9.85293 16.1007C10.0256 16.1007 10.1607 15.9642 10.1607 15.8006C10.1607 15.6356 10.0249 15.5005 9.85293 15.5005L6.10899 15.5005L6.10899 15.458L8.66358 11.7984C9.58321 10.4748 9.91026 9.55616 9.91026 8.5169C9.91026 6.99229 9.14483 5.71573 7.58115 5.71573C6.1542 5.71573 5.24639 7.0627 5.24639 8.41739C5.24639 8.53624 5.32637 8.71114 5.54717 8.71114C5.69961 8.71114 5.81524 8.6087 5.82276 8.47442C5.97471 7.21065 6.50791 6.31456 7.59932 6.31456C8.83037 6.31456 9.3334 7.52266 9.3334 8.53985C9.3334 9.47237 9.0542 10.2582 8.21484 11.4396L5.32754 15.4854C5.24053 15.622 5.22685 15.7138 5.22685 15.8188C5.22685 16.0089 5.38086 16.1007 5.55196 16.1007ZM12.0138 16.1007L16.3238 16.1007C16.4874 16.1007 16.6226 15.9642 16.6226 15.8006C16.6226 15.6356 16.4867 15.5005 16.3238 15.5005L12.5715 15.5005L12.5715 15.458L15.1254 11.7984C16.045 10.4748 16.3728 9.55616 16.3728 8.5169C16.3728 6.99229 15.6066 5.71573 14.043 5.71573C12.616 5.71573 11.7082 7.0627 11.7082 8.41739C11.7082 8.53624 11.7882 8.71114 12.009 8.71114C12.1621 8.71114 12.2777 8.6087 12.2853 8.47442C12.4365 7.21065 12.9704 6.31456 14.0611 6.31456C15.2922 6.31456 15.8043 7.52266 15.8043 8.53985C15.8043 9.47237 15.516 10.2582 14.6767 11.4396L11.7894 15.4854C11.7023 15.622 11.6894 15.7138 11.6894 15.8188C11.6894 16.0089 11.8427 16.1007 12.0138 16.1007Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
import React from 'react'

export default function N25Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.31416 16.1007L9.62422 16.1007C9.7878 16.1007 9.92295 15.9642 9.92295 15.8006C9.92295 15.6356 9.78711 15.5005 9.62422 15.5005L5.87188 15.5005L5.87188 15.458L8.42578 11.7984C9.34542 10.4748 9.67315 9.55616 9.67315 8.5169C9.67315 6.99229 8.90703 5.71573 7.34336 5.71573C5.91641 5.71573 5.00859 7.0627 5.00859 8.41739C5.00859 8.53624 5.08857 8.71114 5.30938 8.71114C5.46182 8.71114 5.57813 8.6087 5.58497 8.47442C5.73692 7.21065 6.27081 6.31456 7.36153 6.31456C8.59258 6.31456 9.10469 7.52266 9.10469 8.53985C9.10469 9.47237 8.8164 10.2582 7.97705 11.4396L5.08975 15.4854C5.00273 15.622 4.98906 15.7138 4.98906 15.8188C4.98906 16.0089 5.14307 16.1007 5.31416 16.1007ZM13.9424 16.2813C15.6567 16.2813 16.5374 14.5757 16.5374 12.8412C16.5374 11.1581 15.7164 9.48321 14.0953 9.48321C13.4265 9.48321 12.6234 9.79776 12.2362 10.6964L12.2056 10.6964L12.521 6.51534L15.7936 6.51534C15.9837 6.51534 16.1007 6.38722 16.1007 6.19708C16.1007 6.02579 15.9649 5.89698 15.7936 5.89698L12.4462 5.89698C12.1048 5.89698 11.9773 6.12344 11.9383 6.42784L11.6319 10.6489C11.6124 10.8624 11.5936 11.122 11.5936 11.2147C11.5936 11.4264 11.7273 11.5613 11.9355 11.5613C12.1669 11.5613 12.2519 11.3967 12.35 11.2023C12.6975 10.5428 13.2502 10.0745 13.9878 10.0745C15.2752 10.0745 15.8936 11.5754 15.8936 12.8621C15.8936 14.2576 15.2648 15.6908 13.941 15.6908C12.9334 15.6908 12.211 14.8052 12.0416 13.808C12.0055 13.5271 11.8878 13.4609 11.7492 13.4609C11.557 13.4609 11.4484 13.5884 11.4484 13.7806C11.4484 13.8703 11.4986 14.0523 11.523 14.1588C11.7969 15.377 12.6706 16.2813 13.9424 16.2813Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
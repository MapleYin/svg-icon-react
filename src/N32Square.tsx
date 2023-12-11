import React from 'react'

export default function N32Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.67627 16.2513C9.19727 16.2513 10.299 15.0912 10.299 13.298C10.299 11.9841 9.66533 10.8997 8.34317 10.7825L8.34317 10.7525C9.48575 10.468 10.0145 9.39786 10.0145 8.32364C10.0145 6.83399 9.09346 5.74639 7.63652 5.74639C6.40195 5.74639 5.66582 6.48789 5.32265 7.59209C5.24521 7.87256 5.225 8.09717 5.225 8.22051C5.225 8.40928 5.32383 8.52969 5.50899 8.52969C5.72705 8.52969 5.75957 8.39161 5.80342 8.16446C5.96172 7.20089 6.53741 6.32638 7.63652 6.32638C8.77109 6.32638 9.40127 7.24747 9.40127 8.39112C9.40127 9.5668 8.63506 10.5074 7.45801 10.5074L6.85147 10.5074C6.65225 10.5074 6.59043 10.6601 6.59043 10.7943C6.59043 10.9559 6.69902 11.0897 6.85147 11.0897L7.47754 11.0897C8.83672 11.0897 9.6622 11.8418 9.6622 13.3406C9.6622 14.5415 9.03769 15.6518 7.69512 15.6518C6.46358 15.6518 5.75938 14.6866 5.63946 13.7794C5.61446 13.5536 5.55332 13.431 5.32754 13.431C5.16123 13.431 5.0499 13.5584 5.0499 13.7429C5.0499 13.8941 5.09804 14.1928 5.1664 14.3881C5.4998 15.4678 6.38379 16.2513 7.67627 16.2513ZM12.1898 16.1007L16.4914 16.1007C16.6641 16.1007 16.7992 15.9642 16.7992 15.8006C16.7992 15.6356 16.6634 15.5005 16.4914 15.5005L12.7475 15.5005L12.7475 15.458L15.3021 11.7984C16.221 10.4748 16.5487 9.55616 16.5487 8.5169C16.5487 6.99229 15.7826 5.71573 14.2196 5.71573C12.792 5.71573 11.8849 7.0627 11.8849 8.41739C11.8849 8.53624 11.9648 8.71114 12.1766 8.71114C12.3381 8.71114 12.4537 8.6087 12.4522 8.47442C12.6125 7.21065 13.1464 6.31456 14.2371 6.31456C15.4689 6.31456 15.9719 7.52266 15.9719 8.53985C15.9719 9.47237 15.6927 10.2582 14.8533 11.4396L11.9653 15.4854C11.8783 15.622 11.8653 15.7138 11.8653 15.8188C11.8653 16.0089 12.0187 16.1007 12.1898 16.1007Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
import React from 'react'

export default function FigureFencing({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.4147 27.6809' className={className}>
      <path
        d='M9.20372 5.02871C10.57 5.02871 11.7083 3.89043 11.7083 2.50459C11.7083 1.13828 10.57 0 9.20372 0C7.81788 0 6.67959 1.13828 6.67959 2.50459C6.67959 3.89043 7.81788 5.02871 9.20372 5.02871ZM1.17871 27.3374C1.67041 27.6115 2.42578 27.4944 2.75986 26.8939L5.6669 21.6594L7.4043 17.7444C7.41543 17.7026 7.47745 17.6817 7.51924 17.7138L12.1896 21.0993L12.1896 26.315C12.1896 26.9538 12.7106 27.4832 13.3494 27.4832C14.0065 27.4832 14.5177 26.9538 14.5177 26.315L14.5177 20.5881C14.5177 20.2547 14.4193 19.9018 14.1641 19.6653L9.36133 15.1367L9.8126 11.4827C9.82237 11.3551 9.99952 11.3356 10.0483 11.4534L11.119 13.988C11.3059 14.4302 11.7272 14.705 12.1896 14.705L17.1115 14.705C17.7504 14.705 18.2798 14.1938 18.2798 13.5556C18.2798 12.8979 17.7504 12.3957 17.1115 12.3957L12.9554 12.3957L11.2954 8.48643C10.863 7.4751 10.206 6.92412 8.742 6.50283L8.07383 6.31592C6.47315 5.85488 5.39209 5.82354 4.09619 6.36475L2.32813 7.1124L2.32813 2.80977C2.32813 2.18066 1.80645 1.66035 1.16826 1.66035C0.529395 1.66035 0 2.18066 0 2.80977L0 9.02696C0 9.85274 0.864161 10.304 1.62998 9.97061L4.91153 8.52686C5.05869 8.46826 5.18701 8.56592 5.1668 8.72285L3.52569 20.7353L0.716993 25.7556C0.412891 26.315 0.608887 27.0522 1.17871 27.3374ZM16.6852 10.4244L17.2526 10.4244L17.2526 0.466598C17.2526 0.306441 17.1245 0.178314 16.9734 0.178314C16.8126 0.178314 16.6852 0.306441 16.6852 0.466598ZM15.254 11.4516L18.6929 11.4516C19.0765 11.4516 19.0951 11.1279 19.0143 10.9035C18.6732 9.91992 17.8962 9.31104 16.9734 9.31104C16.0409 9.31104 15.264 9.91992 14.9235 10.9035C14.8518 11.1279 14.8516 11.4516 15.254 11.4516Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
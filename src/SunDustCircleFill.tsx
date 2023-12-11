import React from 'react'

export default function SunDustCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM7.11035 18.9023C7.11035 19.1331 7.31114 19.3423 7.5419 19.3423C7.77334 19.3423 7.97344 19.1331 7.97344 18.9023C7.97344 18.6709 7.77334 18.4701 7.5419 18.4701C7.31114 18.4701 7.11035 18.6709 7.11035 18.9023ZM10.2213 18.9023C10.2213 19.1331 10.4305 19.3423 10.6612 19.3423C10.8927 19.3423 11.0935 19.1331 11.0935 18.9023C11.0935 18.6709 10.8927 18.4701 10.6612 18.4701C10.4305 18.4701 10.2213 18.6709 10.2213 18.9023ZM13.3218 18.9023C13.3218 19.1331 13.5219 19.3423 13.7533 19.3423C13.9848 19.3423 14.1849 19.1331 14.1849 18.9023C14.1849 18.6709 13.9848 18.4701 13.7533 18.4701C13.5219 18.4701 13.3218 18.6709 13.3218 18.9023ZM16.395 18.9023C16.395 19.1331 16.5958 19.3423 16.8363 19.3423C17.0664 19.3423 17.2672 19.1331 17.2672 18.9023C17.2672 18.6709 17.0664 18.4701 16.8363 18.4701C16.5958 18.4701 16.395 18.6709 16.395 18.9023ZM5.5374 17.0433C5.5374 17.274 5.73819 17.4839 5.96895 17.4839C6.20039 17.4839 6.40049 17.274 6.40049 17.0433C6.40049 16.8118 6.20039 16.6117 5.96895 16.6117C5.73819 16.6117 5.5374 16.8118 5.5374 17.0433ZM8.64834 17.0433C8.64834 17.274 8.84776 17.4839 9.0792 17.4839C9.31065 17.4839 9.51983 17.274 9.51983 17.0433C9.51983 16.8118 9.31065 16.6117 9.0792 16.6117C8.84776 16.6117 8.64834 16.8118 8.64834 17.0433ZM11.7488 17.0433C11.7488 17.274 11.9489 17.4839 12.1804 17.4839C12.4118 17.4839 12.6119 17.274 12.6119 17.0433C12.6119 16.8118 12.4118 16.6117 12.1804 16.6117C11.9489 16.6117 11.7488 16.8118 11.7488 17.0433ZM14.8409 17.0433C14.8409 17.274 15.041 17.4839 15.2725 17.4839C15.5039 17.4839 15.7124 17.274 15.7124 17.0433C15.7124 16.8118 15.5039 16.6117 15.2725 16.6117C15.041 16.6117 14.8409 16.8118 14.8409 17.0433ZM17.9323 17.0433C17.9323 17.274 18.1422 17.4839 18.373 17.4839C18.6044 17.4839 18.8045 17.274 18.8045 17.0433C18.8045 16.8118 18.6044 16.6117 18.373 16.6117C18.1422 16.6117 17.9323 16.8118 17.9323 17.0433ZM4.22266 14.7752C4.07022 14.7752 3.93936 14.8838 3.93936 15.0369C3.93936 15.2075 4.07091 15.2986 4.22266 15.2986L20.0997 15.2986C20.2787 15.2986 20.3823 15.2075 20.3823 15.0369C20.3823 14.8656 20.2703 14.7752 20.0997 14.7752ZM8.45987 12.2042C8.45987 12.8902 8.63018 13.5211 8.95059 14.0856L15.3711 14.0856C15.6915 13.5211 15.8625 12.8902 15.8625 12.2042C15.8625 10.1584 14.2157 8.51026 12.1608 8.51026C10.1066 8.51026 8.45987 10.1584 8.45987 12.2042ZM4.22335 11.7472C4.06885 11.7472 3.93936 11.8767 3.93936 12.0284C3.93936 12.2074 4.06885 12.3181 4.22335 12.3181L6.95205 12.3181C7.13516 12.3181 7.22833 12.2172 7.22833 12.0284C7.22833 11.876 7.11631 11.7472 6.95205 11.7472ZM17.3696 11.7472C17.2054 11.7472 17.0934 11.876 17.0934 12.0284C17.0934 12.2081 17.2431 12.3181 17.3696 12.3181L20.099 12.3181C20.2717 12.3181 20.3823 12.2256 20.3823 12.0284C20.3823 11.8585 20.2717 11.7472 20.099 11.7472ZM6.36553 6.46475C6.26739 6.55518 6.26807 6.70899 6.37872 6.81964L8.30625 8.74854C8.37988 8.82081 8.56231 8.8417 8.66182 8.72334C8.80743 8.5959 8.7418 8.41348 8.66885 8.33145L6.73927 6.40186C6.62862 6.3003 6.46436 6.34776 6.36553 6.46475ZM17.5915 6.40186L15.6626 8.33145C15.5792 8.40508 15.5149 8.5959 15.6612 8.72334C15.7601 8.84034 15.9425 8.82149 16.0161 8.74854L17.9521 6.81964C18.0627 6.70899 18.0634 6.55586 17.9652 6.46475C17.8657 6.34707 17.7008 6.2919 17.5915 6.40186ZM11.8803 3.72667L11.8803 6.45537C11.8803 6.60987 12.0091 6.73165 12.1608 6.73165C12.3315 6.73165 12.4421 6.57217 12.4421 6.45537L12.4421 3.72667C12.4421 3.53585 12.3398 3.45245 12.1608 3.45245C11.9909 3.45245 11.8803 3.53585 11.8803 3.72667Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
import React from 'react'

export default function CatFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.7977 26.1414' className={className}>
      <path
        d='M5.81983 26.1414L6.47814 26.1414C7.65323 26.1414 8.46036 25.4508 8.46036 24.3495C8.46036 23.4629 7.8878 22.7577 6.97452 22.6058L6.97452 20.0562C6.97452 18.7678 7.35762 18.1255 7.93702 17.1975C9.01535 17.7342 11.0131 18.0621 12.7262 18.0621C14.2727 18.0621 15.9216 17.8865 17.5921 17.5343C17.7754 18.6078 18.1326 19.8537 18.1326 20.193C18.1326 21.9721 17.975 22.6847 17.975 24.0521C17.975 25.4508 18.588 26.1414 19.8526 26.1414L20.6476 26.1414C21.8199 26.1414 22.6207 25.4565 22.6207 24.3495C22.6207 23.4742 22.0382 22.7564 21.1086 22.5813L21.1086 21.6743C21.1086 15.7332 25.8139 17.3364 25.7935 8.92775C27.9158 8.94542 29.4364 7.49806 29.4364 6.49513C29.4364 5.25958 28.05 3.88438 26.5642 2.84551C26.2106 1.6041 25.759 0.49922 25.0627 0.49922C24.46 0.49922 23.9185 1.10274 23.0921 2.42706C22.2232 3.17589 21.2995 4.50762 20.5363 5.67813L19.5235 7.24502C19.2859 7.59737 19.0887 7.69239 18.7541 7.69239C14.9827 7.69239 12.7955 7.05352 8.80714 7.05352C6.53448 7.05352 5.25743 8.01778 4.5629 9.24571C4.35118 9.64522 4.13018 9.68975 3.66251 9.57979C1.75987 9.10489 0.52784 7.5626 0.52784 5.62832C0.52784 2.91963 2.7085 1.01172 5.68565 1.01172C6.78077 1.01172 7.92266 1.27335 9.16837 1.76436C9.61027 1.9502 9.74709 1.3915 9.42101 1.26221C8.09942 0.738474 6.86505 0.483884 5.68565 0.483884C2.21397 0.483884 0 2.52637 0 5.62832C0 7.83682 1.45303 9.55997 3.59648 10.0694C4.01328 10.1683 3.9836 10.3709 3.90889 10.8813C3.72247 12.4279 3.72247 12.9937 3.72247 13.3564C3.72247 16.6798 2.08135 17.8734 2.50606 19.4075L3.89395 24.4345C4.23301 25.6497 4.9795 26.1414 5.81983 26.1414ZM25.8437 5.7461C25.4978 5.7461 25.1937 5.46153 25.1937 5.09679C25.1937 4.75157 25.4978 4.44678 25.8437 4.44678C26.1896 4.44678 26.493 4.75157 26.493 5.09679C26.493 5.46153 26.1896 5.7461 25.8437 5.7461Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
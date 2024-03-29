import React from 'react'

export function Syringe({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.9087 26.6202' className={className}>
      <path
        d='M0.0811427 26.506C0.173625 26.5985 0.351752 26.616 0.454 26.5046L5.91162 21.038L5.53808 20.656L0.0811427 26.1136C-0.0308705 26.2159-0.0231559 26.3947 0.0811427 26.506ZM4.51063 19.8327L6.74814 22.0772C7.75156 23.0799 9.09521 23.087 10.093 22.0801L23.2325 8.96783L22.8564 8.60015L9.65194 21.8137C8.92411 22.5422 7.94716 22.55 7.19912 21.8026L4.77617 19.3796C4.03789 18.633 4.03789 17.656 4.7664 16.9268L17.9884 3.72369L17.6116 3.35601L4.49931 16.4872C3.50018 17.4779 3.50721 18.8299 4.51063 19.8327ZM6.45946 14.7267L9.34355 17.6212C9.44101 17.7362 9.65429 17.7173 9.76923 17.6206C9.89189 17.5154 9.89121 17.2917 9.76855 17.1872L6.88378 14.3122ZM9.08642 12.12L11.9614 14.995C12.0764 15.1092 12.2533 15.1092 12.3773 14.995C12.4909 14.8716 12.4811 14.7031 12.3767 14.5797L9.50097 11.6859ZM11.6945 9.50142L14.5877 12.3687C14.7026 12.4732 14.8796 12.492 14.9945 12.3687C15.1179 12.2538 15.1179 12.0768 14.9938 11.9612L12.1188 9.08687ZM14.3117 6.87584L17.1867 9.76969C17.3017 9.88394 17.5059 9.88394 17.6019 9.76969C17.7169 9.62886 17.7253 9.45894 17.6019 9.3356L14.7269 6.4606ZM16.2488 2.13521L24.4449 10.3313C24.5415 10.437 24.6979 10.437 24.7938 10.3313C24.8994 10.2354 24.8994 10.0693 24.7938 9.96431L16.6165 1.78638C16.5192 1.68003 16.3454 1.68139 16.2488 1.78638C16.1438 1.88296 16.1425 2.03794 16.2488 2.13521ZM17.7942 3.18316L23.3774 8.80475L24.4512 7.73033C24.5568 7.62535 24.5575 7.469 24.47 7.39126L22.0076 4.92047L24.4466 2.46403L26.116 4.13414C26.2217 4.23004 26.3878 4.22096 26.4739 4.13414C26.5705 4.02916 26.5705 3.86304 26.4739 3.75738L22.7867 0.0792494C22.6901-0.0264165 22.5247-0.0264165 22.419 0.0792494C22.3322 0.165384 22.3141 0.3315 22.419 0.437166L24.071 2.08912L21.6334 4.52671L19.207 2.12827C19.13 2.04214 18.9548 2.02329 18.8582 2.12827Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export default function Gyroscope({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.852 0 12.1615 0C5.47178 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1615 23.8319C5.73585 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73653 0.500206 12.1622 0.500206C18.5886 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5879 23.8319 12.1615 23.8319ZM3.738 20.5948C5.42687 22.2935 10.5237 19.8944 15.214 15.2237C19.8944 10.5426 22.2655 5.4548 20.576 3.75684C18.8844 2.0834 13.7993 4.45518 9.12656 9.12725C4.43633 13.8272 2.06456 18.9032 3.738 20.5948ZM4.10998 20.2312C2.62335 18.7446 5.01329 13.9858 9.48946 9.49083C13.9586 5.02169 18.7174 2.6422 20.2124 4.1379C21.699 5.63292 19.3098 10.3729 14.8406 14.8608C10.3645 19.3279 5.60568 21.7269 4.10998 20.2312ZM20.5746 20.5948C22.2481 18.9032 19.8951 13.8272 15.214 9.15449C10.5237 4.45518 5.42823 2.0834 3.75479 3.77501C2.05684 5.4548 4.45518 10.5426 9.12725 15.2231C13.7993 19.9133 18.8767 22.2746 20.5746 20.5948ZM20.2117 20.2312C18.7167 21.7269 13.967 19.3279 9.48946 14.8595C5.00284 10.3729 2.62335 5.63292 4.11837 4.1379C5.60499 2.6422 10.3638 5.02169 14.8406 9.50899C19.3091 13.9858 21.699 18.7446 20.2117 20.2312ZM20.8357 3.90675L23.8552 0.887312C23.9595 0.783013 23.9595 0.618264 23.8552 0.504884C23.7132 0.390819 23.5673 0.418749 23.4812 0.504884L20.4401 3.5459ZM3.61016 20.3947L0.486036 23.5188C0.381737 23.6238 0.344726 23.769 0.486036 23.8922C0.590335 23.9965 0.763482 23.9972 0.868464 23.8929L4.01056 20.7501Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
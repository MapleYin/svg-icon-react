import React from 'react'

export function Forward({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.243 18.1397' className={className}>
      <path
        d='M3.70108 18.1397C4.01612 18.1397 4.39903 17.9639 4.64981 17.8183L17.8415 10.0571C18.1777 9.86085 18.4203 9.5585 18.4203 9.09356C18.4203 8.6377 18.1959 8.36328 17.8415 8.14883L4.64981 0.396778C4.38087 0.241406 4.01612 0.0663084 3.70108 0.0663084C3.11983 0.0663084 2.5293 0.486525 2.5293 1.47862L2.5293 16.7267C2.5293 17.7188 3.11983 18.1397 3.70108 18.1397ZM3.67735 17.6564C3.41847 17.6564 3.0129 17.4562 3.0129 16.8153L3.0129 1.38995C3.0129 0.749132 3.41847 0.54884 3.67735 0.54884C3.84766 0.54884 4.01934 0.57882 4.3209 0.748448L17.4822 8.49337C17.8054 8.67413 17.9491 8.82628 17.9491 9.09356C17.9491 9.36084 17.7865 9.55 17.4822 9.7126L4.3209 17.4568C4.03751 17.6271 3.84766 17.6564 3.67735 17.6564ZM19.5237 18.1397C19.8479 18.1397 20.2315 17.9639 20.4816 17.8183L33.6642 10.0571C34.0004 9.86085 34.243 9.5585 34.243 9.09356C34.243 8.6377 34.0186 8.36328 33.6642 8.14883L20.4816 0.396778C20.2126 0.241406 19.8479 0.0663084 19.5237 0.0663084C18.9516 0.0663084 18.361 0.486525 18.361 1.47862L18.361 16.7267C18.361 17.7188 18.9516 18.1397 19.5237 18.1397ZM19.5091 17.6564C19.2411 17.6564 18.8356 17.4562 18.8356 16.8153L18.8356 1.38995C18.8356 0.749132 19.2411 0.54884 19.5091 0.54884C19.6703 0.54884 19.842 0.57882 20.1436 0.748448L33.314 8.49337C33.628 8.67413 33.7809 8.82628 33.7809 9.09356C33.7809 9.36084 33.6092 9.55 33.314 9.7126L20.1436 17.4568C19.8602 17.6271 19.6703 17.6564 19.5091 17.6564Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

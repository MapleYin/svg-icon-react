import React from 'react'

export function MirrorSideLeft({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.7794 18.2698' className={className}>
      <path
        d='M24.7465 0.000607266C27.2258 0.000607266 28.6609 1.48801 28.3855 3.87347L27.9124 8.22834C27.7868 9.42629 28.4238 10.0871 29.7642 10.0871L33.8081 10.0871C34.1618 10.0871 34.4181 10.3622 34.4181 10.7159L34.4181 17.5054C34.4181 18.0247 34.119 18.2399 33.5557 18.1006C31.285 17.5361 29.4879 17.3219 27.4244 17.3219L7.97998 17.3219C2.85684 17.3219 0 14.5939 0 9.72415C0 4.25628 3.02012 1.43137 9.379 0.571799C12.9238 0.065354 19.9806-0.00779103 24.7465 0.000607266ZM9.37949 1.07493C3.31739 1.86976 0.511533 4.51605 0.511533 9.72415C0.511533 14.2603 3.18907 16.8104 7.98701 16.8104L22.436 16.8104C25.2478 16.8104 26.4968 15.7267 26.787 13.1194L27.8753 3.79553C28.1076 1.79612 26.8697 0.51214 24.7465 0.51214C19.9624 0.51214 12.9488 0.597102 9.37949 1.07493Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

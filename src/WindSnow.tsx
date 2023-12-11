import React from 'react'

export default function WindSnow({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.3812 25.2494' className={className}>
      <path
        d='M23.0547 21.0618C23.2541 21.0618 23.3397 20.8917 23.3475 20.6916L23.3161 19.324L24.4807 20.0301C24.6767 20.1396 24.8516 20.1452 24.9617 19.9576C25.0537 19.7875 24.9554 19.6392 24.7734 19.5311L23.5782 18.8695L24.7748 18.2067C24.9449 18.1167 25.053 17.9523 24.9436 17.7626C24.8536 17.5932 24.6773 17.5982 24.4891 17.7083L23.3161 18.4241L23.3481 17.0391C23.3404 16.8383 23.2548 16.6675 23.0547 16.6675C22.8532 16.6675 22.7676 16.846 22.7696 17.0475L22.7919 18.4248L21.6267 17.7083C21.4384 17.5988 21.2369 17.5736 21.1463 17.7626C21.055 17.9523 21.1526 18.0979 21.3423 18.2067L22.5193 18.8695L21.3339 19.5129C21.1526 19.6203 21.0354 19.7855 21.1456 19.9576C21.2628 20.1271 21.4384 20.1214 21.6267 20.0112L22.7919 19.315L22.7612 20.6916C22.7696 20.8924 22.8539 21.0618 23.0547 21.0618Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M23.0547 4.39502C23.2541 4.39502 23.3397 4.22422 23.3475 4.02412L23.3161 2.65723L24.4807 3.3626C24.6767 3.47207 24.8516 3.47842 24.9617 3.29014C25.0537 3.12002 24.9554 2.97168 24.7734 2.85518L23.5782 2.20205L24.7748 1.53916C24.9449 1.44922 25.053 1.28477 24.9436 1.09512C24.8536 0.925683 24.6773 0.930663 24.4891 1.0415L23.3161 1.75664L23.3481 0.371583C23.3404 0.170801 23.2548 0 23.0547 0C22.8532 0 22.7676 0.178516 22.7696 0.379981L22.7919 1.75732L21.6267 1.0415C21.4384 0.931347 21.2369 0.906152 21.1463 1.09512C21.055 1.28477 21.1526 1.43106 21.3423 1.53916L22.5193 2.20205L21.3339 2.84541C21.1526 2.95352 21.0354 3.11865 21.1456 3.29014C21.2628 3.45957 21.4384 3.45391 21.6267 3.34444L22.7919 2.63838L22.7612 4.02412C22.7696 4.22559 22.8539 4.39502 23.0547 4.39502Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.36065 8.99815C3.02061 8.21944 4.95078 7.78819 6.87617 7.78819C9.68857 7.78819 11.3228 8.30665 13.9161 8.30665C15.7396 8.30665 17.0355 7.07657 17.0355 5.33301C17.0355 3.71455 15.8139 2.36982 14.1282 2.36982C12.5265 2.36982 11.3219 3.51689 11.1263 4.91992C11.1056 5.09121 11.257 5.20166 11.4297 5.17764C11.5633 5.16201 11.6276 5.05323 11.6343 4.92256C11.8337 3.79961 12.812 2.88672 14.1282 2.88672C15.5321 2.88672 16.5277 4.01514 16.5277 5.33301C16.5277 6.78848 15.4692 7.78974 13.9161 7.78974C11.292 7.78974 9.80303 7.28037 6.87617 7.28037C4.88965 7.28037 2.84727 7.75205 1.12939 8.55937C0.979196 8.63252 0.94941 8.76885 1.00302 8.90449C1.06504 9.02129 1.21816 9.0629 1.36065 8.99815ZM21.8045 14.2617C24.6615 14.2617 26.3812 12.6451 26.3812 10.3597C26.3812 8.24248 24.704 6.47852 22.5371 6.47852C20.3993 6.47852 18.7748 8.18066 18.6285 10.1874C18.6244 10.346 18.7518 10.4621 18.8973 10.4565C19.0343 10.4508 19.1309 10.3513 19.1461 10.2165C19.2778 8.51124 20.6572 6.99542 22.5371 6.99542C24.4209 6.99542 25.8643 8.52491 25.8643 10.3597C25.8643 12.3613 24.3337 13.7532 21.8045 13.7532C17.7264 13.7532 13.5033 11.5657 8.35322 11.5657C5.59912 11.5657 3.32803 12.1058 1.12939 12.9974C0.998728 13.0537 0.94941 13.2264 1.00302 13.3432C1.06504 13.4697 1.21885 13.5211 1.34248 13.4459C3.42119 12.3979 5.6793 12.0742 8.35322 12.0742C13.3644 12.0742 17.5746 14.2617 21.8045 14.2617ZM13.9629 22.844C15.5836 22.844 16.8109 21.5837 16.8109 19.9191C16.8109 17.3094 13.931 15.8518 8.87792 15.8518C6.2122 15.8518 3.35117 16.4756 1.13848 17.2827C0.998728 17.3384 0.94941 17.511 1.00302 17.6278C1.06504 17.7453 1.21885 17.8065 1.34248 17.7494C3.52881 16.8703 6.32734 16.3596 8.87792 16.3596C13.6054 16.3596 16.294 17.6781 16.294 19.9191C16.294 21.302 15.2998 22.3271 13.9629 22.3271C12.7091 22.3271 11.7628 21.561 11.5779 20.2214C11.5731 20.0746 11.4437 19.9515 11.3025 19.9444C11.1503 19.9465 11.0269 20.094 11.0583 20.2519C11.2647 21.8986 12.4435 22.844 13.9629 22.844Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export default function ArrowDownAppFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.9637 21.6121' className={className}>
      <path
        d='M20.3491 1.26367C21.2513 2.14698 21.6024 3.34532 21.6024 5.94493L21.6024 15.6477C21.6024 18.248 21.2513 19.4365 20.3491 20.3296C19.4561 21.2317 18.2382 21.6024 15.6567 21.6024L5.94561 21.6024C3.37325 21.6024 2.16514 21.2317 1.25322 20.3296C0.351073 19.4463 0 18.248 0 15.6477L0 5.76827C0 3.38233 0.369921 2.18399 1.27207 1.28184C2.16514 0.379686 3.40118 0 5.77735 0L15.6567 0C18.2382 0 19.4372 0.361522 20.3491 1.26367ZM10.5335 4.93594L10.5335 14.4765L10.5578 16.0425L8.88116 14.4066L6.37159 11.8964C6.29708 11.831 6.25548 11.8066 6.17549 11.8066C6.03438 11.8066 5.92803 11.9032 5.92803 12.0262C5.92803 12.1062 5.96074 12.1562 6.00733 12.2118L10.638 16.86C10.681 16.9023 10.7478 16.9273 10.8103 16.9273C10.8728 16.9273 10.9409 16.9016 10.9825 16.86L15.6223 12.2118C15.6779 12.1562 15.7023 12.1062 15.7023 12.0262C15.7023 11.9032 15.6043 11.8066 15.4632 11.8066C15.3832 11.8066 15.3325 11.8303 15.2671 11.8964L12.7491 14.4066L11.0627 16.062L11.087 14.4765L11.087 4.93594C11.087 4.76485 10.9814 4.66826 10.8103 4.66826C10.6489 4.66826 10.5335 4.76485 10.5335 4.93594Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

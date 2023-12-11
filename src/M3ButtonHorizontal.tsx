import React from 'react'

export default function M3ButtonHorizontal({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.8677 20.86' className={className}>
      <path
        d='M8.28273 20.8495L19.2236 20.8495C25.7084 20.8495 27.5064 18.3924 27.5064 12.5194L27.5064 8.321C27.5064 2.44805 25.7084 0 19.2236 0L8.28273 0C1.78887 0 0 2.44805 0 8.321L0 12.5194C0 18.3924 1.78887 20.8495 8.28273 20.8495ZM8.28273 20.338C2.12384 20.338 0.511533 18.0538 0.511533 12.5194L0.511533 8.321C0.511533 2.78663 2.12384 0.503135 8.28273 0.503135L19.2236 0.503135C25.3825 0.503135 26.9948 2.78663 26.9948 8.321L26.9948 12.5194C26.9948 18.0538 25.3825 20.338 19.2236 20.338Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.91827 15.6622C7.10342 15.6622 7.23223 15.5139 7.23223 15.3267L7.23223 6.42062L7.27335 6.42062L9.79317 15.1062C9.87334 15.3458 9.98262 15.5402 10.2697 15.5402C10.5568 15.5402 10.6648 15.3737 10.7456 15.1055L13.2557 6.42062L13.2877 6.42062L13.2877 15.3267C13.2877 15.5327 13.4333 15.6622 13.6101 15.6622C13.7882 15.6622 13.924 15.5041 13.924 15.3267L13.924 5.72413C13.924 5.38223 13.7577 5.20889 13.4263 5.20889C13.1457 5.20889 12.9751 5.37608 12.8824 5.69298L10.3172 14.6394L10.2307 14.6394L7.63614 5.69298C7.54347 5.39424 7.35333 5.20889 7.1209 5.20889C6.79854 5.20889 6.61406 5.39337 6.61406 5.72413L6.61406 15.3267C6.61406 15.5041 6.74287 15.6622 6.91827 15.6622ZM18.4696 15.6733C19.9906 15.6733 21.0924 14.5133 21.0924 12.72C21.0924 11.4062 20.4587 10.3218 19.1275 10.2046L19.1275 10.1746C20.27 9.89004 20.7987 8.81993 20.7987 7.74571C20.7987 6.25606 19.8861 5.16846 18.4208 5.16846C17.1862 5.16846 16.4494 5.90997 16.116 7.01417C16.0386 7.29463 16.0184 7.51924 16.0184 7.64258C16.0184 7.83135 16.1172 7.95177 16.3017 7.95177C16.5197 7.95177 16.5523 7.81368 16.587 7.58653C16.746 6.62296 17.3301 5.74845 18.4208 5.74845C19.5547 5.74845 20.1946 6.66954 20.1946 7.81319C20.1946 8.98887 19.4284 9.9295 18.2514 9.9295L17.6448 9.9295C17.4359 9.9295 17.3747 10.0821 17.3747 10.2164C17.3747 10.3779 17.4917 10.5117 17.6448 10.5117L18.2702 10.5117C19.6301 10.5117 20.4556 11.2639 20.4556 12.7627C20.4556 13.9636 19.8213 15.0738 18.4878 15.0738C17.2569 15.0738 16.5521 14.1087 16.4237 13.2015C16.4078 12.9757 16.3369 12.853 16.1111 12.853C15.9539 12.853 15.8433 12.9805 15.8433 13.1649C15.8433 13.3162 15.8914 13.6149 15.9591 13.8102C16.2932 14.8899 17.1765 15.6733 18.4696 15.6733Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

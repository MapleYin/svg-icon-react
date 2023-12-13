import React from 'react'

export function LocationSlash({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.3636 23.4999' className={className}>
      <path
        d='M8.07668 7.52088L0.581745 11.062C0.504987 11.0907 0.505671 11.2324 0.61944 11.2324L11.7758 11.2199L12.332 11.7761L12.3203 22.9248C12.3203 23.0288 12.4606 23.0658 12.5081 22.9618L16.0498 15.4937L16.4228 15.8666L12.9745 23.1591C12.7144 23.6681 11.8331 23.6294 11.8324 22.8902L11.8213 11.882C11.8213 11.7907 11.755 11.7237 11.6637 11.7237L0.587106 11.7119C-0.056554 11.7112-0.250111 10.8787 0.410541 10.5661L7.69681 7.14102ZM23.3769 1.15962L17.4896 13.6104L17.1188 13.2396L23.0025 0.832862C23.1065 0.624855 22.9564 0.485207 22.7491 0.588527L10.3337 6.45451L9.95749 6.07832L22.4266 0.216836C23.1214-0.108948 23.7663 0.344084 23.3769 1.15962Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M21.7015 19.8655C21.8058 19.9705 21.9796 19.9705 22.0832 19.8655C22.1687 19.78 22.1882 19.588 22.0832 19.4837L3.86689 1.26741C3.7996 1.20013 3.59784 1.16243 3.49354 1.26741C3.38016 1.38011 3.38016 1.54554 3.49354 1.64916Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

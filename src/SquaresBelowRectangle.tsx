import React from 'react'

export function SquaresBelowRectangle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.8535 19.6533' className={className}>
      <path
        d='M2.90196 14.0775L23.5896 14.0775C25.5251 14.0775 26.4922 13.139 26.4922 11.1873L26.4922 2.93848C26.4922 0.986817 25.5251 0.0490224 23.5896 0.0490224L2.90196 0.0490224C0.967092 0.0490224 0 0.986817 0 2.93848L0 11.1873C0 13.139 0.967092 14.0775 2.90196 14.0775ZM2.90333 13.6029C1.22169 13.6029 0.511533 12.8669 0.511533 11.1909L0.511533 2.93487C0.511533 1.25958 1.22169 0.523544 2.90333 0.523544L23.5882 0.523544C25.2705 0.523544 25.98 1.25958 25.98 2.93487L25.98 11.1909C25.98 12.8669 25.2705 13.6029 23.5882 13.6029Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.633305 19.6533L3.42784 19.6533C3.62432 19.6533 3.76016 19.5182 3.76016 19.3412L3.76016 16.5655C3.76016 16.3502 3.625 16.2339 3.42784 16.2339L0.633305 16.2339C0.42637 16.2339 0.300295 16.3502 0.300295 16.5655L0.300295 19.3412C0.300295 19.5182 0.427054 19.6533 0.633305 19.6533ZM6.24385 19.6533L9.03838 19.6533C9.23419 19.6533 9.37003 19.5182 9.37003 19.3412L9.37003 16.5655C9.37003 16.3502 9.23487 16.2339 9.03838 16.2339L6.24385 16.2339C6.03692 16.2339 5.91084 16.3502 5.91084 16.5655L5.91084 19.3412C5.91084 19.5182 6.0376 19.6533 6.24385 19.6533ZM11.8537 19.6533L14.6483 19.6533C14.8447 19.6533 14.9806 19.5182 14.9806 19.3412L14.9806 16.5655C14.9806 16.3502 14.8454 16.2339 14.6483 16.2339L11.8537 16.2339C11.6468 16.2339 11.5207 16.3502 11.5207 16.5655L11.5207 19.3412C11.5207 19.5182 11.6475 19.6533 11.8537 19.6533ZM17.4643 19.6533L20.2672 19.6533C20.4546 19.6533 20.5904 19.5182 20.5904 19.3412L20.5904 16.5655C20.5904 16.3502 20.4553 16.2339 20.2672 16.2339L17.4643 16.2339C17.2567 16.2339 17.1313 16.3502 17.1313 16.5655L17.1313 19.3412C17.1313 19.5182 17.2573 19.6533 17.4643 19.6533ZM23.0832 19.6533L25.8777 19.6533C26.0645 19.6533 26.2003 19.5182 26.2003 19.3412L26.2003 16.5655C26.2003 16.3502 26.0652 16.2339 25.8777 16.2339L23.0832 16.2339C22.8672 16.2339 22.7411 16.3502 22.7411 16.5655L22.7411 19.3412C22.7411 19.5182 22.8679 19.6533 23.0832 19.6533Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

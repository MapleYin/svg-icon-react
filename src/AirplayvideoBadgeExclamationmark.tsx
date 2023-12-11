import React from 'react'

export default function AirplayvideoBadgeExclamationmark({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.2415 28.2977' className={className}>
      <path
        d='M34.2724 5.05587L34.2724 18.1842C34.2724 19.6616 33.4561 20.4779 31.9695 20.4779L25.3655 20.4779L24.9136 19.9657L31.9214 19.9657C33.0986 19.9657 33.7608 19.3224 33.7608 18.1458L33.7608 5.08517C33.7608 3.90793 33.0986 3.26457 31.9214 3.26457L12.6673 3.26457C12.5645 3.0842 12.4475 2.91334 12.3171 2.75304L31.9695 2.75304C33.4561 2.75304 34.2724 3.56935 34.2724 5.05587ZM6.8546 13.7078L7.10958 13.6948L7.10958 18.1458C7.10958 19.3224 7.77179 19.9657 8.94835 19.9657L15.9572 19.9657L15.5053 20.4779L8.90089 20.4779C7.41436 20.4779 6.59805 19.6616 6.59805 18.1842L6.59805 13.6947Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M20.6828 16.5304L28.2902 25.1339C28.4127 25.2877 28.3627 25.5251 28.1358 25.5251L12.7256 25.5251C12.4993 25.5251 12.4584 25.2877 12.5809 25.1339L20.1883 16.5304C20.315 16.3834 20.547 16.3834 20.6828 16.5304Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.809 6.85391C12.809 10.1384 10.1098 12.8181 6.8546 12.8181C3.5876 12.8181 0.890435 10.1307 0.890435 6.85391C0.890435 3.59669 3.5876 0.898833 6.8546 0.898833C10.13 0.898833 12.809 3.57784 12.809 6.85391ZM6.01993 9.74298C6.01993 10.1913 6.37901 10.5679 6.83575 10.5679C7.26524 10.5679 7.65157 10.1913 7.66065 9.74298C7.6795 9.31417 7.28409 8.92716 6.83575 8.92716C6.39786 8.92716 6.01993 9.30509 6.01993 9.74298ZM6.31719 3.48253L6.37784 7.50928C6.37852 7.80137 6.57159 8.021 6.8546 8.021C7.12784 8.021 7.32091 7.80137 7.32159 7.50928L7.38292 3.48253C7.3836 3.15841 7.16964 2.93536 6.8546 2.93536C6.52979 2.93536 6.31651 3.15841 6.31719 3.48253Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
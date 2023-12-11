import React from 'react'

export default function EvCharger({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.8209 26.6234' className={className}>
      <path
        d='M17.4741 26.2195L17.4741 3.12002C17.4741 1.13281 16.3874 0 14.3632 0L4.43897 0C2.40498 0 1.33848 1.0958 1.33848 3.12002L1.33848 26.2195L1.82208 26.2195L1.83117 3.14932C1.83117 1.42872 2.71905 0.512217 4.46827 0.512217L14.3248 0.512217C16.0175 0.512217 16.9801 1.44688 16.9801 3.14932L16.9989 26.2195ZM0 26.3342C0 26.4676 0.080471 26.6046 0.241118 26.6046L18.5429 26.6046C18.7035 26.6046 18.7938 26.4676 18.7938 26.3342C18.7938 26.2112 18.6847 26.0931 18.5429 26.0931L0.241118 26.0931C0.0993186 26.0931 0 26.2105 0 26.3342ZM4.38732 12.6338L14.4148 12.6338C15.0424 12.6338 15.444 12.2084 15.444 11.594L15.444 3.07316C15.444 2.43995 15.0235 2.01388 14.4148 2.01388L4.38732 2.01388C3.77863 2.01388 3.36867 2.43995 3.36867 3.07316L3.36867 11.594C3.36867 12.2084 3.75978 12.6338 4.38732 12.6338ZM21.1614 9.04667L21.8232 9.04667L21.8329 6.41787C21.8329 6.22978 21.6944 6.07304 21.4972 6.07304C21.3084 6.07304 21.1614 6.22978 21.1614 6.41787ZM24.195 9.04667L24.195 6.41787C24.195 6.22978 24.0481 6.07304 23.8586 6.07304C23.6712 6.07304 23.5236 6.22978 23.5236 6.41787L23.5424 9.04667ZM17.1745 15.5791L17.5829 15.5791C18.4811 15.5791 19.0819 16.1779 19.0819 17.0886L19.0819 21.7194C19.0819 22.8619 19.8621 23.6421 21.0235 23.6421C22.175 23.6421 22.9538 22.8619 22.9538 21.7194L22.9538 14.8649C22.9538 13.6974 23.6427 13.3095 24.3948 12.6661C24.9434 12.2039 25.4596 11.8 25.4596 10.8159L25.4596 9.04082C25.4596 8.729 25.302 8.52529 25.0656 8.52529L20.3177 8.52529C20.0715 8.52529 19.9146 8.729 19.9146 9.04082L19.9146 10.8159C19.9146 11.8 20.4301 12.2039 20.9793 12.6661C21.7315 13.3095 22.4196 13.6974 22.4196 14.8649L22.4196 21.7194C22.4196 22.5504 21.8628 23.1079 21.0235 23.1079C20.1737 23.1079 19.6161 22.5504 19.6161 21.7194L19.6161 17.0886C19.6161 15.8657 18.7933 15.0449 17.5829 15.0449L17.1745 15.0449Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

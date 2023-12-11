import React from 'react'

export default function Esim({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.0906 22.0158' className={className}>
      <path
        d='M0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158L18.5481 22.0158C20.6233 22.0158 21.7293 20.8734 21.7293 18.8282L21.7293 3.24414C21.7293 1.19893 20.6233 0.0565428 18.5481 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414ZM0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L4.96416 0.568076L4.96416 2.90352C4.96416 3.0755 5.07481 3.18614 5.24678 3.18614C5.41876 3.18614 5.5294 3.0755 5.5294 2.90352L5.5294 0.568076L8.70987 0.568076L8.70987 2.90352C8.70987 3.0755 8.82051 3.18614 8.9834 3.18614C9.15538 3.18614 9.26602 3.0755 9.26602 2.90352L9.26602 0.568076L12.4647 0.568076L12.4647 2.90352C12.4647 3.0755 12.5753 3.18614 12.7382 3.18614C12.9102 3.18614 13.0215 3.0755 13.0215 2.90352L13.0215 0.568076L16.2013 0.568076L16.2013 2.90352C16.2013 3.0755 16.3119 3.18614 16.4839 3.18614C16.6559 3.18614 16.7581 3.0755 16.7581 2.90352L16.7581 0.568076L18.5188 0.568076C20.229 0.568076 21.2178 1.49054 21.2178 3.26846L21.2178 18.8039C21.2178 20.5818 20.229 21.5043 18.5188 21.5043L16.7581 21.5043L16.7581 19.1598C16.7581 18.9969 16.6559 18.8855 16.4839 18.8855C16.3119 18.8855 16.2013 18.9969 16.2013 19.1598L16.2013 21.5043L13.0215 21.5043L13.0215 19.1598C13.0215 18.9969 12.9102 18.8855 12.7382 18.8855C12.5753 18.8855 12.4647 18.9969 12.4647 19.1598L12.4647 21.5043L9.26602 21.5043L9.26602 19.1598C9.26602 18.9969 9.15538 18.8855 8.9834 18.8855C8.82051 18.8855 8.70987 18.9969 8.70987 19.1598L8.70987 21.5043L5.5294 21.5043L5.5294 19.1598C5.5294 18.9969 5.41876 18.8855 5.24678 18.8855C5.07481 18.8855 4.96416 18.9969 4.96416 19.1598L4.96416 21.5043L3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039ZM3.86593 15.3865C3.86593 16.0415 4.31583 16.4803 4.98966 16.4803L16.7585 16.4803C17.4323 16.4803 17.8815 16.0415 17.8815 15.3865L17.8815 6.68585C17.8815 6.02179 17.4323 5.5921 16.7585 5.5921L4.98966 5.5921C4.31583 5.5921 3.86593 6.02179 3.86593 6.68585Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

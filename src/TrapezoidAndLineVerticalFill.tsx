import React from 'react'

export default function TrapezoidAndLineVerticalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.9697 26.6756' className={className}>
      <path
        d='M2.15908 23.1574L21.4493 23.1574C23.0685 23.1574 23.8947 22.1002 23.5189 20.5004L20.0654 5.83497C19.7259 4.40343 18.8306 3.64893 17.318 3.64893L6.29043 3.64893C4.77783 3.64893 3.88251 4.40343 3.54296 5.83497L0.089543 20.5004C-0.285653 22.1002 0.539935 23.1574 2.15908 23.1574ZM11.8237 26.6756C11.6513 26.6756 11.5386 26.5713 11.5386 26.4066L11.5386 0.40889C11.5386 0.235059 11.6513 0.130076 11.8237 0.130076C11.9578 0.130076 12.0614 0.235059 12.0614 0.40889L12.0614 26.4066C12.0614 26.5713 11.9578 26.6756 11.8237 26.6756Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

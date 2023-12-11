import React from 'react'

export default function Square_3Layers_3dDownForward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.6958 27.0629' className={className}>
      <path
        d='M12.5856 0.887609L12.5856 5.65533L12.0811 5.9473L12.0811 1.0006C12.0811 0.606852 11.7536 0.465154 11.4709 0.634782L0.857921 6.78927C0.577647 6.95939 0.503818 7.08068 0.503818 7.3964L0.503818 19.8039C0.503818 20.0964 0.692294 20.2465 1.0211 20.0587L5.17666 17.6549L5.17666 18.2403L1.43497 20.402C0.744339 20.8009 0 20.5957 0 19.6191L0 7.41046C0 6.81144 0.134963 6.6126 0.69649 6.28936L11.1531 0.23858C11.9792-0.234762 12.5856 0.251469 12.5856 0.887609Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.7615 4.1379L17.7615 9.09837L17.2577 9.38994L17.2577 4.24181C17.2577 3.84806 16.9303 3.71544 16.6469 3.88576L6.03458 10.0305C5.75362 10.2006 5.68048 10.331 5.68048 10.6467L5.68048 23.0549C5.68048 23.3376 5.86895 23.4968 6.19776 23.309L10.7405 20.681L10.7405 21.2575L6.61095 23.6432C5.921 24.0421 5.17666 23.8467 5.17666 22.8694L5.17666 10.6517C5.17666 10.0526 5.31094 9.86289 5.87247 9.54033L16.3291 3.48887C17.1559 3.00645 17.7615 3.49268 17.7615 4.1379Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.7405 13.88L10.7405 26.0887C10.7405 27.0652 11.4849 27.2697 12.1748 26.8708L22.6366 20.8276C23.2232 20.4827 23.3345 20.3132 23.3345 19.7303L23.3345 7.35645C23.3345 6.721 22.7288 6.23408 21.893 6.70742L11.4363 12.7589C10.8748 13.0814 10.7405 13.281 10.7405 13.88ZM11.6075 13.2588L22.2107 7.10431C22.4941 6.93468 22.8216 7.07638 22.8216 7.46945L22.8216 19.7373C22.8216 20.0971 22.7323 20.1925 22.45 20.3451L11.7616 26.5282C11.4419 26.716 11.2534 26.5659 11.2534 26.2734L11.2534 13.8659C11.2534 13.5495 11.3266 13.4289 11.6075 13.2588Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
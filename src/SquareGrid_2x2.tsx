import React from 'react'

export default function SquareGrid_2x2({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M13.7142 22.0158L20.395 22.0158C21.3981 22.0158 21.96 21.5565 21.96 20.4488L21.96 13.7637C21.96 12.656 21.3981 12.2051 20.395 12.2051L13.7142 12.2051C12.7014 12.2051 12.1492 12.656 12.1492 13.7637L12.1492 20.4488C12.1492 21.5565 12.7014 22.0158 13.7142 22.0158ZM13.7435 21.4816C12.9807 21.4816 12.6834 21.1837 12.6834 20.4118L12.6834 13.8007C12.6834 13.0288 12.9807 12.7393 13.7435 12.7393L20.3573 12.7393C21.1278 12.7393 21.4258 13.0288 21.4258 13.8007L21.4258 20.4118C21.4258 21.1837 21.1278 21.4816 20.3573 21.4816Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.56495 22.0158L8.2458 22.0158C9.24883 22.0158 9.81075 21.5565 9.81075 20.4488L9.81075 13.7637C9.81075 12.656 9.24883 12.2051 8.2458 12.2051L1.56495 12.2051C0.561916 12.2051 0 12.656 0 13.7637L0 20.4488C0 21.5565 0.561916 22.0158 1.56495 22.0158ZM1.60264 21.4816C0.832136 21.4816 0.534188 21.1837 0.534188 20.4118L0.534188 13.8007C0.534188 13.0288 0.832136 12.7393 1.60264 12.7393L8.20742 12.7393C8.97793 12.7393 9.27656 13.0288 9.27656 13.8007L9.27656 20.4118C9.27656 21.1837 8.97793 21.4816 8.20742 21.4816Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.7142 9.86661L20.395 9.86661C21.3981 9.86661 21.96 9.41641 21.96 8.29961L21.96 1.61446C21.96 0.50674 21.3981 0.0565428 20.395 0.0565428L13.7142 0.0565428C12.7014 0.0565428 12.1492 0.50674 12.1492 1.61446L12.1492 8.29961C12.1492 9.41641 12.7014 9.86661 13.7142 9.86661ZM13.7435 9.3331C12.9807 9.3331 12.6834 9.03447 12.6834 8.271L12.6834 1.65147C12.6834 0.879597 12.9807 0.59073 13.7435 0.59073L20.3573 0.59073C21.1278 0.59073 21.4258 0.879597 21.4258 1.65147L21.4258 8.271C21.4258 9.03447 21.1278 9.3331 20.3573 9.3331Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.56495 9.86661L8.2458 9.86661C9.24883 9.86661 9.81075 9.41641 9.81075 8.29961L9.81075 1.61446C9.81075 0.50674 9.24883 0.0565428 8.2458 0.0565428L1.56495 0.0565428C0.561916 0.0565428 0 0.50674 0 1.61446L0 8.29961C0 9.41641 0.561916 9.86661 1.56495 9.86661ZM1.60264 9.3331C0.832136 9.3331 0.534188 9.03447 0.534188 8.271L0.534188 1.65147C0.534188 0.879597 0.832136 0.59073 1.60264 0.59073L8.20742 0.59073C8.97793 0.59073 9.27656 0.879597 9.27656 1.65147L9.27656 8.271C9.27656 9.03447 8.97793 9.3331 8.20742 9.3331Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

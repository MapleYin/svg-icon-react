import React from 'react'

export function TramCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.05508 17.5226L15.275 17.5226C16.9121 17.5226 17.4729 16.4947 17.4729 15.366L17.4729 11.4324C17.4729 9.25821 17.1016 7.23272 16.8295 6.28204C16.6035 5.46758 15.9647 4.94473 15.1481 4.84639C14.4167 4.75147 13.3641 4.68243 12.1602 4.68243C10.9569 4.68243 9.91338 4.75147 9.17217 4.84639C8.36543 4.94473 7.72657 5.46758 7.50059 6.28204C7.22852 7.23272 6.85655 9.25821 6.85655 11.4324L6.85655 15.366C6.85655 16.4947 7.41729 17.5226 9.05508 17.5226ZM12.1602 13.6912C10.9097 13.6996 9.92373 13.6501 9.08506 13.5811C8.64971 13.5511 8.35586 13.2608 8.35586 12.7989L8.35586 11.172C8.35586 10.144 8.47373 9.18428 8.63633 8.32998C8.70401 7.92803 8.95313 7.68663 9.29014 7.64825C10.0575 7.56944 10.9993 7.52061 12.1602 7.52061C13.3112 7.51993 14.2537 7.56944 14.9275 7.63848C15.3211 7.68663 15.6065 7.92803 15.6749 8.32998C15.8368 9.18428 15.9463 10.144 15.9463 11.172L15.9463 12.7989C15.9463 13.2608 15.6615 13.5511 15.2262 13.5811C14.4151 13.6424 13.4376 13.6912 12.1602 13.6912ZM9.18917 16.0764C8.78399 16.0764 8.47852 15.7716 8.47852 15.3657C8.47852 14.9703 8.78399 14.6642 9.18917 14.6642C9.58526 14.6642 9.90889 14.9703 9.90889 15.3657C9.90889 15.7716 9.58458 16.0764 9.18917 16.0764ZM15.1493 16.0771C14.7532 16.0771 14.438 15.7709 14.438 15.3657C14.438 14.9703 14.7532 14.6635 15.1493 14.6635C15.5636 14.6635 15.8606 14.9703 15.8606 15.3657C15.8606 15.7709 15.544 16.0771 15.1493 16.0771ZM10.4412 6.59649C10.2899 6.59649 10.2168 6.51358 10.2168 6.37207C10.2168 6.23057 10.2899 6.13926 10.4412 6.13926L13.8798 6.13926C14.0395 6.13926 14.1126 6.23057 14.1126 6.37207C14.1126 6.51358 14.0395 6.59649 13.8798 6.59649ZM7.89532 19.5907L8.12676 19.5907C8.2376 19.5907 8.28008 19.5601 8.32188 19.4876L9.71026 17.2646L9.08243 17.2646L7.77832 19.3393C7.70518 19.4737 7.74971 19.5907 7.89532 19.5907ZM8.58887 18.9023L15.7231 18.9023L15.7231 18.3713L8.58887 18.3713ZM16.1956 19.5907L16.4082 19.5907C16.5629 19.5907 16.6158 19.4737 16.5238 19.3393L15.249 17.2646L14.6205 17.2646L15.9816 19.4876C16.0325 19.5601 16.0841 19.5907 16.1956 19.5907Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export default function PersonCropCircleDashed({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M0.500206 12.1706C0.500206 10.7424 0.75001 9.38956 1.2294 8.1253L0.766015 7.92168C0.27207 9.24776 0 10.6799 0 12.1706C0 13.6516 0.27207 15.0844 0.757617 16.4105L1.2294 16.225C0.759776 14.9607 0.500206 13.5897 0.500206 12.1706ZM7.27735 1.57013L7.0835 1.12832C4.45498 2.34131 2.32178 4.47451 1.10879 7.11211L1.57013 7.29756C2.72403 4.78858 4.76905 2.74356 7.27735 1.57013ZM12.1602 0.500206C13.5884 0.500206 14.9412 0.768174 16.2159 1.2294L16.4091 0.767382C15.083 0.281152 13.6509 0 12.1602 0C10.6792 0 9.24571 0.281152 7.91963 0.767382L8.12325 1.2294C9.38887 0.749326 10.741 0.500206 12.1602 0.500206ZM22.7606 7.29688L23.222 7.11211C22.0083 4.45567 19.8563 2.32246 17.2277 1.10879L17.0339 1.57013C19.561 2.74288 21.5879 4.76905 22.7606 7.29688ZM23.8312 12.1706C23.8312 13.5897 23.5633 14.9607 23.1027 16.2257L23.5641 16.4111C24.0503 15.0851 24.3315 13.6516 24.3315 12.1706C24.3315 10.6799 24.0503 9.26524 23.5641 7.93917L23.1209 8.1337C23.5821 9.38956 23.8312 10.7424 23.8312 12.1706ZM12.1608 24.3315C16.9919 24.3315 21.3131 21.3298 23.2038 17.2473L22.7606 17.0534C22.2206 18.1971 21.5089 19.2444 20.6171 20.1864C19.7722 18.4618 16.5582 16.2363 12.1608 16.2363C7.77257 16.2363 4.5586 18.4807 3.68643 20.1676C2.81349 19.2347 2.092 18.1782 1.57081 17.0534L1.11787 17.2473C3.0086 21.3298 7.32979 24.3315 12.1608 24.3315ZM12.1608 14.0425C14.5736 14.0348 16.4039 11.9826 16.4039 9.31456C16.4039 6.81182 14.5269 4.68428 12.1608 4.68428C9.80391 4.68428 7.90801 6.81182 7.92686 9.31456C7.91846 11.9826 9.74805 14.0411 12.1608 14.0425Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
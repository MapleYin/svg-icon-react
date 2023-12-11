import React from 'react'

export default function FaceDashedFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M0.500206 12.1706C0.500206 10.7424 0.75001 9.38956 1.2294 8.1253L0.766015 7.92168C0.27207 9.24776 0 10.6799 0 12.1706C0 13.6516 0.27207 15.0844 0.757617 16.4105L1.2294 16.225C0.759776 14.9607 0.500206 13.5897 0.500206 12.1706ZM7.27735 1.57013L7.0835 1.12832C4.45498 2.34131 2.32178 4.47451 1.10879 7.11211L1.57013 7.29756C2.72403 4.78858 4.76905 2.74356 7.27735 1.57013ZM12.1602 0.500206C13.5884 0.500206 14.9412 0.768174 16.2159 1.2294L16.4091 0.767382C15.083 0.281152 13.6509 0 12.1602 0C10.6792 0 9.24571 0.281152 7.91963 0.767382L8.12325 1.2294C9.38887 0.749326 10.741 0.500206 12.1602 0.500206ZM22.7606 7.29688L23.222 7.11211C22.0083 4.45567 19.8563 2.32246 17.2277 1.10879L17.0339 1.57013C19.561 2.74288 21.5879 4.76905 22.7606 7.29688ZM23.8312 12.1706C23.8312 13.5897 23.5633 14.9607 23.1027 16.2257L23.5641 16.4111C24.0503 15.0851 24.3315 13.6516 24.3315 12.1706C24.3315 10.6799 24.0503 9.26524 23.5641 7.93917L23.1209 8.1337C23.5821 9.38956 23.8312 10.7424 23.8312 12.1706ZM17.0339 22.7613L17.2277 23.2227C19.8569 22.009 21.9999 19.8758 23.2031 17.2473L22.7613 17.0534C21.5886 19.5624 19.5617 21.5893 17.0339 22.7613ZM12.1608 23.8319C10.741 23.8319 9.38887 23.5821 8.12325 23.1021L7.92032 23.5648C9.24639 24.0594 10.6799 24.3315 12.1608 24.3315C13.6516 24.3315 15.0655 24.0691 16.3916 23.5654L16.188 23.1216C14.9314 23.5821 13.5709 23.8319 12.1608 23.8319ZM1.57081 17.0534L1.11787 17.2473C2.34063 19.8758 4.47383 22.009 7.10234 23.2311L7.29551 22.7606C4.76905 21.5886 2.7422 19.5617 1.57081 17.0534Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1595 22.9396C18.1018 22.9396 22.9292 18.1122 22.9285 12.1706C22.9278 6.21925 18.1095 1.39181 12.1588 1.39181C6.20743 1.39181 1.38136 6.21857 1.38136 12.1706C1.38136 18.1129 6.20812 22.9396 12.1595 22.9396ZM12.1602 18.2787C9.78487 18.2787 8.10499 16.5716 8.10499 15.8678C8.10499 15.7333 8.23038 15.7187 8.30626 15.7982C9.02325 16.5129 10.3756 17.1401 12.1602 17.1401C13.9538 17.1401 15.325 16.5317 16.0231 15.7982C16.0906 15.7187 16.2244 15.7333 16.2244 15.8678C16.2244 16.5716 14.5361 18.2787 12.1602 18.2787ZM8.29356 10.9429C7.67491 10.9429 7.10714 10.2815 7.10714 9.47803C7.10714 8.68155 7.65606 8.0209 8.29356 8.0209C8.93106 8.0209 9.49044 8.68155 9.49044 9.47803C9.49044 10.2815 8.9129 10.9429 8.29356 10.9429ZM16.0365 10.9429C15.4088 10.9429 14.8312 10.2815 14.8312 9.47803C14.8312 8.68155 15.3899 8.0209 16.0365 8.0209C16.674 8.0209 17.2146 8.68155 17.2146 9.47803C17.2146 10.2815 16.6552 10.9429 16.0365 10.9429Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

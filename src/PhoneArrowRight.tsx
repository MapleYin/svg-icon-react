import React from 'react'

export default function PhoneArrowRight({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.384 26.8983' className={className}>
      <path
        d='M0.00024214 13.4624C-0.0186054 18.2183 1.06226 22.7214 3.44536 25.1045C4.70493 26.3641 6.19995 26.8983 7.86089 26.8983C9.72945 26.8983 11.0344 25.8712 10.7249 24.3058L9.9066 20.0216C9.71764 19.0329 9.15162 18.1835 7.51012 18.1646L6.91314 18.1646C5.88101 18.1465 5.39459 17.5463 5.17047 16.5068C5.02105 15.7209 5.00221 14.6946 5.00221 13.4624C5.00221 12.2218 5.02105 11.2039 5.17047 10.4089C5.39459 9.37013 5.88101 8.76993 6.91314 8.75109L7.51012 8.75109C9.15162 8.73292 9.71764 7.88351 9.9066 6.89483L10.7249 2.61065C11.0344 1.0459 9.72242 0.0174803 7.86089 0.0174803C6.19995 0.0174803 4.70493 0.551661 3.44536 1.81192C1.06226 4.19502-0.0186054 8.69815 0.00024214 13.4624ZM0.534919 13.4624C0.534919 8.91827 1.60416 4.52354 3.86412 2.25792C4.99302 1.1297 6.28726 0.612802 7.88218 0.612802C9.28843 0.612802 10.3665 1.14649 10.1007 2.52003L9.27202 6.80323C9.14712 7.52969 8.69771 8.13692 7.57047 8.13692L7.03726 8.13692C5.49341 8.13692 4.88589 8.88594 4.62359 10.2526C4.46734 11.1016 4.43599 12.179 4.41714 13.4624C4.43599 14.7367 4.46734 15.8142 4.62359 16.6638C4.88589 18.0305 5.49341 18.7788 7.03726 18.7788L7.57047 18.7788C8.69771 18.7788 9.14712 19.386 9.27202 20.1132L10.1007 24.3964C10.3658 25.7686 9.28072 26.3036 7.88218 26.3036C6.28726 26.3036 4.99302 25.786 3.86412 24.6585C1.60416 22.3929 0.534919 17.9981 0.534919 13.4624Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.1893 13.7071L19.0381 13.7071L20.8102 13.7185L18.0472 16.4469L15.6512 18.8338C15.5949 18.8901 15.5712 18.9583 15.5712 19.0201C15.5712 19.178 15.6937 19.29 15.8412 19.29C15.9023 19.29 15.9705 19.2664 16.0177 19.2101L21.6258 13.6026C21.6752 13.5533 21.7002 13.5117 21.7002 13.4442C21.7002 13.3949 21.6752 13.3261 21.6258 13.2768L16.0177 7.66866C15.9705 7.62207 15.9023 7.58868 15.8412 7.58868C15.6937 7.58868 15.5712 7.70137 15.5712 7.85928C15.5712 7.9295 15.5949 7.98927 15.6512 8.04493L18.0472 10.4416L20.8102 13.1603L19.0381 13.1716L10.1893 13.1716C10.0461 13.1716 9.92505 13.2884 9.92505 13.4442C9.92505 13.5903 10.0461 13.7071 10.1893 13.7071Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

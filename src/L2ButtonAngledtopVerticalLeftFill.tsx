import React from 'react'

export default function L2ButtonAngledtopVerticalLeftFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.2174 26.4711' className={className}>
      <path
        d='M20.8561 3.05293L20.8554 23.4279C20.8554 25.3771 19.797 26.4711 17.8192 26.4711L6.75411 26.4711C2.60772 26.4711 0 23.8627 0 19.717L0 12.594C0 11.0687 0.426759 9.89356 1.32569 9.05459L9.28467 1.74014C10.69 0.442871 12.1379 0.0181639 13.9541 0.0181639L17.8122 0.0181639C19.7649 0.0181639 20.8561 1.07227 20.8561 3.05293ZM5.95009 10.8856L5.95009 20.5185C5.95009 20.7286 6.08935 20.8699 6.26113 20.8699L10.1487 20.8699C10.3025 20.8699 10.4425 20.7202 10.4425 20.5573C10.4425 20.4042 10.3025 20.2636 10.1487 20.2636L6.59239 20.2636L6.59239 10.8856C6.59239 10.7264 6.43858 10.5732 6.28066 10.5732C6.09414 10.5732 5.95009 10.7264 5.95009 10.8856ZM11.5984 13.2093C11.5984 13.3281 11.67 13.5044 11.8922 13.5044C12.0453 13.5044 12.1616 13.4013 12.1601 13.2663C12.3127 12.0103 12.8466 11.1128 13.9387 11.1128C15.1704 11.1128 15.6741 12.3132 15.6741 13.3324C15.6741 14.2572 15.3936 15.0354 14.5626 16.2188L11.6719 20.2597C11.5933 20.3969 11.5789 20.4894 11.5789 20.5859C11.5789 20.7768 11.7245 20.8692 11.897 20.8692L16.1873 20.8692C16.3607 20.8692 16.4874 20.7411 16.4874 20.5678C16.4874 20.4021 16.36 20.2754 16.1873 20.2754L12.4484 20.2754L12.4484 20.2322L14.9959 16.579C15.9176 15.261 16.246 14.341 16.246 13.3088C16.246 11.7814 15.4778 10.5112 13.9205 10.5112C12.4999 10.5112 11.5984 11.8609 11.5984 13.2093Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

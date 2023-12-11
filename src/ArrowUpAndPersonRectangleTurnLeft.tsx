import React from 'react'

export default function ArrowUpAndPersonRectangleTurnLeft({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.161 26.5424' className={className}>
      <path
        d='M9.76063 23.3611C9.76063 25.4356 10.8751 26.5424 12.9482 26.5424L26.6135 26.5424C28.6859 26.5424 29.8011 25.4356 29.8011 23.3611L29.8011 3.23643C29.8011 1.16192 28.6859 0.0551754 26.6135 0.0551754L12.9482 0.0551754C10.8751 0.0551754 9.76063 1.16192 9.76063 3.23643ZM10.2722 23.3312L10.2722 3.26641C10.2722 1.48145 11.1946 0.557626 12.9732 0.557626L26.5885 0.557626C28.3671 0.557626 29.2895 1.48145 29.2895 3.26641L29.2895 23.3312C29.2895 25.1161 28.3671 26.0309 26.5885 26.0309L12.9732 26.0309C11.1946 26.0309 10.2722 25.1161 10.2722 23.3312Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M26.1735 19.4377C26.43 19.4377 26.5595 19.3688 26.5595 19.1194L26.5595 6.97022C26.5595 6.7208 26.43 6.65127 26.1735 6.65127C24.7596 6.65127 20.8906 8.69434 20.8906 13.0448C20.8906 17.3946 24.7596 19.4377 26.1735 19.4377ZM16.4034 16.2221C18.3976 16.2221 19.875 14.8138 19.8743 13.0448C19.8736 11.2759 18.3976 9.86758 16.4034 9.86758C14.5459 9.86758 13.0015 11.2759 13.0015 13.0448C13.0015 14.8138 14.5459 16.2221 16.4034 16.2221Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.126052 11.3309C-0.1302 11.6568 0.0215591 12.1257 0.424785 12.1257L3.02439 12.1257L3.02439 18.3151C3.02439 18.4856 3.14119 18.5926 3.30184 18.5926C3.47157 18.5926 3.56952 18.4856 3.56952 18.3151L3.56952 12.1257L6.17684 12.1257C6.57372 12.1257 6.73182 11.6548 6.47626 11.3309L3.75633 7.91514C3.53895 7.63076 3.10037 7.59375 2.83621 7.91514Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

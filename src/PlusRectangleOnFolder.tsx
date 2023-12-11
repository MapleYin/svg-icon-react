import React from 'react'

export default function PlusRectangleOnFolder({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38.5841 23.4024' className={className}>
      <path
        d='M14.2355 1.7502L14.8687 2.36612C15.5774 3.05059 16.0573 3.17325 17.2478 3.17325L21.2255 3.17325C21.2253 3.1749 21.2253 3.17671 21.2253 3.17852L21.2253 3.68478L17.1904 3.68478C15.8671 3.68478 15.3315 3.49581 14.5943 2.78429L13.9702 2.17745C13.1972 1.43712 12.7543 1.2963 11.6379 1.2963L8.17149 1.2963C6.64766 1.2963 5.91934 2.03234 5.91934 3.56798L5.91934 7.89981L21.2253 7.89981L21.2253 8.42267L5.91934 8.42267L5.91934 19.3312C5.91934 21.1098 6.83409 22.0322 8.61905 22.0322L29.5946 22.0322C31.3049 22.0322 32.2936 21.1098 32.2936 19.3318L32.2936 13.6161L32.8052 13.6161L32.8052 19.3562C32.8052 21.4007 31.6991 22.5438 29.5899 22.5438L8.58907 22.5438C6.51455 22.5438 5.40781 21.4377 5.40781 19.3562L5.40781 3.4878C5.40781 1.70372 6.29043 0.821781 8.12032 0.821781L11.6952 0.821781C13.0004 0.821781 13.4145 0.954887 14.2355 1.7502Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M24.4072 13.6161L35.4021 13.6161C37.4767 13.6161 38.5841 12.5108 38.5841 10.4376L38.5841 3.17852C38.5841 1.10537 37.4767 0 35.4021 0L24.4072 0C22.332 0 21.2253 1.10537 21.2253 3.17852L21.2253 10.4376C21.2253 12.5108 22.332 13.6161 24.4072 13.6161ZM24.4492 13.0933C22.6636 13.0933 21.7481 12.1708 21.7481 10.3999L21.7481 3.21553C21.7481 1.44532 22.6636 0.52286 24.4492 0.52286L35.3602 0.52286C37.1458 0.52286 38.0612 1.44532 38.0612 3.21553L38.0612 10.3999C38.0612 12.1708 37.1458 13.0933 35.3615 13.0933Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M29.9096 10.7033C30.203 10.7033 30.3682 10.5012 30.3682 10.2538L30.3682 7.2586L33.3445 7.2586C33.5919 7.2586 33.794 7.09415 33.794 6.80909C33.794 6.51563 33.5919 6.35118 33.3445 6.35118L30.3682 6.35118L30.3682 3.37413C30.3682 3.13653 30.203 2.9253 29.9096 2.9253C29.6245 2.9253 29.4601 3.13653 29.4601 3.37413L29.4601 6.35118L26.4648 6.35118C26.2272 6.35118 26.016 6.51563 26.016 6.80909C26.016 7.09415 26.2272 7.2586 26.4648 7.2586L29.4601 7.2586L29.4601 10.2538C29.4601 10.5012 29.6245 10.7033 29.9096 10.7033Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

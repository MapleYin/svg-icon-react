import React from 'react'

export default function LivephotoSlash({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.4564 27.0566' className={className}>
      <path
        d='M13.9843 26.577C13.9843 26.837 13.7744 27.0371 13.5144 27.0371C13.2452 27.0371 13.0451 26.837 13.0451 26.577C13.0451 26.3078 13.2452 26.107 13.5144 26.107C13.7744 26.107 13.9843 26.3078 13.9843 26.577ZM11.6971 26.3628C11.6971 26.6319 11.497 26.832 11.2362 26.832C10.9671 26.832 10.767 26.6319 10.767 26.3628C10.767 26.1021 10.9671 25.8929 11.2362 25.8929C11.497 25.8929 11.6971 26.1021 11.6971 26.3628ZM16.2624 26.3628C16.2624 26.6319 16.0616 26.832 15.7925 26.832C15.5324 26.832 15.3232 26.6319 15.3232 26.3628C15.3232 26.1021 15.5324 25.8929 15.7925 25.8929C16.0616 25.8929 16.2624 26.1021 16.2624 26.3628ZM9.49707 25.7671C9.49707 26.0362 9.29698 26.2363 9.03692 26.2363C8.76778 26.2363 8.56699 26.0362 8.56699 25.7671C8.56699 25.5064 8.76778 25.2972 9.03692 25.2972C9.29698 25.2972 9.49707 25.5064 9.49707 25.7671ZM18.4624 25.7671C18.4624 26.0362 18.2616 26.2363 17.9925 26.2363C17.7324 26.2363 17.5226 26.0362 17.5226 25.7671C17.5226 25.5064 17.7324 25.2972 17.9925 25.2972C18.2616 25.2972 18.4624 25.5064 18.4624 25.7671ZM20.5348 24.8073C20.5348 25.0674 20.3347 25.2766 20.0648 25.2766C19.7957 25.2766 19.5956 25.0674 19.5956 24.8073C19.5956 24.5382 19.7957 24.3374 20.0648 24.3374C20.3347 24.3374 20.5348 24.5382 20.5348 24.8073ZM7.42471 24.8073C7.42471 25.0674 7.22393 25.2766 6.96387 25.2766C6.69473 25.2766 6.49463 25.0674 6.49463 24.8073C6.49463 24.5382 6.69473 24.3374 6.96387 24.3374C7.22393 24.3374 7.42471 24.5382 7.42471 24.8073ZM22.2237 23.8741C22.1438 23.9388 22.0402 23.9764 21.9237 23.9764C21.663 23.9764 21.4629 23.7756 21.4629 23.5064C21.4629 23.3922 21.499 23.2903 21.5607 23.2112ZM5.56651 23.5064C5.56651 23.7756 5.36573 23.9764 5.09658 23.9764C4.83652 23.9764 4.63643 23.7756 4.63643 23.5064C4.63643 23.2373 4.83652 23.0372 5.09658 23.0372C5.36573 23.0372 5.56651 23.2373 5.56651 23.5064ZM3.94336 21.9028C3.94336 22.1629 3.74326 22.3721 3.47412 22.3721C3.21406 22.3721 3.01328 22.1629 3.01328 21.9028C3.01328 21.633 3.21406 21.4329 3.47412 21.4329C3.74326 21.4329 3.94336 21.633 3.94336 21.9028ZM24.0161 21.9028C24.0161 22.0286 23.9692 22.1425 23.8899 22.2263L23.2247 21.5608C23.3067 21.4805 23.4194 21.4329 23.5462 21.4329C23.8153 21.4329 24.0161 21.633 24.0161 21.9028ZM25.2982 20.0433C25.2982 20.304 25.0981 20.5041 24.8289 20.5041C24.5689 20.5041 24.3681 20.304 24.3681 20.0433C24.3681 19.7741 24.5689 19.574 24.8289 19.574C25.0981 19.574 25.2982 19.7741 25.2982 20.0433ZM2.66133 20.0433C2.66133 20.304 2.46055 20.5041 2.20049 20.5041C1.93135 20.5041 1.73057 20.304 1.73057 20.0433C1.73057 19.7741 1.93135 19.574 2.20049 19.574C2.46055 19.574 2.66133 19.7741 2.66133 20.0433ZM26.2656 17.9716C26.2656 18.2316 26.0565 18.4324 25.7964 18.4324C25.5266 18.4324 25.3265 18.2316 25.3265 17.9716C25.3265 17.7024 25.5266 17.5017 25.7964 17.5017C26.0565 17.5017 26.2656 17.7024 26.2656 17.9716ZM1.70293 17.9716C1.70293 18.2316 1.49307 18.4324 1.23301 18.4324C0.963868 18.4324 0.76377 18.2316 0.76377 17.9716C0.76377 17.7024 0.963868 17.5017 1.23301 17.5017C1.49307 17.5017 1.70293 17.7024 1.70293 17.9716ZM26.8523 15.7814C26.8523 16.0505 26.6522 16.2506 26.3921 16.2506C26.1223 16.2506 25.9222 16.0505 25.9222 15.7814C25.9222 15.5213 26.1223 15.3205 26.3921 15.3205C26.6522 15.3205 26.8523 15.5213 26.8523 15.7814ZM1.10723 15.7814C1.10723 16.0505 0.906447 16.2506 0.637306 16.2506C0.368165 16.2506 0.168067 16.0505 0.168067 15.7814C0.168067 15.5213 0.368165 15.3205 0.637306 15.3205C0.906447 15.3205 1.10723 15.5213 1.10723 15.7814ZM27.0294 13.5234C27.0294 13.7835 26.8293 13.9836 26.5692 13.9836C26.3001 13.9836 26.0993 13.7835 26.0993 13.5234C26.0993 13.2543 26.3001 13.0535 26.5692 13.0535C26.8293 13.0535 27.0294 13.2543 27.0294 13.5234ZM0.93008 13.5234C0.93008 13.7835 0.729299 13.9836 0.460157 13.9836C0.200098 13.9836 0 13.7835 0 13.5234C0 13.2543 0.200098 13.0535 0.460157 13.0535C0.729299 13.0535 0.93008 13.2543 0.93008 13.5234ZM26.8523 11.2558C26.8523 11.5165 26.6522 11.7257 26.3921 11.7257C26.1223 11.7257 25.9222 11.5165 25.9222 11.2558C25.9222 10.9866 26.1223 10.7865 26.3921 10.7865C26.6522 10.7865 26.8523 10.9866 26.8523 11.2558ZM1.10723 11.2558C1.10723 11.5165 0.906447 11.7257 0.637306 11.7257C0.368165 11.7257 0.168067 11.5165 0.168067 11.2558C0.168067 10.9866 0.368165 10.7865 0.637306 10.7865C0.906447 10.7865 1.10723 10.9866 1.10723 11.2558ZM26.2656 9.07461C26.2656 9.33467 26.0565 9.53545 25.7964 9.53545C25.5266 9.53545 25.3265 9.33467 25.3265 9.07461C25.3265 8.80547 25.5266 8.60537 25.7964 8.60537C26.0565 8.60537 26.2656 8.80547 26.2656 9.07461ZM1.70293 9.07461C1.70293 9.33467 1.49307 9.53545 1.23301 9.53545C0.963868 9.53545 0.76377 9.33467 0.76377 9.07461C0.76377 8.80547 0.963868 8.60537 1.23301 8.60537C1.49307 8.60537 1.70293 8.80547 1.70293 9.07461ZM25.2982 7.00293C25.2982 7.26299 25.0981 7.46309 24.8289 7.46309C24.5689 7.46309 24.3681 7.26299 24.3681 7.00293C24.3681 6.73379 24.5689 6.53301 24.8289 6.53301C25.0981 6.53301 25.2982 6.73379 25.2982 7.00293ZM2.66133 7.00293C2.66133 7.26299 2.46055 7.46309 2.20049 7.46309C1.93135 7.46309 1.73057 7.26299 1.73057 7.00293C1.73057 6.73379 1.93135 6.53301 2.20049 6.53301C2.46055 6.53301 2.66133 6.73379 2.66133 7.00293ZM24.0161 5.13496C24.0161 5.4041 23.8153 5.6042 23.5462 5.6042C23.2861 5.6042 23.0854 5.4041 23.0854 5.13496C23.0854 4.8749 23.2861 4.67412 23.5462 4.67412C23.8153 4.67412 24.0161 4.8749 24.0161 5.13496ZM3.81411 5.4656C3.73037 5.5523 3.6112 5.6042 3.47412 5.6042C3.21406 5.6042 3.01328 5.4041 3.01328 5.13496C3.01328 5.00249 3.06538 4.8854 3.15106 4.8026ZM22.393 3.53067C22.393 3.79981 22.1929 4.00059 21.9237 4.00059C21.663 4.00059 21.4629 3.79981 21.4629 3.53067C21.4629 3.27061 21.663 3.07051 21.9237 3.07051C22.1929 3.07051 22.393 3.27061 22.393 3.53067ZM5.56651 3.53067C5.56651 3.63726 5.53501 3.73313 5.47987 3.80973L4.8259 3.15554C4.9009 3.10159 4.99409 3.07051 5.09658 3.07051C5.36573 3.07051 5.56651 3.27061 5.56651 3.53067ZM20.5348 2.23047C20.5348 2.49961 20.3347 2.69971 20.0648 2.69971C19.7957 2.69971 19.5956 2.49961 19.5956 2.23047C19.5956 1.97041 19.7957 1.76963 20.0648 1.76963C20.3347 1.76963 20.5348 1.97041 20.5348 2.23047ZM7.42471 2.23047C7.42471 2.49961 7.22393 2.69971 6.96387 2.69971C6.69473 2.69971 6.49463 2.49961 6.49463 2.23047C6.49463 1.97041 6.69473 1.76963 6.96387 1.76963C7.22393 1.76963 7.42471 1.97041 7.42471 2.23047ZM18.4624 1.2707C18.4624 1.53985 18.2616 1.73994 17.9925 1.73994C17.7324 1.73994 17.5226 1.53985 17.5226 1.2707C17.5226 1.01065 17.7324 0.809863 17.9925 0.809863C18.2616 0.809863 18.4624 1.01065 18.4624 1.2707ZM9.49707 1.2707C9.49707 1.53985 9.29698 1.73994 9.03692 1.73994C8.76778 1.73994 8.56699 1.53985 8.56699 1.2707C8.56699 1.01065 8.76778 0.809863 9.03692 0.809863C9.29698 0.809863 9.49707 1.01065 9.49707 1.2707ZM16.2624 0.675001C16.2624 0.944142 16.0616 1.14424 15.7925 1.14424C15.5324 1.14424 15.3232 0.944142 15.3232 0.675001C15.3232 0.414942 15.5324 0.21416 15.7925 0.21416C16.0616 0.21416 16.2624 0.414942 16.2624 0.675001ZM11.6971 0.675001C11.6971 0.944142 11.497 1.14424 11.2362 1.14424C10.9671 1.14424 10.767 0.944142 10.767 0.675001C10.767 0.414942 10.9671 0.21416 11.2362 0.21416C11.497 0.21416 11.6971 0.414942 11.6971 0.675001ZM13.9843 0.469239C13.9843 0.729982 13.7744 0.939162 13.5144 0.939162C13.2452 0.939162 13.0451 0.729982 13.0451 0.469239C13.0451 0.200098 13.2452 0 13.5144 0C13.7744 0 13.9843 0.200098 13.9843 0.469239Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.42253 8.07388C5.25711 9.57513 4.56973 11.4652 4.56973 13.5234C4.56973 18.5039 8.52481 22.459 13.5144 22.459C15.5685 22.459 17.4577 21.7734 18.9594 20.6101L19.4163 21.0669C17.7923 22.3465 15.7399 23.1007 13.5144 23.1007C8.17295 23.1007 3.92803 18.8648 3.92803 13.5234C3.92803 11.2965 4.68283 9.24163 5.96398 7.61536ZM23.0916 13.5234C23.0916 15.7558 22.3398 17.7954 21.072 19.4073L20.6167 18.9519C21.7763 17.4544 22.4597 15.5716 22.4597 13.5234C22.4597 8.60088 18.4369 4.57813 13.5144 4.57813C11.4675 4.57813 9.58429 5.2591 8.08538 6.41616L7.62661 5.95722C9.23911 4.68928 11.2796 3.93711 13.5144 3.93711C18.8069 3.93711 23.0916 8.24063 23.0916 13.5234Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.6913 17.3421C15.0513 17.7096 14.3079 17.9177 13.5144 17.9177C11.0756 17.9177 9.1124 15.9545 9.1124 13.5157C9.1124 12.7223 9.32041 11.9789 9.68789 11.339ZM17.917 13.5157C17.917 14.3048 17.7112 15.0442 17.3477 15.6817L11.3497 9.68158C11.9869 9.31857 12.7258 9.11308 13.5144 9.11308C15.9343 9.11308 17.917 11.0958 17.917 13.5157Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.2634 25.6263C25.3677 25.739 25.5331 25.7306 25.6367 25.6263C25.7592 25.5122 25.741 25.3572 25.6367 25.2529L1.82188 1.42969C1.72667 1.34424 1.5626 1.30654 1.43945 1.42969C1.33516 1.53399 1.33516 1.69942 1.43945 1.81212Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

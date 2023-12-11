import React from 'react'

export default function QuestionmarkSquareDashed({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M0 6.57705L0.511533 6.57705L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L6.52754 0.568076L6.52754 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414ZM7.41729 0.568076L14.542 0.568076L14.542 0.0565428L7.41729 0.0565428ZM21.4484 6.57705L21.96 6.57705L21.96 3.24414C21.96 1.19893 20.8525 0.0565428 18.778 0.0565428L15.4324 0.0565428L15.4324 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846ZM21.4484 14.6049L21.96 14.6049L21.96 7.46749L21.4484 7.46749ZM15.4324 22.0158L18.778 22.0158C20.8525 22.0158 21.96 20.8734 21.96 18.8282L21.96 15.4953L21.4484 15.4953L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043L15.4324 21.5043ZM7.41729 22.0158L14.542 22.0158L14.542 21.5043L7.41729 21.5043ZM3.18125 22.0158L6.52754 22.0158L6.52754 21.5043L3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 15.4953L0 15.4953L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM0 14.6049L0.511533 14.6049L0.511533 7.46749L0 7.46749Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.7771 13.4813C10.9243 13.4813 11.0286 13.3574 11.0286 13.1813C11.0286 13.004 11.0286 12.8532 11.0286 12.685C11.0286 11.8526 11.3654 11.3671 12.4099 10.6429C13.75 9.72198 14.1777 8.98047 14.1777 7.89073C14.1777 6.47275 12.8922 5.34062 11.0022 5.34062C9.11075 5.34062 7.91543 6.53154 7.78525 7.88642C7.77207 8.01816 7.7791 8.12197 7.7791 8.2998C7.7791 8.48838 7.87774 8.60742 8.04903 8.60742C8.221 8.60742 8.34708 8.50361 8.33214 8.32031L8.3088 8.18379C8.26915 7.06445 9.38438 5.87071 10.9792 5.87071C12.61 5.87071 13.6287 6.73663 13.6287 7.93321C13.6287 8.80166 13.2299 9.39619 11.9608 10.278C10.8599 11.0413 10.508 11.6872 10.508 12.6418C10.508 12.8289 10.508 12.9979 10.508 13.194C10.508 13.3518 10.6298 13.4813 10.7771 13.4813ZM10.7666 16.7165C11.1855 16.7165 11.5164 16.352 11.5164 15.9604C11.5164 15.559 11.1861 15.2042 10.7666 15.2042C10.3373 15.2042 10.0077 15.5506 10.0077 15.9604C10.0077 16.3513 10.338 16.7165 10.7666 16.7165Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

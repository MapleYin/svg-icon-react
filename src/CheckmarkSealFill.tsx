import React from 'react'

export default function CheckmarkSealFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.4928 27.1714' className={className}>
      <path
        d='M15.0379 0.824566L17.4052 3.17232C17.6466 3.42212 17.8782 3.50025 18.2055 3.50025L21.5384 3.50025C23.0672 3.50025 23.6421 4.07584 23.6421 5.60328L23.6421 8.93619C23.6421 9.26412 23.7377 9.49576 23.9693 9.73648L26.3171 12.1128C27.4025 13.1704 27.4032 13.9815 26.3171 15.0488L23.9693 17.4154C23.7377 17.6659 23.6421 17.8884 23.6421 18.2164L23.6421 21.5577C23.6421 23.0774 23.0756 23.6523 21.5384 23.6523L18.2055 23.6523C17.8782 23.6523 17.6466 23.7297 17.4052 23.9802L15.0379 26.3364C13.9713 27.4128 13.1601 27.4134 12.0935 26.3364L9.72626 23.9802C9.48554 23.7297 9.2539 23.6523 8.92597 23.6523L5.59306 23.6523C4.06493 23.6523 3.49003 23.0858 3.49003 21.5577L3.49003 18.2164C3.49003 17.8884 3.39374 17.6659 3.1621 17.4154L0.814346 15.0488C-0.271107 13.9815-0.27179 13.1704 0.814346 12.1128L3.1621 9.73648C3.39374 9.49576 3.49003 9.26412 3.49003 8.93619L3.49003 5.60328C3.49003 4.07447 4.06493 3.50025 5.59306 3.50025L8.92597 3.50025C9.2539 3.50025 9.49462 3.40396 9.72626 3.17232L12.0838 0.824566C13.1601-0.27905 13.9531-0.270652 15.0379 0.824566ZM18.933 8.45162L12.2259 18.8158L8.37803 14.429C8.32392 14.3589 8.24326 14.3151 8.13964 14.3151C8.01464 14.3151 7.87968 14.4158 7.87968 14.568C7.87968 14.6487 7.92284 14.7294 7.97919 14.808L11.9904 19.4127C12.0647 19.4931 12.1216 19.5306 12.2384 19.5306C12.3363 19.5306 12.412 19.4729 12.4913 19.4127L19.3954 8.74206C19.4134 8.69069 19.432 8.61842 19.432 8.57477C19.432 8.45816 19.3104 8.31753 19.1868 8.31753C19.0936 8.31753 19.0018 8.38365 18.933 8.45162Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

import React from 'react'

export function BagFillBadgeQuestionmark({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.0426 30.3574' className={className}>
      <path
        d='M21.5074 7.09151L24.6454 7.09151C26.7199 7.09151 27.8267 8.23458 27.8267 10.2791L27.8267 23.796C27.8267 25.8412 26.7206 26.9843 24.6114 26.9843L12.7413 26.9843C13.357 25.9676 13.7085 24.7782 13.7085 23.5119C13.7085 19.7404 10.617 16.658 6.8546 16.658C6.8513 16.658 6.84801 16.658 6.84483 16.6585L6.84483 10.2791C6.84483 8.19757 7.95157 7.09151 10.0261 7.09151L13.1641 7.09151C13.3875 4.95615 15.1561 3.34522 17.3358 3.34522C19.5154 3.34522 21.284 4.95615 21.5074 7.09151ZM13.6812 7.09151L20.9903 7.09151C20.7703 5.25056 19.2316 3.85968 17.3358 3.85968C15.4399 3.85968 13.9012 5.25056 13.6812 7.09151Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.809 23.5119C12.809 26.7873 10.1189 29.467 6.8546 29.467C3.5876 29.467 0.890435 26.7796 0.890435 23.5119C0.890435 20.2456 3.5876 17.5484 6.8546 17.5484C10.1307 17.5484 12.809 20.2275 12.809 23.5119ZM6.00245 26.4539C6.00245 26.8793 6.33018 27.2259 6.75626 27.2259C7.16417 27.2259 7.51007 26.8793 7.52892 26.4539C7.54708 26.0558 7.18233 25.6994 6.75626 25.6994C6.34903 25.6994 6.00245 26.0376 6.00245 26.4539ZM4.61505 21.0859C4.61505 21.3474 4.76768 21.5 4.99278 21.5C5.28009 21.5 5.39161 21.2936 5.54288 21.0858C5.77999 20.7837 6.32501 20.4194 7.01153 20.4194C7.8502 20.4194 8.40909 20.8262 8.40909 21.4639C8.40909 22.1965 7.86202 22.5244 7.18819 22.9932C6.52052 23.4669 6.29337 23.8212 6.29337 24.372C6.29337 24.4097 6.29337 24.4285 6.29337 24.4578C6.29337 24.7395 6.48301 24.9103 6.75626 24.9103C7.03087 24.9103 7.19962 24.7318 7.21983 24.4892C7.26866 23.9541 7.44923 23.6918 8.1421 23.1727C8.86476 22.6356 9.28585 22.2897 9.28585 21.4325C9.28585 20.4786 8.42667 19.5536 6.99337 19.5536C5.65548 19.5536 4.61505 20.423 4.61505 21.0859Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

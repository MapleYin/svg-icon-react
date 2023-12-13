import React from 'react'

export function WindshieldRearAndSpray({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.0425 21.3172' className={className}>
      <path
        d='M29.6812 8.90626L29.6812 18.1296C29.6812 20.1741 28.5751 21.3172 26.4999 21.3172L3.18125 21.3172C1.10674 21.3172 0 20.2112 0 18.1296L0 8.90626C0 6.82403 1.10674 5.71866 3.18125 5.71866L13.6905 5.71866L13.6905 6.2302L3.21124 6.2302C1.42628 6.2302 0.511533 7.15265 0.511533 8.93126L0.511533 18.1046C0.511533 19.8832 1.42628 20.8057 3.21124 20.8057L26.4706 20.8057C28.1802 20.8057 29.1696 19.8832 29.1696 18.1046L29.1696 8.93126C29.1696 7.15265 28.1802 6.2302 26.4706 6.2302L15.9913 6.2302L15.9913 5.71866L26.4999 5.71866C28.5751 5.71866 29.6812 6.86173 29.6812 8.90626Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.38223 2.63614C1.47383 2.71749 1.65196 2.73653 1.77442 2.58272C2.56837 1.55011 3.57579 0.814757 4.68223 0.500206C4.8422 0.443174 4.89903 0.296394 4.87335 0.190923C4.84766 0.0541031 4.72061-0.0181639 4.475 0.0422865C3.26904 0.371389 2.1957 1.14834 1.37832 2.24483C1.25107 2.41456 1.28789 2.56319 1.38223 2.63614ZM13.0185 2.64386C13.1128 2.57091 13.1567 2.42295 13.021 2.24414C12.2127 1.15674 11.1296 0.371389 9.9334 0.0429702C9.68574-0.0188476 9.55098 0.0568378 9.52597 0.19229C9.50234 0.297078 9.55713 0.443174 9.71709 0.500206C10.8229 0.814757 11.8303 1.55011 12.6333 2.58204C12.7487 2.72882 12.9262 2.72521 13.0185 2.64386ZM16.6627 2.64386C16.7557 2.72521 16.9324 2.72882 17.0569 2.58204C17.8509 1.55011 18.8583 0.814757 19.9641 0.500206C20.124 0.443174 20.1788 0.297078 20.1552 0.19229C20.1309 0.0568378 19.9954-0.0188476 19.7568 0.0429702C18.5522 0.371389 17.4685 1.15674 16.6602 2.24414C16.5252 2.42295 16.569 2.57091 16.6627 2.64386ZM28.3087 2.63614C28.3933 2.56319 28.4301 2.41456 28.3035 2.24483C27.4952 1.14834 26.4121 0.371389 25.2152 0.0422865C24.9703-0.0181639 24.8335 0.0541031 24.8078 0.190923C24.7821 0.296394 24.839 0.443174 24.9989 0.500206C26.1054 0.814757 27.1128 1.55011 27.9067 2.58272C28.0299 2.73653 28.2073 2.71749 28.3087 2.63614ZM14.8409 7.96008C14.9827 7.96008 15.1009 7.85099 15.1009 7.70851L15.1009 4.49562C15.1009 4.35382 14.9827 4.23497 14.8409 4.23497C14.6984 4.23497 14.5894 4.35382 14.5894 4.49562L14.5894 7.70851C14.5894 7.85099 14.6984 7.96008 14.8409 7.96008ZM14.8409 14.3503C14.9827 14.3503 15.1009 14.2321 15.1009 14.0904L15.1009 10.8768C15.1009 10.735 14.9827 10.6259 14.8409 10.6259C14.6984 10.6259 14.5894 10.735 14.5894 10.8768L14.5894 14.0904C14.5894 14.2321 14.6984 14.3503 14.8409 14.3503Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

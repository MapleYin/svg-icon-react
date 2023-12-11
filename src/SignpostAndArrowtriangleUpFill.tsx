import React from 'react'

export default function SignpostAndArrowtriangleUpFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.0897 24.1949' className={className}>
      <path
        d='M9.61994 0.251567L9.61994 3.44218L16.8173 3.44218C18.0018 3.44218 18.7283 4.14922 18.7283 5.31348L18.7283 11.1537C18.7283 12.318 18.0018 13.0348 16.8173 13.0348L9.61994 13.0348L9.61994 23.6639L13.652 23.6639C13.8126 23.6639 13.9119 23.782 13.9119 23.9245C13.9119 24.0663 13.8126 24.1754 13.652 24.1754L5.04981 24.1754C4.92618 24.1754 4.79825 24.0663 4.79825 23.9245C4.79825 23.782 4.92618 23.6639 5.04981 23.6639L9.10841 23.6639L9.10841 13.0348L1.91104 13.0348C0.717482 13.0348 0 12.318 0 11.1537L0 5.31348C0 4.14922 0.717482 3.44218 1.91104 3.44218L9.10841 3.44218L9.10841 0.251567C9.10841 0.118166 9.21749 0 9.35929 0C9.50177 0 9.61994 0.118166 9.61994 0.251567ZM8.99562 5.66339L6.1379 9.75294C5.8585 10.155 6.02862 10.4489 6.40597 10.4489L12.3147 10.4489C12.6984 10.4489 12.8887 10.155 12.6016 9.75362L9.7341 5.66339C9.48878 5.33379 9.213 5.33379 8.99562 5.66339Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
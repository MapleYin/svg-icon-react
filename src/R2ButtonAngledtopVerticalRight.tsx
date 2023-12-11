import React from 'react'

export default function R2ButtonAngledtopVerticalRight({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.2174 26.4711' className={className}>
      <path
        d='M14.102 26.4711C18.2477 26.4711 20.8561 23.8627 20.8561 19.717L20.8561 12.594C20.8561 11.0687 20.4293 9.89356 19.5304 9.05459L11.5623 1.74014C10.166 0.442871 8.71817 0.0181639 6.89288 0.0181639L3.04317 0.0181639C1.09043 0.0181639 0 1.07227 0 3.05293L0 23.4279C0 25.3771 1.05772 26.4711 3.03614 26.4711ZM14.0713 25.9596L3.06612 25.9596C1.44395 25.9596 0.511533 25.0683 0.511533 23.3986L0.511533 3.08291C0.511533 1.44581 1.38018 0.529697 3.07315 0.529697L6.8629 0.529697C8.53506 0.529697 9.9542 0.965732 11.2064 2.11964L19.1459 9.40479C19.9685 10.1597 20.3438 11.2259 20.3438 12.6232L20.3438 19.687C20.3438 23.526 17.9096 25.9596 14.0713 25.9596Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.54512 20.957C4.74073 20.957 4.86046 20.8171 4.86046 20.6292L4.86046 16.3885L6.92081 16.3885L8.82178 20.7693C8.88652 20.9147 8.98399 20.957 9.13077 20.957C9.33702 20.957 9.45313 20.8058 9.45313 20.6515C9.45313 20.5978 9.43926 20.5381 9.42403 20.4951L7.54737 16.2206C8.58614 15.8979 9.3546 14.9933 9.3546 13.4511C9.3546 11.75 8.39708 10.5689 6.59952 10.5689L4.52559 10.5689C4.31885 10.5689 4.20957 10.6983 4.20957 10.9051L4.20957 20.6292C4.20957 20.8164 4.35586 20.957 4.54512 20.957ZM4.86046 15.7824L4.86046 11.1713L6.52569 11.1713C7.83828 11.1713 8.71211 11.9366 8.71211 13.4622C8.71211 14.8041 8.02539 15.7824 6.54454 15.7824ZM11.3963 20.9202L15.7333 20.9202C15.9046 20.9202 16.0384 20.7935 16.0384 20.6228C16.0384 20.4502 15.9039 20.3255 15.7333 20.3255L11.9576 20.3255L11.9576 20.2746L14.5313 16.5897C15.4538 15.2547 15.7893 14.3311 15.7893 13.2777C15.7893 11.7425 15.0098 10.4616 13.4445 10.4616C11.9965 10.4616 11.0941 11.8213 11.0941 13.1887C11.0941 13.2964 11.1728 13.4797 11.3922 13.4797C11.5433 13.4797 11.6582 13.3773 11.665 13.2359C11.8156 11.9672 12.3566 11.0641 13.4627 11.0641C14.7085 11.0641 15.2095 12.2778 15.2095 13.3098C15.2095 14.2382 14.9232 15.0283 14.0873 16.2244L11.1732 20.3118C11.0876 20.4379 11.0746 20.5374 11.0746 20.6417C11.0746 20.8298 11.2273 20.9202 11.3963 20.9202Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
import React from 'react'

export default function N45Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.64356 16.2018C8.81758 16.2018 8.94981 16.0191 8.94981 15.8739L8.94981 13.5924L9.84112 13.5924C10.0256 13.5924 10.1489 13.4824 10.1489 13.2923C10.1489 13.1217 9.98995 13.0117 9.84112 13.0117L8.94981 13.0117L8.94981 6.25938C8.94981 5.83233 8.66905 5.74004 8.46543 5.74004C8.14804 5.74004 7.99492 5.94063 7.83681 6.25255L4.55918 12.6642C4.47353 12.8396 4.43242 12.9865 4.43242 13.1474C4.43242 13.4029 4.60371 13.5924 4.91514 13.5924L8.32617 13.5924L8.32617 15.8739C8.32617 16.0505 8.43594 16.2018 8.64356 16.2018ZM8.31914 13.0047L5.05489 13.0047L5.05489 12.9817L8.27031 6.59503L8.31914 6.59503ZM14.2026 16.2813C15.9169 16.2813 16.7977 14.5757 16.7977 12.8412C16.7977 11.1581 15.9858 9.48321 14.3556 9.48321C13.6874 9.48321 12.8928 9.79776 12.4972 10.6964L12.4658 10.6964L12.7819 6.51534L16.0629 6.51534C16.2446 6.51534 16.3609 6.38722 16.3609 6.19708C16.3609 6.02579 16.2342 5.89698 16.0629 5.89698L12.7071 5.89698C12.3657 5.89698 12.2383 6.12344 12.2076 6.42784L11.8922 10.6489C11.8727 10.8624 11.8545 11.122 11.8545 11.2147C11.8545 11.4264 11.9883 11.5613 12.1964 11.5613C12.4278 11.5613 12.5219 11.3967 12.6193 11.2023C12.9584 10.5428 13.5105 10.0745 14.2578 10.0745C15.5445 10.0745 16.1545 11.5754 16.1545 12.8621C16.1545 14.2576 15.525 15.6908 14.2013 15.6908C13.1943 15.6908 12.4804 14.8052 12.3019 13.808C12.2657 13.5271 12.1487 13.4609 12.0095 13.4609C11.8264 13.4609 11.7087 13.5884 11.7087 13.7806C11.7087 13.8703 11.7589 14.0523 11.7832 14.1588C12.0571 15.377 12.9406 16.2813 14.2026 16.2813Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

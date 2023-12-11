import React from 'react'

export default function TractionControlTirepressure({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.9239 23.3195' className={className}>
      <path
        d='M0 11.8783C0 15.3207 1.34238 17.6156 2.86416 19.3853C3.42422 20.0308 3.69336 20.5366 3.69336 21.4073L3.69336 23.0226C3.69336 23.1539 3.80244 23.2805 3.95195 23.2805C4.07422 23.2805 4.21055 23.1539 4.21055 23.0226L4.21055 22.1721L6.89746 22.1721L6.89746 23.0226C6.89746 23.1539 7.02471 23.2805 7.15537 23.2805C7.29649 23.2805 7.41397 23.1539 7.41397 23.0226L7.41397 22.1721L9.95371 22.1721L9.95371 23.0226C9.95371 23.1539 10.0816 23.2805 10.213 23.2805C10.3534 23.2805 10.4709 23.1539 10.4709 23.0226L10.4709 22.1721L13.0352 22.1721L13.0352 23.0226C13.0352 23.1539 13.1722 23.2805 13.2938 23.2805C13.4251 23.2805 13.553 23.1539 13.553 23.0226L13.553 22.1721L16.0928 22.1721L16.0928 23.0226C16.0928 23.1539 16.2103 23.2805 16.3507 23.2805C16.482 23.2805 16.6093 23.1539 16.6093 23.0226L16.6093 22.1721L19.2962 22.1721L19.2962 23.0226C19.2962 23.1539 19.4325 23.2805 19.5548 23.2805C19.7043 23.2805 19.8134 23.1539 19.8134 23.0226L19.8134 21.4164C19.8134 20.568 20.1125 20.0314 20.7144 19.3289C22.232 17.562 23.5626 15.2887 23.5626 11.8783C23.5626 9.08028 22.5801 6.21875 20.8816 3.83985C20.381 3.13418 20.2588 3.02832 20.2588 2.4333L20.2588 0.258598C20.2588 0.13633 20.1497 0 20.0002 0C19.8779 0 19.7416 0.13633 19.7416 0.258598L19.7416 2.42266C19.7416 3.24991 20.1317 3.67637 20.4548 4.11436C22.0831 6.39239 23.0511 9.17344 23.0511 11.8783C23.0511 15.8061 21.1906 18.3054 18.7124 20.03L4.81319 20.03C2.37198 18.3054 0.511533 15.8061 0.511533 11.8783C0.511533 9.17344 1.4795 6.39239 3.09806 4.11436C3.43087 3.67637 3.81124 3.24991 3.81124 2.42266L3.81124 0.258598C3.81124 0.13633 3.68468 0 3.55333 0C3.41221 0 3.29405 0.13633 3.29405 0.258598L3.29405 2.4333C3.29405 3.02832 3.17256 3.13418 2.68106 3.83985C0.972756 6.21875 0 9.08028 0 11.8783Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.87501 16.9401C8.05245 16.9401 8.1631 16.7981 8.1631 16.62L8.1631 7.05294L11.0128 7.05294C11.2029 7.05294 11.3059 6.95411 11.3059 6.76261C11.3059 6.5795 11.1952 6.48067 11.0128 6.48067L4.71906 6.48067C4.55822 6.48067 4.42599 6.62286 4.42599 6.76261C4.42599 6.9171 4.56593 7.05294 4.71906 7.05294L7.56876 7.05294L7.56876 16.62C7.56876 16.817 7.67803 16.9401 7.87501 16.9401ZM15.6994 16.9994C17.303 16.9994 18.612 16.1788 19.0083 14.3525C19.0689 14.0673 19.0808 14.0173 19.0808 13.9693C19.0808 13.7919 18.9576 13.6756 18.8052 13.6756C18.652 13.6756 18.5546 13.7724 18.5226 13.9066C18.2923 15.4063 17.3542 16.4271 15.6981 16.4271C13.3343 16.4271 12.4527 13.9663 12.4527 11.6222C12.4527 9.40284 13.2608 6.87511 15.6974 6.87511C17.1469 6.87511 18.2253 7.9295 18.531 9.51368C18.5539 9.67794 18.6534 9.7838 18.8163 9.7838C18.9819 9.7838 19.0982 9.68018 19.0982 9.50049C19.0982 9.45323 19.0696 9.29561 19.0397 9.14707C18.6915 7.47901 17.318 6.31123 15.6967 6.31123C12.921 6.31123 11.8396 8.96661 11.8396 11.6222C11.8396 14.4354 13.0075 16.9994 15.6994 16.9994Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
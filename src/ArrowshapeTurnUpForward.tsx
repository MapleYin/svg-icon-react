import React from 'react'

export default function ArrowshapeTurnUpForward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.6934 21.5508' className={className}>
      <path
        d='M14.2903 21.5403C14.6199 21.5403 14.8882 21.3514 15.0886 21.1621L24.9385 12.0351C25.6014 11.4015 25.6934 11.0976 25.6934 10.7705C25.6934 10.4421 25.6195 10.1298 24.9385 9.50459L15.0886 0.364164C14.8939 0.181251 14.6122 0 14.2826 0C13.8088 0 13.5798 0.353225 13.5798 0.797759L13.5798 6.43779L12.988 6.43779C5.55556 6.43779 0.237894 10.4702 0.237894 20.7448C0.237894 21.2303 0.531158 21.5403 0.920027 21.5403C1.29093 21.5403 1.48995 21.34 1.67101 20.8703C3.29767 16.8966 6.88087 15.2331 12.988 15.2331L13.5798 15.2331L13.5798 20.7292C13.5798 21.1737 13.8088 21.5403 14.2903 21.5403ZM14.3223 21.008C14.1785 21.008 14.0913 20.8936 14.0913 20.7219L14.0913 15.0198C14.0913 14.782 14.0195 14.7103 13.7818 14.7103L13.0316 14.7103C6.6961 14.7103 2.89591 16.4495 1.19015 20.7827C1.12384 20.9537 1.05753 21.1038 0.916515 21.1038C0.765734 21.1038 0.71759 20.9998 0.71759 20.8749C0.695619 10.9859 5.62314 6.96065 13.0316 6.96065L13.7818 6.96065C14.0195 6.96065 14.0913 6.88819 14.0913 6.65108L14.0913 0.785071C14.0913 0.641322 14.1967 0.535951 14.3411 0.535951C14.4933 0.535951 14.5896 0.639954 14.7124 0.734876L24.6906 9.96485C25.0467 10.3014 25.1682 10.5269 25.1682 10.7705C25.1682 11.0051 25.0648 11.2299 24.6906 11.5762L14.6943 20.8091C14.5239 20.9605 14.4186 21.008 14.3223 21.008Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

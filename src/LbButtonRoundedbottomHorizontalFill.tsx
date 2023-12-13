import React from 'react'

export function LbButtonRoundedbottomHorizontalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2232 20.2154' className={className}>
      <path
        d='M26.8618 3.02706L26.8618 11.241C26.8618 17.1033 24.42 20.205 17.9346 20.205L8.92726 20.205C2.4334 20.205 0 17.1033 0 11.241L0 3.02706C0 1.06836 1.06904 0 3.02979 0L23.8327 0C25.7837 0 26.8618 1.10537 26.8618 3.02706ZM14.4988 5.02745C14.3082 5.02745 14.1982 5.16173 14.1982 5.3587L14.1982 14.8867C14.1982 15.0767 14.3089 15.2361 14.4988 15.2361L16.8883 15.2361C18.5818 15.2361 19.5611 14.1285 19.5611 12.4949C19.5611 11.219 18.9293 10.096 17.6827 9.92364L17.6827 9.88321C18.5755 9.68926 19.1655 8.60665 19.1655 7.51905C19.1655 6.12002 18.3211 5.02745 16.8374 5.02745ZM8.20772 5.19972L8.20772 14.8679C8.20772 15.0773 8.34561 15.2173 8.5167 15.2173L12.4233 15.2173C12.5758 15.2173 12.7157 15.078 12.7157 14.9067C12.7157 14.7536 12.5758 14.6137 12.4233 14.6137L8.84659 14.6137L8.84659 5.19972C8.84659 5.0418 8.70255 4.88936 8.53624 4.88936C8.36084 4.88936 8.20772 5.0418 8.20772 5.19972ZM18.9209 12.4588C18.9209 13.8055 18.147 14.6316 16.801 14.6316L14.8169 14.6316L14.8169 10.2782L16.697 10.2782C18.0934 10.2782 18.9209 11.0794 18.9209 12.4588ZM18.5119 7.58155C18.5119 8.83126 17.819 9.68262 16.5687 9.68262L14.8169 9.68262L14.8169 5.63263L16.7158 5.63263C17.874 5.63263 18.5119 6.40294 18.5119 7.58155Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}

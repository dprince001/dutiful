import React from 'react'

const Button = ({
  text,
  backgroundColor = '#532F82',
  borderColor = '#532F82',
  borderRadius = '6px',
  textColor = '#ffffff',
  maxWidth = '',
  ...props
}) => {
  return (
    <button
      className='p-[10px] px-10 font-medium w-full grow outline-none'
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: borderRadius,
        maxWidth: maxWidth,
        border: borderColor ? `2px solid ${borderColor}` : undefined
      }}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button

import React from 'react'

export default function ImageBox({image, content, span, className}) {
  return (
    <div>
      <div className={className}>
        <img src={image} alt={content} />
        <p>
          {content}
          <span>{span}</span>
        </p>
      </div>
    </div>
  )
}
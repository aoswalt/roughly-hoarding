import React from 'react'

export default ({
  item: {
    itemImage: image,
    itemDescription: description,
    itemName: name
  },
  button
}) => (
  <div style={{ flex: 1 }}>
    <img src={image} style={{ maxWidth: '200px' }} />
    <h4>{name}</h4>
    <p>{description}</p>
    {button}
  </div>
)

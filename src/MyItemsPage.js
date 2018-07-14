import React from 'react'
import Item from './Item';

export default ({
  items = [],
  onDelete,
}) => (
  <div style={{ display: 'flex', 'flex-wrap': 'wrap' }}>
    {items.map((item, i) =>
      (<Item
        key={item.itemImage}
        button={
          <button onClick={() => onDelete(i)}>Delete</button>
        }
        item={item}
      />))
    }
  </div>
)

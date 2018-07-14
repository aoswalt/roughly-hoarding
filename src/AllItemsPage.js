import React from 'react'
import Item from './Item';

export default ({
  items = [],
  onAdd,
}) => (
  <div style={{ display: 'flex', 'flex-wrap': 'wrap' }}>
    {items.map((item, i) =>
      (<Item
        key={item.itemImage}
        button={
          <button onClick={() => onAdd(item)}>Add</button>
        }
        item={item}
      />))
    }
  </div>
)

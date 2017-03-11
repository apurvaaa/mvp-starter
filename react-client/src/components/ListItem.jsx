import React from 'react';

const ListItem = (props) => (
  <div>
    {props.item.name } - { props.item.elixirCost }
    <img src='http://www.clashapi.xyz/images/cards/{(props.item.name).toLowerCase()}.png'/>
  </div>
)

export default ListItem;
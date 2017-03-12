import React from 'react';
import ListItem from './ListItem.jsx';
// import { code } from 'react-bootstrap';

const GridData = ({card}) => (
  <td>
    <img src = {`http://www.clashapi.xyz/images/cards/${card.idName}.png`} />
    {card.name} : needs {card.elixirCost} elixir
    {card.description}
  </td>
);

export default GridData;
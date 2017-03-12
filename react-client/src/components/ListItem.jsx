import React from 'react';
import { Button } from 'react-bootstrap';



const ButtonToolbar = () => (
 
    <Button bsStyle="primary">Primary</Button>
);

const ListItem = ({card}) => (
  <div>
    <ButtonToolbar/>
    {card.name } - { card.elixirCost }
    <img src={`http://www.clashapi.xyz/images/cards/${card.idName}.png`}/>
  </div>
)
export default ListItem;
import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({cards}) => (
  <div>
    <h4> List Component </h4>
    There are { cards.length } cards.
    { cards.map(card => <ListItem card={card} key={card.id}/>)}
  </div>
)

export default List;


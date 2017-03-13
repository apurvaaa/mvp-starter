import React from 'react';
import ListItem from './ListItem.jsx';
import GridData from './GridData.jsx';

// import { code } from 'react-bootstrap';

const GridRow = ({cards}) => (
    <tr>
       
       { cards.map(card => <GridData card={card} key={card.idName}/>)}
      	
    </tr>
);

export default GridRow;
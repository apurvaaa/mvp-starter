import React from 'react';
import GridRow from './gridRow.jsx';
import { Table } from 'react-bootstrap';
// import { code } from 'react-bootstrap';

const RoyaleGrid = ({cards}) => (
  <Table responsive>
    <tbody>
     {/* { cards.map(card => <GridRow card={card} />)}*/}{
     	
     	cards.map(function (card, i) {
     		if ((i % 5 === 0) && (i !== 0)) {
     	      return <GridRow cards={cards.slice(i - 5, i)} />
     		} 
     	})
     }

    </tbody>
  </Table>
)

export default RoyaleGrid;

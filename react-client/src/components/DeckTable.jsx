import React from 'react';
import { Table } from 'react-bootstrap';
import GridRow from './gridRow.jsx';
import DeckSum from './gridRow.jsx';
// import { code } from 'react-bootstrap';

const DeckTable = ({cards}) => (
  <Table responsive>
    <tbody>
     {
     	
     	cards.map(function (card, i) {
     		if ((i % 4 === 3)) {
     	      return <GridRow cards={cards.slice(i - 3, i + 1)} key={card.idName} />
     		} 
     	})

     }


    </tbody>
  </Table>
)

export default DeckTable;
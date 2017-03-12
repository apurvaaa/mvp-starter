import React from 'react';
import GridRow from './gridRow.jsx';
import { Table } from 'react-bootstrap';
// import { code } from 'react-bootstrap';

const RoyaleGrid = ({cards}) => (
  <Table responsive>
    <tbody>
     {/* { cards.map(card => <GridRow card={card} />)}*/}
    <GridRow cards={cards.slice(0, 5)} />

    {console.log('checking console.log, cards. slice: ', cards.slice(0, 5))}

    </tbody>
  </Table>
)

export default RoyaleGrid;

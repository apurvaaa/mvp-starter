import React from 'react';
import { Table } from 'react-bootstrap';
import GridRow from './gridRow.jsx';
// import { code } from 'react-bootstrap';

const DeckSum = ({cards}) => {
    var res = 0;
    var buildings = 0;
    var spells = 0;
    var troops = 0;
    var epics = 0;
    var legendaries = 0;
    var commons = 0;
    var rares = 0;
    cards.forEach(function(card){
          console.log('card : ', card);
          res+= Number.parseInt(card.elixirCost);
          if (card.type === 'buildings') {
            buildings++;
          } else if (card.type === 'spells') {
            spells++;
          } else {
            troops++;
          }

          if (card.rarity === 'Legendary') {
            legendaries++;
          } else if (card.rarity === 'Epic') {
            epics++;
          } else if (card.rarity === 'Common') {
            commons++;
          } else {
            rares++;
          }

        });
    res /= 8;


    return (
  <Table responsive>
    <thead>
      <tr>
        <th>  Average Elixir  </th>
        <th>  Buildings  </th>
        <th>  Spells  </th>
        <th>  Troops  </th>
        <th>  Legendary  </th>
        <th>  Epic  </th>
        <th>  Rare  </th>
        <th>  Common  </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> {res}</td>
        <td> {buildings}</td>
        <td> {spells}</td>
        <td> {troops}</td>
        <td> {legendaries}</td>
        <td> {epics}</td>
        <td> {rares}</td>
        <td> {commons}</td>

      </tr>

    </tbody>
  </Table>
)}

export default DeckSum;
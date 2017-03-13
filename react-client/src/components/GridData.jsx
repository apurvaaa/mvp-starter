import React from 'react';
// import tt from './ToolTip.jsx';
import { OverlayTrigger } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';


const tt =({card}) => (
  <Tooltip placement="top" className="in" id="tooltip-top">Something here</Tooltip>
);


const GridData = ({card}) => (
  <td>
    <OverlayTrigger placement="top" overlay={
    	<Tooltip placement="top" className="in" id="tooltip-top">
        {card.name} : {card.description}  - Elixir Cost : {card.elixirCost}
    	</Tooltip>
    }>
      <img src = {`http://www.clashapi.xyz/images/cards/${card.idName}.png`} />
    </OverlayTrigger>
  </td>
);

export default GridData;
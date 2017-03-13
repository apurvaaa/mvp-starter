import React from 'react';
import { Tooltip } from 'react-bootstrap';

const tt = ({card}) => (
  <Tooltip placement="top" className="in" id="tooltip-top"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
);

export default tt;
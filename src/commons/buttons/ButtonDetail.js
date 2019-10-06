import React, {memo} from "react";
import { Button } from 'react-bootstrap';

const ButtonDetail = memo(({
  onClick,
}) => { 
  return (
    <Button 
      block
      variant="primary"
      onClick={onClick}>
      See Detail
    </Button>
  )
})

export default ButtonDetail
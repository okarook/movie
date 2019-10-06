import React, {memo} from "react";
import { Button } from 'react-bootstrap';

const ButtonFavorite = memo(({
  remove = false,
  onClick,
}) => { 
  let title = "Add Favorite"
  let style = "warning"
  if (remove) {
    title = "Remove Favorite"
    style = "secondary"
  }

  return (
    <Button 
      block
      variant={style} 
      onClick={onClick}>
      {title}
    </Button>
  )
})

export default ButtonFavorite
import React, { memo } from "react";
import { Card } from 'react-bootstrap';
import ButtonFavorite from "./../buttons/ButtonFavorite";
import ButtonDetail from "./../buttons/ButtonDetail";
import * as env from "./../../env";
import { numberScala } from "./../../jot";

const CardMovie = memo(({
    title, 
    overview, 
    uriImg, 
    releaseDate,
    voteCount,
    removeFavorite = false,
    onClickDetail, 
    onClickFavorite
}) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img 
      variant="top" 
      src={`${env.api_uri_img}${uriImg}`} />
    <Card.Header>Count Vote: {numberScala(voteCount)}</Card.Header>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {overview}
      </Card.Text>
      <ButtonDetail onClick={onClickDetail}/>
      <ButtonFavorite 
        remove={removeFavorite} 
        onClick={onClickFavorite}/>
    </Card.Body>
    <Card.Footer 
      className="text-muted">
      Lanzamiento: {releaseDate}
    </Card.Footer>
  </Card>
))

export default CardMovie
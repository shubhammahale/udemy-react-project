import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";

import "./PlaceItem.css";

const PlaceItem = (props) => {
  return (
    <li className="place-item__content">
      <Card className="place-item">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button dange r>
            DELETE
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;

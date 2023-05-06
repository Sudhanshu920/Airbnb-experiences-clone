import React from 'react';
import PropTypes from 'prop-types';
import star from '/Star 1.png';

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.item.coverImg} alt="pic" className="card-pic1" />
      <div>
        <img src={star} alt="star" className="star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <div className="card-quote1">{props.item.title}</div>
      <div className="card-price1">From ${props.item.price} / person</div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object,
};

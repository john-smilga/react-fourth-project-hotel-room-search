import React, { Component } from "react";

export default class Room extends Component {
  render() {
    const { img, price, name, openModal } = this.props;
    return (
      <article className="room">
        <div className="room__img-container">
          <img src={img} alt="room" className="room__img" />
          <div className="room__price">
            <h3>${price}</h3>
            <p>per night</p>
          </div>
          <div className="room__info">
            <h1>${price}</h1>
            <p>per night</p>
            <button className="room__info-btn" onClick={openModal}>
              view details
            </button>
          </div>
        </div>
        <div className="room__name">
          <h1>{name}</h1>
        </div>
      </article>
    );
  }
}

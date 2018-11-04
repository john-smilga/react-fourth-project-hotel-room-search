import React, { Component } from "react";
import Room from "./Room";
export default class RoomListings extends Component {
  render() {
    const { roomData, openModal } = this.props;

    return (
      <section>
        {roomData.length === 0 ? (
          <h2 className="search-fail">
            sorry. but your search did not return any results
          </h2>
        ) : null}
        <div className="roomListings">
          {roomData.map(room => {
            return (
              <Room
                key={room.id}
                img={room.img}
                price={room.price}
                name={room.name}
                openModal={() => openModal(room.id)}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

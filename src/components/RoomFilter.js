import React, { Component } from "react";

export default class RoomFilter extends Component {
  render() {
    const { handleChange } = this.props;
    const {
      price,
      price_min,
      price_max,
      size_min,
      size_max,
      pets,
      breakfast,
      rooms
    } = this.props.defaultState;
    let types = rooms.map(room => room.type);
    types = new Set(types);
    types = [...types];
    let capacity = rooms
      .reduce((total, curr) => {
        const index = total.indexOf(curr.capacity);
        if (index === -1) {
          total.push(curr.capacity);
        }

        return total;
      }, [])
      .sort((a, b) => b - a);

    return (
      <section className="room-filter">
        <div>
          <label htmlFor="type">room type</label>
          <select
            name="type"
            className="room-filter__choice"
            onChange={handleChange}
            id="type"
          >
            <option value="all">all</option>
            {types.map((type, index) => {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="capacity">how many people are staying</label>
          <select
            name="capacity"
            className="room-filter__choice"
            onChange={handleChange}
            id="capacity"
          >
            <option value="0">0</option>
            {capacity.map((amount, index) => {
              return (
                <option key={index} value={amount}>
                  {amount}
                </option>
              );
            })}
          </select>
        </div>
        <div className="room-filter__price">
          <label htmlFor="price">
            <p>
              room price
              <span> ${price}</span>
            </p>
          </label>
          <input
            type="range"
            name="price"
            min={price_min}
            max={price_max}
            value={price}
            id="price"
            onChange={handleChange}
          />
        </div>
        <div className="room-filter__size">
          <p>room size</p>
          <input
            type="number"
            name="size_min"
            className="room-size"
            value={size_min}
            onChange={handleChange}
          />
          <input
            type="number"
            name="size_max"
            className="room-size"
            value={size_max}
            onChange={handleChange}
          />
        </div>
        <div className="room-filter__extras">
          <div className="room-filter__extra">
            <label htmlFor="pets">pets</label>
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets && true}
              onChange={handleChange}
            />
          </div>
          <div className="room-filter__extra">
            <label htmlFor="breakfast"> free breakfast</label>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast ? true : false}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>
    );
  }
}

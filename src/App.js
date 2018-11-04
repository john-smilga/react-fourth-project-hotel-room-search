import React, { Component } from "react";
import "./App.css";
import RoomListings from "./components/RoomListings";
import RoomFilter from "./components/RoomFilter";
import Title from "./components/Title";
import Modal from "./components/Modal";
// import data from "./components/Data/roomData";
class App extends Component {
  state = {
    rooms: [],
    sortedData: [],
    modalInfo: false,
    modalInfoID: 1,
    type: "all",
    capacity: 0,
    price: 500,
    price_min: 0,
    price_max: 500,
    size_min: 0,
    size_max: 1500,
    pets: false,
    breakfast: false
  };
  async componentDidMount() {
    try {
      const response = await fetch(
        "https://5bde227533f2d100131fc4f1.mockapi.io/rooms"
      );
      const data = await response.json();
      this.setState({
        rooms: data,
        sortedData: data
      });
    } catch (err) {
      // catches errors both in fetch and response.json
      alert(err);
    }
  }
  openModal = id => {
    this.setState({
      modalInfo: !this.state.modalInfo,
      modalInfoID: id
    });
  };
  closeModal = () => {
    this.setState({ modalInfo: !this.state.modalInfo });
  };
  handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.sortData();
      }
    );
  };
  sortData = () => {
    const {
      rooms,
      price,
      size_min,
      size_max,
      pets,
      breakfast,
      type
    } = this.state;
    let { capacity } = this.state;
    capacity = parseInt(capacity);

    let sortedData = rooms.filter(room => {
      return (
        room.price <= price && room.size >= size_min && room.size <= size_max
      );
    });

    if (type !== "all") {
      sortedData = sortedData.filter(room => room.type === type);
    }

    if (capacity !== 0) {
      sortedData = sortedData.filter(room => room.capacity >= capacity);
    }
    if (pets === true) {
      sortedData = sortedData.filter(room => {
        return room.pets === true;
      });
    }
    if (breakfast === true) {
      sortedData = sortedData.filter(room => {
        return room.breakfast === true;
      });
    }
    this.setState({
      sortedData
    });
  };
  render() {
    return (
      <main>
        <section>
          <Title title="filter by" />
          <RoomFilter
            handleChange={this.handleChange}
            defaultState={this.state}
          />
          <Title title="room listings" />
          <RoomListings
            // roomData={this.state.rooms}
            roomData={this.state.sortedData}
            openModal={this.openModal}
          />
          {this.state.modalInfo && (
            <Modal id={this.state.modalInfoID} closeModal={this.closeModal} />
          )}
        </section>
      </main>
    );
  }
}

export default App;

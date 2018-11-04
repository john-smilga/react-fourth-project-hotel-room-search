import React, { Component } from "react";
export default class Modal extends Component {
  constructor(props) {
    super(props);
    const { id } = props;
    this.state = {
      modalID: id,
      room: {
        name: "default room",
        price: 300,
        pets: true,
        breakfast: true,
        img:
          "https://cdn.pixabay.com/photo/2015/09/28/21/32/the-palm-962785__480.jpg"
      }
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://5bde227533f2d100131fc4f1.mockapi.io/rooms/${
          this.state.modalID
        }`
      );
      const singleRoom = await response.json();
      this.setState({
        room: {
          name: singleRoom.name,
          price: singleRoom.price,
          pets: singleRoom.pets,
          breakfast: singleRoom.breakfast,
          img: singleRoom.img
        }
      });
    } catch (err) {
      alert(err);
    }
  }
  render() {
    const { closeModal } = this.props;
    const { name, price, pets, breakfast, img } = this.state.room;

    return (
      <div className="modal" onClick={closeModal}>
        <div className="modal-body">
          <div className="modal-body__img-container">
            <img src={img} alt="" />
            <div className="room__price">
              <h3>${price}</h3>
              <p>per night</p>
            </div>
          </div>
          <div className="modal-body__info">
            <h1 className="modal-title">{name}</h1>

            <div className="modal-icons">
              {/* modal item */}
              <span className="modal-item">
                <span className="modal-icon">
                  <i className="fas fa-bed" />
                </span>
                king bed
              </span>
              {/* end o modal item */}
              {/* modal item */}
              <span className="modal-item">
                <span className="modal-icon">
                  <i className="fas fa-bath" />
                </span>
                hot shower
              </span>
              {/* end o modal item */}
              {/* modal item */}
              <span className="modal-item">
                <span className="modal-icon">
                  <i className="fas fa-wifi" />
                </span>
                free wifi
              </span>
              {/* end o modal item */}
              {/* modal item */}
              {pets && (
                <span className="modal-item">
                  <span className="modal-icon">
                    <i className="fas fa-dog" />
                  </span>
                  pets allowed
                </span>
              )}

              {/* end o modal item */}
              {/* modal item */}
              {breakfast && (
                <span className="modal-item">
                  <span className="modal-icon">
                    <i className="fas fa-coffee" />
                  </span>
                  free breakfast
                </span>
              )}

              {/* end o modal item */}
            </div>
            <p className="modal-room-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quas esse pariatur? Architecto asperiores adipisci atque provident
              maxime, fuga sint!
            </p>
            <button className="room__info-btn" onClick={closeModal}>
              close modal
            </button>
          </div>
        </div>
      </div>
    );
  }
}

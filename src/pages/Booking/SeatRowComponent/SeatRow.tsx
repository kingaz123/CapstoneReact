import React, { Component } from "react";
import { connect } from "react-redux";
import { Booking } from "../../../redux/BookingReducer/creator";

interface SeatRowProps {
  seatRow: {
    danhSachGhe: {
      soGhe: number;
      daDat: boolean;
      gia: number;
    }[];
    hang: string;
  };
  seatListChosen: {
    soGhe: number;
  }[];
  dispatch: (action: any) => void;
}

class SeatRow extends Component<SeatRowProps> {
  renderSeat = () => {
    const { danhSachGhe } = this.props.seatRow;
    return danhSachGhe.map((seat, index) => {
      if (seat.daDat === true) {
        return (
          <button className="gheDuocChon" key={index}>
            {seat.soGhe}
          </button>
        );
      }
      if (seat.gia === 0) {
        return (
          <span className="rowNumber" key={index}>
            {seat.soGhe}
          </span>
        );
      }
      let seatCSS = "";
      const indexSeat = this.props.seatListChosen.findIndex(
        (seatChosen, index) => seatChosen.soGhe === seat.soGhe,
      );
      if (indexSeat !== -1) {
        seatCSS = "gheDangChon";
      }
      return (
        <button
          key={index}
          className={`ghe ${seatCSS}`}
          onClick={() => this.props.dispatch(Booking(seat))}
        >
          {seat.soGhe}
        </button>
      );
    });
  };

  render() {
    const { hang } = this.props.seatRow;
    return (
      <div>
        <span className="rowNumber">{hang}</span>
        {this.renderSeat()}
      </div>
    );
  }
}

const mapStateToProps = (rootReducer: any) => {
  return { seatListChosen: [...rootReducer.BookingReducer] };
};

export default connect(mapStateToProps)(SeatRow);

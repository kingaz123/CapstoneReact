import React, { Component } from "react";
import BookingList from "./BookingListComponent/BookingList";
import SeatList from "./SeatListComponent/SeatList";
import "./Style-Booking.css";

export default class BookingTicket extends Component {
  render(): JSX.Element {
    return (
      <div className="bookingMovie">
        <div className="overlay pb-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-3/4 px-2">
                <SeatList />
              </div>
              <div className="w-1/4 px-2">
                <BookingList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

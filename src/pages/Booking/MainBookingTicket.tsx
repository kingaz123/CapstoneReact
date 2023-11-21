import React, { Component } from "react";
import BookingList from "./BookingListComponent/BookingList";
import SeatList from "./SeatListComponent/SeatList";
import "./Style-Booking.css"; // Bạn vẫn có thể sử dụng styles CSS tùy chỉnh của mình

export default class BookingTicket extends Component {
  render(): JSX.Element {
    return (
      <div className="bookingMovie">
        {" "}
        {/* Bạn có thể thêm classes Tailwind ở đây nếu cần */}
        <div className="overlay pb-4">
          {" "}
          {/* Tailwind class for padding-bottom */}
          <div className="container mx-auto px-4">
            {" "}
            {/* Container class with max-width, auto margins, and padding */}
            <div className="flex flex-wrap -mx-2">
              {" "}
              {/* Flexbox container with negative margin to handle gutters */}
              <div className="w-3/4 px-2">
                {" "}
                {/* Width 75% and padding for gutter */}
                <SeatList />
              </div>
              <div className="w-1/4 px-2">
                {" "}
                {/* Width 25% and padding for gutter */}
                <BookingList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

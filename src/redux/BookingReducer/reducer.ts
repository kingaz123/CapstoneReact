import { Cinema } from "./const";

const ticketList: any[] = [];

export const BookingReducer = (state: any[] = ticketList, action: any) => {
  switch (action.type) {
    case Cinema.Booking: {
      const ticketListBooking = [...state];
      const index = ticketListBooking.findIndex((seatChosen, index) => seatChosen.soGhe === action.payload.soGhe);
      if (index !== -1) {
        ticketListBooking.splice(index, 1);
        state = [...ticketListBooking];
      } else {
        state.push(action.payload);
      }
      return [...state];
    }
    case Cinema.Remove: {
      const ticketListRemove = [...state];
      const indexRemove = ticketListRemove.findIndex((seatRemove, index) => seatRemove.soGhe === action.payload.soGhe);
      if (indexRemove !== -1) {
        ticketListRemove.splice(indexRemove, 1);
        state = [...ticketListRemove];
      }
      return [...state];
    }
    default:
      return state;
  }
}

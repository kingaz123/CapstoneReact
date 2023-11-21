import { Cinema } from "./const";

export const Booking = (payload: any): any => {
  return {
    type: Cinema.Booking,
    payload,
  }
}

export const Remove = (payload: any): any => {
  return {
    type: Cinema.Remove,
    payload,
  }
}



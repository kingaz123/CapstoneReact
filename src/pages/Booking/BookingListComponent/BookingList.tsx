import React, { Component } from "react";
import { connect } from "react-redux";
import { Remove } from "../../../redux/BookingReducer/creator";

interface Props {
  seatListChosen: any[];
  dispatch: any;
}

class BookingList extends Component<Props> {
  tongTien = (): string => {
    const { seatListChosen } = this.props;
    let total = 0;
    for (let i = 0; i < seatListChosen.length; i++) {
      total += seatListChosen[i].gia;
    }
    return total.toLocaleString();
  };

  render() {
    return (
      <div className="text-white text-center pt-5 pl-4">
        <h3 className="uppercase">Danh sách ghế bạn chọn</h3>
        <div className="my-3">
          <div className="flex items-center mt-5">
            {" "}
            {/* 'd-flex' replaced with 'flex' */}
            <button className="gheDuocChon mr-2"></button>{" "}
            {/* 'mr-2' for margin right */}
            <p>Ghế đã đặt</p>
          </div>
          <div className="flex items-center mt-5">
            {" "}
            {/* Flex container with center alignment */}
            <button className="gheDangChon mr-2"></button>{" "}
            {/* 'mr-2' for margin right */}
            <p>Ghế đang chọn</p>
          </div>
          <div className="flex items-center my-5">
            <button className="ghe mr-2"></button>{" "}
            {/* 'mr-2' for margin right */}
            <p>Ghế chưa đặt</p>
          </div>
        </div>
        <div className="w-full">
          <table className="table-auto border-collapse border border-white w-full">
            <thead className="text-white w-full">
              <tr>
                <th scope="col" className="border-b border-r border-white py-2">
                  {" "}
                  {/* Add vertical borders and padding */}
                  Số ghế
                </th>
                <th scope="col" className="border-b border-r border-white py-2">
                  {" "}
                  {/* Add vertical borders and padding */}
                  Giá
                </th>
                <th scope="col" className="border-b border-white py-2">
                  {" "}
                  {/* Last cell doesn't need right border */}
                  Hủy
                </th>
              </tr>
            </thead>
            <tbody className="text-yellow-400">
              {this.props.seatListChosen.map((Ghe: any, index: number) => {
                return (
                  <tr key={index}>
                    <td className="border-r border-white py-2">{Ghe.soGhe}</td>{" "}
                    {/* Add vertical borders and padding */}
                    <td className="border-r border-white py-2">
                      {Ghe.gia.toLocaleString()}
                    </td>{" "}
                    {/* Add vertical borders and padding */}
                    <td className="py-2">
                      <button
                        className="btn"
                        onClick={() => this.props.dispatch(Remove(Ghe))}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-white">
              <tr>
                <td className="border-t border-r border-white py-2">
                  Tổng tiền
                </td>{" "}
                {/* Add vertical borders and padding */}
                <td className="border-t border-r border-white text-yellow-400 py-2">
                  {this.tongTien()}
                </td>
                <td className="py-2"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer: any) => {
  return { seatListChosen: rootReducer.BookingReducer };
};

export default connect(mapStateToProps)(BookingList);

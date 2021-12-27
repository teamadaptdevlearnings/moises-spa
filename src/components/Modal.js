import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, device }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer animated fadeIn">
        {/* <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            &times;
          </button>
        </div> */}
        <div className="title">
          <h4>Device Details</h4>
        </div>
        <div className="body">          
          <table className="devicesDetail">
              <tr>
                  <th>Device Name</th>
                  <th>MAC Address</th>
                  <th>IP Address</th>
              </tr>
              <tr>
                  <td>{device.name}</td>
                  <td>{device.mac_address}</td>
                  <td>{device.ip_address}</td>
              </tr>
          </table>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

import React, { useEffect } from "react";
import "./Modal.css";

function Modal({ setOpenModal, device, mode }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer animated fadeIn">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            &times;
          </button>
        </div>
        <div className="title">
          <h4>Device Details</h4>
        </div>
        {mode === "view" ? (
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
        ) : (
          <div className="body">
            <table className="devicesDetail">
              <tr>
                <th>Device Name</th>
                <th>MAC Address</th>
                <th>IP Address</th>
              </tr>
              <tr>
                <td>
                  <input type="text" defaultValue={device.name} />
                </td>
                <td>
                  <input type="text" defaultValue={device.mac_address} />
                </td>
                <td>
                  <input type="text" defaultValue={device.ip_address} />
                </td>
              </tr>
            </table>
          </div>
        )}
        {/* body */}
        <div className="footer">
          {mode === "view" ? (
            <></>
          ) : (
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Save
            </button>
          )}
        </div>
        {/* footer */}
      </div>
    </div>
  );
}

export default Modal;

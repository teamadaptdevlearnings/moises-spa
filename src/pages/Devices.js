import React, { useState } from 'react'
import JsonData from '../files/devices.json';
import Modal from '../components/Modal.js';
import '../styles/main.css';

 function Devices(){
    const [modalOpen, setModalOpen] = useState(false);
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.name}</td>
                    <td>{info.mac_address}</td>
                    <td>{info.ip_address}</td>
                    <td><button className='purple'>WakeOnLan</button></td>
                    <td><button className='orange'>Reboot</button></td>
                    <td><button className='purple'>Suspend</button></td>
                    <td><button className='red'>Shutdown</button></td>
                    <td><button className='openModalBtn purple'
                        onClick={() => {
                            setModalOpen(true);
                        }}>View
                        </button>
                        {modalOpen && <Modal setOpenModal={setModalOpen} />}
                    </td>                    
                    <td><button className='purple'>Edit</button></td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <h1>Devices</h1>
            <div className='container'>
                <button className='purple'>Wake On Lan all devices</button>
                <button className='purple'>Create devices</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>MAC Address</th>
                        <th>IP Address</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default Devices;
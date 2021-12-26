import React from 'react'
import JsonData from '../files/devices.json';
import '../styles/main.css';

 function Devices(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.name}</td>
                    <td>{info.mac_address}</td>
                    <td>{info.ip_address}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <h1>Devices</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>MAC Address</th>
                        <th>IP Address</th>
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
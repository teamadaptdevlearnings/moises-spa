import React from "react";
import '../styles/main.css';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <table className="tasks">
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                </tr>
                <tr>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Lorem ipsum dolor sit.</td>
                </tr>
                <tr>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Lorem ipsum dolor sit.</td>
                </tr>
                <tr>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Lorem ipsum dolor sit.</td>
                </tr>
                <tr>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Lorem ipsum dolor sit.</td>
                </tr>
            </table>
        </>
    )
}
export default Home;
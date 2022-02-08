import React from "react";

const TableBody = (props) => {
    // return (
    //     <tbody>
    //         <tr>
    //             <td>Charlie</td>
    //             <td>Janitor</td>
    //         </tr>
    //         <tr>
    //             <td>Mac</td>
    //             <td>Bouncer</td>
    //         </tr>
    //         <tr>
    //             <td>Dee</td>
    //             <td>Aspiring actress</td>
    //         </tr>
    //         <tr>
    //             <td>Dennis</td>
    //             <td>Bartender</td>
    //         </tr>
    //     </tbody>
    // )
    // return <tbody/>
    const row = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.Age}</td>
                <td>
                    <button onClick={() => props.removeIndex(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{row}</tbody>
}


export default TableBody

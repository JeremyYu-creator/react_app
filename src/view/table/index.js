import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import { Component } from "react";

class Table extends Component{
    render() {
        const {characterData, removeIndex } = this.props
        console.log(this.props)
        return (
            <table>
                <TableHeader/>
                <TableBody characterData={characterData} removeIndex={removeIndex}/>
            </table>
        )
    }
}
export default Table

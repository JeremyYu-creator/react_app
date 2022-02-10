import React from "react";
import Form from "../../../view/form/form";
import Table from "../../../view/table";
import characterData from "../../../view/table/mockData";

class About extends React.Component {
    state = {
        text: 'hello,react!',
        characterData: characterData,
    }
    // this.state = { // 尝试创建一个状态数据管理的内容，将数据都放置在一个里
    //     characterData: characterData,
    //     timeValue: [],
    //     size: 'small',
    // }
    handleSubmit = (person) => {
        this.setState({
            characterData: [...this.state.characterData,person]
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.text}</div>
                <Table characterData={this.state.characterData} removeIndex={this.removeIndex}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default About

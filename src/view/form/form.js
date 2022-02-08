import React, {Component} from "react";

class Form extends Component {
    defaultData = {
        name: '',
        Age: '',
    }
    state = this.defaultData
    handleChange = (event) => { // 针对当前的input获取到input的event.target
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.defaultData) // 清空
    }
    render() {
        const {name, Age} = this.state
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}/>
                <label htmlFor="Age">Job</label>
                <input
                    type="text"
                    name="Age"
                    id="Age"
                    value={Age}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm}/>
            </form>
        )
    }
}
export default Form

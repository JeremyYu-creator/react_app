import React from "react";
import {DatePicker} from "antd";
import "./index.css"

const {RangePicker} = DatePicker
class DatePickerComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            timeRange: [],
        }
        // this.changeTimePicker = this.changeTimePicker.bind(this) // 切记要绑定当前的this，否则会找不到
    }
    changeTimePicker = async (value, dateString) => {
        await this.setState({
            timeRange: dateString
        },)
        console.log(this.state.timeRange, value)
    }
    render() {
        return (
            <div className={'time-style'}>
                <RangePicker onChange={this.changeTimePicker} showTime/>
            </div>
        )
    }
}
export default DatePickerComponent

import React from "react";
import {Input, Select, Button} from "antd";
import './index.css'

const {Option} = Select


class CombineInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            selectFirstValue: '1',
            selectSecondValue: '1',
        }
    }
    selectList = [
        {
            value: '1',
            name: 'https://',
        },
        {
            value: '2',
            name: 'http://',
        },
    ]
    behindList = [
        {
            value: '1',
            name: '.com',
        },
        {
            value: '2',
            name: '.cn',
        },
        {
            value: '3',
            name: '.jp',
        },
        {
            value: '4',
            name: '.org',
        },
    ]

    selectValue = async (value) => {
        await this.setState({
            selectFirstValue: value
        })
        console.log(this.state.selectFirstValue, value)
    }
    finalSelect = async(value) => {
        await this.setState({
            selectSecondValue: value
        })
        console.log(this.state.selectSecondValue, value)
    }
    beforeSelect = (
        <Select defaultValue={'1'} onChange={this.selectValue}>
            {this.selectList.map((item) => {
                return <Option value={item.value} key={item.name}>{item.name}</Option>
            })}
        </Select>
    )
    afterSelect = (
        <Select defaultValue={'1'} onChange={this.finalSelect}>
            {this.behindList.map((item) => {
                return <Option value={item.value} key={item.name}>{item.name}</Option>
            })}
        </Select>
    )
    wholeValue = () => { // 确定按钮拼接成对应的地址
        const head = this.selectList[Number(this.state.selectFirstValue)-1].name
        const foot = this.behindList[Number(this.state.selectSecondValue)-1].name
        // console.log(`${head}${this.state.inputValue}${foot}`)
        window.open(`${head}${this.state.inputValue}${foot}`,'_blank')
        // return `${head}${this.state.inputValue}${foot}`
    }
    watchInput = async (value) => {
        console.log(value.target.value)
        await this.setState({
            inputValue: value.target.value
        })
    }
    render() {
        return (
            <div className={'box'}>
                <div className={'input-style'}>
                    <Input addonAfter={this.afterSelect} addonBefore={this.beforeSelect} placeholder={'请输入内容'} showCount={true} onChange={this.watchInput}></Input>
                </div>
                <div className={'btn-style'}>
                    <Button type={'primary'} onClick={this.wholeValue}>确定</Button>
                </div>
                {/*<a href={this.wholeValue()}>点击跳转</a>*/}
            </div>
        )
    }
}
export default CombineInput

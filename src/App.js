import React, {Component} from 'react';
import './index.css';
// import 'antd/dist/antd.css';
import First from './view/first';
// import Table from './view/table';
// import Form from "./view/form/form";
import DatePickerComponent from './view/datePicker'
import CombineInput from "./view/combineInput";
import reportWebVitals from './reportWebVitals';
import characterData from './view/table/mockData'
import {Button, version, message,} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import {Link, Routes, Route} from "react-router-dom";
import About from "./components/home/about";
import Sider from './components/aside'
import AntvTable from "./view/antvTable";


class App extends Component{// 父类的写法
    constructor(props) {
        super(props);
        this.state = { // 尝试创建一个状态数据管理的内容，将数据都放置在一个里
            characterData: characterData,
            timeValue: [],
            size: 'small',
        }
    }
    clickMessage = () => { // 注意此处为异步操作
        message.info('点击了')
        this.setState({
            size: 'middle'
        },() => {
            console.log(this.state.size)
        })
    }
    removeIndex = (index) => { // 创建方法也可以写在这里
        const {characterData} = this.state
        this.setState({
            characterData: characterData.filter((characterData,number) => {
                console.log(index, number)
                return number !== index
            })
        })
    }
    // handleSubmit = (person) => {
    //     this.setState({
    //         characterData: [...this.state.characterData,person]
    //     })
    // }
    render() {// 这里进行一些this方法、变量的操作
        return (
            <div className='App'>
                <div className={'main'}>
                    <div className={'left'}>
                        <Sider/>
                    </div>
                    <div className={'right'}>
                        <h1 className='title'>Hello, React!</h1>
                        <Link className={'jump-style'} to={'/about'}>About</Link>
                        <Link className={'jump-style'} to={'/first'}>First</Link>
                        <div className={'btn-style'}>
                            <Button onClick={this.clickMessage} target={'https://www.baidu.com'} danger={true} type={'primary'} shape={'round'} icon={<SearchOutlined />}>点击</Button>
                            当前版本：{version}
                        </div>
                        {/*<First/>*/}
                        {/*<Table characterData={this.state.characterData} removeIndex={this.removeIndex}/>*/}
                        {/*<Form handleSubmit={this.handleSubmit}/>*/}
                        {/*<DatePickerComponent/>*/}
                        {/*<CombineInput/>*/}
                    </div>
                    <div>
                        <div>
                            <Routes>
                                <Route path={'/about'} element={<About/>}/>
                                <Route path={'/first'} element={<First/>}/>
                                {/*<Route path={'/table'} element={<Table/>}/>*/}
                                <Route path={'/combine'} element={<CombineInput/>}/>
                                <Route path={'/date'} element={<DatePickerComponent/>}/>
                                <Route path={'/antvtable'} element={<AntvTable/>}/>
                                {/*<Route/>*/}
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default App

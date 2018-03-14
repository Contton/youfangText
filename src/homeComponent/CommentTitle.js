import React, { Component } from 'react';
import HerderSelect from './ComponentTitleSelect';
import img13 from '../images/13.jpg';

import '../css/titleCss.css';

class ComponentTitle extends Component {
    constructor(props){
        super(props);
        this.state = {
            mouse_over:'0',
            clicked:'1'};
    }

    changeClicked(index){
        this.setState({clicked:index});
    }

    changeMouserOver(index){
        this.setState({mouse_over:index});
    }

    render() {
        return (
            //color: #FF9D00;
            <div className="headerBody">
                <div className="title_logo" left={true} ><img src={img13}/></div>
                <HerderSelect index="1" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true} first={true}>
                    首页</HerderSelect>
                <HerderSelect index="2" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                    热门景点</HerderSelect>
                <HerderSelect index="3" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                    推荐</HerderSelect>
                <HerderSelect index="4" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                    旅游攻略</HerderSelect>
                <HerderSelect index="5" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true} end={true}>
                    游记</HerderSelect>
                <div className="title_find"><input className="title_input" type="text"/><input value="搜索" className="title_button" type="button"></input></div>
                <div className="title_login"><div>登录</div><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span><div>注册</div></div>
            </div>
        );
    }
}

export default ComponentTitle;
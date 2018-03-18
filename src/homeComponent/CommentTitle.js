import React, { Component } from 'react';
import HerderSelect from './ComponentTitleSelect';
import img13 from '../images/13.jpg';
import img14 from '../images/14.jpg';
import classNames from 'classnames/bind';

import styles from '../css/titleCss.css';

let style = classNames.bind(styles);

class ComponentTitle extends Component {
    constructor(props){
        super(props);
        this.state = {
            mouse_over:'0',
            clicked:'1',
            find: 0,
            login:0,
            userName:'',
            userPass:'',
            worry:0
        };
    }

    changeClicked(index){
        this.setState({clicked:index});
    }

    changeMouserOver(index){
        this.setState({mouse_over:index});
    }

    findShow(){
       this.setState({find:1});
    }
    findHidden(){
        this.setState({find:0});
    }
    loginOpen(){
        this.setState({login:1});
    }
    loginClose(){
        this.setState({login:0});
    }
    checkUser(type,event){
        if(type === 'name')
            this.setState({userName:event.target.value});
        if(type === 'pass')
            this.setState({userPass:event.target.value});
    }
    dealLogin(){
        if(this.state.userName === '1234' && this.state.userPass === '1234') {
            this.setState({login: 0});
            this.setState({worry:0});
        }
        else{
            this.setState({worry:1});
        }
    }
    render() {
        let show = style({
            title_input:true,
            inline:true,
            none:false,
        });
        let hidden = style({
            inline:false,
            title_input:true,
            none:true,
        })
        let loginShow = style({
            login_show:true,
            login_all:true,
        })
        let loginHidden = style({
            login_show:false,
            login_all:true,
        })
        let backShow = style({
            login:true
        })
        let backHidden = style({
            login:false
        })
        let worryShow = style({
            login_worry:true,
            login_show:true,
            login_hidden:false
        })
        let worryHidden = style({
            login_worry:true,
            login_show:false,
            login_hidden:true
        })
        return (
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
                <div className="title_find" onMouseOver={this.findShow.bind(this)} onMouseOut={this.findHidden.bind(this)}>
                    <div className="title_button"><img src={img14}/></div>
                    <input className={this.state.find === 1 ? show : hidden} type="text"/>
                </div>
                <div className="title_login"><div onClick={this.loginOpen.bind(this)}>登录</div><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span><div>注册</div></div>
                <div className={this.state.login === 1 ? backShow : backHidden}></div>
                <div className={this.state.login === 1 ? loginShow : loginHidden}>
                    <input className="login_text" type="text" value={this.state.userName} placeholder="请输入邮箱/电话" onChange={this.checkUser.bind(this,'name')}/>
                    <input className="login_text" type="password" placeholder="请输入密码" onChange={this.checkUser.bind(this,'pass')}/>
                    <div className={this.state.worry === 1 ? worryShow : worryHidden}>密码错误</div>
                    <div className="login_forget">忘记密码？</div>
                    <input onClick={this.loginClose.bind(this)} className="login_button" type="button" value="关闭"/>
                    <input className="login_button login_ok" type="button" onClick={this.dealLogin.bind(this)} value="登录"/>
                </div>
            </div>
        );
    }
}

export default ComponentTitle;
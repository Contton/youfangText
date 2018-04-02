import React, { Component } from 'react';
import img13 from '../images/13.jpg';

class ComponentTitle extends React.Component{
    render(){
        return(
            <div className="title2_all">
                <img src={img13}/>
                <div className="list_find float radius">
                    <input className="list_input height" type="text" placeholder="请输入要搜索的大学名称"/>
                    <input type="submit" className="list_submit height background color_white" value="搜索"/>
                </div>
                <div className="title_login title2_login color_white"><div>登录</div><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span><div>注册</div></div>
            </div>
        )
    }
}

export default ComponentTitle
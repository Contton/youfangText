'use strict'
import React from 'react';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';

class CommentBox extends React.Component{
    render(){
        return(
            <div className="register_all">
                <div className="register_picture"><img src={img5}/></div>
                <div className="register_info">
                    <form>
                        <input type="text" className="register_phone register_total" placeholder="请输入你的手机号"/>
                        <button type="button" className="register_get register_total">获取验证码</button>
                        <input type="text" className="register_check register_total" placeholder="请输入你的验证码"/>
                        <input type="text" className="register_check register_total" placeholder="请输入你的密码"/>
                        <input type="text" className="register_check register_total" placeholder="请确认你的密码"/>
                        <button type="button" className="register_get register_total">注册</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CommentBox;
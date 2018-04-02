'use strict'
import React from 'react';

class CommentBox extends React.Component{
    render(){
        return(
            <div className="register">
                    <div className="register_info">
                        <div className="register_title font20">注册</div>
                        <form>
                            <input type="text" className="register_phone register_total" placeholder="请输入你的手机号"/>
                            <button type="button" className="register_get register_total">获取验证码</button>
                            <input type="text" className="register_check register_total" placeholder="请输入你的验证码"/>
                            <input type="password" className="register_check register_total" placeholder="请输入你的密码"/>
                            <input type="password" className="register_check register_total" placeholder="请确认你的密码"/>
                            <button type="button" className="register_get register_total">注册</button>
                        </form>
                    </div>
            </div>
        );
    }
}

export default CommentBox;
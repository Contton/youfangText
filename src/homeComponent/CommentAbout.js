'use strict'
import React from 'react';

class CommentAbout extends React.Component{
    render(){
        return(
            <div className="about_all">
                <div className="about_us">
                    <div className="us_title">关于我们</div>
                    <div className="us_info">游方简介</div>
                    <div className="us_info">联系我们</div>
                    <div className="us_info">合作伙伴</div>
                </div>
                <div className="about_us">
                    <div className="us_title">加入游方</div>
                    <div className="us_info">注册会员</div>
                </div>
                <div className="about_us">
                    <div className="us_title">网站条款</div>
                    <div className="us_info">会员条款</div>
                    <div className="us_info">社区指南</div>
                    <div className="us_info">版权声明</div>
                    <div className="us_info">免费声明</div>
                </div>
                <div className="about_us">
                    <div className="us_title">帮助中心</div>
                    <div className="us_info">新手上路</div>
                    <div className="us_info">使用帮助</div>
                    <div className="us_info">网站地图</div>
                    <div className="us_info">旅行工具</div>
                </div>
            </div>
        );
    }
}

export default CommentAbout;
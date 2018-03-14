'use strict'
import React from 'react';

class CommentAbout extends React.Component{
    render(){
        return(
            <div className="about_all">
                <div className="about_side">
                    <div className="about_us"><a>关于我们</a></div>
                    <div className="about_us"><a>联系我们</a></div>
                    <div className="about_us"><a>加入我们</a></div>
                    <div className="about_us"><a>了解我们</a></div>
                    <div className="about_us"><a>赞助我们</a></div>
                </div>
                <div className="about_middle"></div>
                <div className="about_side">
                    <div className="about_info"><a>网站相关</a></div>
                    <div className="about_info"><a>网站信息</a></div>
                    <div className="about_info"><a>网站修改</a></div>
                    <div className="about_info"><a>网站建议</a></div>
                    <div className="about_info"><a>网站联系</a></div>
                </div>
            </div>
        );
    }
}

export default CommentAbout;
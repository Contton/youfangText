'use strict'
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CommentInfo extends React.Component{
    render(){
        return(
            <div className="info_all">
                <div className="info_user">
                    <div className="info_picture"></div>
                    <div className="info_content">
                        陈小贝<br/><br/>13594515944<br/><br/>关注：<span>34</span><br/><br/>粉丝：<span>23</span>
                    </div>
                </div>
                <Router>
                    <div className="info_part">
                        <div className="info_choose">
                            <Link to="/1"><div className="info_one">个人信息</div></Link>
                            <Link to="/2"><div className="info_one">关注用户</div></Link>
                            <Link to="/3"><div className="info_one">收藏文章</div></Link>
                            <Link to="/4"><div className="info_one">点赞文章</div></Link>
                            <Link to="/5"><div className="info_one">已发文章</div></Link>
                            <Link to="/6"><div className="info_one">粉丝列表</div></Link>
                        </div>
                        <Route path="/1" component={User1}/>
                        <Route path="/2" component={User2}/>
                        <Route path="/3" component={User3}/>
                        <Route path="/4" component={User4}/>
                        <Route path="/5" component={User5}/>
                        <Route path="/6" component={User6}/>
                    </div>
                </Router>
            </div>
        );
    }
}

class User1 extends React.Component{
    render(){
        return(
            <div className="info_router">个人信息</div>
        );
    }
}

class User2 extends React.Component{
    render(){
        return(
            <div className="info_router">关注用户</div>
        );
    }
}

class User3 extends React.Component{
    render(){
        return(
            <div className="info_router">收藏文章</div>
        );
    }
}

class User4 extends React.Component{
    render(){
        return(
            <div className="info_router">点赞文章</div>
        );
    }
}

class User5 extends React.Component{
    render(){
        return(
            <div className="info_router">已发文章</div>
        );
    }
}

class User6 extends React.Component{
    render(){
        return(
            <div className="info_router">粉丝列表</div>
        );
    }
}

export default CommentInfo;
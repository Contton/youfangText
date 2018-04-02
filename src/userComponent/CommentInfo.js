'use strict'
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import classNames from 'classnames/bind';

import styles from '../css/title1Css.css';

let style = classNames.bind(styles);

class CommentInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            choose:1
        };
    }
    chooseClick(index, event){
        this.setState({choose:index});
    }
    render(){
        let orange = style({
            background:true,
            choose_one:true,
            height:true,
            float:true
        })
        let white = style({
            background:false,
            choose_one:true,
            height:true,
            float:true
        })
        return(
            <div className="user">
                <div className="user_all">
                    <div className="user_top width">
                        <img src={img1}/>
                        <div className="user_name width float font_weight space">佟丽娅</div>
                        <div className="user_phone float space">13594515944</div>
                        <div className="user_phone float">关注&nbsp;&nbsp;:&nbsp;&nbsp;<a>34</a></div>
                        <div className="user_phone float">粉丝&nbsp;&nbsp;:&nbsp;&nbsp;<a>157</a></div>
                    </div>
                    <Router>
                        <div className="user_part width">
                            <div className="user_choose width">
                                <Link to="/1"><div className={this.state.choose === 1 ? orange : white} onClick={this.chooseClick.bind(this,1)}>个人信息</div></Link>
                                <Link to="/2"><div className={this.state.choose === 2 ? orange : white} onClick={this.chooseClick.bind(this,2)}>关注用户</div></Link>
                                <Link to="/3"><div  className={this.state.choose === 3 ? orange : white} onClick={this.chooseClick.bind(this,3)}>收藏文章</div></Link>
                                <Link to="/4"><div className={this.state.choose === 4 ? orange : white} onClick={this.chooseClick.bind(this,4)}>点赞文章</div></Link>
                                <Link to="/5"><div className={this.state.choose === 5 ? orange : white} onClick={this.chooseClick.bind(this,5)}>已发文章</div></Link>
                                <Link to="/6"><div className={this.state.choose === 6 ? orange : white} onClick={this.chooseClick.bind(this,6)}>粉丝列表</div></Link>
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
            </div>
        );
    }
}

class User1 extends React.Component{
    render(){
        return(
            <div className="info_router width height">
                <div className="title_one">修改个人资料</div>
                <div className="name_one width">用户昵称&nbsp;&nbsp;：&nbsp;&nbsp;&nbsp;<input className="one_input radius" type="text"/></div>
                <div className="name_one width">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别&nbsp;&nbsp;：&nbsp;&nbsp;&nbsp;
                    <input className="one_radio" type="radio" name="sex" value="man"/>男
                    <input className="one_radio" type="radio" name="sex" value="woman"/>女
                    <input className="one_radio" type="radio" name="sex" value="nosex"/>不明
                </div>
                <div className="name_one width">生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;：&nbsp;&nbsp;&nbsp;<input className="one_date radius" type="date"/></div>
                <div className="name_one width">现居住地&nbsp;&nbsp;：&nbsp;&nbsp;&nbsp;<input className="one_input radius" type="text"/></div>
                <div className="name_one width">曾居住地&nbsp;&nbsp;：&nbsp;&nbsp;&nbsp;<input className="one_input radius" type="text"/></div>
                <div className="name_one width">个性签名&nbsp;&nbsp;：&nbsp;&nbsp;&nbsp;<input className="one_input radius one_person" type="text" placeholder="不得超过55个字"/></div>
            </div>
        );
    }
}

class User2 extends React.Component{
    render(){
        return(
            <div className="info_router width height">
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person float"><img src={img1}/><div>佟丽娅</div></div>
            </div>
        );
    }
}

class User3 extends React.Component{
    render(){
        return(
            <div className="info_router width height">
                <div className="three_one">
                    <img src={img2}/>
                    <div className="three_title">沁心之蓝，漫步“费城”@土耳其费特希耶</div>
                    <div className="three_content">此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希耶，久久不能忘记。此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希</div>
                    <div className="three_info">费特希耶</div>
                    <div className="three_info writer">作者</div>
                    <button className="three_button">顶</button>
                </div>
                <div className="three_one">
                    <img src={img3}/>
                    <div className="three_title">沁心之蓝，漫步“费城”@土耳其费特希耶</div>
                    <div className="three_content">此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希耶，久久不能忘记。此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希</div>
                    <div className="three_info">费特希耶</div>
                    <div className="three_info writer">作者</div>
                    <button className="three_button">顶</button>
                </div>
                <div className="three_one">
                    <img src={img4}/>
                    <div className="three_title">沁心之蓝，漫步“费城”@土耳其费特希耶</div>
                    <div className="three_content">此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希耶，久久不能忘记。此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希</div>
                    <div className="three_info">费特希耶</div>
                    <div className="three_info writer">作者</div>
                    <button className="three_button">顶</button>
                </div>
            </div>
        );
    }
}

class User4 extends React.Component{
    render(){
        return(
            <div className="info_router width height">
                <div className="three_one">
                    <img src={img3}/>
                    <div className="three_title">沁心之蓝，漫步“费城”@土耳其费特希耶</div>
                    <div className="three_content">此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希耶，久久不能忘记。此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希</div>
                    <div className="three_info">费特希耶</div>
                    <div className="three_info writer">作者</div>
                    <button className="three_button">顶</button>
                </div>
                <div className="three_one">
                    <img src={img4}/>
                    <div className="three_title">沁心之蓝，漫步“费城”@土耳其费特希耶</div>
                    <div className="three_content">此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希耶，久久不能忘记。此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希</div>
                    <div className="three_info">费特希耶</div>
                    <div className="three_info writer">作者</div>
                    <button className="three_button">顶</button>
                </div>
                <div className="three_one">
                    <img src={img2}/>
                    <div className="three_title">沁心之蓝，漫步“费城”@土耳其费特希耶</div>
                    <div className="three_content">此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希耶，久久不能忘记。此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希</div>
                    <div className="three_info">费特希耶</div>
                    <div className="three_info writer">作者</div>
                    <button className="three_button">顶</button>
                </div>
            </div>
        );
    }
}

class User5 extends React.Component{
    render(){
        return(
            <div className="info_router width height">
                <div className="three_one">
                    <img src={img2}/>
                    <div className="three_title">沁心之蓝，漫步“费城”@土耳其费特希耶</div>
                    <div className="three_content">此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希耶，久久不能忘记。此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希</div>
                    <div className="three_info">费特希耶</div>
                    <div className="three_info writer">作者</div>
                    <button className="three_button">顶</button>
                </div>
                <div className="three_one">
                    <img src={img4}/>
                    <div className="three_title">沁心之蓝，漫步“费城”@土耳其费特希耶</div>
                    <div className="three_content">此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希耶，久久不能忘记。此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希</div>
                    <div className="three_info">费特希耶</div>
                    <div className="three_info writer">作者</div>
                    <button className="three_button">顶</button>
                </div>
                <div className="three_one">
                    <img src={img3}/>
                    <div className="three_title">沁心之蓝，漫步“费城”@土耳其费特希耶</div>
                    <div className="three_content">此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希耶，久久不能忘记。此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希</div>
                    <div className="three_info">费特希耶</div>
                    <div className="three_info writer">作者</div>
                    <button className="three_button">顶</button>
                </div>
            </div>
        );
    }
}

class User6 extends React.Component{
    render(){
        return(
            <div className="info_router width height">
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
                <div className="two_person"><img src={img1}/><div>佟丽娅</div></div>
            </div>
        );
    }
}

export default CommentInfo;
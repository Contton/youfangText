'use strict'
import React from 'react';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';

class CommentList extends React.Component{
    render(){
        return(
            <div className="list_all">
                <div className="list_find">
                    <input className="list_input" type="text" placeholder="请输入要搜索的内容"/>
                    <input type="submit" className="list_submit" value="搜索"/>
                </div>
                <div className="list_one">
                    <div className="list_title">
                        【尘烟滚滚 风沙走石 ，风里雨里 多彩生机--19天纳米比亚4*4、南非自驾】
                    </div>
                    <div className="list_content">
                        纳米比亚共和国（英语：The Republic of Namibia）位于非洲西南部，北靠安哥拉和赞比亚，东连博茨瓦纳，南接南非。海拔高度为1000-2000米，干旱少雨，属亚热带、半沙漠性气候。因地势较高，气温略低于世界上同纬度的其他地区，终年温和，昼夜温差较大。一年分四季：9月初春，12月入夏，3月秋来，6月冬至。内地夏季白天平均气温20-34°C，偏远的北部和南部地区气温经常高于40°C。
                    </div>
                    <div className="list_picture">
                        <img src={img1}/>
                        <img src={img2}/>
                    </div>
                    <div className="list_time">
                        2015-7-4 13:23
                    </div>
                </div>

                <div className="list_one">
                    <div className="list_title">
                        【印象天竺——Masala India（10座城/深度攻略/265天间隔年的旅行日记）】
                    </div>
                    <div className="list_content">
                        印度极为普通的一种调料，它的配方也随地域的不同有所变化。 最普遍的配方就是加以黑白胡椒、丁香粉、月桂叶粉，长胡椒（叫做Pippali，也可以用辣椒代替）、当地产的孜然、肉桂粉、小豆蔻、肉豆蔻、八角茴香、芫荽籽儿。由于地域不同，当地的其他调料也会被加入。但没有哪一个被认为比其他的更正宗......
                    </div>
                    <div className="list_picture">
                        <img src={img3}/>
                        <img src={img4}/>
                        <img src={img5}/>
                        <img src={img7}/>
                        <img src={img2}/>
                    </div>
                    <div className="list_time">
                        2018-1-4 13:23
                    </div>
                </div>

                <div className="list_one">
                    <div className="list_title">
                        【葡萄牙自驾六日游2017秋——里斯本、辛特拉、罗卡角、波尔图、佩内达吉尔斯国家公园（含干货）】
                    </div>
                    <div className="list_content">
                        包括飞机往返在内整6天——里斯本市区两天半，辛特拉罗卡角一天，波尔图一天半，佩内达吉尔斯国家公园一天。具体参见行程单，行程单可以给脚力不错的暴走团做个参考。穷游穷游，当然是最少的时间跑最多的地方，事实证明，这样的安排需要每天10-12小时的游玩时间......
                    </div>
                    <div className="list_time">
                        2017-8-4 23:13
                    </div>
                </div>

                <div className="list_one">
                    <div className="list_title">
                        【尘烟滚滚 风沙走石 ，风里雨里 多彩生机--19天纳米比亚4*4、南非自驾】
                    </div>
                    <div className="list_content">
                        纳米比亚共和国（英语：The Republic of Namibia）位于非洲西南部，北靠安哥拉和赞比亚，东连博茨瓦纳，南接南非。海拔高度为1000-2000米，干旱少雨，属亚热带、半沙漠性气候。因地势较高，气温略低于世界上同纬度的其他地区，终年温和，昼夜温差较大。一年分四季：9月初春，12月入夏，3月秋来，6月冬至。内地夏季白天平均气温20-34°C，偏远的北部和南部地区气温经常高于40°C......
                    </div>
                    <div className="list_picture">
                        <img src={img8}/>
                        <img src={img4}/>
                        <img src={img5}/>
                        <img src={img1}/>
                        <img src={img6}/>
                    </div>
                    <div className="list_time">
                        2015-7-4 13:23
                    </div>
                </div>

                <div className="list_one">
                    <div className="list_title">
                        【尘烟滚滚 风沙走石 ，风里雨里 多彩生机--19天纳米比亚4*4、南非自驾】
                    </div>
                    <div className="list_content">
                        纳米比亚共和国（英语：The Republic of Namibia）位于非洲西南部，北靠安哥拉和赞比亚，东连博茨瓦纳，南接南非。海拔高度为1000-2000米，干旱少雨，属亚热带、半沙漠性气候。因地势较高，气温略低于世界上同纬度的其他地区，终年温和，昼夜温差较大。一年分四季：9月初春，12月入夏，3月秋来，6月冬至。内地夏季白天平均气温20-34°C，偏远的北部和南部地区气温经常高于40°C......
                    </div>
                    <div className="list_time">
                        2015-7-4 13:23
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentList;
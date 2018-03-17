'use strict'
import React from 'react';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';

class CommentContent extends React.Component{
    render(){
        return(
            <div className="content">
            <div className="content_all">
                <div className="content_left float">
                    <div className="content_traveller width">
                        <div className="traveller_title font20 float">热门博主</div>
                        <div className="traveller_more color_white float">更多博主</div>
                        <div className="traveller_all float width">
                            <img src={img1}/>
                            <div className="traveller_name font18 color_orange">佟丽娅</div>
                            <div className="traveller_intro color_grey">佟丽娅，1984年8月8日出生于新疆伊犁，踏实、诚恳的演好每一个角色。</div>
                        </div>
                    </div>
                    <div className="content_strategy width">
                        <div className="strategy_title font20 float">旅游攻略推荐</div>
                        <div className="strategy_more color_grey float">更多攻略</div>
                        <div className="strategy_one float width">
                            <img src={img2}/>
                            <div className="traveller_name font18 color_orange">洪崖洞</div>
                            <div className="traveller_intro color_grey">洪崖洞，位于重庆直辖市核心商圈解放碑沧白路，以“吊脚楼”风貌为主体。</div>
                        </div>
                        <div className="strategy_one float width">
                            <img src={img2}/>
                            <div className="traveller_name font18 color_orange">洪崖洞</div>
                            <div className="traveller_intro color_grey">洪崖洞，位于重庆直辖市核心商圈解放碑沧白路，以“吊脚楼”风貌为主体。</div>
                        </div>
                    </div>
                </div>
                <div className="content_right float height">
                    <div className="content_popular width">
                        <div className="popular_title font20 float">热门景点</div>
                        <div className="popular_more color_grey float">更多景点</div>
                        <div className="content_places float height width">
                            <div className="content_place float">
                                <img src={img3}/>
                                <div className="traveller_name font18 color_orange">钟楼</div>
                                <div className="traveller_intro color_grey">西安钟楼位于西安市中心，明城墙内东西南北四条大街的交汇处，是中国现存钟楼中形制最大、保存最完整的一座。</div>
                            </div>
                            <div className="content_place float">
                                <img src={img4}/>
                                <div className="traveller_name font18 color_orange">天安门</div>
                                <div className="traveller_intro color_grey">天安门，坐落在中华人民共和国首都北京市的中心，以杰出的建筑艺术和特殊的政治地位为世人所瞩目。</div>
                            </div>
                            <div className="content_place float">
                                <img src={img5}/>
                                <div className="traveller_name font18 color_orange">四面山</div>
                                <div className="traveller_intro color_grey">四面山位于重庆市江津区，拥有世界自然遗产“丹霞地貌”特征。位于双凤村的“牛郎织女”“爱情天梯”被评为中国当代十大经典爱情故事。</div>
                            </div>
                        </div>
                    </div>
                    <div className="content_travels width">
                        <div className="travels_title font20 float">热门游记</div>
                        <div className="travels_more color_white font18 radius float background">写游记</div>
                        <div className="travels_all float">
                            <div className="travels_one width">
                                <div className="one_picture float height"><img src={img6}/></div>
                                <div className="one_title font18 float color_orange">沁心之蓝，漫步“费城”@土耳其费特希耶</div>
                                <div className="one_content color_grey float">此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希耶，久久不能忘记。</div>
                                <div className="one_traveller float">
                                    <div className="one_info float height">费特希耶</div>
                                    <div className="one_info float height writer">作者</div>
                                    <button className="one_button color_white radius float height background">顶</button>
                                </div>
                            </div>
                            <div className="travels_one width">
                                <div className="one_picture float height"><img src={img7}/></div>
                                <div className="one_title font18 float color_orange">日本·北海道 | 赴一场北国春樱之宴</div>
                                <div className="one_content color_grey float">“旅游之前，先上马蜂窝”。 新Slogan喊得如此响亮，死忠粉儿当然要po一篇应季干货以表支持咯！（尽管是时隔近一年的存货 如果已经预定了三四月份 关东 、 关西 的赏樱行程。</div>
                                <div className="one_traveller float">
                                    <div className="one_info float height">北海道</div>
                                    <div className="one_info float height writer">作者</div>
                                    <button className="one_button color_white radius float height background">顶</button>
                                </div>
                            </div>
                            <div className="travels_one width">
                                <div className="one_picture float height"><img src={img8}/></div>
                                <div className="one_title font18 float color_orange">【慕容游记】云南行（10）七彩云南</div>
                                <div className="one_content color_grey float">七天的 云南 之行，自然是少不了去“七彩 云南 ”。这是为什么呢（读niang）? 这不仅仅是因为导游有利益的因素，凭心而论，也确是购买 云南 特产的最佳首选之地（注：今年一月份再一次去 云南）</div>
                                <div className="one_traveller float">
                                    <div className="one_info float height">昆明</div>
                                    <div className="one_info float height color_orange">作者</div>
                                    <button className="one_button color_white radius float height background">顶</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default CommentContent;
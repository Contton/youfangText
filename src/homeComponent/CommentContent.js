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
import $ from 'jquery';

class Traveller extends React.Component{
    render(){
        return(
            <div className="traveller_all float width">
                <img src={img1}/>
                <div className="traveller_name font18 color_orange">{this.props.traveller.name}</div>
                <div className="traveller_intro color_grey">{this.props.traveller.autograph}</div>
            </div>
        );
    }
}
class Strategy extends React.Component{
    render(){
        return(
            <div className="strategy_one float width">
                <img src={img2}/>
                <div className="traveller_name font18 color_orange">{this.props.strategy.name}</div>
                <div className="traveller_intro color_grey">{this.props.strategy.introduce}</div>
            </div>
        )
    }
}
class Place extends React.Component{
    render(){
        return(
            <div className="content_place float">
                <img src={img3}/>
                <div className="traveller_name font18 color_orange">{this.props.place.name}</div>
                <div className="traveller_intro color_grey">{this.props.place.introduce}</div>
            </div>
        );
    }
}
class Article extends React.Component{
    render(){
        return(
            <div className="travels_one width">
                <div className="one_picture float height"><img src={img6}/></div>
                <div className="one_title font18 float color_orange">{this.props.article.title}</div>
                <div className="one_content color_grey float">{this.props.article.content}</div>
                <div className="one_traveller float">
                    <div className="one_info float height">{this.props.article.place}</div>
                    <div className="one_info float height writer">{this.props.article.author}</div>
                    <button className="one_button color_white radius float height background">顶</button>
                </div>
            </div>
        );
    }
}

class CommentContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mouseOut:false,
            traveller:[],
            strategy:[],
            place:[],
            article:[]
        };
    }
    componentWillMount(){
        this.getInfo();
    }
    getInfo(){
        var traveller = "{\"picture\":\"img1\", \"name\":\"佟丽娅\", \"autograph\":\"佟丽娅，1984年8月8日出生于新疆伊犁，踏实、诚恳的演好每一个角色。\"}";
        var travellerObj = JSON.parse(traveller);
        this.setState({traveller:travellerObj});
        var strategy = "[{\"picture\":\"img2\", \"name\":\"洪崖洞1\", \"introduce\":\"11洪崖洞，位于重庆直辖市核心商圈解放碑沧白路，以“吊脚楼”风貌为主体。\"},"
                        +"{\"picture\":\"img2\", \"name\":\"洪崖洞2\", \"introduce\":\"22洪崖洞，位于重庆直辖市核心商圈解放碑沧白路，以“吊脚楼”风貌为主体。\"}]";
        var strategyObj = JSON.parse(strategy);
        this.setState({strategy:strategyObj});
        var place = "[{\"picture\":\"img3\", \"name\":\"钟楼\", \"introduce\":\"西安钟楼位于西安市中心，明城墙内东西南北四条大街的交汇处，是中国现存钟楼中形制最大、保存最完整的一座。\"},"
                    +"{\"picture\":\"img4\", \"name\":\"天安门\", \"introduce\":\"天安门，坐落在中华人民共和国首都北京市的中心，以杰出的建筑艺术和特殊的政治地位为世人所瞩目。\"},"
                    +"{\"picture\":\"img5\", \"name\":\"四面山\", \"introduce\":\"四面山位于重庆市江津区，拥有世界自然遗产“丹霞地貌”特征。位于双凤村的“牛郎织女”“爱情天梯”被评为中国当代十大经典爱情故事。\"}]";
        var placeObj = JSON.parse(place);
        this.setState({place:placeObj});
        var article = "[{\"picture\":\"img6\", \"title\":\"沁心之蓝，漫步“费城”@土耳其费特希耶\", \"content\":\"此“费城”非彼费城。这里说的“费城”并不是美国著名的费城，而是土耳其南部一个名叫费特希耶（Fethiye）的小镇。 一个“死海”边上的，蓝的沁人心脾的小镇。离开费特希耶，久久不能忘记。\", \"place\":\"费特希耶\", \"author\":\"作者\"},"
                        +"{\"picture\":\"img7\", \"title\":\"日本·北海道 | 赴一场北国春樱之宴\", \"content\":\"“旅游之前，先上马蜂窝”。 新Slogan喊得如此响亮，死忠粉儿当然要po一篇应季干货以表支持咯！（尽管是时隔近一年的存货 如果已经预定了三四月份 关东 、 关西 的赏樱行程。\", \"place\":\"北海道\", \"author\":\"作者\"},"
                        +"{\"picture\":\"img8\", \"title\":\"【慕容游记】云南行（10）七彩云南\", \"content\":\"“七天的 云南 之行，自然是少不了去“七彩 云南 ”。这是为什么呢（读niang）? 这不仅仅是因为导游有利益的因素，凭心而论，也确是购买 云南 特产的最佳首选之地（注：今年一月份再一次去 云南）\", \"place\":\"昆明\", \"author\":\"作者\"}]";
        var articleObj = JSON.parse(article);
        this.setState({article:articleObj});
    }
    render(){
        return(
            <div className="content">
                <div className="content_all">
                    <div className="content_left float">
                        <div className="content_traveller width">
                            <div className="traveller_title font20 float">热门博主</div>
                            <div className="traveller_more color_white float">更多博主</div>
                            <Traveller traveller={this.state.traveller}/>
                        </div>
                        <div className="content_strategy width">
                            <div className="strategy_title font20 float">旅游攻略推荐</div>
                            <div className="strategy_more color_grey float">更多攻略</div>
                            <Strategy strategy={this.state.strategy[0]}/>
                            <Strategy strategy={this.state.strategy[1]}/>
                        </div>
                    </div>
                    <div className="content_right float height">
                        <div className="content_popular width">
                            <div className="popular_title font20 float">热门景点</div>
                            <div className="popular_more color_grey float">更多景点</div>
                            <div className="content_places float height width">
                                <Place place={this.state.place[0]}/>
                                <Place place={this.state.place[1]}/>
                                <Place place={this.state.place[2]}/>
                            </div>
                        </div>
                        <div className="content_travels width">
                            <div className="travels_title font20 float">热门游记</div>
                            <div className="travels_more color_white font18 radius float background">写游记</div>
                            <div className="travels_all float">
                                <Article article={this.state.article[0]}/>
                                <Article article={this.state.article[1]}/>
                                <Article article={this.state.article[2]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentContent;
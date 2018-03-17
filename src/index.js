import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/titleCss.css';
import './css/pictureCss.css';
import './css/contentCss.css';
import './css/infoCss.css';
import './css/registerCss.css';
import './css/listCss.css';
import './css/aboutCss.css';
import './css/semantic-ui/Semantic-UI-master/dist/semantic.min.css';
import CommentBox from './listComponent/CommentBox';

ReactDOM.render(
    <CommentBox/>,
    document.getElementById('root')
);

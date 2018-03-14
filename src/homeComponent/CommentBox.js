'use strict'
import React from 'react';
import CommentPictures from './CommentPictures';
import CommentTitle from './CommentTitle';
import CommentContent from './CommentContent';
import CommentAbout from './CommentAbout';

class CommentBox extends React.Component{
    render(){
        return(
            <div className="box_all">
                <CommentTitle/>
                <CommentPictures/>
                <CommentContent/>
                <CommentAbout/>
            </div>
        );
    }
}

export default CommentBox;
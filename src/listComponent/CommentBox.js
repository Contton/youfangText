'use strict'
import React from 'react';
import CommentList from './CommentList';
import CommentTitle from '../homeComponent/CommentTitle';
import CommentAbout from '../homeComponent/CommentAbout';

class CommentBox extends React.Component{
    render(){
        return(
            <div>
                <CommentTitle/>
                <CommentList/>
                <CommentAbout/>
            </div>
        );
    }
}

export default CommentBox;
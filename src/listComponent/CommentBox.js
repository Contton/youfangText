'use strict'
import React from 'react';
import CommentList from './CommentList';
import CommentTitle from '../homeComponent/CommentTitle';

class CommentBox extends React.Component{
    render(){
        return(
            <div>
                <CommentTitle/>
                <CommentList/>
            </div>
        );
    }
}

export default CommentBox;
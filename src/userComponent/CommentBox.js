'use strict'
import React from 'react';
import CommentInfo from './CommentInfo';
import ComponentTitle from '../homeComponent/CommentTitle';
import ComponentAbout from '../homeComponent/CommentAbout';

class CommentBox extends React.Component{
    render(){
        return(
            <div>
                <ComponentTitle/>
                <CommentInfo/>
                <ComponentAbout/>
            </div>
        );
    }
}

export default CommentBox;
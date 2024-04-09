import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';


import '../../resources/css/post.css';
import '../../resources/css/font.css';

class PostText extends Component {
 
    render() {
        return (
                <Container className="bottom-border" style={{padding: "50px 100px 50px 60px"}} fluid >
                    <h1 className="post-standard-header">{this.props.title}</h1>
                    <p className="post-standard-text">{this.props.text}</p>
                </Container>
        );
    };
}

export default PostText;



import React,{Component} from 'react';

import '../resources/css/slideShow.css';
import Post from './fragments/Post';

//<i class="large bars icon"></i>

class Project extends Component{
    constructor (props){
        super(props);
        this.state = {
            alt: [
                "Project image Vasagatan",
                "Project image Vasterbron",
                "Project image Vasabron",
                "Project image Slussen"
            ],
            images: [
                {
                    img: require("../resources/img/project/vasagatan.jpg"),
                    imgWebP: require("../resources/img/project/vasagatan.WebP"),
                },
                {
                    img: require("../resources/img/project/slussen.jpg"),
                    imgWebP: require("../resources/img/project/slussen.WebP"),
                },
                {
                    img: require("../resources/img/project/vasabron.jpg"),
                    imgWebP: require("../resources/img/project/vasabron.WebP"),
                },
                {
                    img: require("../resources/img/project/vasterbron.jpg"),
                    imgWebP: require("../resources/img/project/vasterbron.WebP"),
                },
            ],
            
        }
    }
    render(){
        return(<div>
            <Post title={this.props.content.vasagatanTitle} image={this.state.images[0]} text={this.props.content.vasagatanText}  imagePosition="left" imgText={this.props.content.imgText[0]} alt={this.state.alt[0]}/>
            <Post title={this.props.content.westBridgeTitle} image={this.state.images[3]} text={this.props.content.westBridgeText}  imagePosition="right" alt={this.state.alt[1]}/>
            <Post title={this.props.content.vasaBridgeTitle} image={this.state.images[2]} text={this.props.content.vasaBridgeText}  imagePosition="left" alt={this.state.alt[2]}/>
            <Post title={this.props.content.slussenTitle} image={this.state.images[1]} text={this.props.content.slussenText}  imagePosition="left" imgText={this.props.content.imgText[1]} alt={this.state.alt[3]}/>
        </div>);
    };
}

export default Project;
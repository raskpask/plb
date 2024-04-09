import React,{Component} from 'react';
import MobilePost from './fragments/MobilePost';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class About extends Component{
    constructor (props){
        super(props);
        this.state = {
            alt: [
                "Trust image",
                "Core Values image",
                "Planning image",
                "Safety image"
            ],
            altSigil: "UC sigil highest rating",
            images: [
                {
                    img: require("../../resources/img/about/mobileHandshake.jpg"),
                    imgWebP: require("../../resources/img/about/mobileHandshake.WebP"),
                },
                {
                    img: require("../../resources/img/about/mobileTrust.jpg"),
                    imgWebP: require("../../resources/img/about/mobileTrust.WebP"),
                },
                {
                    img: require("../../resources/img/about/mobilePlaning.jpg"),
                    imgWebP: require("../../resources/img/about/mobilePlaning.WebP"),
                },
                {
                    img: require("../../resources/img/about/mobileHelmet.jpg"),
                    imgWebP: require("../../resources/img/about/mobileHelmet.WebP"),
                },
            ],
        }
    }

    render(){
        return (<div>
            <MobilePost image={this.state.images[0]} state="image" alt={this.state.alt[0]} altsigil={this.state.altSigil}/>
            <MobilePost title={this.props.content.listFactsTitle} list={this.props.content.listFacts}  sigil={this.props.sigil} />
            <MobilePost image={this.state.images[1]} state="image" alt={this.state.alt[1]}/>
            <MobilePost title={this.props.content.listValuesTitle}  list={this.props.content.listValues}/>
            <MobilePost image={this.state.images[2]} state="image" alt={this.state.alt[2]}/>
            <MobilePost title={this.props.content.listIdeaTitle} list={this.props.content.listIdea}/>
            <MobilePost image={this.state.images[3]} state="image" alt={this.state.alt[3]}/>
            <MobilePost text={this.state.textGallerySlussen} title={this.props.content.listSystemTitle}  list={this.props.content.listSystem}/>
        </div>);

     };

}

export default About;
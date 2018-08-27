import React, { Component } from 'react';
import Post from './Post';

class Gallery extends Component {

    render(){
        let gallery = [];
        let componentList = [];

        if (this.props.filter === 'none') {
            gallery = this.props.data;
        }
        if(this.props.filter === 'digital') {
            gallery = this.props.data.filter(obj => obj.medium === "Digital");
        }
        if (this.props.filter === 'mixed') {
            gallery = this.props.data.filter(obj => obj.medium === "Mixed Media");
        }
        if (this.props.filter === 'traditional') {
            gallery = this.props.data.filter(obj => obj.medium === "Pencil on Paper" || obj.medium === "Acrylic on Canvas" || obj.medium === "Pen on Paper");
        }
        if (this.props.filter === 'featured') {
            gallery = this.props.data.filter(obj => obj.featured);
        }
        if (this.props.filter === 'sketch') {
            gallery = this.props.data.filter(obj => obj.medium === "Sketch");
        }

        for (let i = 0; i < gallery.length; i++) {
            componentList.push(<Post item={gallery[i]} toggleLightBox={this.props.toggleLightBox} imageId={gallery[i].id} key={i} />);
        }

        return(
            <main className="gallery">
            {componentList}
            </main>
        )
    }
}

export default Gallery;
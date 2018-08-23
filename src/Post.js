import React, {Component} from 'react';


class Post extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.props.toggleLightBox(this.props.imageId);
    }
    render() {
        return(
            <div className={'post ' + this.props.item.date[1]} onClick={this.handleClick}>
            <div className='postRow'>
                <img src={this.props.item.image} alt={this.props.item.description} />
                <div className="tag">
                    <h2><span className="post-title">{this.props.item.title}</span>, <span className="post-date">{this.props.item.date[1]}</span></h2>
                    <h3>{this.props.item.medium}</h3>
                </div>
            </div>
            </div>
        )
    }
}

export default Post;
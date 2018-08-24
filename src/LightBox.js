import React, { Component } from 'react';


class LightBox extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.props.hideLightBox();
    }

    render() {
        return (
            <div className={'lightbox'}  style = {this.props.style} onClick={this.handleClick}>
                <div className='postRow'>
                    <img src={this.props.item.image} alt={this.props.item.description} />
                    <div className="lightbox-info">
                        <h2>{this.props.item.title}</h2>
                        <h3>{this.props.item.date[0]}</h3>
                        <p>{this.props.item.description} </p>
                        <p>{this.props.item.commentary}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LightBox;
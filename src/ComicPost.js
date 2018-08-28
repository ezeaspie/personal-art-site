import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ComicPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isListOpen : false,
        }
    }

    render() {
        const volumeList = [];

        for (let i = 0; i < this.props.item.volumes.length; i++) {
            volumeList.push(
                <Link 
                to='/comic-list/:series/:volume/:page'
                params={{ 
                    series: this.props.item.series,
                    volume: i,
                    page: 0,
                    }}>
                <li>{this.props.item.volumes[i].title}</li>
                </Link>
            );
        }

        return (
            <div className="comic-listing">
                <div className = "comic-main-info">
                <img className="comic-image" src={this.props.item.coverImage} alt={this.props.item.series}/>
                    <div className="comic-description-info">
                        <h2>{this.props.item.series}</h2>
                        <h3>{this.props.item.description}</h3>
                    </div>
                </div>
                    {
                        !this.state.isListOpen
                            ? 
                            <div className="comic-volumes">
                            <h2 onClick = {() => {this.setState({isListOpen : true})}}>Show Volumes</h2>
                                <ul className="comic-volume-list collapsed">
                                    {volumeList}
                                </ul>
                            </div>
                            : 
                            <div className="comic-volumes">
                            <h2 onClick={() => { this.setState({ isListOpen: false }) }}>Hide Volumes</h2>
                                <ul className="comic-volume-list uncollapsed">
                                    {volumeList}
                                </ul>
                            </div>
                    }
                    
                </div>
        )
    }
}

export default ComicPost;
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
            let url= `reader/${this.props.item.series}/${i}/0`;
            volumeList.push(
                <Link key={`Volume${this.props.item.series}${i}`} 
                to={url}
                >
                <li>{this.props.item.volumes[i].title}</li>
                </Link>
            );
        }
        let noClickHoverStyle = {cursor:'auto', backgroundColor: '#fff'};

        if(!this.props.item.volumes.length){
            volumeList.push(<li key={`Volume${this.props.item.series}doesNotExist`} style={noClickHoverStyle}>No Volumes Avaliable, check back soon!</li>);
        }

        let description = this.props.item.description;

        function createMarkup() {
            return { __html: description };
        }

        return (
            <div className="comic-listing">
                <div className = "comic-main-info">
                <img className="comic-image" src={this.props.item.coverImage} alt={this.props.item.series}/>
                    <div className="comic-description-info">
                        <h2>{this.props.item.series}</h2>
                        <div className="comic-description" 
                        dangerouslySetInnerHTML={createMarkup()} />
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
import React, { Component } from 'react';
import comicList from './data/comicData';
import { Redirect } from 'react-router';

class Page extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect:false,
            url: '',
        }
        this.showNewPage = this.showNewPage.bind(this);
    }

    showNewPage = (prevOrNext) => {
        let url = '';
        let currentPage = this.props.match.params.page;

        if (prevOrNext) {
            if (currentPage + 1 >= 0) {
                currentPage++;
            }
        }
        else {
            if(currentPage - 1 >= 0){
                currentPage--;
            }
        }
        url = `/reader/${this.props.match.params.series}/${this.props.match.params.volume}/${currentPage}`
        this.setState({ url: url }, () => { this.setState({ redirect: true }) });
    }

    render() {
        let seriesId = 0;
        if(this.props.match.params.series === "Harbour: The Heroic Villainess") {
            seriesId = 1;
        } 
        
        let activePage = this.props.match.params.page;
        let currentVolume = this.props.match.params.volume;

        let imgURL = comicList[seriesId].volumes[currentVolume].pages[activePage];

        let volumetitle = comicList[seriesId].volumes[currentVolume].title;

        if (this.state.redirect) {
            return <Redirect push to={this.state.url} />;
        }

        return (
            <div className="reader">
                <h2>{this.props.match.params.series}</h2>
                <h3>{volumetitle}</h3>
                <div className="comic-page-main">
                    <button className = "next" onClick={() => { this.showNewPage(true) }}>Next Page</button>
                    <button className = "previous" onClick={() => { this.showNewPage(false) }}>Previous Page</button>
                    <img src={imgURL} alt={this.props.match.params.series + " Page " + {activePage}} />
                </div>
                <p>Page {Number(activePage) + 1} of {comicList[seriesId].volumes[currentVolume].pages.length}</p>
            </div>
        );
    }
}

export default Page;
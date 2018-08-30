import React, { Component } from 'react';
import comicList from './data/comicData';
import { Redirect } from 'react-router';

class Page extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect:false,
            url: '',
            showNewVolumeAlert:false,
            prevOrNextVolume: false,
        }
        this.showNewPage = this.showNewPage.bind(this);
    }

    showNewPage = (prevOrNext) => {
        let shouldIrender = false;
        let url = '';
        let seriesId = 0;
        if (this.props.match.params.series === "Harbour: The Heroic Villainess") {
            seriesId = 1;
        }
        if (this.props.match.params.series === "SweetWater") {
            seriesId = 3;
        }
        let pageAmount = comicList[seriesId].volumes[this.props.match.params.volume].pages.length;
        let currentPage = Number(this.props.match.params.page);

        if (prevOrNext) {
            if (currentPage + 1 < pageAmount) {
                currentPage++;
                shouldIrender = true;
            }
        }
        else {
            if(currentPage - 1 >= 0){
                currentPage--;
                shouldIrender = true;
            }
        }
        url = `/reader/${this.props.match.params.series}/${this.props.match.params.volume}/${currentPage}`
        
        if(shouldIrender){
            this.setState({ url: url , redirect:true});
        } 

    }

    showAlert = (prevOrNext) => {
        this.setState({ prevOrNextVolume: prevOrNext , showNewVolumeAlert:true });
    }

    redirectToNewVolume = () => {
        let url = '';
        if (this.state.prevOrNextVolume) {//If going up a volume
            url = `/reader/${this.props.match.params.series}/${Number(this.props.match.params.volume) + 1}/0`
        }
        else {
            url = `/reader/${this.props.match.params.series}/${Number(this.props.match.params.volume) - 1}/0`
        }
        this.setState({ url: url, redirect: true });
    }

    render() {
        let currentPage = Number(this.props.match.params.page);
        let seriesId = 0;
        if(this.props.match.params.series === "Harbour: The Heroic Villainess") {
            seriesId = 1;
        } 
        if(this.props.match.params.series === "SweetWater") {
            seriesId = 3;
        }
        let pageAmount = comicList[seriesId].volumes[this.props.match.params.volume].pages.length;
        let activePage = this.props.match.params.page;
        let currentVolume = this.props.match.params.volume;
        let imgURL = comicList[seriesId].volumes[currentVolume].pages[activePage];
        let volumetitle = comicList[seriesId].volumes[currentVolume].title;

        if (this.state.redirect) {
            return <Redirect push to={this.state.url} />;
        }

        let nextButton = <button className="next" onClick={() => { this.showNewPage(true) }}>Next Page</button>
        let prevButton = <button className="previous" onClick={() => { this.showNewPage(false) }}>Previous Page</button>

        if (currentPage + 1 >= pageAmount && comicList[seriesId].volumes[Number(this.props.match.params.volume) + 1] !== undefined) {
            nextButton = <button className="next" onClick={() => { this.showAlert(true) }}>Next Volume</button>
        }
        else if (currentPage - 1 < 0 && comicList[seriesId].volumes[Number(this.props.match.params.volume) - 1] !== undefined) {
            prevButton = <button className="previous" onClick={() => { this.showAlert(false) }}>Previous Volume</button>

        }

        return (
            <div className="reader">
            {
                this.state.showNewVolumeAlert
                ?<div className="dialog-box">
                    {
                        this.state.prevOrNextVolume
                        ? <h2>You have reached the end of this volume.</h2>
                        : <h2>Would you like to go to the previous volume?</h2>
                    }
                    <div className="button-container">
                        <button className="nextVol" onClick={() => {this.redirectToNewVolume()}}>{this.state.prevOrNextVolume ? "Next Volume" : "Previous Volume"}</button>
                        <button className="cancel" onClick = {() => {this.setState({showNewVolumeAlert: false})}}>Cancel</button>
                    </div>
                </div>
                :<div className="dialog-box" style={{display:"none", padding:"0"}} />
            }
                <h2>{this.props.match.params.series}</h2>
                <h3>{volumetitle}</h3>
                <div className="comic-page-main">
                    {nextButton}
                    {prevButton}
                    <img src={imgURL} alt={this.props.match.params.series + " Page " + activePage} />
                </div>
                <p>Page {Number(activePage) + 1} of {comicList[seriesId].volumes[currentVolume].pages.length}</p>
            </div>
        );
    }
}

export default Page;
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Post from './Post';
import LightBox from './LightBox';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import artList from './data/artData';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPiece : artList[0],
      isLightBoxActive : false,
    }

    this.toggleLightBox = this.toggleLightBox.bind(this);
  }

  toggleLightBox = (imageId = undefined) => {
    if (imageId !== undefined) {
      let found = artList.find((piece) => {
        return piece.id === imageId;
      });
      this.setState({selectedPiece : found});
    }
      this.setState({isLightBoxActive : true});
  }

  hideLightBox = () => {
    this.setState({ isLightBoxActive: false });
  }



  render() {
    let gallery = [];

    for (let i = 0; i < artList.length; i++) {
      gallery.push(<Post item={artList[i]} toggleLightBox = {this.toggleLightBox} imageId = {i} key={i} />);
    }
    let hideStyles = { 
      opacity: "0",
      zIndex: "-1",
    };

    let showStyles = { 
      opacity: '1',
      zIndex: '1', 
    };
    return(
      <Router>
      <div className="App">
        {
          this.state.isLightBoxActive 
          ? <LightBox item = {this.state.selectedPiece} hideLightBox={this.hideLightBox} style={showStyles} />
          : <LightBox item = {this.state.selectedPiece} hideLightBox={this.hideLightBox} style={hideStyles} />
        }
        <Header />
        <Main data={artList} toggleLightBox={this.toggleLightBox} />
        <Footer />
      </div>
      </Router>
    )
  }
}

export default App;

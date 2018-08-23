import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Post from './Post';
import LightBox from './LightBox';
import Header from './Header';
import Main from './Main';


const artList = [
  {
    image: 'https://pre00.deviantart.net/e5a6/th/pre/i/2018/221/3/3/julie_patootie_by_ezeaspie-dcjp0zc.png',
    title: 'Julie Patootie',
    description: 'A stylized version of my comic style, with a focus on bold colors, heavy lines, and half-tone shading.',
    commentary: 'Lorem ipsum blah blah blah superfruit hahaha welcome to superfruit todays episode is going to be all about me thats not true',
    date: ["14 August 2018", "2018"],
    categories: ['mixed', 'pop'],
    featured: true,
    medium: "Mixed Media",
    id: 0,
  },
  {
    image: 'https://pre00.deviantart.net/70c0/th/pre/i/2017/346/1/6/maxine_rubin_by_ezeaspie-dbwj6m0.png',
    title: 'Maxine Rubin',
    description: 'A digital concept portrait for a character that focused on more detailed shading.',
    commentary: 'Lorem ipsum blah blah blah superfruit hahaha welcome to superfruit todays episode is going to be all about me thats not true',
    date: ["14 August 2018", "2018"],
    categories: ['digital', 'pop', 'harbour'],
    featured: true,
    medium: "Digital",
    id: 1,
  },
  {
    image:'https://pre00.deviantart.net/4750/th/pre/i/2018/226/c/e/clarissa_s_regrets_by_ezeaspie-dck4kp1.png',
    title: "Clarissa's Regrets",
    description: "Another stylized portrait of a character with Blonde Hair and a distressed look.",
    commentary: "I went again with the pop-art inspired look, using another closeup portrait. I used bold colors once more and tried to restrict myself to using primary colors. For the half-tones, I used a different method than in the 'Julie Patootie' piece.",
    date: ["16 August 2018", "2018"],
    categories: ['mixed', 'pop', 'harbour'],
    featured: false,
    medium: 'Mixed Media',
    id: 2,
  },
  {
    image:'https://pre00.deviantart.net/606b/th/pre/i/2018/233/e/2/odessa_by_ezeaspie-dafnbal.jpg',
    title: "Odessa",
    description: "A portrait of a woman with stylized hair",
    commentary: "One of my first digital pieces. The lines were made on pencil and paper before being transferred into digital form and painted with bold and expressive colors.",
    date: ["16 August 2018", "2018"],
    categories: ['mixed'],
    featured: true,
    medium: 'Mixed Media',
    id: 3,
  }
]

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
      </div>
      </Router>
    )
  }
}

export default App;

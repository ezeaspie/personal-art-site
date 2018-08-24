import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Post from './Post';
import LightBox from './LightBox';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


const artList = [
  {
    image: '/images/JuliePatootie.jpg',
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
    image: '/images/MaxineRubin.jpg',
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
    image:'/images/ClarissasRegrets.jpg',
    title: "Clarissa's Regrets",
    description: "Another stylized portrait of a character with Blonde Hair and a distressed look.",
    commentary: "I went again with the pop-art inspired look, using another closeup portrait. I used bold colors once more and tried to restrict myself to using primary colors. For the half-tones, I used a different method than in the 'Julie Patootie' piece.",
    date: ["16 August 2018", "2018"],
    categories: ['mixed', 'pop', 'harbour'],
    featured: true,
    medium: 'Mixed Media',
    id: 2,
  },
  {
    image:'https://78.media.tumblr.com/ee3d313fccf37e3d760f462f98133b24/tumblr_p7ct00zAFY1x9h01jo1_540.jpg',
    title: "Odessa",
    description: "A portrait of a woman with stylized hair",
    commentary: "One of my first digital pieces. The lines were made on pencil and paper before being transferred into digital form and painted with bold and expressive colors.",
    date: ["May 2018", "2016"],
    categories: ['mixed'],
    featured: true,
    medium: 'Mixed Media',
    id: 3,
  },
  {
    image: '/images/HarbourCover1.jpg',
    title: "Harbour Cover Concept",
    description: "An early concept of a cover for a novel I am writing.",
    commentary: "Using the background color and bold lines, I attempted to create a strong contrasting and attention grabbing cover.",
    date: ["May 2018", "2017"],
    categories: ['digital'],
    featured: true,
    medium: 'Digital',
    id: 4,
  },
  {
    image: '/images/Lost.jpg',
    title: "Lost",
    description: "An image of a blue haired woman with tape around her mouth.",
    commentary: "The first pure digital piece I did, Lost was mostly an attempt to get used to different brushes and blending styles of the computer.",
    date: ["December 2016", "2016"],
    categories: ['digital'],
    featured: false,
    medium: 'Digital',
    id: 5,
  },
  {
    image: '/images/SR.jpg',
    title: "S.R",
    description: "A digital painting depicting a woman in a mask.",
    commentary: "In celebration of Haloween, I decided to make a painting that paid some homage to Mexico's Day of the Dead. I created the lineart digitally, but painted over the lines in the end - something I hadn't done until here. It created this stylized portrait that looks less jarring than previous ones.",
    date: ["October 31, 2017", "2017"],
    categories: ['digital'],
    featured: true,
    medium: 'Digital',
    id: 6,
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
        <Footer />
      </div>
      </Router>
    )
  }
}

export default App;

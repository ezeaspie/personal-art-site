import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Gallery from './Gallery';
import ComicList from './ComicList';
import Reader from './Reader';

class Main extends Component {
    render() {
        return(
                <Switch>
                    <Route exact path='/' component={props => <Gallery data={this.props.data} filter={'featured'} toggleLightBox={this.props.toggleLightBox} {...props}/>} />
                    <Route exact path='/digital-art' component={props => <Gallery data={this.props.data} filter={'digital'} toggleLightBox={this.props.toggleLightBox} {...props} />} />
                    <Route exact path='/mixed-media-art' component={props => <Gallery data={this.props.data} filter={'mixed'} toggleLightBox={this.props.toggleLightBox} {...props} />} />
                    <Route exact path='/traditional-art' component={props => <Gallery data={this.props.data} filter={'traditional'} toggleLightBox={this.props.toggleLightBox} {...props} />} />
                    <Route exact path='/all' component={props => <Gallery data={this.props.data} filter={'none'} toggleLightBox={this.props.toggleLightBox} {...props} />} />
                    <Route exact path='/sketchbook-art' component={props => <Gallery data={this.props.data} filter={'sketch'} toggleLightBox={this.props.toggleLightBox} {...props} />} />
                    <Route exact path='/comic-list' component={props => <ComicList data={this.props.data} filter={'sketch'} toggleLightBox={this.props.toggleLightBox} {...props} />}/>
                    <Route path='/reader' component={props => <Reader {...props} />} />
                </Switch>
        )
    }
}

export default Main;
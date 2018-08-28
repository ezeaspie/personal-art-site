import React, { Component } from 'react';
import ComicPost from './ComicPost';
import comicList from './data/comicData';

class ComicList extends Component {

    render() {
        let componentList = [];

        for (let i = 0; i < comicList.length; i++) {
            componentList.push(<ComicPost item={comicList[i]} key={i} />);
        }

        return (
            <main className="gallery">
            {componentList}
            </main>
        )
    }
}

export default ComicList;
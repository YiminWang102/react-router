import React from 'react';
import axios from 'axios';
import Albums from './Albums'
import Songs from './Songs'


class Artist extends React.Component {
    constructor() {
        super()
    }
    componentDidMount () {
        const artistId = this.props.routeParams.artistId;
        this.props.getArtistInfo(artistId)
    }

    render() {
        return (
            <div>
            <h3>{this.props.name}</h3>
            <Albums albums={this.props.artistAlbums} />
            <Songs songs={this.props.songs} currentSong={this.props.currentSong} isPlaying={this.props.isPlaying} toggleOne={this.props.toggleOne} />
            </div>
        )
    }
}

export default Artist;
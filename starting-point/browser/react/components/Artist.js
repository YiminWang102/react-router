import React from 'react';
import axios from 'axios';
import Albums from './Albums'
import Songs from './Songs'
import {Link} from 'react-router'


class Artist extends React.Component {
    constructor() {
        super()
    }
    componentDidMount () {
        const artistId = this.props.routeParams.artistId;
        this.props.getArtistInfo(artistId)
    }

    render() {
      const selectedArtist = this.props.name;
      const children = this.props.children;
      const songs = this.props.songs;
      const currentSong = this.props.currentSong;
      const isPlaying = this.props.isPlaying;
      const toggleOne = this.props.toggleOne;

      const propsToPassToChildren = {
        albums: this.props.albums,
        selectAlbum: this.props.selectAlbum,
        songs,
        currentSong,
        isPlaying,
        toggleOne
      }
      const artistId = this.props.routeParams.artistId;

      return (
      <div>
        <h3>{ selectedArtist }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`artists/${artistId}/albums`}>ALBUMS</Link></li>
          <li><Link to={`artists/${artistId}/songs`}>SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, propsToPassToChildren) }
      </div>
      )
    }
}

export default Artist;

import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {
  constructor (props){
    super();
    this.state = {
       album : props.album,
       currentSong : props.currentSong,
       isPlaying : props.isPlaying,
       toggleOne : props.toggleOne
    }
    // const album = props.album;
    // const currentSong = props.currentSong;
    // const isPlaying = props.isPlaying;
    // const toggleOne = props.toggleOne;
  }

  componentDidMount () {
    console.log(this.props.selectAlbum);
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;

    selectAlbum(albumId);
  }

  render(){
    return (
      <div className="album">
        <div>
          <h3>{ this.state.album.name }</h3>
          <img src={ this.state.album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={this.state.album.songs}
          currentSong={this.state.currentSong}
          isPlaying={this.state.isPlaying}
          toggleOne={this.state.toggleOne} />
      </div>
    );
  }
}

export default Album;

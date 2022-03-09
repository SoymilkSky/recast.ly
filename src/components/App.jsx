import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYoutube from '../lib/searchYoutube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData,
      search: '',
    };
    searchYoutube(this.state.search, this.receiveData.bind(this))
  }

  receiveData(data) {
    this.setState({
      currentVideo: data[0],
      videos: data,
    });
  }

  changeSearchState(searchQuery) {
    this.setState({
      search: searchQuery,
    });
    searchYoutube(this.state.search, this.receiveData.bind(this));
    console.log('changeSearchState was called');
  }

  onVideoListEntryTitleClick(video) {
    this.setState({
      currentVideo: video,
    });
    // somewhere on a click, we could call`
    // this.currentVideo = VideoListEntry.onTitleClick()
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <h5>
                <em>
                  <Search searchResult={this.changeSearchState.bind(this)}/>
                </em>
              </h5>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <h5>
                <em>
                  <VideoPlayer video={this.state.currentVideo} />
                </em>{''}
              </h5>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <h5>
                <VideoList
                  onClick={this.onVideoListEntryTitleClick.bind(this)}
                  videos={this.state.videos}
                />
                <em></em>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

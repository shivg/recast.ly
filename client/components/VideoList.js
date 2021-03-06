// var VideoList = () => (
//   <div className="video-list media">
//     <VideoListEntry entry={exampleVideoData[0]}/>
//     <VideoListEntry entry={exampleVideoData[1]}/>
//     <VideoListEntry entry={exampleVideoData[2]}/>
//     <VideoListEntry entry={exampleVideoData[3]}/>
//     <VideoListEntry entry={exampleVideoData[4]}/>
//   </div>
// );

class VideoList extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        var videoNodes = this.props.videolist.map(video => {return (
                          <VideoListEntry onClickVideoTitle={this.props.onClickVideoTitle} entry={video}/>
                        )})
        return (<div className="video-list media">
                {videoNodes}
                </div>)
    }
}

window.VideoList = VideoList;

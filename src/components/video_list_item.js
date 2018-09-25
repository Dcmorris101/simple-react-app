import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { // const video = props.video & const onVideoSelect = props.onVideoSelect
  const imageUrl = video.snippet.thumbnails.default.url;
  // in video_list we created VideoListItem, we passed in the video as property video.
  //so to get access to the video inside VideoListItem, we use props.video
  // but instead of using this line below, we use the above {video}. The argument has property 'video'. Please grab that video and declare new variable called 'video'
  // const video = props.video;
  return (
    <li onClick = {() => onVideoSelect(video)}className = "list-group-item">
      <div className = "video-list mdedia">
        <div className = "media-left">
          <img className = "media-object" src={imageUrl} />
        </div>

        <div className = "media-body">
          <div className = "media-heading">{video.snippet.title}</div>
        </div>
      </div>

    </li>
  );
};

export default VideoListItem;

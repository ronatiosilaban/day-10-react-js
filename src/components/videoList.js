import React from 'react'
import VideoItem from './videoItem';

const VideoList = ({videos , handleVideoSelect}) => {
    console.log('a',videos);
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList
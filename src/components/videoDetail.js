import '../style/video.css';
import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div className='loading'>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div >
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='contents'>
                <h4 className='title'>{video.snippet.title}</h4>
                <p className='desc'>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;

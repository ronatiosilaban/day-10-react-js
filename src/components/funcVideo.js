import ReactDom from "react-dom/client"
import React, {useState, useEffect} from 'react';
import {API} from "../config/api";

const element = document.getElementById("root")
const root = ReactDom.createRoot(element)

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('')

	const onSubmit = event => {
		event.preventDefault();

		onFormSubmit(term);
	};

	return (
         <div className='search-bar ui segment'>
         <form onSubmit={onSubmit} className='ui form'>
             <div className='field'>
                 <label htmlFor="video-search">Video Search</label>
                 <input onChange={(event) => setTerm(event.target.value)} name='video-search' type="text" value={term}/>
             </div>
         </form>
     </div>
	);
}

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div className='loading'>Loading</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

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
	);
};

const VideoItem = ({ video, handleVideoSelect}) => {
	return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
        </div>
	);
};

const VideoList = ({ videos, handleVideoSelect }) => {
	const renderedList = videos.map(video => {
		return (
			<VideoItem
				key={video.id.videoId}
				handleVideoSelect={handleVideoSelect}
				video={video}
			/>
		);
	});

	return <div className='ui relaxed divided list'>{renderedList}</div>;
};

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

  const search = async term => {
		const response = await API.get('/search', {
      params: {
        q: term
      }
		});

		setVideos(response.data.items);
	};

  return [videos, search];
};

const Video = () => {	
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos('');

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
    <div className='ui container' style={{marginTop: '1em'}}>
			<SearchBar onFormSubmit={search} />
			<div className='ui grid'>
				<div className='ui row'>
          <div className="eleven wide column">
					  <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
					<VideoList
						handleVideoSelect={setSelectedVideo}
						videos={videos}
					/>
				</div>
				</div>

			</div>
		</div>
	);
};

export default Video

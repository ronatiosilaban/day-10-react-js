import ReactDom from "react-dom/client"
import React, {useState, useEffect} from 'react';
import {API} from "../config/api";

const element = document.getElementById("root")
const root = ReactDom.createRoot(element)

//function untuk menghandle pencarian video
const SearchBar = ({ onFormSubmit }) => {
	//untuk menampung data pencarian yang dikirimkan user
	const [term, setTerm] = useState('')
	//untuk action submit data yang user inginkan
	const onSubmit = event => {
		event.preventDefault();

		onFormSubmit(term);
	};

	return (
         <div className='search-bar ui segment'>
         <form onSubmit={onSubmit} className='ui form'>
             <div className='field'>
                 <label htmlFor="video-search">Video Search</label>
				 {/* untuk memasukan data value yang diimputkan user ke dalam state term */}
                 <input onChange={(event) => setTerm(event.target.value)} name='video-search' type="text" value={term}/>
             </div>
         </form>
     </div>
	);
}


//function untuk menghandle detail video dipilih
const VideoDetail = ({ video }) => {
	//menerima value video yang dikirimkan function Video
	//pengkondisian bila tidak ada value yang diterima
	if (!video) {
		return <div className='loading'>Loading</div>;
	}
	//variable untuk menyimpan url video
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


//function item untuk menghandle video item yang akan ditampilkan
const VideoItem = ({ video, handleVideoSelect}) => {
	//menerima value dari function VideoList
	return (
		// onClick untuk menghandle action dari video yang dipilih nantinya
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
        </div>
	);
};
//function videoList untuk menghandle list video yang akan ditampilkan setelah user melakukan reques di function serch
const VideoList = ({ videos, handleVideoSelect }) => {
	//function untuk mapping data yang diterima setelah request dilakukan
	const renderedList = videos.map(video => {
		return (
			<VideoItem
				key={video.id.videoId}
				handleVideoSelect={handleVideoSelect}
				video={video}
			/>
		);
	});

	return <div className='ui relaxed divided list'
	>{renderedList}</div>;
};
//function use video untuk menampung data pertama kali saat users melakukan request
const useVideos = (defaultSearchTerm) => {
	//state untuk menampung data yang diterima dari request API
  const [videos, setVideos] = useState([]);

  useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);


	//function search untuk melakukan request API dan menyimpan data ke state Videos
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


//function Video untuk tampilan keselurahan
const Video = () => {	
	//state untuk menampung value yang diterima setelah melakukan request
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos('');
 //useEffect untuk memasukan data dari Videos index ke 0 ke state setSelectedVideo
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

import React from "react";
import { API } from "../config/api"
import Search from "./videosearch";
import VideoList from "./videoList";
import VideoDetail from './videoDetail';
import '../App.css';

export default class Video extends React.Component {
    state={Videos : [],
        selectedVideo: null}

        handleSubmit = async (termFromSearchBar) => {
            const response = await API.get('/search', {
                params: {
                    q: termFromSearchBar
                }
            })
            this.setState({
                Videos: response.data.items
            })
        };
        handleVideoSelect = (Videos) => {
            this.setState({selectedVideo: Videos})
        }
        render() {
            return (
                <div className='ui container' style={{marginTop: '1em', justifyContent:"center"}}>
                    <Search handleFormSubmit={this.handleSubmit}/>
                    <div className='temp'>
                        <div className="ui row">
                            <div className="width" >
                                <VideoDetail video={this.state.selectedVideo}/>
                            </div>
                            <div className="width2">
                                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.Videos}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }    
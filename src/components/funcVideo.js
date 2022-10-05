import React from "react";
import {useState, useEffect} from 'react'
import { API } from "../config/api"
import Search from "./funcSearch";
import VideoList from "./videoList";
import VideoDetail from './videoDetail';
import '../App.css';
import Button from "./Button";

export default function Video() {
 
    const[selectedVideo,setSelectedVideo]=useState(null)
    const[Videos, setVideos]=useState([])

    const handleSubmit = async (termFromSearchBar) => {
        const response = await API.get('/search', {
            params: {
                q: termFromSearchBar
                }
            })
            setVideos(
                response.data.items
            )
        };
        const handleVideoSelect = (Videos) => {
            setSelectedVideo({Videos})
        }
        useEffect(() => {
           setSelectedVideo(Videos[0])
        }, [selectedVideo]);
        // useEffect(() => {
        //     handleSubmit()
        //  }, [selectedVideo]);
        console.log('baaa',Videos);
            return (
                <div>
                <div className='ui container' style={{marginTop: '1em', justifyContent:"center"}}>
                    <Search handleFormSubmit={handleSubmit}/>
                    <div className='temp'>
                        <div className="ui row">
                            <div className="width" >
                                <VideoDetail video={selectedVideo}/>
                            </div>
                            <div className="width2">
                                <VideoList handleVideoSelect={handleVideoSelect} videos={Videos}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
      
       </div>
    
                </div>
            )
        }

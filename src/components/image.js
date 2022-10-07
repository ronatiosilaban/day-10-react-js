import React from "react";
import { API } from "../config/api"
import Search from "./search";
import ImageList from "./imageList";
import '../App.css';

export default class Image extends React.Component {
  //state untuk menampung value request dari users
    state={images : []}

    //function untuk mengahandle reequest pencarian users dan melakukan request API, menyiman data yang diterima ke state
    onSearchSubmit = async(term)=>{
        const response = await API.get("/search/photos",{
            params : {query: term},
        });
        this.setState({ images: response.data.results });
        console.log(response.data.results);
    }
    render (){
  return(
<div className="ui container" style={{marginTop:"10px"}}>
  {/* mengirim value dari action */}
   <Search onSubmit = {this.onSearchSubmit}/>
    <ImageList images = {this.state.images}/>

   
</div>
  )
}}
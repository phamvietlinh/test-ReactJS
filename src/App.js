import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import MainView from './components/MainView';
import ListView from './components/ListView';
import {videojson} from './components/video';



class App extends Component {
    
    state = {
        videoDisplaying: 'http://www.youtube.com/embed/W7qWa52k-nE',
        allVideo: null,
        keyword: ''
    }

    componentWillMount(){
        this.setState({
            allVideo: videojson
        })
    }

    onClick = (src) => {
        this.setState({
            videoDisplaying: src
        })
    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }

    
    render() {

        // const video = videojson;
        var allVideo = this.state.allVideo;

        if(this.state.keyword){
            allVideo = allVideo.filter((video) => {
                return video.name.toLowerCase().indexOf(this.state.keyword) !== -1;
            })
        }



        return (
             <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                <br />
                <br />
                <Search onSearch={this.onSearch}/>
                <br />
                <br />
                <br />
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <MainView video={this.state.videoDisplaying}/>
                    <ListView video={allVideo} onClick={this.onClick}/>
                </div>
                
            </div>
            
        );
    }

    
}

export default App;

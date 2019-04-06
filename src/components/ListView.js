import React, { Component } from 'react';


class ListView extends Component {
    
	// onClick = (src) => {
	// 	this.props.onClick
	// }

    render() {

    	var elmVideos = this.props.video.map((task, index) => {
            return <li onClick={() => this.props.onClick(task.src)} key={index}>{task.name}</li>
        })
        return (
            <div className="col-sm-3 col-md-3">
            	<ul>
            		{elmVideos}
            		
            	</ul>
            </div>

        );
    }

    
}

export default ListView;

import React, { Component } from 'react';




class MainView extends Component {
    render() {
        return (
            <div className="col-sm-9 col-md-9">

            	<iframe src={this.props.video}
   						width="560" 
   						height="315" 
   						frameBorder="0" 
   						allowFullScreen>
   				</iframe>
 
            </div>

        );
    }

    
}

export default MainView;

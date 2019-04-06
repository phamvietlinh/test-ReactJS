import React, { Component } from 'react';

// import {Prompt} from 'react-router-dom';


class Select extends Component {
    
    state = {
        keyword: ''
    }


    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        this.props.onSearch(value)
    }


    onSearch  = () => {
        
    }
    
    
    
    


    render() {
        
        return (
            <div className="container text-center">    

                    <div className="input-group col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
                        <input type="text" name="keyword" className="form-control" placeholder="Nhập từ khóa..." value={this.state.keyword} onChange={this.onChange} />
                        <span className="input-group-btn">
                            
                        </span>
                    </div>
                
            </div>
                
        );
    }
}

export default Select;

import React, { Component } from 'react';

 export default class quote extends Component{
    render(){
        return(
            <div>
                <p>{this.props.quote}</p>
                <p>{this.props.author}</p>
                <button onClick={this.props.update}>Change</button>
                <button onClick={this.props.share}>Tweet</button>
            </div>
        )
    }
}
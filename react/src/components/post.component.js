import React from 'react';


export default class Post extends React.Component{

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        img: React.PropTypes.string.isRequired,
        date: React.PropTypes.string.isRequired,
        link: React.PropTypes.string.isRequired
    };

    render(){

        return    <div className="post">
                        <h2 className="post-title">{this.props.title}</h2>
                        <img src={this.props.img}/>
                        <p className="post-description">{this.props.description}</p>
                        <a className="post-link" href={this.props.link}> Read more</a>
                        <p className="post-date"> Pulication date: {this.props.date}</p>
                    </div>
    }
}


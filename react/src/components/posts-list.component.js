import React from 'react';

import Post from './post.component';

export default class PostsList extends React.Component{

    static propTypes = {
        posts: React.PropTypes.array.isRequired
    };

    createPost(post, index){
        return <Post key = {index}
                  title={post.title}
                  description = {post.description}
                  img = {post.img}
                  date = {post.date}
                  link = {post.link}
        />
    }

    render(){
        return(
           <div id="posts-container">
               {this.props.posts.map(this.createPost)}
           </div>
        )
    }
}
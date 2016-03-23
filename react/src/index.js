//Webpack configuartion
if (module.hot) {
    module.hot.accept();
}

import React from 'react';
import ReactDOM from 'react-dom';


//Api service
import fetchData from './api-service';
import parseData from './parse-data';

//Components
import PostsList from './components/posts-list.component.js';


//Fetching data
const url = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies/30.json?api-key=52c786f7d5fcb689e304bcbd58687057%3A5%3A73132144';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        fetchData(url, (response) => {
                const data = parseData(response.data.results);
                this.setState({posts: data})
            },
            (error) => {
                console.error(`Cannot fetch data! Message: ${error}`);
            }
        )
    }

    render() {
        return (
                <PostsList posts={this.state.posts}/>
        )
    }

}


ReactDOM.render(<div><App/></div>, document.getElementById('app'));
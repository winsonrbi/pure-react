import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Reddit extends React.Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios
            .get(
                `https://www.reddit.com/r/${this.props.subreddit}.json`
            )
            .then(res => {
                const posts = res.data.data.children.map(
                    obj => obj.data
                );
                this.setState({ posts });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        const { posts } = this.state;
        if (posts.length === 0) {
            return(
                <div>
                    <h1> Loading... </h1>
                </div>
            );
        }
        return (
            <div>
                <h1>{`/r/${this.props.subreddit}`}</h1>
                <ul>
                    {posts.map(post =>
                        <li key={post.id}>{post.title}</li>)}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <Reddit subreddit='reactjs' />,
    document.querySelector('#root')
);
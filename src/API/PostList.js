import React,{ Component} from "react";
import axios from 'axios'

class PostList extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            posts: []
        }
    }
    

componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        this.setState({
            posts:response.data
        })
        console.log(response.data)

    })
}


    render() {
        const {posts} = this.state
        return (
            <div>
                <h1>get call in React js</h1>
                    {
                        posts.map(post => <div key = {post.id}>{post.userId} </div>)
                    }
            </div>
        )
    }
}

export default PostList
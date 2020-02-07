import React from 'react';
import {connect} from 'react-redux';
import {fetchPostAndUsers} from '../actions';
import UserHeader from './UserHeader';
class PostList extends React.Component {
    componentDidMount(){
        this.props.fetchPostAndUsers();
    }
    renderPosts(){
       return this.props.Posts.map((post)=>
           
                <div className="item" key={post.id}> 
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <div className="header">
                            <UserHeader userId={post.userId} />
                        </div>
                    </div>
                </div>
        )
    }
    render(){
        
        console.log(this.props.Posts)
        return(
            <div className="ui relaxed divided list"> {this.renderPosts()}</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {Posts: state.Posts};
}

export default connect(mapStateToProps,{fetchPostAndUsers})(PostList);
import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../action/index';
import UserHeader from './userHeader'
import '../App.css'

class PostList extends React.Component{
  componentDidMount() {
   this.props.fetchPostsAndUsers();
 }
 renderList() {
  //menerima dan mapping data dari redux stores
   return this.props.posts.map(post => {
     return (
     <div style={{display:'flex'}} className='bold'>
     <img src='https://tse1.mm.bing.net/th?id=OIP.y4vDl1sXQFbum_5f_WHvtgHaFR&pid=Api&P=0' style={{width:'60px', height:"70px", paddingTop:'20px'}}/>
       <div>
       <h2>{post.title}</h2>
       <p>{post.body}</p>
{/* mengirim userId ke component UserHeader */}
       <UserHeader userId={post.userId}/>
      </div>
      </div>
     )
   })
 }


  render() {
    //merender tampilan dari renderList
    return (
      <div>{this.renderList()}</div>
    )
  }
}


//menerima dan menampung data user dari UserHeader
const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
    mapStateToProps,
    { fetchPostsAndUsers }
)(PostList);
import React from 'react'
import { connect } from 'react-redux'

class UserHeader extends React.Component{
  //menerima dan mapping data user dari redux store
  render() {
    const user = this.props.user
    if(!user) {
      return null
    }
    return <div>{user.name}</div>
  }
}

//validasi data id dengan idUser yang dikirimkan dari postList dan mengirim kembali return hasil ke state di PostList
const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return { user: state.users.find(user => user.id === ownProps.userId)};
};

export default connect(mapStateToProps)(UserHeader);
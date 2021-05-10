
import React, { Component } from 'react'
import { connect } from 'react-redux';

export default class ProfileScreen extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  // export default ProjectForm
  export default connect(mapStateToProps, null )(ProfileScreen);
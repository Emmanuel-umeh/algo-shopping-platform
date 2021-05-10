
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {View, StyleSheet, Text} from "react-native"

export default class ProfileScreen extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
const styles = StyleSheet.create({

})


const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  // export default ProjectForm
  export default connect(mapStateToProps, null )(ProfileScreen);
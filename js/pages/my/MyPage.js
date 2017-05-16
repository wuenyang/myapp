import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


import NavigationBar from '../../common/NavigationBar';
import CustomKeyPage from './CustomKeyPage.js';
export default class Boy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( <View style = {styles.container} >
      <NavigationBar
        title = {'我的'}
        style = {{backgroundColor: '#2196F3'}}
      />
      <Text
      onPress={
        ()=>{
          this.props.navigator.push({
            component:CustomKeyPage
          });
        }
      }>自定义标签</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  text: {
    fontSize: 22
  }


});

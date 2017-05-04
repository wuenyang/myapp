import React ,{Component} from 'react';
import {
View,
Text,
Image,
TouchableOpacity,
Navigator,
StyleSheet
} from 'react-native';

import HomePage from './HomePage'
//import TabBarExample from './TabBarExample'
import NavigationBar from '../common/NavigationBar';
export default class WelcomePage extends Component{

  componentDidMount(){
    this.timer =setTimeout(()=>{
      this.props.navigator.resetTo({
        component:HomePage
      })
    },2000);
  }

  componentWillUnmount(){
    this.timer&&clearTimeout(this.timer);
  }

  render(){
    return <View >

        <Image style={styles.setup} source={require('../../res/images/setup/setup.jpg')} resizeMode={Image.resizeMode.cover}>
        <NavigationBar
          title={'Boy'}
          statusBar={{
            barStyle:'dark-content',
            hidden:false
          }}
        />
        </Image>
    </View>
  }
}

const styles =StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#FFFFFF'
    },
    setup:{
      width:'100%',
      height:'100%'
    }

});

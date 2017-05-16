import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';
import NavigationBar from '../../common/NavigationBar';
import ViewUtils from '../../utils/ViewUtils';


export default class CustomKeyPage extends Component{
  constructor(props){
    super(props);
  }

  onBack(){

     this.props.navigator.pop();
  }

  onSave(){

  }

  renderView(){
    return ''
  }



  render(){
      let rightButton =<TouchableOpacity>
             <View style={{margin:10}}>
               <Text style={styles.title}>save</Text>
             </View>
        </TouchableOpacity>;

      let navigatorBar =<NavigationBar
     　   style={{backgroundColor:'#2196F3'}}
          title={'自定义标签'}
          leftButton={ViewUtils.getLeftButton(()=>this.onBack())}
          rightButton={rightButton}
        />;

     return (
       <View style={styles.container} >
             {navigatorBar}
             <ScrollView style={styles.view} >
               <Text style={styles.tips}>sdhsdjfh</Text>
             </ScrollView>
       </View>);
  }



}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f3f2f2'
  },items:{
    flexDirection:'row',
  },title:{
    fontSize:20,
    color:'#fff'
  }
})
